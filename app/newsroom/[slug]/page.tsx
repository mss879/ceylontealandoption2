import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

// Dynamically generate metadata for perfect SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const supabase = createClient()
  const { data: post } = await supabase
    .from('news_posts')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!post) {
    return { title: 'Post Not Found | Ceylon Tea Land' }
  }

  const keywordsArray = post.keywords ? post.keywords.split(',').map((k: string) => k.trim()) : []

  return {
    title: `${post.title}`,
    description: post.excerpt || `Read about ${post.title}. Authentic Ceylon tea insights, guides, and expert knowledge from Ceylon Tea Land.`,
    keywords: keywordsArray,
    alternates: {
      canonical: `/newsroom/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read about ${post.title}. Authentic Ceylon tea insights and news.`,
      url: `https://ceylontealand.com/newsroom/${params.slug}`,
      siteName: 'Ceylon Tea Land',
      type: 'article',
      publishedTime: post.created_at,
      authors: ['Ceylon Tea Land'],
      images: [
        {
          url: post.image_url,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read about ${post.title}. Authentic Ceylon tea insights.`,
      images: [post.image_url],
    },
  }
}

export default async function NewsroomPostPage({ params }: { params: { slug: string } }) {
  const supabase = createClient()
  
  const { data: post } = await supabase
    .from('news_posts')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!post) {
    notFound()
  }

  // JSON-LD Article structured data
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.image_url,
    datePublished: post.created_at,
    dateModified: post.updated_at || post.created_at,
    author: {
      '@type': 'Organization',
      name: 'Ceylon Tea Land',
      url: 'https://ceylontealand.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ceylon Tea Land',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ceylontealand.com/clogo.png',
      },
    },
    description: post.excerpt || `Read about ${post.title}. Authentic Ceylon tea insights.`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ceylontealand.com/newsroom/${params.slug}`,
    },
  };

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ceylontealand.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Newsroom',
        item: 'https://ceylontealand.com/newsroom',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://ceylontealand.com/newsroom/${params.slug}`,
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-900 min-h-screen pt-32 pb-24">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-neutral-900">
        <Image 
          src={post.image_url || '/placeholder.png'}
          alt={post.title}
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-16 w-full">
            <Link href="/newsroom" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6 border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Newsroom
            </Link>
            <div className="flex gap-2 flex-wrap mb-4">
              {post.keywords.split(',').slice(0, 3).map((kw: string) => (
                 <span key={kw} className="bg-[#b58b54] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                   {kw.trim()}
                 </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-white/80 font-serif italic">
               <time dateTime={post.created_at}>Published on {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <article>
          <div 
            className="prose prose-lg md:prose-xl prose-neutral max-w-none 
                      prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-neutral-900
                      prose-h1:text-4xl prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b prose-h1:border-neutral-200
                      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                      prose-p:text-neutral-600 prose-p:leading-relaxed prose-p:mb-6
                      prose-a:text-[#b58b54] hover:prose-a:text-[#d9b482] prose-a:transition-colors
                      prose-strong:text-neutral-900
                      prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:text-neutral-600
                      prose-li:mb-2
                      prose-img:rounded-2xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        
        <div className="mt-20 pt-10 border-t border-neutral-200 text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Enjoyed this article?</h2>
            <p className="text-neutral-600 mb-8 max-w-md mx-auto">Discover the taste of authentic Ceylon tea from our exclusive curated collections.</p>
            <Link href="/our-tea" className="inline-flex justify-center items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-500/20">
                Explore Our Teas
            </Link>
        </div>
      </div>
      
    </main>
  )
}
