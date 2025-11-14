'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const menuItems = [
  { name: 'CEYLON TEA', href: '#ceylon-tea' },
  { name: 'ABOUT US', href: '#about' },
  { name: 'EVENTS', href: '#events' },
  { name: 'OUR TEA', href: '#our-tea' },
  { name: 'BRANDING', href: '#branding' },
  { name: 'CONTACT US', href: '#contact' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="w-full flex items-center justify-between">
        {/* Logo on the left - separate from navbar */}
        <Link href="/" className="flex items-center ml-8">
          <Image
            src="/clogo.png"
            alt="Ceylon Tea Logo"
            width={120}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

  {/* Glassmorphism navbar container on the right */}
  <div className="bg-black/75 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_18px_56px_rgba(0,0,0,0.55)] px-7 py-5">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white font-semibold hover:text-white transition-colors duration-200 text-sm tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/15">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white font-semibold hover:text-white transition-colors duration-200 text-base tracking-wide"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
