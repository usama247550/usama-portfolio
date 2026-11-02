'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  if (!token) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-slate-900 text-white rounded-lg shadow-lg border border-red-500/30">
        <h2 className="text-xl font-bold text-red-400 mb-2">Invalid or Missing Token</h2>
        <p className="text-slate-300 text-sm">
          The password reset link is invalid or missing. Please request a new password reset link.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setStatus({ loading: false, error: 'Passwords do not match', success: false });
      return;
    }
    if (password.length < 6) {
      setStatus({ loading: false, error: 'Password must be at least 6 characters', success: false });
      return;
    }

    setStatus({ loading: true, error: null, success: false });

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to reset password. Token may be invalid or expired.');
      }

      setStatus({ loading: false, error: null, success: true });
    } catch (err) {
      setStatus({ loading: false, error: err.message, success: false });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-900 text-white rounded-lg shadow-lg border border-slate-800">
      <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

      {status.success ? (
        <div className="p-4 bg-green-950/50 border border-green-500/50 rounded text-green-300 text-sm text-center">
          Password has been reset successfully! You can now log in with your new password.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status.error && (
            <div className="p-3 bg-red-950/50 border border-red-500/50 rounded text-red-300 text-sm">
              {status.error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="password">
              New Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-indigo-500 text-white"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-indigo-500 text-white"
              placeholder="Confirm new password"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded transition duration-200 disabled:opacity-50"
          >
            {status.loading ? 'Resetting Password...' : 'Reset Password'}
          </button>
        </form>
      )}
    </div>
  );
}
