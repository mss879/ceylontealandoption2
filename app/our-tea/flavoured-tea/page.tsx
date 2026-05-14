import Image from 'next/image'
import Link from 'next/link'
import { Leaf, ArrowRight, Sparkles } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export const metadata = {
  title: "Flavoured Tea in Sri Lanka | Ceylon Flavoured Tea Blends — Ceylon Tea Land",
  description: "Explore aromatic flavoured Ceylon tea from Sri Lanka. From Earl Grey to tropical fruit infusions — premium blends crafted by master blenders for wholesale and retail partners.",
  keywords: ["flavoured tea in Sri Lanka", "flavoured tea", "Ceylon flavoured tea", "flavored tea Sri Lanka", "Earl Grey Ceylon tea", "fruit tea blends", "flavoured tea exporters"],
  authors: [{ name: "Ceylon Tea Land" }],
  alternates: {
    canonical: "/our-tea/flavoured-tea",
  },
  openGraph: {
    title: "Flavoured Tea in Sri Lanka — Aromatic Ceylon Tea Blends | Ceylon Tea Land",
    description: "Aromatic flavoured Ceylon tea from Sri Lanka. Earl Grey, fruit infusions, and premium blends for wholesale and retail.",
    url: "https://ceylontealand.com/our-tea/flavoured-tea",
    siteName: "Ceylon Tea Land",
    images: [
      {
        url: "https://ceylontealand.com/heroimg.webp",
        width: 1200,
        height: 630,
        alt: "Flavoured Tea in Sri Lanka — Aromatic Ceylon Tea Blends",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavoured Tea in Sri Lanka — Aromatic Ceylon Tea Blends | Ceylon Tea Land",
    description: "Aromatic flavoured Ceylon tea from Sri Lanka. Premium blends crafted by master blenders.",
    images: ["https://ceylontealand.com/heroimg.webp"],
  },
};

const flavouredTeaBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ceylontealand.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Tea', item: 'https://ceylontealand.com/our-tea' },
    { '@type': 'ListItem', position: 3, name: 'Flavoured Tea', item: 'https://ceylontealand.com/our-tea/flavoured-tea' },
  ],
};

const flavouredTeaFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What flavoured teas does Sri Lanka produce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sri Lanka produces a wide variety of flavoured teas using premium Ceylon black tea as the base. Popular varieties include Earl Grey (bergamot-infused), Jasmine, Cinnamon, Cardamom, Mint, Lemon, Mango, Passion Fruit, Peach, and Strawberry. Ceylon Tea Land also creates custom blends for private label partners.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is flavoured tea made?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flavoured tea is created by infusing high-quality Ceylon black tea with natural flavourings, essential oils, dried fruits, herbs, or flower petals. The base tea absorbs the flavouring during a controlled scenting process, creating a harmonious blend where the Ceylon tea character complements the added flavour rather than being overwhelmed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I create my own flavoured tea brand with Ceylon Tea Land?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Ceylon Tea Land offers complete private label and custom blending services for flavoured tea. Our master blenders can develop unique flavour profiles exclusive to your brand. We handle everything from recipe creation and sampling to packaging design and global shipping.',
      },
    },
  ],
};

export default async function FlavouredTeaPage() {
  const supabase = createClient()

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'flavoured')
    .order('created_at', { ascending: true })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flavouredTeaBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flavouredTeaFaqJsonLd) }}
      />
      <main className="flex-1 bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-neutral-950 pt-48 pb-32 text-white border-b border-[#ead9bc]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#f472b6]/10 blur-[150px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#b58b54]/10 blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#f472b6]/20 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f9a8d4] mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f472b6] animate-pulse"></span>
              Flavoured Tea Collection
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white mb-8">
              Flavoured Tea <br className="hidden md:block" /> <span className="font-serif italic text-[#f9a8d4]">in Sri Lanka</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
              Aromatic Ceylon tea blends infused with natural fruits, flowers, and spices. Discover the art of flavoured tea crafted by Sri Lanka&apos;s master blenders.
            </p>
          </div>
        </section>

        {/* Content Section — Flavoured Tea in Sri Lanka */}
        <section className="bg-[#f4f1ea] py-20 lg:py-28 border-b border-[#ead9bc]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#b58b54] mb-6">
              <Sparkles className="w-4 h-4" />
              <span>About Flavoured Ceylon Tea</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight tracking-tight mb-10">
              The Art of Flavoured Tea from Sri Lanka
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Flavoured tea in Sri Lanka represents the perfect marriage between the island&apos;s world-renowned Ceylon tea base and the art of aromatic infusion. Using premium <Link href="/our-tea/black-tea" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54] transition-colors font-medium">orthodox black tea from Sri Lanka</Link> as the foundation, our master blenders create harmonious flavour profiles that complement — rather than mask — the distinctive Ceylon tea character.
              </p>
              <p>
                Sri Lanka&apos;s flavoured tea tradition draws from the island&apos;s incredible biodiversity. Ceylon cinnamon from the southern lowlands, cardamom from the hill country, vanilla from the wet zone, and tropical fruits from across the island all contribute to our blending palette. This natural advantage, combined with our proximity to spice-growing regions, makes flavoured tea in Sri Lanka uniquely authentic and aromatic.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 pt-4">Popular Flavoured Tea Varieties</h3>
              <p>
                Our flavoured tea collection spans a diverse range of profiles crafted for international palates:
              </p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  { name: 'Earl Grey', desc: 'The classic — Ceylon black tea scented with Italian bergamot oil for a citrusy, sophisticated finish.' },
                  { name: 'Jasmine', desc: 'Delicate jasmine blossoms layered with Ceylon green or black tea for a fragrant, calming cup.' },
                  { name: 'Ceylon Cinnamon', desc: 'True cinnamon (Cinnamomum verum) from Sri Lanka blended with brisk highland black tea.' },
                  { name: 'Tropical Fruit', desc: 'Mango, passion fruit, peach, and strawberry infusions that capture Sri Lanka\'s tropical essence.' },
                  { name: 'Mint & Lemon', desc: 'Refreshing herbal-forward blends ideal for iced tea and wellness ranges.' },
                ].map((variety) => (
                  <li key={variety.name} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b58b54] mt-3 flex-shrink-0"></span>
                    <div><strong className="text-neutral-900">{variety.name}:</strong> {variety.desc}</div>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold text-neutral-900 pt-4">How We Create Flavoured Tea</h3>
              <p>
                The flavouring process begins with selecting the ideal Ceylon tea base — typically a medium-body BOPF or BOP grade that absorbs flavouring evenly. Natural essential oils, freeze-dried fruit pieces, dried flower petals, or whole spices are then layered with the tea during a controlled scenting and blending process. Each batch undergoes sensory evaluation by our tasting panel to ensure the flavour profile meets our export-grade standards.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 pt-4">Why Ceylon Tea Makes the Best Flavoured Base</h3>
              <p>
                Not all teas are equal as flavouring bases. Ceylon black tea is prized by blenders worldwide for its <strong>brisk, clean character</strong> that provides structure without bitterness — the perfect canvas for added flavours. Unlike Assam teas that can overpower delicate flavourings with their malty intensity, Ceylon tea allows the infused ingredients to shine while maintaining a satisfying body in the cup.
              </p>
              <p>
                Whether you&apos;re looking for bulk flavoured tea supply or want to <Link href="/branding" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54] transition-colors font-medium">launch your own flavoured tea brand in Sri Lanka</Link>, Ceylon Tea Land provides the expertise, raw materials, and manufacturing capability to bring your vision to life. Explore our <Link href="/our-tea/green-tea" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54] transition-colors font-medium">green tea from Sri Lanka</Link> or <Link href="/contact" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54] transition-colors font-medium">contact our team</Link> for samples and pricing.
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
                Our Flavoured Tea Collection
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Browse our curated selection of aromatic Ceylon flavoured tea blends, ready for wholesale and retail distribution.
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
                    <div className="aspect-square relative mb-8 rounded-2xl overflow-hidden flex items-center justify-center bg-transparent drop-shadow-2xl">
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-200">
                        <Leaf className="w-16 h-16 opacity-30" />
                      </div>
                      <Image
                        src={tea.image}
                        alt={`${tea.name} — flavoured Ceylon tea from Sri Lanka`}
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
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-neutral-500">
                  <p className="text-lg">Our flavoured tea collection is being updated. <Link href="/contact" className="underline text-[#b58b54]">Contact us</Link> for the latest catalogue.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden bg-neutral-950 text-white">
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">Source Flavoured Tea from Sri Lanka</h2>
              <p className="text-xl text-neutral-400 leading-relaxed">
                Looking for a reliable flavoured tea supplier in Sri Lanka? We offer custom blending, competitive wholesale pricing, sample kits, and private label solutions worldwide.
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
