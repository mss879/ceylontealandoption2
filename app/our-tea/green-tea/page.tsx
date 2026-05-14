import Image from 'next/image'
import Link from 'next/link'
import { Leaf, ArrowRight } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export const metadata = {
  title: "Green Tea in Sri Lanka | Pure Ceylon Green Tea — Ceylon Tea Land",
  description: "Explore pure Ceylon green tea from Sri Lanka. Light, fresh, and antioxidant-rich green teas sourced from high-altitude estates for wholesale and retail export.",
  keywords: ["green tea in Sri Lanka", "green tea", "Ceylon green tea", "Sri Lanka green tea", "green tea exporter", "green tea wholesale", "antioxidant tea Sri Lanka"],
  authors: [{ name: "Ceylon Tea Land" }],
  alternates: {
    canonical: "/our-tea/green-tea",
  },
  openGraph: {
    title: "Green Tea in Sri Lanka — Pure Ceylon Green Tea | Ceylon Tea Land",
    description: "Pure Ceylon green tea from Sri Lanka's highland estates. Light, fresh, antioxidant-rich teas for wholesale and retail.",
    url: "https://ceylontealand.com/our-tea/green-tea",
    siteName: "Ceylon Tea Land",
    images: [
      {
        url: "https://ceylontealand.com/heroimg.webp",
        width: 1200,
        height: 630,
        alt: "Green Tea in Sri Lanka — Pure Ceylon Green Tea from Highland Estates",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Tea in Sri Lanka — Pure Ceylon Green Tea | Ceylon Tea Land",
    description: "Pure Ceylon green tea from Sri Lanka. Light, fresh, and antioxidant-rich teas from highland estates.",
    images: ["https://ceylontealand.com/heroimg.webp"],
  },
};

const greenTeaBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ceylontealand.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Tea', item: 'https://ceylontealand.com/our-tea' },
    { '@type': 'ListItem', position: 3, name: 'Green Tea', item: 'https://ceylontealand.com/our-tea/green-tea' },
  ],
};

const greenTeaFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Sri Lankan green tea unique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sri Lankan green tea is produced from the same Camellia sinensis plant as Ceylon black tea but undergoes minimal oxidation through pan-firing or steaming. The unique high-altitude terroir of Sri Lanka — particularly the Nuwara Eliya and Uva regions above 4,000 ft — gives Ceylon green tea a distinctively bright, clean flavour with natural sweetness that sets it apart from Chinese and Japanese green teas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where to buy green tea from Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ceylon Tea Land is one of the leading tea exporters in Sri Lanka, offering premium green tea for wholesale and retail distribution worldwide. Contact our sales team to request samples, MOQ details, and CIF/FOB pricing for bulk green tea orders.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the health benefits of Ceylon green tea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ceylon green tea is rich in catechins and EGCG — powerful antioxidants linked to improved cardiovascular health, enhanced metabolism, and reduced inflammation. The high-altitude growing conditions in Sri Lanka produce leaves with concentrated polyphenol content, making Ceylon green tea particularly beneficial for health-conscious consumers.',
      },
    },
  ],
};

export default async function GreenTeaPage() {
  const supabase = createClient()

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'green')
    .order('created_at', { ascending: true })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(greenTeaBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(greenTeaFaqJsonLd) }}
      />
      <main className="flex-1 bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-neutral-950 pt-48 pb-32 text-white border-b border-[#ead9bc]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-emerald-700/15 blur-[150px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#b58b54]/10 blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-400 mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Green Tea Collection
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white mb-8">
              Green Tea <br className="hidden md:block" /> <span className="font-serif italic text-emerald-400">in Sri Lanka</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
              Pure, antioxidant-rich Ceylon green tea sourced from Sri Lanka&apos;s finest high-altitude estates. Discover the clean, bright flavour that only genuine single-origin green tea can deliver.
            </p>
          </div>
        </section>

        {/* Content Section — Green Tea in Sri Lanka */}
        <section className="bg-[#f4f1ea] py-20 lg:py-28 border-b border-[#ead9bc]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-700 mb-6">
              <Leaf className="w-4 h-4" />
              <span>About Ceylon Green Tea</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight tracking-tight mb-10">
              What Makes Green Tea from Sri Lanka Exceptional?
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Green tea in Sri Lanka is a relatively recent addition to the island&apos;s celebrated tea portfolio, but it has rapidly gained international recognition for its exceptional purity and distinct flavour profile. Unlike the deeply oxidised <Link href="/our-tea" className="underline decoration-emerald-700/40 hover:decoration-emerald-700 transition-colors font-medium">black teas that Sri Lanka is famous for</Link>, Ceylon green tea undergoes minimal oxidation — typically less than 5% — preserving the leaf&apos;s natural antioxidants, bright colour, and delicate vegetal notes.
              </p>
              <p>
                Sri Lanka&apos;s unique advantage for green tea production lies in its terroir. The high-altitude tea gardens of Nuwara Eliya and Uva — sitting above 4,000 feet — provide the cool, misty climate that slows leaf growth and concentrates polyphenol content. This natural enrichment gives Ceylon green tea a distinctively clean, sweet finish with subtle floral undertones that distinguish it from Chinese Longjing or Japanese Sencha.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 pt-4">Processing Methods</h3>
              <p>
                Ceylon green tea is processed using two primary methods: <strong>pan-firing</strong> and <strong>steaming</strong>. Pan-fired green teas develop a slightly nutty, toasted character, while steamed varieties retain a brighter, more vegetal profile. Both methods halt oxidation immediately after plucking, locking in the catechins and EGCG that make green tea a preferred choice for health-conscious consumers worldwide.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 pt-4">Health Benefits of Ceylon Green Tea</h3>
              <p>
                Ceylon green tea is naturally rich in <strong>catechins</strong>, <strong>L-theanine</strong>, and <strong>EGCG (epigallocatechin gallate)</strong> — powerful bioactive compounds linked to cardiovascular health, enhanced cognitive function, improved metabolism, and reduced oxidative stress. The high-altitude growing conditions in Sri Lanka produce leaves with particularly concentrated polyphenol content, making our green tea among the most antioxidant-rich in the world.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 pt-4">Green Tea Grades We Export</h3>
              <p>
                Ceylon Tea Land exports a range of green tea grades suitable for every market segment — from premium whole-leaf varieties for speciality retailers to fine-cut grades ideal for tea bag manufacturing. As established <Link href="/" className="underline decoration-emerald-700/40 hover:decoration-emerald-700 transition-colors font-medium">tea exporters in Sri Lanka</Link>, we offer both bulk loose-leaf supply and <Link href="/branding" className="underline decoration-emerald-700/40 hover:decoration-emerald-700 transition-colors font-medium">private label tea branding solutions</Link> for businesses looking to launch their own green tea brand.
              </p>
              <p>
                Explore our full range of teas — including <Link href="/our-tea" className="underline decoration-emerald-700/40 hover:decoration-emerald-700 transition-colors font-medium">premium black tea from Sri Lanka</Link> and <Link href="/our-tea/flavoured-tea" className="underline decoration-emerald-700/40 hover:decoration-emerald-700 transition-colors font-medium">aromatic flavoured tea blends</Link> — or <Link href="/contact" className="underline decoration-emerald-700/40 hover:decoration-emerald-700 transition-colors font-medium">contact our team</Link> to request samples and wholesale pricing.
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
                Our Green Tea Collection
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Browse our curated selection of pure Ceylon green tea grades, ready for wholesale and retail distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
              {products && products.length > 0 ? (
                products.map((tea) => (
                  <div
                    key={tea.id}
                    className="group relative bg-[#faf9f6] rounded-[2rem] p-7 md:p-8 border border-[#ead9bc] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/30 to-emerald-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-multiply" />
                    <div className="aspect-square relative mb-8 rounded-2xl overflow-hidden flex items-center justify-center bg-transparent drop-shadow-2xl">
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-200">
                        <Leaf className="w-16 h-16 opacity-30" />
                      </div>
                      <Image
                        src={tea.image}
                        alt={`${tea.name} — Ceylon green tea from Sri Lanka`}
                        fill
                        className="object-contain p-2 group-hover:scale-[1.15] transition-transform duration-700 ease-out relative z-10"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                    <div className="text-center relative z-20">
                      <h3 className="font-serif italic text-[#1a1a1a] text-2xl mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                        {tea.name}
                      </h3>
                      <div className="w-10 h-0.5 bg-[#ead9bc] mx-auto group-hover:w-16 group-hover:bg-emerald-600 transition-all duration-500"></div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-neutral-500">
                  <p className="text-lg">Our green tea collection is being updated. <Link href="/contact" className="underline text-emerald-700">Contact us</Link> for the latest catalogue.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden bg-neutral-950 text-white">
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">Source Green Tea from Sri Lanka</h2>
              <p className="text-xl text-neutral-400 leading-relaxed">
                Looking for a reliable green tea supplier in Sri Lanka? We offer competitive wholesale pricing, sample kits, and custom branding solutions for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center gap-2 h-14 bg-emerald-600 text-white hover:bg-emerald-700 px-10 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all">
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
