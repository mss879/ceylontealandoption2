'use client'

import React, { useState, useRef } from 'react'
import { createClient } from '@/utils/supabase/client'
import { createNewsPost } from '../actions'
import { Loader2, Bold, Italic, Heading1, Heading2, List, Image as ImageIcon, Link as LinkIcon, UploadCloud, X } from 'lucide-react'
import Image from 'next/image'

export default function NewsPostForm() {
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [preview, setPreview] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const supabase = createClient()

  const insertTag = (before: string, after: string) => {
    const ta = textareaRef.current
    if (!ta) return
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const selected = content.substring(start, end) || 'text'
    const newContent = content.substring(0, start) + before + selected + after + content.substring(end)
    setContent(newContent)
    setTimeout(() => {
      ta.focus()
      ta.selectionStart = start + before.length
      ta.selectionEnd = start + before.length + selected.length
    }, 0)
  }

  const handleFileChange = (selectedFile: File | null) => {
    if (!selectedFile) return
    setFile(selectedFile)
    const reader = new FileReader()
    reader.onloadend = () => setFilePreview(reader.result as string)
    reader.readAsDataURL(selectedFile)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    formData.append('content', content)

    if (!formData.get('title') || !formData.get('slug') || !content) {
      setError('Please fill out all required fields.')
      setIsSubmitting(false)
      return
    }

    if (!file) {
      setError('Please upload a cover image.')
      setIsSubmitting(false)
      return
    }

    try {
      // Upload image to Supabase storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('newsroom')
        .upload(fileName, file)

      if (uploadError) {
        throw new Error('Image upload failed: ' + uploadError.message)
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('newsroom')
        .getPublicUrl(fileName)

      formData.append('imageUrl', publicUrl)

      await createNewsPost(formData)
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'An unexpected error occurred.')
      setIsSubmitting(false)
    }
  }

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
  }

  const toolbarButtons = [
    { icon: Heading1, action: () => insertTag('<h1>', '</h1>'), label: 'H1' },
    { icon: Heading2, action: () => insertTag('<h2>', '</h2>'), label: 'H2' },
    { icon: Bold, action: () => insertTag('<strong>', '</strong>'), label: 'Bold' },
    { icon: Italic, action: () => insertTag('<em>', '</em>'), label: 'Italic' },
    { icon: List, action: () => insertTag('<ul>\n  <li>', '</li>\n</ul>'), label: 'List' },
    { icon: ImageIcon, action: () => insertTag('<img src="', '" alt="image" />'), label: 'Image' },
    { icon: LinkIcon, action: () => insertTag('<a href="', '">Link text</a>'), label: 'Link' },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium flex items-center justify-between">
          {error}
          <button type="button" onClick={() => setError(null)} className="text-red-400 hover:text-red-600"><X className="w-4 h-4" /></button>
        </div>
      )}

      <div className="space-y-4">
        
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-1">Title</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#b58b54]/50 focus:border-[#b58b54] transition-all"
            placeholder="e.g. The Benefits of Ceylon Green Tea"
            onChange={(e) => {
              const slugInput = document.getElementById('slug') as HTMLInputElement
              if (slugInput && !slugInput.value) {
                slugInput.value = generateSlug(e.target.value)
              }
            }}
          />
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-neutral-700 mb-1">Slug (URL)</label>
          <input 
            type="text" 
            id="slug" 
            name="slug" 
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#b58b54]/50 focus:border-[#b58b54] transition-all font-mono text-sm"
            placeholder="e.g. benefits-ceylon-green-tea"
          />
        </div>

        {/* Keywords */}
        <div>
          <label htmlFor="keywords" className="block text-sm font-medium text-neutral-700 mb-1">SEO Keywords (comma separated)</label>
          <input 
            type="text" 
            id="keywords" 
            name="keywords" 
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#b58b54]/50 focus:border-[#b58b54] transition-all"
            placeholder="Ceylon Tea, Green Tea, Health Benefits"
          />
        </div>

        {/* Cover Image Upload */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Cover Image</label>
          <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center hover:bg-neutral-50 transition-colors relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {filePreview ? (
              <div className="space-y-3">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mx-auto">
                  <Image src={filePreview} alt="Preview" fill className="object-cover" />
                </div>
                <p className="text-sm font-semibold text-neutral-900">{file?.name}</p>
                <button 
                  type="button" 
                  onClick={(e) => { e.stopPropagation(); setFile(null); setFilePreview(null); }} 
                  className="text-xs text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <>
                <UploadCloud className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
                <p className="text-sm font-medium text-[#b58b54]">Click to upload or drag and drop</p>
                <p className="text-xs text-neutral-500 mt-1">PNG, JPG or WEBP (Max. 5MB)</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-neutral-700">Content (HTML)</label>
          <button 
            type="button" 
            onClick={() => setPreview(!preview)} 
            className="text-xs font-semibold text-[#b58b54] hover:underline"
          >
            {preview ? 'Edit' : 'Preview'}
          </button>
        </div>
        
        {/* Toolbar */}
        {!preview && (
          <div className="flex items-center gap-1 bg-neutral-50 border border-neutral-200 border-b-0 rounded-t-lg p-2">
            {toolbarButtons.map((btn) => {
              const Icon = btn.icon
              return (
                <button
                  key={btn.label}
                  type="button"
                  onClick={btn.action}
                  title={btn.label}
                  className="p-2 rounded hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              )
            })}
          </div>
        )}

        {preview ? (
          <div 
            className="prose prose-lg max-w-none border border-neutral-200 rounded-lg p-6 min-h-[300px] bg-white"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 rounded-b-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#b58b54]/50 focus:border-[#b58b54] transition-all font-mono text-sm min-h-[350px] resize-y"
            placeholder="<h1>Your article title</h1>&#10;<p>Start writing your content here...</p>"
          />
        )}
      </div>

      <div className="pt-4 border-t border-neutral-100 flex justify-end">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-neutral-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors shadow-sm hover:shadow active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none flex items-center justify-center min-w-[140px]"
        >
          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Publish Post'}
        </button>
      </div>
    </form>
  )
}
