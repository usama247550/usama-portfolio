import { Suspense } from 'react';
import ResetPasswordForm from './ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Suspense
        fallback={
          <div className="max-w-md mx-auto text-center text-slate-400 p-8">
            Loading password reset form...
          </div>
        }
      >
        <ResetPasswordForm />
      </Suspense>
    </main>
  );
}
