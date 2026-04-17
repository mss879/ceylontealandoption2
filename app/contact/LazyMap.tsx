'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyMapProps {
  src: string
  title: string
  className?: string
}

export function LazyMap({ src, title, className = '' }: LazyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible ? (
        <iframe
          src={src}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className={className}
        ></iframe>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-neutral-200 text-neutral-400">
          <span className="text-sm uppercase tracking-widest">Loading map…</span>
        </div>
      )}
    </div>
  )
}
