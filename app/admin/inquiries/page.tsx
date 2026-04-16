import { createClient } from '@/utils/supabase/server'
import { Mail, Clock, ArrowUpRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function InquiriesPage() {
  const supabase = createClient()
  
  const { data: inquiries } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Inquiries</h1>
          <p className="text-neutral-500 mt-1">Review and manage contact submissions.</p>
        </div>
      </div>

      <div className="bg-white rounded-[1.5rem] shadow-sm border border-neutral-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
          <h3 className="font-semibold text-neutral-900">All Submissions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-100 bg-white">
                <th className="px-6 py-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Date received</th>
                <th className="px-6 py-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Contact Info</th>
                <th className="px-6 py-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Message Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 text-sm bg-white">
              {inquiries && inquiries.length > 0 ? (
                inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-5 whitespace-nowrap text-neutral-500 align-top">
                      <div className="flex flex-col">
                        <span className="font-medium text-neutral-900">{new Date(inquiry.created_at).toLocaleDateString()}</span>
                        <span className="text-xs text-neutral-400 mt-1">{new Date(inquiry.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                        {inquiry.source === 'ai_agent' && (
                          <span className="inline-flex items-center px-2 py-0.5 mt-2 rounded text-[10px] font-medium bg-indigo-100 text-indigo-800 w-max">
                            AI Agent
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5 align-top">
                      <div className="space-y-1">
                        <div className="font-medium text-neutral-900">{inquiry.name}</div>
                        <div><a href={`mailto:${inquiry.email}`} className="text-emerald-700 hover:underline">{inquiry.email}</a></div>
                        {inquiry.phone && <div className="text-neutral-500 text-xs">Ph: {inquiry.phone}</div>}
                        {inquiry.company && <div className="text-neutral-500 text-xs">Org: {inquiry.company}</div>}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-neutral-600 align-top max-w-md">
                      <div className="whitespace-pre-wrap leading-relaxed">{inquiry.message}</div>
                      {inquiry.notes && (
                        <div className="mt-3 p-3 bg-neutral-50 border border-neutral-100 rounded-lg text-xs leading-relaxed">
                          <strong className="text-neutral-900 font-semibold mb-1 block">AI Agent Notes:</strong>
                          {inquiry.notes}
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center text-neutral-400">
                    <Mail className="w-8 h-8 mx-auto mb-3 text-neutral-300" />
                    No inquiries have been received yet.
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
