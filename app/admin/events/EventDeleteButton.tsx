'use client'

import { Trash2 } from 'lucide-react'
import { deleteEvent } from './actions'
import { useState } from 'react'

export function EventDeleteButton({ eventId, imagePath }: { eventId: string, imagePath: string }) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this event? This cannot be undone.")) {
      setIsDeleting(true)
      await deleteEvent(eventId, imagePath)
      setIsDeleting(false)
    }
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={isDeleting}
      className="bg-white/90 text-red-600 p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50"
      title="Delete event"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  )
}
