import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NewsPostForm from './NewsPostForm'

export default function NewPostPage() {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto animate-in fade-in duration-500">
      
      <div className="mb-8">
        <Link href="/admin/newsroom" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-4 border border-neutral-200 px-3 py-1.5 rounded-full bg-white shadow-sm hover:shadow">
          <ArrowLeft className="w-4 h-4" />
          Back to Newsroom
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Create New Post</h1>
        <p className="text-neutral-500 mt-1">Publish an SEO-optimized news article to your site.</p>
      </div>

      <div className="bg-white rounded-[2rem] border border-neutral-100 p-6 md:p-10 shadow-sm">
        <NewsPostForm />
      </div>
      
    </div>
  )
}
