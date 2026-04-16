'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteProduct(productId: string, imagePath: string) {
  const supabase = createClient()
  
  // Try to delete image from storage ONLY if it comes from the products bucket (i.e., starts with https://)
  // We don't want to delete the local /products/... files that we seeded.
  if (imagePath && imagePath.startsWith('http')) {
    const fileName = imagePath.split('/').pop()
    if (fileName) {
      await supabase.storage.from('products').remove([fileName])
    }
  }

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', productId)

  if (error) {
    console.error('Failed to delete product', error)
  }

  revalidatePath('/admin/products')
  revalidatePath('/our-tea')
}

export async function createProductAction(name: string, category: string, imageUrl: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from('products')
    .insert([{ name, category, image: imageUrl }])

  if (error) {
    console.error('Failed to create product', error)
    return { error: 'Failed to save product.' }
  }

  revalidatePath('/admin/products')
  revalidatePath('/our-tea')
  redirect('/admin/products')
}
