import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { NewsPostDeleteButton } from './NewsPostDeleteButton'

export const dynamic = 'force-dynamic'

export default async function AdminNewsroomPage() {
  const supabase = createClient()
  
  const { data: posts } = await supabase
    .from('news_posts')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Newsroom Management</h1>
          <p className="text-neutral-500 mt-1">Manage articles, guides, and SEO posts.</p>
        </div>
        <Link href="/admin/newsroom/new" className="flex items-center justify-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors text-sm font-medium shadow-sm hover:shadow-md">
          <Plus className="h-4 w-4" />
          Add New Post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts && posts.length > 0 ? (
          posts.map((post: any) => (
            <div key={post.id} className="bg-white rounded-[1.5rem] border border-neutral-100 overflow-hidden shadow-sm group hover:shadow-md transition-shadow flex flex-col">
              <div className="relative aspect-video w-full bg-neutral-100">
                <Image 
                  src={post.image_url || '/placeholder.png'}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                    <NewsPostDeleteButton postId={post.id} />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-neutral-900 leading-tight text-lg mb-2">{post.title}</h3>
                <p className="text-xs text-neutral-500 mb-4">{new Date(post.created_at).toLocaleDateString()}</p>
                <div className="mt-auto flex gap-2 flex-wrap">
                  {post.keywords.split(',').map((kw: string) => (
                    <span key={kw} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-[10px] font-semibold tracking-wider uppercase">
                      {kw.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white rounded-2xl border border-neutral-100 p-12 text-center text-neutral-500">
            No posts found. Create one to get started.
          </div>
        )}
      </div>

    </div>
  )
}
