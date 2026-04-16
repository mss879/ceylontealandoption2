import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Newsroom — Tea Insights & Guides",
  description: "Read the latest guides, articles, and insights on the benefits, varieties, and culture of authentic Ceylon tea. Stay updated with Ceylon Tea Land's expert knowledge.",
  keywords: ["Ceylon Tea News", "Sri Lankan Tea Articles", "Tea Guides", "Green Tea Benefits", "Black Tea Quality", "Tea Harvesting", "Ceylon Tea Blog", "Tea Industry News"],
  alternates: {
    canonical: "/newsroom",
  },
  openGraph: {
    title: "Newsroom & Articles | Ceylon Tea Land",
    description: "Read the latest guides, articles, and insights on the benefits, varieties, and culture of authentic Ceylon tea.",
    url: "https://ceylontealand.com/newsroom",
    siteName: "Ceylon Tea Land",
    images: [
      {
        url: "/heroimg.png",
        width: 1200,
        height: 630,
        alt: "Ceylon Tea Land Newsroom — Tea Insights & Articles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsroom & Articles | Ceylon Tea Land",
    description: "Read the latest guides, articles, and insights on authentic Ceylon tea.",
    images: ["/heroimg.png"],
  },
}

export default async function NewsroomPage() {
  const supabase = createClient()
  
  const { data: posts } = await supabase
    .from('news_posts')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <main className="bg-neutral-50 text-neutral-900 min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ead9bc] bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b58b54] mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b58b54] animate-pulse"></span>
            Tea Land Insights
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
            The Newsroom.
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Dive into the world of authentic Ceylon tea. From highland harvesting techniques to the unmatched health benefits of our perfect brews.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {posts && posts.length > 0 ? (
            posts.map((post: any) => (
              <Link href={`/newsroom/${post.slug}`} key={post.id} className="group flex flex-col bg-white rounded-[2rem] border border-[#ead9bc] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(181,139,84,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d9b482]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image 
                    src={post.image_url || '/placeholder.png'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                    <span className="bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      Article
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-sm font-medium text-[#b58b54] mb-3 font-serif italic">
                    {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <h3 className="font-bold text-neutral-900 leading-tight text-2xl mb-4 group-hover:text-[#b58b54] transition-colors">{post.title}</h3>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    Read Article 
                    <ArrowRight className="w-4 h-4 text-[#b58b54] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-neutral-500">
              Check back soon for new insights.
            </div>
          )}
        </div>

      </div>
    </main>
  )
}
