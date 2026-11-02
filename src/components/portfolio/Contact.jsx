"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    value: "saimcodehub@gmail.com",
    accent: "cyan",
  },
  {
    icon: Phone,
    value: "+92 3039559764",
    accent: "purple",
  },
  {
    icon: MapPin,
    value: "Faisalabad, Pakistan",
    accent: "purple",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Spam protection
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      setErrorMessage("");
      setSubmitted(false);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            honeypot: formData.honeypot,
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
          // Reset success message after 5 seconds
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          const data = await response.json();
          setErrorMessage(data.error || "Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setErrorMessage("An error occurred. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="section-title-underline mt-6" />
          <p className="mt-6 max-w-md text-base sm:text-lg leading-7 text-[#a1a1aa]">
            I&apos;m open to new opportunities and exciting projects.
            <br />
            Let&apos;s connect and create something amazing!
          </p>

          <div className="mt-10 space-y-4">
            {contactDetails.map(({ icon: Icon, value, accent }, index) => {
              const isEmail = index === 0; // First item is email
              const content = (
                <>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border font-semibold transition-all ${
                      accent === "cyan"
                        ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-300"
                        : "border-purple-500/40 bg-purple-500/10 text-purple-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[#d0d0d6]">{value}</span>
                </>
              );

              if (isEmail) {
                return (
                  <a
                    key={value}
                    href="https://mail.google.com/mail/?view=cm&to=saimcodehub@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-sm hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={value} className="flex items-center gap-4 text-sm">
                  {content}
                </div>
              );
            })}
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&to=saimcodehub@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_4_24px_rgba(0,212,255,0.35)] hover:shadow-[0_8_32px_rgba(168,85,247,0.45)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          aria-label="Contact form"
        >
          {submitted && (
            <div className="flex items-center gap-3 rounded-lg bg-green-500/15 border border-green-500/40 px-4 py-3.5 mb-2">
              <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
              <span className="text-sm font-semibold text-green-300">
                Message sent! I'll get back to you soon.
              </span>
            </div>
          )}

          {errorMessage && (
            <div className="flex items-center gap-3 rounded-lg bg-red-500/15 border border-red-500/40 px-4 py-3.5 mb-2">
              <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />
              <span className="text-sm font-semibold text-red-300">
                {errorMessage}
              </span>
            </div>
          )}

          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                aria-label="Your Name"
                className={`w-full h-12 rounded-lg border bg-[#101014]/70 px-4 text-sm font-medium text-white outline-none transition-all placeholder:text-[#a1a1aa] ${
                  errors.name
                    ? "border-red-500/50 focus:border-red-500/80 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.08)]"
                    : "border-[#1a1a22]/50 focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)]"
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                aria-label="Your Email"
                className={`w-full h-12 rounded-lg border bg-[#101014]/70 px-4 text-sm font-medium text-white outline-none transition-all placeholder:text-[#a1a1aa] ${
                  errors.email
                    ? "border-red-500/50 focus:border-red-500/80 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.08)]"
                    : "border-[#1a1a22]/50 focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)]"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              aria-label="Subject"
              className={`w-full h-12 rounded-lg border bg-[#101014]/70 px-4 text-sm font-medium text-white outline-none transition-all placeholder:text-[#a1a1aa] ${
                errors.subject
                  ? "border-red-500/50 focus:border-red-500/80 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.08)]"
                  : "border-[#1a1a22]/50 focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)]"
              }`}
            />
            {errors.subject && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                <AlertCircle className="h-3 w-3" />
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Your Message"
              rows={5}
              className={`w-full resize-none rounded-lg border bg-[#101014]/70 px-4 py-3 text-sm font-medium text-white outline-none transition-all placeholder:text-[#a1a1aa] ${
                errors.message
                  ? "border-red-500/50 focus:border-red-500/80 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.08)]"
                  : "border-[#1a1a22]/50 focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)]"
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                <AlertCircle className="h-3 w-3" />
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-sm font-bold text-white shadow-[0_4_24px_rgba(0,212,255,0.22)] hover:shadow-[0_8_32px_rgba(168,85,247,0.35)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⏳</span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
