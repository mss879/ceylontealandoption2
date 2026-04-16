'use client'

import { Trash2 } from 'lucide-react'
import { useState, useTransition } from 'react'
import { deleteNewsPost } from './actions'

export function NewsPostDeleteButton({ postId }: { postId: string }) {
  const [isPending, startTransition] = useTransition()
  
  return (
    <button
      onClick={() => {
        if (confirm('Are you sure you want to delete this post?')) {
          startTransition(() => {
            deleteNewsPost(postId)
          })
        }
      }}
      disabled={isPending}
      className="p-2 bg-red-600 outline-none hover:bg-red-700 text-white rounded-lg transition-colors shadow-lg disabled:opacity-50"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  )
}
