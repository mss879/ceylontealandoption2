'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { submitInquiry } from './actions';

export function ContactForm() {
  const [status, setStatus] = useState<{ type: 'error' | 'success'; msg: string } | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleAction(formData: FormData) {
    setIsPending(true);
    setStatus(null);
    const result = await submitInquiry(formData);
    setIsPending(false);

    if (result?.error) {
      setStatus({ type: 'error', msg: result.error });
    } else if (result?.success) {
      setStatus({ type: 'success', msg: 'Thank you! Your inquiry has been sent successfully.' });
      const formElement = document.getElementById('contact-form') as HTMLFormElement;
      if (formElement) formElement.reset();
    }
  }

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-neutral-200/50 relative overflow-hidden">
      <form id="contact-form" action={handleAction} className="space-y-8">
        {status && (
          <div
            className={`p-4 rounded-xl text-sm font-medium ${
              status.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-700'
            }`}
            role="alert"
            aria-live="polite"
          >
            {status.msg}
          </div>
        )}

        <div className="space-y-6">
          <div className="group">
            <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              autoComplete="name"
              placeholder="Enter your full name"
              className="w-full border-b border-neutral-200 py-3 text-lg focus:outline-none focus:border-neutral-900 transition-colors bg-transparent placeholder:text-neutral-300"
            />
          </div>

          <div className="group">
            <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              autoComplete="email"
              placeholder="Enter email address"
              className="w-full border-b border-neutral-200 py-3 text-lg focus:outline-none focus:border-neutral-900 transition-colors bg-transparent placeholder:text-neutral-300"
            />
          </div>

          <div className="group">
            <label htmlFor="contact-interest" className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Interest
            </label>
            <select
              id="contact-interest"
              name="interest"
              className="w-full border-b border-neutral-200 py-3 text-lg focus:outline-none focus:border-neutral-900 transition-colors bg-transparent text-neutral-900"
            >
              <option value="Bulk Tea Import">Bulk Tea Import</option>
              <option value="Retail Partnership">Retail Partnership</option>
              <option value="Private Labeling">Private Labeling</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div className="group">
            <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              placeholder="Tell us about your project"
              rows={4}
              className="w-full border-b border-neutral-200 py-3 text-lg focus:outline-none focus:border-neutral-900 transition-colors bg-transparent placeholder:text-neutral-300 resize-none"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-neutral-900 text-white h-14 rounded-xl font-bold text-lg flex items-center justify-between px-6 hover:bg-neutral-800 transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{isPending ? 'Sending...' : 'Send Message'}</span>
          <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
            <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
          </div>
        </button>
      </form>
    </div>
  );
}
