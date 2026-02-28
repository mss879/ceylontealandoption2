import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ceylon Tea Land | Premium Global Tea Exporters',
  description: 'Global Exporters of Authentic Ceylon Tea. Partner with our estate network for fresh, hand-picked Ceylon tea delivered worldwide with reliable logistics and export-grade consistency.',
  keywords: ['Ceylon Tea', 'Sri Lanka Tea', 'Black Tea', 'Green Tea', 'Bulk Tea Exporter', 'Tea Bags', 'Premium Tea'],
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
        alt: 'Ceylon Tea Land',
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
  icons: {
    icon: '/tea land favicon.png',
    shortcut: '/tea land favicon.png',
    apple: '/tea land favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
