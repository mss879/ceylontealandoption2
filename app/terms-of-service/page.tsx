import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Ceylon Tea Land — website usage terms, intellectual property, and disclaimers.',
  alternates: {
    canonical: '/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-white text-neutral-900 min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-6 block">
          / Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-8">
          Terms of Service
        </h1>
        <p className="text-neutral-500 mb-12">
          Last updated: April 17, 2026
        </p>

        <div className="prose prose-lg prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-neutral-600 leading-relaxed">
              By accessing and using the Ceylon Tea Land website (ceylontealand.com), you agree to be bound
              by these Terms of Service (&quot;Terms&quot;). If you do not agree with any part of these Terms, you
              should not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Use of Website</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              This website is provided for informational and business inquiry purposes. You agree to use
              the website only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use the website to transmit any harmful, threatening, or objectionable content</li>
              <li>Interfere with or disrupt the website&apos;s infrastructure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Intellectual Property</h2>
            <p className="text-neutral-600 leading-relaxed">
              All content on this website — including text, images, logos, graphics, and design — is the
              property of Ceylon Tea Land (Pvt) Ltd. or its licensors and is protected by international
              copyright and trademark laws. You may not reproduce, distribute, modify, or create derivative
              works from any content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Product Information</h2>
            <p className="text-neutral-600 leading-relaxed">
              Product descriptions, images, and specifications on this website are provided for general
              informational purposes. While we strive for accuracy, we do not warrant that all product
              information is complete, current, or error-free. Actual products may vary. For precise
              specifications and pricing, please contact our sales team directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Third-Party Links</h2>
            <p className="text-neutral-600 leading-relaxed">
              Our website may contain links to third-party websites. These links are provided for your
              convenience only. We have no control over the content or practices of these websites and
              assume no responsibility for them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-neutral-600 leading-relaxed">
              This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any
              kind, either express or implied. We do not warrant that the website will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-neutral-600 leading-relaxed">
              To the fullest extent permitted by law, Ceylon Tea Land (Pvt) Ltd. shall not be liable for
              any indirect, incidental, special, or consequential damages arising out of or in connection
              with your use of or inability to use the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Governing Law</h2>
            <p className="text-neutral-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Sri Lanka.
              Any disputes arising from these Terms or your use of the website shall be subject to the
              exclusive jurisdiction of the courts of Sri Lanka.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Changes to Terms</h2>
            <p className="text-neutral-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately
              upon posting to the website. Your continued use of the website after changes constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Contact Us</h2>
            <p className="text-neutral-600 leading-relaxed">
              For questions about these Terms of Service, please contact:
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
