import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf } from 'lucide-react'

export const metadata = {
  title: "Our Tea Collection | Premium Ceylon Tea — Black, Green & Flavoured | Ceylon Tea Land",
  description: "Browse our full collection of premium Ceylon tea — orthodox black tea grades, pure green tea, and aromatic flavoured blends. Sourced from Sri Lanka's finest estates for wholesale and retail.",
  keywords: ["Ceylon tea collection", "Ceylon tea", "Sri Lanka tea", "tea catalogue", "black tea Sri Lanka", "green tea Sri Lanka", "flavoured tea Sri Lanka", "Ceylon tea wholesale"],
  authors: [{ name: "Ceylon Tea Land" }],
  alternates: {
    canonical: "/our-tea",
  },
  openGraph: {
    title: "Our Tea Collection — Premium Ceylon Tea | Ceylon Tea Land",
    description: "Browse our full collection of premium Ceylon tea — black, green, and flavoured blends from Sri Lanka's finest estates.",
    url: "https://ceylontealand.com/our-tea",
    siteName: "Ceylon Tea Land",
    images: [
      {
        url: "https://ceylontealand.com/heroimg.webp",
        width: 1200,
        height: 630,
        alt: "Our Tea Collection — Premium Ceylon Black Tea, Green Tea & Flavoured Teas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Tea Collection — Premium Ceylon Tea | Ceylon Tea Land",
    description: "Browse the full range of premium Ceylon tea — black, green, and flavoured blends for wholesale and retail.",
    images: ["https://ceylontealand.com/heroimg.webp"],
  },
};

import { createClient } from '@/utils/supabase/server'

const ourTeaBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ceylontealand.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Tea', item: 'https://ceylontealand.com/our-tea' },
  ],
};

export default async function OurTeaPage() {
  const supabase = createClient()
  
  // Fetch products from database
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: true }) // preserve roughly original order

  // Re-build the structure for the Tabs navigation
  const teaCategories = {
    black: products?.filter(p => p.category === 'black') || [],
    flavoured: products?.filter(p => p.category === 'flavoured') || [],
    green: products?.filter(p => p.category === 'green') || []
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products?.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://ceylontealand.com/our-tea#${product.category}`,
      item: {
        '@type': 'Product',
        name: product.name,
        image: `https://ceylontealand.com${product.image}`,
        description: `Premium ${product.category} Ceylon tea - ${product.name}`,
        brand: {
          '@type': 'Brand',
          name: 'Ceylon Tea Land'
        }
      }
    })) || []
  };



  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ourTeaBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-neutral-950 pt-48 pb-32 text-white border-b border-[#ead9bc]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#b58b54]/10 blur-[150px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-900/10 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#b58b54]/20 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f1d2a4] mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b58b54] animate-pulse"></span>
            Our Collection
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white mb-8">
            Premium Ceylon <br className="hidden md:block" /> <span className="font-serif italic text-[#b58b54]">Tea Collection</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            From the misty hills of Sri Lanka to your cup. Explore our full range of premium <a href="/our-tea/black-tea" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54]">black tea</a>, <a href="/our-tea/green-tea" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54]">green tea</a>, and <a href="/our-tea/flavoured-tea" className="underline decoration-[#b58b54]/40 hover:decoration-[#b58b54]">flavoured tea</a> from Ceylon.
          </p>
        </div>
      </section>



      {/* Tea Grid Section */}
      <section className="relative px-6 py-32 bg-white">
        {/* Ambient background for section */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute top-40 left-0 h-[500px] w-[500px] rounded-full bg-[#f4f1ea] blur-[150px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              Full Tea Catalogue
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Browse our complete range of Ceylon teas — filter by category to find exactly what you need.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-20">
              <div className="overflow-x-auto pb-4 px-4 w-full flex justify-center no-scrollbar">
                <TabsList className="bg-neutral-50 p-1.5 rounded-full border border-[#ead9bc] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] w-max max-w-none">
                  <TabsTrigger
                    value="all"
                    className="rounded-full px-6 md:px-8 py-3.5 text-[12px] md:text-[13px] font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300 whitespace-nowrap"
                  >
                    All Teas
                  </TabsTrigger>
                  <TabsTrigger
                    value="black"
                    className="rounded-full px-6 md:px-8 py-3.5 text-[12px] md:text-[13px] font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300 whitespace-nowrap"
                  >
                    Black Tea
                  </TabsTrigger>
                  <TabsTrigger
                    value="flavoured"
                    className="rounded-full px-6 md:px-8 py-3.5 text-[12px] md:text-[13px] font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300 whitespace-nowrap"
                  >
                    Flavoured Tea
                  </TabsTrigger>
                  <TabsTrigger
                    value="green"
                    className="rounded-full px-6 md:px-8 py-3.5 text-[12px] md:text-[13px] font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300 whitespace-nowrap"
                  >
                    Green Tea
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {['all', 'black', 'flavoured', 'green'].map((categoryKey) => {
              const teasToDisplay = categoryKey === 'all'
                ? products || []
                : teaCategories[categoryKey as keyof typeof teaCategories] || [];

              return (
                <TabsContent key={categoryKey} value={categoryKey} className="mt-0 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                    {teasToDisplay.map((tea) => (
                      <div
                        key={tea.id}
                        className="group relative bg-[#faf9f6] rounded-[2rem] p-7 md:p-8 border border-[#ead9bc] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(181,139,84,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d9b482] overflow-hidden"
                      >
                        {/* Hover Ambient Detail */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f4f1ea]/0 via-[#f4f1ea]/50 to-[#f4f1ea] opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-multiply" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#b58b54]/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="aspect-square relative mb-8 rounded-2xl overflow-hidden flex items-center justify-center bg-transparent drop-shadow-2xl">
                          {/* Placeholder for image if not found */}
                          <div className="absolute inset-0 flex items-center justify-center text-neutral-200">
                            <Leaf className="w-16 h-16 opacity-30" />
                          </div>
                          <Image
                            src={tea.image}
                            alt={tea.name}
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
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
    </main>
    </>
  )
}