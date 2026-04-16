'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { createEventAction } from '../actions'
import { ArrowLeft, UploadCloud } from 'lucide-react'
import Link from 'next/link'

export default function NewEventPage() {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const router = useRouter()
  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsUploading(true)
    setError(null)
    
    try {
      let imageUrl = ''

      if (!file) {
        throw new Error('Please select an image for the event.')
      }

      // Handle Image Upload
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('events')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('events')
        .getPublicUrl(filePath)

      imageUrl = publicUrl
      
      // Save Event to Database via Server Action
      const result = await createEventAction(title, year, imageUrl)
      
      if (result?.error) {
        throw new Error(result.error)
      }
      
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'An unexpected error occurred during creation.')
      setIsUploading(false)
    }
  }

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <Link href="/admin/events" className="inline-flex items-center gap-2 text-neutral-500 hover:text-emerald-700 transition-colors bg-white px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to events
      </Link>
      
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Add New Event</h1>
        <p className="text-neutral-500 mt-1">Upload a photo and details for a new exhibition.</p>
      </div>

      <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-neutral-100">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {error && (
             <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium">
               {error}
             </div>
          )}

          <div className="space-y-6">
            <div className="group">
              <label className="text-sm font-semibold tracking-wide text-neutral-900 mb-2 block">Event Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. GULFOOD DUBAI U.A.E"
                className="w-full border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-colors bg-neutral-50"
              />
            </div>

            <div className="group">
              <label className="text-sm font-semibold tracking-wide text-neutral-900 mb-2 block">Event Year</label>
              <input
                type="number"
                required
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-colors bg-neutral-50"
              />
            </div>

            <div className="group">
              <label className="text-sm font-semibold tracking-wide text-neutral-900 mb-2 block">Event Image</label>
              <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center hover:bg-neutral-50 transition-colors relative">
                 <input
                   type="file"
                   accept="image/*"
                   required
                   onChange={(e) => setFile(e.target.files?.[0] || null)}
                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                 />
                 <UploadCloud className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
                 <p className="text-sm font-medium text-emerald-700">Click to upload or drag and drop</p>
                 <p className="text-xs text-neutral-500 mt-1">SVG, PNG, JPG or WEBP (Max. 5MB)</p>
                 {file && (
                   <p className="text-sm text-neutral-900 mt-4 font-semibold bg-white p-2 rounded border border-neutral-200 shadow-sm inline-block">{file.name}</p>
                 )}
              </div>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isUploading}
            className="bg-neutral-900 text-white w-full rounded-xl py-4 font-bold tracking-wide hover:bg-neutral-800 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
            {isUploading ? 'Uploading & Saving...' : 'Create Event'}
          </button>
        </form>
      </div>
    </div>
  )
}
