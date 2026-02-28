import { ArrowUpRight, Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "Contact Us | Ceylon Tea Land",
  description: "Get in touch with Ceylon Tea Land for premium bulk tea, retail partnerships, and private labeling inquiries.",
  keywords: ["Contact Ceylon Tea Land", "Wholesale Tea", "Private Label Tea", "Sri Lanka Tea Exporter"],
  authors: [{ name: "Ceylon Tea Land" }],
  openGraph: {
    title: "Contact Us | Ceylon Tea Land",
    description: "Get in touch with Ceylon Tea Land for premium bulk tea, retail partnerships, and private labeling inquiries.",
    url: "https://ceylontealand.com/contact",
    siteName: "Ceylon Tea Land",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Ceylon Tea Land",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const footerNavColumns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Ceylon Tea', href: '/ceylon-tea' },
      { label: 'About Us', href: '/about' },
      { label: 'Events', href: '/events' },
      { label: 'Our Tea', href: '/our-tea' },
      { label: 'Branding', href: '/branding' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Tea Bags', href: '/#tea-bags' },
      { label: 'Bulk Tea', href: '/#bulk-tea' },
      { label: 'Green Tea', href: '/#green-tea' },
    ],
  },
  {
    title: 'Account & Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Contact Details',
    links: [],
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="min-h-screen bg-[#f4f1ea] text-neutral-900 font-sans">
        {/* Main Content Wrapper */}
        <div className="container mx-auto px-6 pt-32 pb-20">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left Column: Text & Call CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-6 block">
                  / Contact Us
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight mb-8">
                  Let&apos;s Brew <br /> Something <br /> Great.
                </h1>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-md mb-12">
                  Whether you&apos;re a retailer looking for premium Ceylon tea or a tea lover with a question, we&apos;re here to help you find your perfect blend.
                </p>
              </div>

              {/* "Prefer a call?" Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 mt-auto max-w-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Prefer a call?</h3>
                  <div className="bg-neutral-100 p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-neutral-500 text-sm mb-6">
                  Speak directly with our tea experts for immediate assistance.
                </p>
                <a href="tel:+94777734180" className="flex items-center justify-between w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 px-4 py-3 rounded-xl transition-colors group">
                  <span className="font-semibold text-sm">Call (+94) 77 773 4180</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-neutral-200/50 relative overflow-hidden">
                <form className="space-y-8">
                  <div className="space-y-6">
                    <div className="group">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full border-b border-neutral-200 py-3 text-lg focus:outline-none focus:border-neutral-900 transition-colors bg-transparent placeholder:text-neutral-300"
                      />
                    </div>

                    <div className="group">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full border-b border-neutral-200 py-3 text-lg focus:outline-none focus:border-neutral-900 transition-colors bg-transparent placeholder:text-neutral-300"
                      />
                    </div>

                    <div className="group">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">Interest</label>
                      <select className="w-full border-b border-neutral-200 py-3 text-lg focus:outline-none focus:border-neutral-900 transition-colors bg-transparent text-neutral-900">
                        <option>Bulk Tea Import</option>
                        <option>Retail Partnership</option>
                        <option>Private Labeling</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">Message</label>
                      <textarea
                        placeholder="Tell us about your project"
                        rows={4}
                        className="w-full border-b border-neutral-200 py-3 text-lg focus:outline-none focus:border-neutral-900 transition-colors bg-transparent placeholder:text-neutral-300 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button className="w-full bg-neutral-900 text-white h-14 rounded-xl font-bold text-lg flex items-center justify-between px-6 hover:bg-neutral-800 transition-all group">
                    <span>Send Message</span>
                    <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Info Grid (Address/Hours) */}
          <div className="grid md:grid-cols-2 gap-12 mt-24 border-t border-neutral-200 pt-12">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-4 block">/ Office</span>
              <p className="text-xl font-medium text-neutral-900 max-w-xs">
                No. 51, Fairfield Gardens,<br /> Colombo - 8, Sri Lanka
              </p>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-4 block">/ Operating Hours</span>
              <div className="grid grid-cols-2 gap-8 max-w-md">
                <div>
                  <p className="font-bold text-neutral-900">Monday - Friday</p>
                  <p className="text-neutral-600">9am - 6pm</p>
                </div>
                <div>
                  <p className="font-bold text-neutral-900">Saturday</p>
                  <p className="text-neutral-600">9am - 4pm</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="h-[500px] w-full bg-neutral-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.180975126723!2d79.90416182701762!3d6.944822419718853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x449e745b4a7b490a!2sCeylon%20Tea%20Land%20(Pvt)%20Ltd.!5e0!3m2!1sen!2slk!4v1622456834664!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          ></iframe>
        </div>

        {/* Footer */}
        <footer className="tea-footer">
          <div className="tea-footer__container">
            <div className="tea-footer__banner">
              <div className="tea-footer__banner-left">
                <div className="tea-footer__cta">
                  <p className="tea-footer__cta-heading">
                    Premium Sri Lankan teas, crafted for retailers, specialty cafes, and hospitality brands who expect
                    unforgettable flavour in every cup.
                  </p>
                  <Link href="/contact" className="tea-footer__cta-button">
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="tea-footer__banner-right">
                <Image
                  src="/tea_footer_banner.png"
                  alt="Pouring Ceylon Tea"
                  width={600}
                  height={400}
                  className="tea-footer__image"
                />
              </div>
            </div>

            <nav className="tea-footer__nav" aria-label="Footer">
              {footerNavColumns.map((column) => (
                <div key={column.title} className="tea-footer__nav-column">
                  <p className="tea-footer__badge">{column.title}</p>
                  <div className="tea-footer__nav-list">
                    {column.links.map((link) => (
                      <Link key={link.label} href={link.href} className="tea-footer__nav-link">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  {column.title === 'Contact Details' && (
                    <div className="tea-footer__contact-info mt-6 text-neutral-400 space-y-3 text-sm leading-relaxed">
                      <p>
                        <strong>Head Office -</strong> No. 51, Fairfield Gardens,<br />
                        Colombo - 8, Sri Lanka.
                      </p>
                      <p>
                        <strong>Hot line -</strong> +94 77 773 4180<br />
                        <strong>Tel -</strong> +94 11 253 1682
                      </p>
                      <p>
                        <strong>E-mail -</strong> info@ceylontealand.com<br />
                        <strong>Fax -</strong> +94 11 254 7909
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="tea-footer__info">
              <div className="tea-footer__meta flex-wrap gap-y-2">
                <span>© 2025 Ceylon Tea Land.</span>
                <span className="hidden sm:inline">|</span>
                <a
                  href="https://www.arcai.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="ARC AI - Web Design & Digital Solutions"
                  className="inline-flex items-center hover:opacity-80 transition-opacity"
                >
                  Designed & Developed by{' '}
                  <Image
                    src="/arc logo.png"
                    alt="ARC AI - Web Design & Digital Solutions"
                    width={350}
                    height={180}
                    className="tea-footer__meta-logo scale-150 ml-3 origin-left w-auto"
                  />
                </a>
              </div>
              <div className="tea-footer__socials">
                <a
                  href="https://www.facebook.com/drrumie"
                  target="_blank"
                  rel="noreferrer"
                  className="tea-footer__social-link"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="tea-footer__social-icon"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ceylontealand?utm_medium=copy_link"
                  target="_blank"
                  rel="noreferrer"
                  className="tea-footer__social-link"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="tea-footer__social-icon"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                    <circle cx="12" cy="12" r="3.5"></circle>
                    <circle cx="17.5" cy="6.5" r="1"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}