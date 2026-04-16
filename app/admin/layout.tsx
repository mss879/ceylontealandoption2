'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Calendar, LogOut, Coffee, FileText } from 'lucide-react'
import { signOut } from './actions'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Do not show sidebar on the login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Inquiries', href: '/admin/inquiries', icon: Coffee },
    { name: 'Our Tea', href: '/admin/products', icon: Coffee },
    { name: 'Events', href: '/admin/events', icon: Calendar },
    { name: 'Newsroom', href: '/admin/newsroom', icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-neutral-200 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-neutral-100 flex-shrink-0">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-emerald-700" />
            <span className="font-bold tracking-tight text-neutral-900">Tea Land Admin</span>
          </Link>
        </div>
        
        <div className="p-4 flex-1">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'}
                  `}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="p-4 border-t border-neutral-100">
          <form action={signOut}>
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors w-full">
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="h-16 md:hidden bg-white border-b border-neutral-200 flex items-center px-4 justify-between flex-shrink-0">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <Coffee className="h-5 w-5 text-emerald-700" />
            <span className="font-bold tracking-tight">Admin</span>
          </Link>
          <div className="flex items-center gap-4">
             <Link href="/admin/dashboard" className="text-sm font-medium text-neutral-600">Dashboard</Link>
             <Link href="/admin/events" className="text-sm font-medium text-neutral-600">Events</Link>
             <form action={signOut}>
                <button className="text-sm font-medium text-red-600">Logout</button>
             </form>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
