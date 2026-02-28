'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import StaggeredMenu from './StaggeredMenu'

const staggeredMenuItems = [
  { label: 'CEYLON TEA', ariaLabel: 'Go to Ceylon Tea', link: '/ceylon-tea' },
  { label: 'ABOUT US', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'EVENTS', ariaLabel: 'View events', link: '/events' },
  { label: 'OUR TEA', ariaLabel: 'View our tea', link: '/our-tea' },
  { label: 'BRANDING', ariaLabel: 'View branding', link: '/branding' },
  { label: 'CONTACT US', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Facebook', link: 'https://www.facebook.com/drrumie' },
  { label: 'Instagram', link: 'https://www.instagram.com/ceylontealand?utm_medium=copy_link' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Force floating style on contact and our-tea page
  const isFloating = isScrolled || pathname === '/contact' || pathname === '/our-tea'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed z-[9999] transition-all duration-500 left-1/2 -translate-x-1/2 ${isFloating
        ? 'top-2 w-[calc(100%-10px)] md:w-[98%] max-w-[1800px] bg-white shadow-2xl rounded-2xl py-3 px-[5px] md:px-6'
        : 'top-5 w-full bg-transparent px-[5px] md:px-6 py-5'
        }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo on the left - separate from navbar */}
        <Link href="/" className="flex items-center ml-0 md:ml-8">
          <Image
            src="/clogo.png"
            alt="Ceylon Tea Logo"
            width={120}
            height={60}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        <div className={`transition-all duration-500 relative group perspective-[500px] mr-0 md:mr-8 ${isFloating ? 'scale-90 md:scale-90' : 'scale-90 md:scale-100'}`}>
          <div className="absolute -inset-4 bg-[#f4f1ea]/20 rounded-xl z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
          <div className="absolute -inset-2 bg-[#f4f1ea]/40 rounded-xl z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105"></div>

          <div className="rounded-xl bg-gradient-to-br from-[#d9b482] via-[#c29c6b] to-[#a37e4c] flex items-center justify-center transition-all duration-500 relative overflow-hidden group border-4 border-white/20 active:shadow-inner px-4 md:px-5 py-1.5 md:py-2"
            style={{ boxShadow: 'rgba(217, 180, 130, 0.6) 0px 10px 30px -5px, rgba(255, 255, 255, 0.4) 0px 2px 5px inset, rgba(0, 0, 0, 0.2) 0px -2px 5px inset' }}>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-black/10 to-transparent rounded-br-xl pointer-events-none"></div>
            <div className="relative z-10 flex items-center justify-center">
              <StaggeredMenu
                position="right"
                items={staggeredMenuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={false}
                changeMenuColorOnOpen={true}
                colors={['#1a1a1a', '#2a2a2a']}
                logoUrl="/clogo.png"
                accentColor="#d9b482"
                className={`font-semibold transition-colors duration-200 text-lg tracking-wide ${isFloating
                  ? 'text-neutral-900'
                  : 'text-black'
                  }`}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
