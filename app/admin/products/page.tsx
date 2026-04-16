import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Leaf } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductDeleteButton } from './ProductDeleteButton'

export const dynamic = 'force-dynamic'

export default async function AdminProductsPage() {
  const supabase = createClient()
  
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  const teaCategories = {
    black: products?.filter(p => p.category === 'black') || [],
    flavoured: products?.filter(p => p.category === 'flavoured') || [],
    green: products?.filter(p => p.category === 'green') || []
  }

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 min-h-screen">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Our Tea Management</h1>
          <p className="text-neutral-500 mt-1">Add, manage, and delete tea products displayed on the public site.</p>
        </div>
        <Link href="/admin/products/new" className="flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors text-sm font-medium shadow-sm hover:shadow-md">
          <Plus className="h-4 w-4" />
          Add New Tea
        </Link>
      </div>

      <div className="w-full relative">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-4 no-scrollbar">
            <TabsList className="bg-white p-1.5 rounded-full border border-neutral-200 shadow-sm w-max max-w-none gap-1">
              <TabsTrigger
                value="all"
                className="rounded-full px-6 py-2.5 text-xs font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white transition-all whitespace-nowrap"
              >
                All Teas
              </TabsTrigger>
              <TabsTrigger
                value="black"
                className="rounded-full px-6 py-2.5 text-xs font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white transition-all whitespace-nowrap"
              >
                Black Tea
              </TabsTrigger>
              <TabsTrigger
                value="flavoured"
                className="rounded-full px-6 py-2.5 text-xs font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white transition-all whitespace-nowrap"
              >
                Flavoured Tea
              </TabsTrigger>
              <TabsTrigger
                value="green"
                className="rounded-full px-6 py-2.5 text-xs font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white transition-all whitespace-nowrap"
              >
                Green Tea
              </TabsTrigger>
            </TabsList>
          </div>

          {['all', 'black', 'flavoured', 'green'].map((categoryKey) => {
            const teasToDisplay = categoryKey === 'all'
              ? products || []
              : teaCategories[categoryKey as keyof typeof teaCategories] || [];

            return (
              <TabsContent key={categoryKey} value={categoryKey} className="mt-0">
                {teasToDisplay.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {teasToDisplay.map((tea) => (
                      <div
                        key={tea.id}
                        className="group relative bg-white rounded-[2rem] p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d9b482] overflow-hidden"
                      >
                        <div className="aspect-square relative mb-6 rounded-2xl overflow-hidden flex items-center justify-center bg-[#faf9f6]">
                          <div className="absolute inset-0 flex items-center justify-center text-neutral-200">
                            <Leaf className="w-12 h-12 opacity-30" />
                          </div>
                          <Image
                            src={tea.image}
                            alt={tea.name}
                            fill
                            className="object-contain p-4 group-hover:scale-[1.1] transition-transform duration-500 ease-out relative z-10"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                            <ProductDeleteButton productId={tea.id} imagePath={tea.image} />
                          </div>
                        </div>

                        <div className="text-center relative z-20">
                          <h3 className="font-serif italic text-neutral-900 text-xl font-medium">
                            {tea.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl border border-neutral-100 p-16 text-center text-neutral-400">
                     <Leaf className="w-8 h-8 mx-auto mb-4 opacity-50" />
                     <p className="text-neutral-500">No {categoryKey === 'all' ? '' : categoryKey} teas found.</p>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

    </div>
  )
}
