import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { VisitorTracker } from '@/components/VisitorTracker';
import { ChatWidget } from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ceylontealand.com'),
  title: {
    default: 'Ceylon Tea Land | Premium Ceylon Tea Exporters',
    template: '%s | Ceylon Tea Land',
  },
  description: 'Global Exporters of Authentic Ceylon Tea. Partner with our estate network for fresh, hand-picked Ceylon tea delivered worldwide with reliable logistics and export-grade consistency.',
  keywords: ['Ceylon Tea', 'Sri Lanka Tea', 'Ceylon Tea Land', 'Tea Exporter Sri Lanka', 'Premium Ceylon Tea'],
  authors: [{ name: 'Ceylon Tea Land', url: 'https://ceylontealand.com' }],
  creator: 'Ceylon Tea Land',
  publisher: 'Ceylon Tea Land (Pvt) Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ceylon Tea Land | Premium Global Tea Exporters',
    description: 'Global Exporters of Authentic Ceylon Tea. Partner with our estate network for fresh, hand-picked Ceylon tea delivered worldwide.',
    url: 'https://ceylontealand.com',
    siteName: 'Ceylon Tea Land',
    images: [
      {
        url: '/heroimg.png',
        width: 1200,
        height: 630,
        alt: 'Ceylon Tea Land — Premium Ceylon Tea Exporters from Sri Lanka',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceylon Tea Land | Premium Global Tea Exporters',
    description: 'Global Exporters of Authentic Ceylon Tea from Sri Lanka.',
    images: ['/heroimg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

// JSON-LD Structured Data
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ceylon Tea Land',
  legalName: 'Ceylon Tea Land (Pvt) Ltd.',
  url: 'https://ceylontealand.com',
  logo: 'https://ceylontealand.com/clogo.png',
  description: 'Global Exporters of Authentic Ceylon Tea from Sri Lanka.',
  foundingDate: '1975',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 51, Fairfield Gardens',
    addressLocality: 'Colombo',
    postalCode: '00800',
    addressCountry: 'LK',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+94-77-773-4180',
      contactType: 'sales',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Russian'],
    },
  ],
  sameAs: [
    'https://www.facebook.com/drrumie',
    'https://www.instagram.com/ceylontealand',
  ],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://ceylontealand.com/#business',
  name: 'Ceylon Tea Land (Pvt) Ltd.',
  image: 'https://ceylontealand.com/heroimg.png',
  url: 'https://ceylontealand.com',
  telephone: '+94-77-773-4180',
  email: 'info@ceylontealand.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 51, Fairfield Gardens',
    addressLocality: 'Colombo 8',
    addressCountry: 'LK',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-white focus:text-neutral-900 focus:px-6 focus:py-3 focus:rounded-full focus:shadow-xl focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>
        <Navbar />
        <VisitorTracker />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
