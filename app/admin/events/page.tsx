import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Edit2 } from 'lucide-react'
import { EventDeleteButton } from './EventDeleteButton'

export const dynamic = 'force-dynamic'

export default async function AdminEventsPage() {
  const supabase = createClient()
  
  // Fetch events grouped by year
  const { data: events } = await supabase
    .from('events')
    .select('*')
    .order('year', { ascending: false })
    .order('created_at', { ascending: false })

  // Group events by year for display
  const groupedEvents = events?.reduce((acc: any, event) => {
    if (!acc[event.year]) {
      acc[event.year] = []
    }
    acc[event.year].push(event)
    return acc
  }, {})

  const years = groupedEvents ? Object.keys(groupedEvents).sort((a, b) => Number(b) - Number(a)) : []

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Events Management</h1>
          <p className="text-neutral-500 mt-1">Manage exhibitions and special events grouped by year.</p>
        </div>
        <Link href="/admin/events/new" className="flex items-center justify-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors text-sm font-medium shadow-sm hover:shadow-md">
          <Plus className="h-4 w-4" />
          Add New Event
        </Link>
      </div>

      {years.length > 0 ? (
        years.map(year => (
          <div key={year} className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-neutral-900">{year}</h2>
              <div className="h-[1px] flex-1 bg-neutral-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {groupedEvents[year].map((event: any) => (
                <div key={event.id} className="bg-white rounded-[1.5rem] border border-neutral-100 overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/3] w-full bg-neutral-100">
                    <Image 
                      src={event.image || '/placeholder-event.png'}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-2">
                       <EventDeleteButton eventId={event.id} imagePath={event.image} />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900 leading-tight text-sm mb-1">{event.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="bg-white rounded-2xl border border-neutral-100 p-12 text-center text-neutral-500">
          No events found in the database.
        </div>
      )}

    </div>
  )
}
