'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitInquiry(formData: FormData) {
  const supabase = createClient()
  
  const rawName = formData.get('name') as string
  const rawEmail = formData.get('email') as string
  const interest = formData.get('interest') as string
  const rawMessage = formData.get('message') as string

  // Simple validation
  if (!rawName || !rawEmail || !rawMessage) {
    return { error: 'Please fill in all required fields.' }
  }

  const combinedMessage = `Interest: ${interest}\n\n${rawMessage}`

  const { error } = await supabase
    .from('inquiries')
    .insert([{
      name: rawName,
      email: rawEmail,
      message: combinedMessage
    }])

  if (error) {
    console.error('Insert Error:', error)
    return { error: 'Failed to submit the inquiry. Please try again later.' }
  }

  // Clear relevant cache paths
  revalidatePath('/admin/dashboard')
  revalidatePath('/admin/inquiries')

  return { success: true }
}
