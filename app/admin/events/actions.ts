'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteEvent(eventId: string, imagePath: string) {
  const supabase = createClient()
  
  // Attempt to delete image from storage if it exists
  if (imagePath && !imagePath.startsWith('/')) { // Only try to delete if it's not a local dummy image
    const fileName = imagePath.split('/').pop()
    if (fileName) {
      await supabase.storage.from('events').remove([fileName])
    }
  }

  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', eventId)

  if (error) {
    console.error('Failed to delete event', error)
  }

  revalidatePath('/admin/events')
  revalidatePath('/events')
}

export async function createEventAction(title: string, year: number, imageUrl: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from('events')
    .insert([{ title, year, image: imageUrl }])

  if (error) {
    console.error('Failed to create event', error)
    return { error: 'Failed to save event.' }
  }

  revalidatePath('/admin/events')
  revalidatePath('/events')
  redirect('/admin/events')
}
