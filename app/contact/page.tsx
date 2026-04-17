import { ArrowUpRight, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ContactForm } from './ContactForm'
import { LazyMap } from './LazyMap'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Ceylon Tea Land — Bulk Import & Partnership Inquiries',
  description: 'Contact Ceylon Tea Land for bulk imports, retail partnerships, and private labeling. Our tea experts are ready to help.',
  keywords: ['Contact Ceylon Tea Land', 'Tea Import Inquiry', 'Bulk Tea Partner', 'Ceylon Tea Partnership', 'Tea Supplier Contact Sri Lanka'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Ceylon Tea Land — Import & Partnership Inquiries',
    description: 'Get in touch with our tea experts for bulk imports, retail partnerships, and private labeling inquiries.',
    url: 'https://ceylontealand.com/contact',
    siteName: 'Ceylon Tea Land',
    images: [
      {
        url: '/heroimg.png',
        width: 1200,
        height: 630,
        alt: 'Contact Ceylon Tea Land — Get in Touch',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ceylon Tea Land — Import & Partnership Inquiries',
    description: 'Get in touch with our tea experts for bulk imports, retail partnerships, and private labeling.',
    images: ['/heroimg.png'],
  },
};

const contactBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ceylontealand.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://ceylontealand.com/contact' },
  ],
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbJsonLd) }}
      />
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
                  <h2 className="font-bold text-lg">Prefer a call?</h2>
                  <div className="bg-neutral-100 p-2 rounded-full" aria-hidden="true">
                    <Phone className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-neutral-500 text-sm mb-6">
                  Speak directly with our tea experts for immediate assistance.
                </p>
                <a href="tel:+94777734180" className="flex items-center justify-between w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 px-4 py-3 rounded-xl transition-colors group">
                  <span className="font-semibold text-sm">Call (+94) 77 773 4180</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Info Grid (Address/Hours) */}
          <div className="grid md:grid-cols-2 gap-12 mt-24 border-t border-neutral-200 pt-12">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-4 block">/ Office</span>
              <address className="text-xl font-medium text-neutral-900 max-w-xs not-italic">
                No. 51, Fairfield Gardens,<br /> Colombo - 8, Sri Lanka
              </address>
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
          <LazyMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.180975126723!2d79.90416182701762!3d6.944822419718853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x449e745b4a7b490a!2sCeylon%20Tea%20Land%20(Pvt)%20Ltd.!5e0!3m2!1sen!2slk!4v1622456834664!5m2!1sen!2slk"
            title="Ceylon Tea Land office location on Google Maps"
            className="border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          />
        </div>
      </div>
    </main>
  )
}