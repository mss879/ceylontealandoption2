import { createClient } from '@/utils/supabase/server'
import { Clock, Users, Mail, ArrowUpRight, Eye, UserCheck } from 'lucide-react'

// Force dynamic fetch since dashboard should be live
export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const supabase = createClient()
  
  // Total page views (all rows)
  const { count: totalPageViews } = await supabase
    .from('page_visitors')
    .select('*', { count: 'exact', head: true })

  // Unique visitors (distinct visitor_id)
  const { data: uniqueData } = await supabase
    .from('page_visitors')
    .select('visitor_id')
    .not('visitor_id', 'is', null)
  
  const uniqueVisitors = uniqueData ? new Set(uniqueData.map(r => r.visitor_id)).size : 0

  // Today's visitors
  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)
  
  const { data: todayData } = await supabase
    .from('page_visitors')
    .select('visitor_id')
    .gte('visited_at', todayStart.toISOString())
    .not('visitor_id', 'is', null)
  
  const todayUniqueVisitors = todayData ? new Set(todayData.map(r => r.visitor_id)).size : 0
    
  const { data: recentInquiries } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  const { count: totalInquiries } = await supabase
    .from('inquiries')
    .select('*', { count: 'exact', head: true })

  // Current date formatting
  const now = new Date()
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = now.toLocaleDateString('en-US', dateOptions)
  const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Dashboard</h1>
          <p className="text-neutral-500 mt-1">Welcome back. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-neutral-100">
          <Clock className="h-5 w-5 text-emerald-600" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{formattedDate}</span>
            <span className="text-sm font-bold text-neutral-900 leading-none">{formattedTime}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Unique Visitors Card */}
        <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-neutral-100 flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">Unique Visitors</p>
              <h2 className="text-3xl font-bold text-neutral-900">{uniqueVisitors}</h2>
            </div>
          </div>
          <p className="text-xs text-neutral-400 mt-2">All time unique visitor count.</p>
        </div>

        {/* Today's Visitors Card */}
        <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-neutral-100 flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center">
              <UserCheck className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">Today&apos;s Visitors</p>
              <h2 className="text-3xl font-bold text-neutral-900">{todayUniqueVisitors}</h2>
            </div>
          </div>
          <p className="text-xs text-neutral-400 mt-2">Unique visitors today.</p>
        </div>

        {/* Total Page Views Card */}
        <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-neutral-100 flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center">
              <Eye className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">Total Page Views</p>
              <h2 className="text-3xl font-bold text-neutral-900">{totalPageViews || 0}</h2>
            </div>
          </div>
          <p className="text-xs text-neutral-400 mt-2">All page visits across the site.</p>
        </div>

        {/* Inquiries Card */}
        <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-neutral-100 flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center">
              <Mail className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">Total Inquiries</p>
              <h2 className="text-3xl font-bold text-neutral-900">{totalInquiries || 0}</h2>
            </div>
          </div>
          <p className="text-xs text-neutral-400 mt-2">From contact forms.</p>
        </div>
      </div>

      {/* Recent Inquiries Table */}
      <div className="bg-white rounded-[1.5rem] shadow-sm border border-neutral-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between">
          <h3 className="font-semibold text-neutral-900">Recent Inquiries</h3>
          <button className="text-sm font-medium text-emerald-600 flex items-center gap-1 hover:text-emerald-700 transition-colors">
            View All <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-50/50">
                <th className="px-6 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 text-sm">
              {recentInquiries && recentInquiries.length > 0 ? (
                recentInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-neutral-500">
                      {new Date(inquiry.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-medium text-neutral-900">{inquiry.name}</td>
                    <td className="px-6 py-4 text-emerald-600">{inquiry.email}</td>
                    <td className="px-6 py-4 text-neutral-500 truncate max-w-xs">{inquiry.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-neutral-400">
                    No recent inquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
