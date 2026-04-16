import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Use service-level client to bypass RLS for inserts
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { visitor_id, page_path } = body

    if (!visitor_id) {
      return NextResponse.json({ error: 'Missing visitor_id' }, { status: 400 })
    }

    // Get IP from headers (works with Vercel/Netlify)
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown'
    const user_agent = request.headers.get('user-agent') || 'unknown'

    // Insert the page visit
    const { error } = await supabase
      .from('page_visitors')
      .insert({
        visitor_id,
        page_path: page_path || '/',
        ip_address: ip,
        user_agent: user_agent.substring(0, 500), // Truncate to avoid overly long UA strings
      })

    if (error) {
      console.error('Visitor tracking error:', error)
      return NextResponse.json({ error: 'Failed to track' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
