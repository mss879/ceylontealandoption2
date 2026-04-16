import { ArrowRight, Award, Globe, Heart, Leaf } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CuratedProducts } from '@/components/curated-products';
import { Preloader } from '@/components/Preloader';
export const metadata = {
  title: "Premium Ceylon Tea Exporter from Sri Lanka",
  description: "Global Exporters of Authentic Ceylon Tea. Pure Ceylon tea from Sri Lanka's finest highland estates. Bulk wholesale supply, private labeling, and premium tea bags for worldwide distribution.",
  keywords: ["Ceylon Tea", "Sri Lanka Tea", "Tea Exporter", "Pure Ceylon", "Black Tea", "Green Tea", "Buy Ceylon Black Tea Online", "Authentic Sri Lankan Tea", "Premium Ceylon Tea Brand", "Wholesale Ceylon Tea Supplier", "Ceylon Tea Bulk Export", "Sri Lanka Tea Factory Direct", "Tea Bags Manufacturer Sri Lanka", "Organic Ceylon Tea"],
  authors: [{ name: "Ceylon Tea Land" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ceylon Tea Land | Premium Ceylon Tea Exporters",
    description: "Global Exporters of Authentic Ceylon Tea. Premium highland tea delivered worldwide with export-grade consistency.",
    url: "https://ceylontealand.com",
    siteName: "Ceylon Tea Land",
    images: [
      {
        url: "/heroimg.png",
        width: 1200,
        height: 630,
        alt: "Ceylon Tea Land — Premium Ceylon Tea Exporters from Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceylon Tea Land | Premium Ceylon Tea Exporters",
    description: "Global Exporters of Authentic Ceylon Tea from Sri Lanka's finest highland gardens.",
    images: ["/heroimg.png"],
  },
};

const teaHighlights = [
  {
    image: '/100_Pure_Ceylon.webp',
    title: '100% Pure Ceylon',
    description: "Sourced directly from Sri Lanka's finest highland gardens for authentic flavor in every cup.",
  },
  {
    image: '/Premium Quality.webp',
    title: 'Premium Quality',
    description: 'Hand-picked leaves processed with precision to meet uncompromising export-grade standards.',
  },
  {
    image: '/Global Reach.webp',
    title: 'Global Reach',
    description: 'Reliable international logistics ensure peak freshness for customers worldwide.',
  },
  {
    image: '/Traditional Heritage.webp',
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
    logo: '/zenzur-logo.webp',
  },
  {
    name: 'RIVON',
    href: '#',
    logo: '/rivon-logo.webp',
  },
  {
    name: 'SUN DELMAR',
    href: 'https://sundelmar.ru/',
    logo: '/sun-delmar-logo.webp',
  },
];

const partnerBrands = [
  "ABBAS",
  "abo malek",
  "acumolli",
  "bashkoff",
  "boc",
  "creatlur",
  "cupful",
  "dibir",
  "fatimatea",
  "firdows",
  "golddinar",
  "madam",
  "magic tea",
  "muhamadkhair",
  "nansi",
  "nazlin",
  "rivonelite"
];

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="bg-white text-neutral-900">
        <section className="relative min-h-screen overflow-hidden flex items-end rounded-b-[60px] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <Image
            src="/heroimg.png"
            alt="Scenic tea fields in the highlands of Sri Lanka"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

          <div className="relative z-10 px-4 md:px-6 pb-16 lg:pb-24 md:ml-8 w-full">
            <div className="max-w-3xl">
              <div className="space-y-6 md:space-y-8 rounded-[2rem] bg-white/85 p-6 md:p-8 text-neutral-900 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-8 duration-1000 mx-auto md:mx-0">
                <div className="space-y-4">
                  <span className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-emerald-700">
                    → Premium Ceylon Tea Export
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-neutral-900">
                    Global Exporters of Authentic Ceylon Tea
                  </h1>
                  <p className="text-base md:text-lg leading-relaxed text-neutral-700">
                    Partner with our estate network for fresh, hand-picked Ceylon tea delivered worldwide with reliable logistics and export-grade consistency.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                  <Link
                    href="#catalogue"
                    className="group inline-flex justify-center items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-500/20 w-full sm:w-auto"
                  >
                    <span className="font-semibold text-lg">Our Tea</span>
                    <div className="relative w-6 h-6 overflow-hidden hidden sm:block">
                      <ArrowRight className="absolute w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-8 group-hover:-translate-y-8" />
                      <ArrowRight className="absolute w-6 h-6 -translate-x-8 translate-y-8 text-white transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                  </Link>

                  <Link
                    href="#contact"
                    className="inline-flex justify-center items-center gap-3 rounded-full border border-neutral-900 px-8 py-4 text-lg font-semibold text-neutral-900 transition-all duration-300 hover:bg-neutral-900 hover:text-white w-full sm:w-auto"
                  >
                    Contact Us
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
                    <Image
                      src="https://cdn.prod.website-files.com/687847b9f15a8c8a903eac63/687e7e7dd3bff35d0286ffce_Vector%20(1).svg"
                      alt="Ceylon Tea Land icon"
                      width={16}
                      height={16}
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
                {teaHighlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="flex flex-col items-center gap-4 px-10 py-12 text-center"
                  >
                    <div className="flex items-center justify-center mb-2 h-28 w-28 relative">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-contain"
                        sizes="112px"
                      />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-neutral-900">{highlight.title}</div>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                )
                )}
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
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="logo-pulse mx-auto object-contain max-w-[260px] p-4"
                      sizes="260px"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="relative text-lg font-semibold tracking-wide text-white">{brand.name}</h3>
                </a>
              ))}
            </div>

            {/* PARTNER BRANDS CAROUSEL */}
            <div className="mt-32 border-t border-white/10 pt-20">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#b58b54] mb-12 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b58b54] animate-pulse"></span>
                Global Partners
              </div>
              
              <div className="relative flex overflow-hidden group">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>
                
                <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                  {[...partnerBrands, ...partnerBrands, ...partnerBrands].map((brand, idx) => (
                    <div 
                      key={`${brand}-${idx}`} 
                      className="mx-8 relative flex flex-col items-center justify-center w-[180px] sm:w-[240px] h-[120px] bg-white rounded-2xl p-2 md:p-3 transition duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="relative w-full h-full opacity-80 transition hover:opacity-100 z-10">
                        <Image 
                          src={`/partner logos/${brand}.webp`} 
                          alt={brand} 
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 180px, 240px"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24 text-neutral-900 border-t border-[#ead9bc] border-b border-[#ead9bc]">
          <div className="pointer-events-none absolute inset-0">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-[#b58b54]/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-900/5 blur-[120px]" />
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          </div>

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20 items-center">
              {/* Left Column: Text */}
              <div className="space-y-9">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#b58b54]/20 bg-[#f4f1ea] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b58b54]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b58b54] animate-pulse"></span>
                  Quality Guarantee
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-neutral-900">
                  Real Craft. <br />
                  <span className="font-semibold text-[#b58b54]">Measurable Standards.</span>
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-neutral-500 max-w-xl">
                  We treat quality as a disciplined process—not decoration. Each harvest is logged, tasted, and signed off
                  before it earns space in our export catalogue.
                </p>

                <div className="flex flex-col gap-4.5 pt-3">
                  {[
                    { label: 'Traceable Lots', color: 'bg-[#b58b54]' },
                    { label: 'Lab Sensory Suite', color: 'bg-emerald-600' },
                    { label: 'Estate Provenance', color: 'bg-neutral-800' }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3.5 text-[13px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
                      <div className={`h-1.5 w-1.5 rounded-full ${item.color} shadow-[0_0_8px_rgba(0,0,0,0.05)]`} />
                      {item.label}
                      <div className="h-px w-10 bg-neutral-200"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Grid */}
              <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                {qualityMetrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-[#ead9bc] bg-white p-7 md:p-9 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_25px_50px_-15px_rgba(181,139,84,0.15)] hover:-translate-y-1 hover:border-[#d9b482]"
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f4f1ea]/0 via-[#f4f1ea]/50 to-[#f4f1ea] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex flex-col h-full justify-between space-y-10 z-10">
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#b58b54]">
                          {metric.detail}
                        </p>
                        <h3 className="text-lg font-medium tracking-tight text-neutral-900">
                          {metric.label}
                        </h3>
                      </div>

                      <div className="flex items-end justify-between">
                        <p className="text-4xl lg:text-[46px] whitespace-nowrap font-light tracking-tighter text-neutral-900 group-hover:scale-105 transition-transform duration-500 origin-bottom-left group-hover:text-[#b58b54]">
                          {metric.value}
                        </p>
                        <div className="h-9 w-9 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:text-[#b58b54] group-hover:border-[#b58b54] transition-all duration-500 group-hover:-rotate-45 relative overflow-hidden shrink-0 ml-3">
                          <div className="absolute inset-0 bg-[#f4f1ea] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                          <svg className="w-4.5 h-4.5 flex-shrink-0 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <CuratedProducts />

        <section id="harvest-to-cup" className="bg-neutral-50 text-neutral-900 relative z-30 pt-24 pb-12">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row">
            {/* Sticky Left Column */}
            <div className="w-full lg:w-[45%] lg:h-screen lg:sticky lg:top-24 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-20 lg:border-r border-[#ead9bc]">
              <div className="flex flex-col gap-10 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-[#b58b54] text-xl font-bold">{`//`}</span>
                  <span className="text-neutral-900 font-semibold tracking-widest uppercase text-sm">
                    Our Process
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-900">
                  Harvest to Cup <br className="hidden md:block" /> Flow.
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
                  Our disciplined process ensures that every batch meets our rigorous standards from the estate to your cup.
                </p>
                <div className="w-48 h-48 md:w-64 md:h-64 mt-4 lg:mt-8 mx-auto lg:mx-0 opacity-20 hidden md:block">
                  <Leaf className="w-full h-full text-[#b58b54]" />
                </div>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="w-full lg:w-[55%]">
              <div className="flex flex-col">
                {qualityProcess.map((step, index) => (
                  <div
                    key={step.title}
                    className="group border-b border-[#ead9bc] p-8 md:p-12 hover:bg-white transition-colors duration-300 min-h-[220px] flex flex-col justify-center gap-6"
                  >
                    <div className="flex justify-between items-start w-full">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#f4f1ea] flex items-center justify-center text-[#b58b54] group-hover:bg-[#b58b54] group-hover:text-white transition-colors duration-300 shadow-sm border border-[#ead9bc]">
                        <span className="font-semibold text-lg">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="text-neutral-300 text-xl font-medium font-serif italic">
                        Step {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {step.caption && (
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b58b54]">
                          {step.caption}
                        </p>
                      )}
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 text-lg leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 text-white py-24 sm:py-32 relative z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center space-y-6 mb-20">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b58b54]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b58b54] animate-pulse"></span>
                Tailored Deliveries
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-white">
                Packaging <span className="font-semibold text-[#b58b54]">Options</span>
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                Whether you are stocking boutique shelves or supplying global distributors, we offer versatile, export-ready packaging formats tailored to your brand's requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Box 1: Tea Bags */}
              <div className="group relative rounded-[2.5rem] bg-neutral-900 border border-white/10 overflow-hidden hover:border-[#b58b54]/50 transition-colors duration-500">
                <div className="relative h-64 md:h-72 w-full overflow-hidden">
                  <Image src="/tea_bags_packaging.webp" alt="Premium Ceylon tea bags packaging — string and tag, pyramid silken bags" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                </div>
                <div className="p-8 md:p-10 relative z-10 -mt-20">
                  <div className="w-14 h-14 rounded-full bg-[#b58b54] flex items-center justify-center text-white shadow-xl mb-6 relative group-hover:-translate-y-2 transition-transform duration-500 before:absolute before:inset-0 before:rounded-full before:bg-[#b58b54]/40 before:blur-md before:-z-10 group-hover:before:blur-xl">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#b58b54] transition-colors">Premium Tea Bags</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Individually sealed string & tag tea bags or silken pyramids designed for convenience without compromising our highland quality.
                  </p>
                </div>
              </div>

              {/* Box 2: Bulk Tea */}
              <div className="group relative rounded-[2.5rem] bg-neutral-900 border border-white/10 overflow-hidden hover:border-[#b58b54]/50 transition-colors duration-500">
                <div className="relative h-64 md:h-72 w-full overflow-hidden">
                  <Image src="/bulk_tea_packaging.webp" alt="Bulk loose leaf Ceylon tea packaging in moisture-barrier multi-wall sacks" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                </div>
                <div className="p-8 md:p-10 relative z-10 -mt-20">
                  <div className="w-14 h-14 rounded-full bg-[#b58b54] flex items-center justify-center text-white shadow-xl mb-6 relative group-hover:-translate-y-2 transition-transform duration-500 before:absolute before:inset-0 before:rounded-full before:bg-[#b58b54]/40 before:blur-md before:-z-10 group-hover:before:blur-xl">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#b58b54] transition-colors">Bulk Loose Leaf</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Wholesale quantities expertly packed in moisture-barrier multilayer multi-wall sacks to ensure factory-level freshness across oceans.
                  </p>
                </div>
              </div>

              {/* Box 3: Gift Items */}
              <div className="group relative rounded-[2.5rem] bg-neutral-900 border border-white/10 overflow-hidden hover:border-[#b58b54]/50 transition-colors duration-500">
                <div className="relative h-64 md:h-72 w-full overflow-hidden">
                  <Image src="/gift_tea_packaging.webp" alt="Exquisite Ceylon tea gift set in luxury presentation box" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                </div>
                <div className="p-8 md:p-10 relative z-10 -mt-20">
                  <div className="w-14 h-14 rounded-full bg-[#b58b54] flex items-center justify-center text-white shadow-xl mb-6 relative group-hover:-translate-y-2 transition-transform duration-500 before:absolute before:inset-0 before:rounded-full before:bg-[#b58b54]/40 before:blur-md before:-z-10 group-hover:before:blur-xl">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#b58b54] transition-colors">Bespoke Gift Sets</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Elegant presentation boxes, ornate tins, and custom caddies for premium retail ranges or corporate gifting campaigns.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
