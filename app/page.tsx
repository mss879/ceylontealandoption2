'use client';

import { ArrowRight, Award, Globe, Heart, Leaf } from 'lucide-react';
import Link from 'next/link';


const teaHighlights = [
  {
    icon: Leaf,
    title: '100% Pure Ceylon',
    description: "Sourced directly from Sri Lanka's finest highland gardens for authentic flavor in every cup.",
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Hand-picked leaves processed with precision to meet uncompromising export-grade standards.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Reliable international logistics ensure peak freshness for customers worldwide.',
  },
  {
    icon: Heart,
    title: 'Traditional Heritage',
    description: 'Generational craftsmanship blending legacy methods with modern quality stewardship.',
  },
];

const teaBenefits = [
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description:
      'Our commitment to environmental responsibility ensures future generations can enjoy Ceylon tea.',
  },
  {
    icon: Award,
    title: 'Award-Winning Quality',
    description:
      'Recognized internationally for our exceptional tea quality and innovative blending techniques.',
  },
];

const qualityMetrics = [
  {
    label: 'Freshness Window',
    detail: 'Harvest to pack cycle',
    value: '≤ 48h',
  },
  {
    label: 'Sensory Checks',
    detail: 'Panel & calibration',
    value: '6 Stages',
  },
  {
    label: 'Origin Integrity',
    detail: 'Single origin verified',
    value: '100%',
  },
  {
    label: 'Sustainability',
    detail: 'Ethical & environmental',
    value: 'Ongoing',
  },
];

const qualityProcess = [
  {
    title: 'Hand Plucked Selection',
    caption: 'Fresh plucked Ceylon tea leaves',
    description: 'Hand plucked at sunrise to preserve intact essential oils.',
  },
  {
    title: 'Sensory Evaluation',
    caption: 'Sensory evaluation & master blending',
    description: 'Calibrated tasting ensures each lot aligns with the house signature.',
  },
  {
    title: 'Controlled Withering',
    caption: 'Controlled Withering',
    description: 'Moisture curves monitored to preserve aromatic precursors & cup clarity.',
  },
  {
    title: 'Precision Rolling',
    caption: 'Precision Rolling',
    description: 'Gentle mechanical action optimizes cell rupture without bruising.',
  },
  {
    title: 'Oxidation Discipline',
    caption: 'Oxidation Discipline',
    description: 'Timed & temperature-observed stages lock in the target flavour profile.',
  },
  {
    title: 'Clean Firing & Pack',
    caption: 'Clean Firing & Pack',
    description: 'Low residue heat + light-safe, nitrogen supportive packaging.',
  },
];

const brandPartners = [
  {
    name: 'ZENZUR',
    href: 'https://zenzurceylon.com/',
    logo: '/zenzur-logo.png',
  },
  {
    name: 'RIVON',
    href: './Item.html',
    logo: '/rivon-logo.png',
  },
  {
    name: 'SUN DELMAR',
    href: 'https://sundelmar.ru/',
    logo: '/sun-delmar-logo.png',
  },
];

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
      { label: 'Our Story', href: '/#story' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/#careers' },
    ],
  },
  {
    title: 'Account & Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Support', href: '/#support' },
      { label: 'FAQs', href: '/#faq' },
      { label: 'Shipping Policy', href: '/#shipping' },
      { label: 'Terms & Conditions', href: '/#terms' },
      { label: 'Privacy Policy', href: '/#privacy' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Brew Guides', href: '/#brew-guides' },
      { label: 'Media Kit', href: '/#media-kit' },
      { label: 'Events', href: '/events' },
      { label: 'Contact', href: '/contact' },
      { label: 'Newsletter', href: '/#newsletter' },
    ],
  },
];

export default function Home() {
  return (
    <>
      <main className="bg-white text-neutral-900">
      <section className="relative min-h-screen overflow-hidden flex items-end rounded-b-[60px] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <img
          src="/heroimg.png"
          alt="Tea fields in Sri Lanka"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 px-6 pb-16 lg:pb-24 ml-8">
          <div className="max-w-3xl">
            <div className="space-y-8 rounded-3xl bg-white/85 p-8 text-neutral-900 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="space-y-4">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700">
                  → Premium Ceylon Tea Export
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-900">
                  Global Exporters of Authentic Ceylon Tea
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-neutral-700">
                  Partner with our estate network for fresh, hand-picked Ceylon tea delivered worldwide with reliable logistics and export-grade consistency.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#catalogue"
                  className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-500/20"
                >
                  <span className="font-semibold text-lg">View Export Catalogue</span>
                  <div className="relative w-6 h-6 overflow-hidden">
                    <ArrowRight className="absolute w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-8 group-hover:-translate-y-8" />
                    <ArrowRight className="absolute w-6 h-6 -translate-x-8 translate-y-8 text-white transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-neutral-900 px-8 py-4 text-lg font-semibold text-neutral-900 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
                >
                  Request Partnership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-neutral-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-[#ead9bc] rounded-3xl overflow-hidden shadow-[0_35px_80px_rgba(137,101,46,0.08)] bg-white/70 backdrop-blur">
            <div className="grid gap-12 p-10 lg:grid-cols-[1.25fr_1fr] lg:p-14">
              <div className="space-y-10">
                <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#b58b54]">
                  <img
                    src="https://cdn.prod.website-files.com/687847b9f15a8c8a903eac63/687e7e7dd3bff35d0286ffce_Vector%20(1).svg"
                    alt=""
                    className="h-4 w-4"
                  />
                  <span>Why Choose Ceylon Tea Land</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900">
                  Why Choose Ceylon Tea Land
                </h2>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#our-tea"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#d9b482] px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-[#b58b54]/20 transition hover:scale-[1.02] hover:bg-[#caa572]"
                  >
                    <span>Explore Our Teas</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-full border border-[#d9c3a1] px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-[#c2a680] hover:shadow-sm"
                  >
                    <span>Meet The Farmers</span>
                  </Link>
                </div>
              </div>

              <div className="space-y-6 text-base leading-relaxed text-neutral-600">
                <p>
                  We bring you the authentic taste of Sri Lanka&rsquo;s finest tea, cultivated with care and
                  passion in our island&rsquo;s highland estates. Experience the difference that generations of
                  expertise makes.
                </p>
                <div className="space-y-4">
                  {teaBenefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={benefit.title} className="flex items-start gap-3">
                        <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-[#b58b54]" />
                        <div className="space-y-1">
                          <h3 className="text-sm font-semibold text-neutral-900 md:text-base">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-neutral-600 md:text-base">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 divide-y divide-[#ead9bc] border-t border-[#ead9bc] bg-white/70 md:grid-cols-2 md:divide-y-0 md:divide-x xl:grid-cols-4">
              {teaHighlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="flex flex-col items-center gap-4 px-10 py-12 text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6ead7]">
                      <Icon className="h-6 w-6 text-[#b58b54]" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-neutral-900">{highlight.title}</div>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-950 py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,180,130,0.18),transparent_60%)]" />
          <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#d9b482]/20 blur-3xl opacity-75" />
          <div className="absolute right-0 bottom-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-700/10 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-white">
          <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">OUR EXCLUSIVE BRAND&apos;S</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base text-neutral-300">
            Discover the house brands that carry our heritage to tables around the world. Each label reflects the
            craftsmanship and consistency that define Ceylon Tea Land.
          </p>

          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {brandPartners.map((brand) => (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-6 rounded-[36px] border border-white/10 bg-white/5 p-10 text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-3 hover:border-[#d9b482]/50 hover:shadow-[0_45px_120px_rgba(217,180,130,0.25)]"
              >
                <div className="absolute inset-px rounded-[32px] bg-gradient-to-br from-white/5 via-white/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-44 w-full items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="logo-pulse mx-auto h-full w-auto max-w-[260px]"
                  />
                </div>
                <h3 className="relative text-lg font-semibold tracking-wide text-white">{brand.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050404] py-32 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,180,130,0.12),transparent_65%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#f1d2a4]/20 blur-[150px] opacity-70" />
          <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-emerald-700/20 blur-[140px] opacity-70" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-12">
              <div
                className="quality-rise inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#f5d7a1]"
                style={{ animationDelay: '40ms' }}
              >
                <span>Quality</span>
                <span>Guarantee</span>
              </div>
              <div className="space-y-7">
                <h2
                  className="quality-rise text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white"
                  style={{ animationDelay: '140ms' }}
                >
                  Real Craft. Measurable Standards.
                </h2>
                <p
                  className="quality-rise text-lg leading-relaxed text-neutral-200"
                  style={{ animationDelay: '200ms' }}
                >
                  We treat quality as a disciplined process—not decoration. Each harvest is logged, tasted, and signed off
                  before it earns space in our export catalogue.
                </p>
                <div
                  className="quality-rise flex flex-wrap gap-4 text-sm uppercase tracking-[0.3em] text-neutral-300/80"
                  style={{ animationDelay: '260ms' }}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f5d7a1]" /> Traceable Lots
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#96d5b2]" /> Lab Sensory Suite
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80" /> Estate Provenance
                  </span>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {qualityMetrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="quality-card quality-rise group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/0 to-white/0 p-6 backdrop-blur-xl"
                    style={{ animationDelay: `${320 + index * 120}ms` }}
                  >
                    <div className="absolute inset-0 rounded-3xl border border-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-200/80">
                        {metric.label}
                      </p>
                      <p className="text-sm text-neutral-300">{metric.detail}</p>
                      <p className="text-4xl font-semibold text-white">{metric.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-60 blur-3xl" />
              <div
                className="quality-rise relative rounded-[34px] border border-white/15 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
                style={{ animationDelay: '260ms' }}
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-neutral-300">
                  <span>Harvest to Cup Flow</span>
                  <span>Lab Ref. QL-01</span>
                </div>
                <div className="mt-10 space-y-10">
                  <div className="relative pl-12">
                    <div className="quality-line pointer-events-none absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#f5d7a1] via-white/40 to-transparent" />
                    <div className="flex flex-col gap-10">
                      {qualityProcess.map((step, index) => (
                        <div
                          key={step.title}
                          className="quality-rise relative flex gap-6"
                          style={{ animationDelay: `${index * 140}ms` }}
                        >
                          <div className="quality-orbit relative z-10 mt-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/5 text-sm font-semibold text-[#f5d7a1]">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="space-y-1 text-left">
                            {step.caption && (
                              <p className="text-xs uppercase tracking-[0.35em] text-neutral-300/80">{step.caption}</p>
                            )}
                            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-neutral-200">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

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
                  Request Catalogue
                </Link>
              </div>
            </div>

            <div className="tea-footer__banner-right">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1288&q=80"
                alt="Tea bar interior"
                className="tea-footer__image"
                loading="lazy"
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
                {column.title === 'Resources' && (
                  <form className="tea-footer__form" aria-label="Newsletter">
                    <label htmlFor="tea-footer-email" className="tea-footer__form-label">
                      Subscribe to our newsletter
                    </label>
                    <div className="tea-footer__form-box">
                      <input
                        id="tea-footer-email"
                        type="email"
                        placeholder="Email Address"
                        className="tea-footer__input"
                        required
                        name="email"
                      />
                      <button type="submit" className="tea-footer__submit">
                        Send
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ))}
          </nav>

          <div className="tea-footer__info">
            <p className="tea-footer__meta">
              © 2025 Ceylon Tea Land.&nbsp;&nbsp;|&nbsp;&nbsp; Designed by{' '}
              <img
                src="/arc logo.png"
                alt="ARC"
                className="tea-footer__meta-logo"
                loading="lazy"
              />
              &nbsp;&nbsp;|&nbsp;&nbsp; Powered by Next.js
            </p>
            <div className="tea-footer__socials">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="tea-footer__social-link"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="tea-footer__social-icon"
                >
                  <path d="M6.94 21H3.5V8.5h3.44V21Z"></path>
                  <path d="M5.22 6.83a2.04 2.04 0 1 1 0-4.08 2.04 2.04 0 0 1 0 4.08Z"></path>
                  <path d="M20.5 21h-3.41v-6.6c0-1.57-.03-3.59-2.19-3.59-2.2 0-2.54 1.72-2.54 3.48V21h-3.4V8.5h3.26v1.71h.05c.45-.86 1.54-1.77 3.17-1.77 3.39 0 4.02 2.23 4.02 5.12V21Z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
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
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noreferrer"
                className="tea-footer__social-link"
                aria-label="X"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="tea-footer__social-icon"
                >
                  <path d="m4 4 16 16"></path>
                  <path d="m20 4-5.5 5.5"></path>
                  <path d="M4 20 9.5 14.5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
