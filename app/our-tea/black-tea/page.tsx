import Image from 'next/image'
import Link from 'next/link'
import { Leaf, ArrowRight } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export const metadata = {
  title: "Black Tea in Sri Lanka | Premium Ceylon Black Tea Grades — Ceylon Tea Land",
  description: "Explore premium black tea from Sri Lanka — BOP, BOPF, OP, and Pekoe grades sourced from highland estates. Discover the full range of Ceylon black tea for wholesale and retail export.",
  keywords: ["black tea in Sri Lanka", "black tea", "Ceylon black tea", "BOP tea grade", "BOPF tea", "OP tea", "Pekoe tea", "black tea exporter Sri Lanka", "Ceylon tea wholesale"],
  authors: [{ name: "Ceylon Tea Land" }],
  alternates: {
    canonical: "/our-tea/black-tea",
  },
  openGraph: {
    title: "Black Tea in Sri Lanka — Premium Ceylon Black Tea Grades | Ceylon Tea Land",
    description: "Premium black tea from Sri Lanka. BOP, BOPF, OP, and Pekoe grades sourced from highland estates for wholesale and retail export.",
    url: "https://ceylontealand.com/our-tea/black-tea",
    siteName: "Ceylon Tea Land",
    images: [
      {
        url: "https://ceylontealand.com/heroimg.webp",
        width: 1200,
        height: 630,
        alt: "Black Tea in Sri Lanka — Premium Ceylon Black Tea Grades",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Tea in Sri Lanka — Premium Ceylon Black Tea Grades | Ceylon Tea Land",
    description: "Premium black tea from Sri Lanka. BOP, BOPF, OP, and Pekoe grades from highland estates.",
    images: ["https://ceylontealand.com/heroimg.webp"],
  },
};

const blackTeaBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ceylontealand.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Tea', item: 'https://ceylontealand.com/our-tea' },
    { '@type': 'ListItem', position: 3, name: 'Black Tea', item: 'https://ceylontealand.com/our-tea/black-tea' },
  ],
};

const blackTeaFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the main grades of Ceylon black tea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ceylon black tea is classified into several orthodox grades based on leaf size and processing. The main grades include OP (Orange Pekoe) — a wiry, long-leaf grade with a delicate flavour; BOP (Broken Orange Pekoe) — a brisk, full-bodied broken leaf ideal for strong infusions; BOPF (Broken Orange Pekoe Fannings) — a smaller cut producing a quick-brewing, robust cup popular in tea bags; and Pekoe — tightly rolled leaves with a clean, balanced character. Specialty grades like FBOP, FBOPF, and Dust are also exported for specific market preferences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes black tea from Sri Lanka different from other origins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sri Lankan black tea is distinguished by its terroir-driven diversity. The island produces tea across three elevation zones — high-grown (above 4,000 ft) for delicate, golden liquors with floral aromatics; mid-grown (2,000–4,000 ft) for full-bodied, malty teas; and low-grown (below 2,000 ft) for strong, dark teas with robust flavour. This elevation variety, combined with orthodox processing methods and strict Sri Lanka Tea Board quality controls, gives Ceylon black tea its globally recognised purity and consistency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where to buy black tea from Sri Lanka for wholesale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ceylon Tea Land is an established tea exporter based in Colombo, Sri Lanka, offering premium black tea grades for wholesale distribution worldwide. We supply bulk loose-leaf tea in moisture-barrier packaging, retail-ready tea bags, and fully branded consumer packs via our private label service. Contact our sales team for samples, MOQ details, and CIF/FOB pricing.',
      },
    },
  ],
};

export default async function BlackTeaPage() {
  const supabase = createClient()

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'black')
    .order('created_at', { ascending: true })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blackTeaBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blackTeaFaqJsonLd) }}
      />
      <main className="flex-1 bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-neutral-950 pt-48 pb-32 text-white border-b border-[#ead9bc]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#b58b54]/15 blur-[150px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-amber-900/10 blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#b58b54]/20 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f1d2a4] mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b58b54] animate-pulse"></span>
              Black Tea Collection
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white mb-8">
              Black Tea <br className="hidden md:block" /> <span className="font-serif italic text-[#b58b54]">in Sri Lanka</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
              The gold standard of Ceylon tea. Discover our full range of premium orthodox black tea grades, sourced from Sri Lanka&apos;s finest estates across all three elevation zones.
            </p>
          </div>
        </section>

        {/* Content Section — Black Tea in Sri Lanka */}
        <section className="bg-[#f4f1ea] py-20 lg:py-28 border-b border-[#ead9bc]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#b58b54] mb-6">
              <Leaf className="w-4 h-4" />
              <span>About Ceylon Black Tea</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight tracking-tight mb-10">
              Black Tea from Sri Lanka&apos;s Highland Estates
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed text-justify">
              <p>
                Sri Lanka produces some of the world&apos;s finest black tea, cultivated across three distinct elevation zones that each impart unique flavour characteristics. As one of the leading <Link href="/" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54] transition-colors font-medium">tea exporters in Sri Lanka</Link>, Ceylon Tea Land offers the complete range of orthodox black tea grades, from the brisk, aromatic BOP (Broken Orange Pekoe) to the full-bodied BOPF (Broken Orange Pekoe Fannings) and the elegant wiry-leaf OP (Orange Pekoe).
              </p>
              <p>
                Our black tea is sourced from Nuwara Eliya, Dimbula, Uva, and Sabaragamuwa regions, each recognised for their distinctive terroir. High-grown teas above 4,000 ft produce the most delicate, golden liquors with exceptional aroma, while mid- and low-grown teas deliver the robust body and malty sweetness preferred in many international markets. Learn more about <Link href="/ceylon-tea" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54] transition-colors font-medium">Ceylon tea elevations and history</Link>.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 pt-4">Orthodox Black Tea Grades We Export</h3>
              <p>
                Ceylon black tea is graded by leaf size and style of manufacture. Each grade produces a distinctly different cup character:
              </p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  { name: 'OP (Orange Pekoe)', desc: 'Long, wiry whole leaves that produce a light, aromatic golden liquor with subtle floral notes.' },
                  { name: 'BOP (Broken Orange Pekoe)', desc: 'Broken leaf grade with brisk character, full body, and a rich amber cup. The most versatile export grade.' },
                  { name: 'BOPF (Broken Orange Pekoe Fannings)', desc: 'Smaller cut leaves producing a quick-brewing, strong infusion. Ideal for tea bag manufacturing.' },
                  { name: 'Pekoe', desc: 'Tightly rolled leaves yielding a clean, balanced cup with medium body and smooth finish.' },
                  { name: 'FBOP / FBOPF', desc: 'Flowery grades containing golden tips, offering a premium cup with enhanced aroma and sweetness.' },
                  { name: 'Dust', desc: 'Fine-particle grade producing a very strong, deeply coloured cup. Popular in CTC-style markets.' },
                ].map((grade) => (
                  <li key={grade.name} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b58b54] mt-3 flex-shrink-0"></span>
                    <div><strong className="text-neutral-900">{grade.name}:</strong> {grade.desc}</div>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold text-neutral-900 pt-4">Elevation-Based Flavour Profiles</h3>
              <p>
                The flavour of Ceylon black tea is directly shaped by the altitude at which it is grown. <strong>High-grown teas</strong> from Nuwara Eliya and Uva (above 4,000 ft) are prized for their delicate, complex character with bright citrus and floral undertones. <strong>Mid-grown teas</strong> from Kandy and Dimbula (2,000 to 4,000 ft) offer a well-rounded, malty body with good colour. <strong>Low-grown teas</strong> from Sabaragamuwa and Ruhuna (below 2,000 ft) produce strong, dark liquors with a robust, full flavour ideal for breakfast blends.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 pt-4">Processing and Quality Assurance</h3>
              <p>
                All our black teas are manufactured using the traditional orthodox method, which preserves the leaf&apos;s natural essential oils and produces a more complex, nuanced flavour compared to CTC (crush-tear-curl) processing. Every batch is tasted by our in-house tea tasters and must pass Sri Lanka Tea Board quality inspections before export, ensuring the authenticity and purity that the Lion Logo guarantee represents.
              </p>
              <p>
                Beyond black tea, we also offer <Link href="/our-tea/green-tea" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54] transition-colors font-medium">pure green tea from Sri Lanka</Link> and <Link href="/our-tea/flavoured-tea" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54] transition-colors font-medium">aromatic flavoured tea blends</Link>. Whether you need bulk supply or <Link href="/branding" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54] transition-colors font-medium">custom tea branding in Sri Lanka</Link>, our master blenders can craft the perfect profile for your market.
              </p>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="relative px-6 py-24 lg:py-32 bg-white">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute top-40 left-0 h-[500px] w-[500px] rounded-full bg-[#f4f1ea] blur-[150px]" />
          </div>

          <div className="container relative z-10 mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
                Our Black Tea Grades
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Browse our complete range of premium Ceylon black tea grades, ready for wholesale and retail distribution worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
              {products && products.length > 0 ? (
                products.map((tea) => (
                  <div
                    key={tea.id}
                    className="group relative bg-[#faf9f6] rounded-[2rem] p-7 md:p-8 border border-[#ead9bc] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(181,139,84,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d9b482] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f4f1ea]/0 via-[#f4f1ea]/50 to-[#f4f1ea] opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-multiply" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#b58b54]/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="aspect-square relative mb-8 rounded-2xl overflow-hidden flex items-center justify-center bg-transparent drop-shadow-2xl">
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-200">
                        <Leaf className="w-16 h-16 opacity-30" />
                      </div>
                      <Image
                        src={tea.image}
                        alt={`${tea.name} — Ceylon black tea from Sri Lanka`}
                        fill
                        className="object-contain p-2 group-hover:scale-[1.15] transition-transform duration-700 ease-out relative z-10"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                    <div className="text-center relative z-20">
                      <h3 className="font-serif italic text-[#1a1a1a] text-2xl mb-3 group-hover:text-[#b58b54] transition-colors duration-300">
                        {tea.name}
                      </h3>
                      <div className="w-10 h-0.5 bg-[#ead9bc] mx-auto group-hover:w-16 group-hover:bg-[#b58b54] transition-all duration-500"></div>
                    </div>
                    {/* Corner Accent Line */}
                    <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#b58b54] to-transparent"></div>
                      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[#b58b54] to-transparent"></div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-neutral-500">
                  <p className="text-lg">Our black tea collection is being updated. <Link href="/contact" className="underline text-[#b58b54]">Contact us</Link> for the latest catalogue.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden bg-neutral-950 text-white">
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">Source Black Tea from Sri Lanka</h2>
              <p className="text-xl text-neutral-400 leading-relaxed">
                Looking for a reliable black tea supplier in Sri Lanka? We offer competitive wholesale pricing, sample kits, and custom branding solutions for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center gap-2 h-14 bg-[#d9b482] text-neutral-950 hover:bg-[#c29c6b] px-10 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                    Request Samples
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/our-tea">
                  <button className="inline-flex items-center justify-center gap-2 h-14 border border-white/20 text-white hover:bg-white/10 px-10 rounded-full font-bold text-lg transition-all">
                    View All Teas
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
