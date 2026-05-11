'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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
            { label: 'Tea Bags', href: '/our-tea' },
            { label: 'Bulk Tea', href: '/our-tea' },
            { label: 'Green Tea', href: '/our-tea' },
        ],
    },
    {
        title: 'Account & Support',
        links: [
            { label: 'Contact Us', href: '/contact' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms-of-service' },
        ],
    },
    {
        title: 'Contact Details',
        links: [],
    },
];

export function Footer() {
    const pathname = usePathname();

    if (pathname && pathname.startsWith('/admin')) {
        return null;
    }

    return (
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
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 50vw"
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
                        <span>© {new Date().getFullYear()} Ceylon Tea Land.</span>
                        <span className="hidden sm:inline">|</span>
                        <a
                            href="https://www.arcai.agency"
                            target="_blank"
                            rel="noopener"
                            title="ARC AI — Web Design, SEO & AI-Powered Digital Solutions in Sri Lanka"
                            className="inline-flex items-center hover:opacity-80 transition-opacity"
                        >
                            Designed & Developed by{' '}
                            <Image
                                src="/arc logo.png"
                                alt="ARC AI — Web Design & AI Agency Sri Lanka"
                                width={350}
                                height={180}
                                className="tea-footer__meta-logo scale-[2] ml-4 origin-left w-auto"
                                loading="lazy"
                                sizes="100px"
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
    );
}
