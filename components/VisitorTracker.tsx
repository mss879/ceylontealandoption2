'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function generateVisitorId(): string {
  // Check if we already have a visitor ID in localStorage
  const existing = localStorage.getItem('ctl_visitor_id')
  if (existing) return existing

  // Generate a random unique ID
  const id = crypto.randomUUID ? crypto.randomUUID() : 
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })

  localStorage.setItem('ctl_visitor_id', id)
  return id
}

export function VisitorTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Don't track admin pages
    if (pathname?.startsWith('/admin')) return

    // Session-based dedup: only track each page once per session
    const sessionKey = `ctl_tracked_${pathname}`
    if (sessionStorage.getItem(sessionKey)) return

    try {
      const visitorId = generateVisitorId()

      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitor_id: visitorId,
          page_path: pathname || '/',
        }),
        // Use keepalive so the request completes even if the user navigates away
        keepalive: true,
      }).then(() => {
        sessionStorage.setItem(sessionKey, '1')
      }).catch(() => {
        // Silently fail — visitor tracking should never break the site
      })
    } catch {
      // localStorage might be unavailable (private browsing, etc.)
    }
  }, [pathname])

  return null
}
