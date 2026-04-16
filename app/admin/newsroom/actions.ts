'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteNewsPost(id: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from('news_posts')
    .delete()
    .eq('id', id)

  if (error) {
    throw new Error('Failed to delete post: ' + error.message)
  }

  revalidatePath('/admin/newsroom')
  revalidatePath('/newsroom')
}

export async function createNewsPost(formData: FormData) {
  const supabase = createClient()
  
  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const content = formData.get('content') as string
  const imageUrl = formData.get('imageUrl') as string
  const keywords = formData.get('keywords') as string

  const { error } = await supabase
    .from('news_posts')
    .insert([{ title, slug, content, image_url: imageUrl, keywords }])

  if (error) {
    throw new Error('Failed to create post: ' + error.message)
  }

  revalidatePath('/admin/newsroom')
  revalidatePath('/newsroom')
  redirect('/admin/newsroom')
}
