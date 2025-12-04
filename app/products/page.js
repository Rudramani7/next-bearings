import { ChevronDown } from 'lucide-react'
import { navItems } from '../../lib/navItems'
import ProductsGrid from '../../components/ProductsGrid'
import ProductsControls from '../../components/ProductsControls'

export const dynamic = 'force-dynamic'

export default async function ProductsPage({ searchParams }) {
  const category = searchParams?.category ?? null

  const res = await fetch('https://dummyjson.com/products?limit=100', { cache: 'no-store' })
  const data = await res.json()
  const products = data.products || []

  let breadcrumb = null
  if (category) {
    outer: for (const gp of navItems) {
      for (const p of gp.parents) {
        if (Array.isArray(p.children) && p.children.includes(category)) {
          breadcrumb = { gp: gp.title, p: p.title, child: category }
          break outer
        }
      }
    }
  }

  return (
    <main className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <div>
          {breadcrumb ? (
            <div className="text-sm mb-2">
              <span className="font-bold text-black">{breadcrumb.gp}</span>
              <span className="mx-1 text-gray-500">&gt;</span>

              <span className="font-bold text-black">{breadcrumb.p}</span>
              <span className="mx-1 text-gray-500">&gt;</span>

              <span className="text-gray-700">{breadcrumb.child}</span>
            </div>
          ) : category ? (
            <div className="text-sm mb-2 text-gray-700">{category}</div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-[240px] flex-shrink-0 flex flex-col items-start gap-4">
          <div
            className="w-full md:w-[240px] h-24 md:h-[96px] rounded shadow flex items-center justify-center text-center p-4 cursor-pointer transition-colors"
            style={{ backgroundColor: 'rgb(202,150,24)' }}
          >
            <span className="text-white font-semibold font-['Roboto_Slab'] hover:text-black text-[16px] leading-[24px]">
              Can't Find The Product You Are Looking For?
            </span>
          </div>

          <div className="w-full md:w-[240px] bg-white border border-gray-200 rounded shadow p-3 flex flex-col gap-4">
            <div className="flex items-center justify-between w-full cursor-pointer">
              <span className="text-[16px] font-['Roboto_Slab'] text-gray-500 leading-[24px]">
                BRAND
              </span>

              <ChevronDown className="w-5 h-5 text-gray-700" />
            </div>
            <button
              type="button"
              className="w-full h-9 rounded font-['Roboto_Slab'] text-[14px] text-white font-semibold"
              style={{ backgroundColor: 'rgb(202,150,24)' }}
            >
              RESET FILTER
            </button>
          </div>
        </aside>
        
        {/* PLP */}
        <section className="flex-1">
          <ProductsControls initialColumns={4} />
          <ProductsGrid products={products} />
        </section>

      </div>
    </main>
  )
}
