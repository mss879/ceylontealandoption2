import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Ceylon Tea Land privacy policy — how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-neutral-900 min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-6 block">
          / Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-8">
          Privacy Policy
        </h1>
        <p className="text-neutral-500 mb-12">
          Last updated: April 17, 2026
        </p>

        <div className="prose prose-lg prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Introduction</h2>
            <p className="text-neutral-600 leading-relaxed">
              Ceylon Tea Land (Pvt) Ltd. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy
              of visitors to our website, ceylontealand.com. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or submit an inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Information We Collect</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and country — when you voluntarily submit a contact form or inquiry.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and referring URLs — collected automatically via cookies and analytics tools.</li>
              <li><strong>Communication Data:</strong> Records of correspondence if you contact us by email, phone, or social media.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>To respond to your inquiries and provide customer service</li>
              <li>To send you quotations, product catalogues, and business communications you have requested</li>
              <li>To improve our website, products, and services</li>
              <li>To analyze website traffic and user behaviour</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Cookies</h2>
            <p className="text-neutral-600 leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience
              and collect usage analytics. You can control cookies through your browser settings. Disabling
              cookies may affect certain features of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Data Sharing</h2>
            <p className="text-neutral-600 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share
              information with trusted service providers (e.g., hosting, analytics) who assist us in
              operating our website, subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Data Security</h2>
            <p className="text-neutral-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal
              data against unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Your Rights</h2>
            <p className="text-neutral-600 leading-relaxed">
              You have the right to access, correct, or delete your personal information held by us.
              To exercise these rights, please contact us at{' '}
              <a href="mailto:info@ceylontealand.com" className="text-[#b58b54] hover:underline">
                info@ceylontealand.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-neutral-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Contact Us</h2>
            <p className="text-neutral-600 leading-relaxed">
              If you have questions regarding this Privacy Policy, please contact us at:
            </p>
            <div className="bg-neutral-50 rounded-2xl p-6 mt-4 border border-neutral-100">
              <p className="text-neutral-900 font-semibold">Ceylon Tea Land (Pvt) Ltd.</p>
              <p className="text-neutral-600">No. 51, Fairfield Gardens, Colombo 8, Sri Lanka</p>
              <p className="text-neutral-600">
                Email:{' '}
                <a href="mailto:info@ceylontealand.com" className="text-[#b58b54] hover:underline">
                  info@ceylontealand.com
                </a>
              </p>
              <p className="text-neutral-600">Phone: +94 77 773 4180</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
