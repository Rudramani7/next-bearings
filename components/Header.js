import Link from 'next/link'
import Image from 'next/image'
import { useCart } from './CartContext'
import MiniCart from './MiniCart'
import { User, ShoppingCart, ClipboardClock, Phone, Menu, X, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { navItems } from "../lib/navItems";

export default function Header() {
  const { totalItems } = useCart()
  const [open, setOpen] = useState(false)
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null)
  const router = useRouter()

  const topbarRef = useRef(null)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedMenuIndex, setExpandedMenuIndex] = useState(null)

  useEffect(() => {
    function updateOffset() {
      const h = topbarRef.current?.offsetHeight ?? 0
      document.documentElement.style.setProperty('--topbar-height', `${h}px`)
    }

    updateOffset()
    window.addEventListener('resize', updateOffset)
    return () => window.removeEventListener('resize', updateOffset)
  }, [])

  const promoItems = [
    { src: '/assets/free-delivery.webp', alt: 'Free Delivery', title: 'Free Delivery', subtitle: 'Over $500.00' },
    { src: '/assets/UK-delivery.webp', alt: '1-3 Day Shipping', title: '1-3 Day DHL & UPS', subtitle: 'Delivery' },
    { src: '/assets/Queens_Award.webp', alt: "Queen's Award", title: "Queen's Award For", subtitle: 'Enterprise Winners' },
    { src: '/assets/iso.webp', alt: 'ISO Certified', title: 'ISO 9001 : 2015', subtitle: 'Cert. No.291342018' },
    { src: '/assets/feefo.png', alt: 'Feefo', imgOnly: true },
  ]

  function handleMobileNavClick(child) {
    setMobileMenuOpen(false)
    router.push(`/products?category=${encodeURIComponent(child)}`)
  }

  return (
    <>

      {/* header 1 */}
      <div
        ref={topbarRef}
        className="topbar bg-[rgb(28,37,65)] sticky top-0 z-50"
      >
        {/* mobile */}
        <div className="sm:hidden w-full px-4 py-2 flex items-center justify-center">
          <div className="flex items-center gap-2 text-white text-sm font-bold">
            <User className="w-4 h-4 text-white stroke-[2]" />
            <span>Contact Us</span>
          </div>
        </div>

        <div className="container mx-auto px-4 py-2 flex items-center justify-end gap-8 hidden sm:flex">
          <div className="text-white text-sm font-bold">About Us</div>

          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-bold">Select currency:</span>
            <select className="bg-transparent text-white px-1.5 py-1 rounded font-bold focus:outline-none">
              <option>CAD</option>
            </select>
          </div>

          <div className="flex items-center gap-1 text-white text-sm font-bold">
            <User className="w-4 h-4 text-white stroke-[2]" />
            <span>Contact Us</span>
          </div>

          <div className="flex items-center gap-1 text-white text-sm font-bold">
            <Phone className="w-4 h-4 text-white stroke-[2]" />
            <span>CAN: 438 800 2658</span>
          </div>
        </div>
      </div>

      {/* header 2 */}
      <header
        className="bg-white shadow h-[140px] flex items-center sticky"
        style={{
          top: 'var(--topbar-height, 0px)',
          zIndex: 40,
        }}
      >
        <div className="container mx-auto p-4 flex items-center justify-between w-full">

          {/* mobile */}
          <div className="w-full flex items-center justify-between sm:hidden">
            <button
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>

            <Link href="/" className="flex items-center">
              <Image src="/assets/logo.webp" alt="Company Logo" width={180} height={60} className="object-contain" />
            </Link>

            <div className="flex items-center">
              <button
                onClick={() => setOpen(true)}
                aria-label="Open cart"
                className="relative p-2"
              >
                <ShoppingCart className="w-6 h-6 text-gray-800" />
                <span className="absolute -top-0 -right-0 bg-[rgb(28,37,65)] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems || 0}
                </span>
              </button>
            </div>
          </div>

          <div className="hidden sm:flex items-center justify-between w-full">
            <Link href="/" className="flex items-center">
              <Image src="/assets/logo.webp" alt="Company Logo" width={350} height={100} className="object-contain" />
            </Link>

            <div className="flex-1 flex justify-center">
              <div className="flex items-center border border-black h-[44px] overflow-hidden rounded-l">
                <input placeholder="Search by reference" className="px-4 w-[500px] text-lg placeholder-black outline-none h-full" />
                <div
                  className="w-[55px] h-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0)',
                    backgroundImage: 'linear-gradient(90deg, rgb(26,35,72), rgba(26,35,72,0.7))',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <User className="w-[40px] h-[40px] text-gray-700 stroke-[2]" />
                <div className="flex flex-col leading-tight">
                  <Link href="/signin" className="text-sm">Sign In</Link>
                  <Link href="/register" className="text-sm">Register</Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ClipboardClock className="w-[40px] h-[40px] text-gray-700 stroke-[2]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm">Recently</span>
                  <span className="text-sm">Viewed</span>
                </div>
              </div>

              <button onClick={() => setOpen(true)} className="flex items-center gap-3 relative">
                <ShoppingCart className="w-[40px] h-[40px] text-gray-700 stroke-[2]" />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-sm mt-6">Cart</span>
                </div>

                <span className="absolute -top-0 -right-0 bg-[rgb(28,37,65)] text-white text-xs font-bold rounded-full w-8 h-5 flex items-center justify-center">
                  {totalItems || 0}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* header 3 */}
      <nav className="hidden sm:block bg-[rgb(28,37,65)] font-oswald text-base font-bold border-b-4 border-[rgb(202,150,24)]">
        <div className="container mx-auto px-2 relative">
          <ul className="flex justify-between whitespace-nowrap">
            {navItems.map((nav, idx) => (
              <li
                key={idx}
                className="group flex-1"
                onMouseEnter={() => setOpenDropdownIndex(idx)}
                onMouseLeave={() => setOpenDropdownIndex(null)}
              >
                <button
                  type="button"
                  aria-expanded={openDropdownIndex === idx}
                  className="block text-white py-4 px-3 xl:px-[8px] transition-colors font-bold text-base whitespace-nowrap w-full
                       hover:bg-[#085E96]
                       group-hover:bg-[rgb(202,150,24)] group-hover:text-white"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{nav.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>


                <div className={`absolute inset-x-0 top-full z-50 ${openDropdownIndex === idx ? 'block' : 'hidden'}`}>
                  <div className="w-full bg-white shadow-lg py-6">
                    <div className="container mx-auto px-2">
                      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-min">
                        {nav.parents.map((parent, pIndex) => (
                          <div key={pIndex} className="px-3">
                            <div className="text-[16px] font-bold font-['Roboto_Slab'] text-[rgb(28,37,65)] mb-2">
                              {parent.title}
                            </div>
                            <ul className="space-y-1 text-sm">
                              {parent.children.map((child, cIndex) => (
                                <li
                                  key={cIndex}
                                  className="py-1 rounded transition-colors cursor-pointer text-[14px] font-normal font-['Roboto_Slab'] text-[rgb(60,70,90)] hover:text-[#3b82f6]"
                                >
                                  <a
                                    href={`/products?category=${encodeURIComponent(child)}`}
                                    className="block w-full"
                                    onClick={(e) => {
                                      e.preventDefault()
                                      setOpenDropdownIndex(null)
                                      router.push(`/products?category=${encodeURIComponent(child)}`)
                                    }}
                                  >
                                    {child}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* header 4 */}
      <div className="hidden sm:block bg-white border-t shadow-md shadow-gray-300 backdrop-blur-sm">
        <div className="container mx-auto px-20 py-3 flex items-center gap-6">
          {promoItems.map((item, i) => (
            <div key={i} className="flex-1 flex items-center gap-3">
              {item.imgOnly ? (
                <div className="flex justify-center w-full">
                  <Image src={item.src} alt={item.alt || ''} width={150} height={38} className="object-contain" />
                </div>
              ) : (
                <>
                  <div className="flex-shrink-0">
                    <Image src={item.src} alt={item.alt || ''} width={36} height={36} className="w-9 h-9 object-contain" />
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-bold text-[rgb(0,0,0)] font-['Roboto_Slab']">{item.title}</div>
                    <div className="text-sm font-bold text-[rgb(0,0,0)] font-['Roboto_Slab']">{item.subtitle}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile  */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-60">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute inset-0 overflow-auto">
            <div className="min-h-full flex flex-col">
              <div className="flex items-center justify-between p-4" style={{ backgroundColor: 'rgb(28,37,65)', borderBottom: '4px solid rgb(202,150,24)' }}>
                <div className="flex items-center gap-3">
                  <Image src="/assets/logo.webp" alt="Logo" width={120} height={36} className="object-contain" />
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 bg-[rgb(28,37,65)] p-4">
                <div className="max-w-3xl mx-auto text-white">
                  <div className="mb-4 text-sm opacity-90">Explore categories</div>

                  <div className="space-y-3">
                    {navItems.map((nav, idx) => (
                      <div key={idx} className="bg-white/6 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedMenuIndex(prev => prev === idx ? null : idx)}
                          className="w-full flex items-center justify-between px-4 py-4 text-left text-white"
                        >
                          <span className="text-lg font-semibold">{nav.title}</span>
                          <ChevronDown className={`w-5 h-5 text-white transition-transform ${expandedMenuIndex === idx ? 'rotate-180' : 'rotate-0'}`} />
                        </button>

                        <div className={`px-4 transition-max-height duration-300 ease-in-out overflow-hidden ${expandedMenuIndex === idx ? 'max-h-[1000px] pb-4' : 'max-h-0'}`}>
                          {nav.parents.map((parent, pIdx) => (
                            <div key={pIdx} className="pt-2 pb-3 border-t border-white/10">
                              <div className="text-sm font-medium text-white/90 mb-2">{parent.title}</div>
                              <div className="grid grid-cols-2 gap-3">
                                {parent.children.map((child, cIdx) => (
                                  <button
                                    key={cIdx}
                                    onClick={() => handleMobileNavClick(child)}
                                    className="text-left py-2 px-3 rounded-md bg-white/6 hover:bg-white/10 text-white"
                                  >
                                    {child}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <MiniCart open={open} onClose={() => setOpen(false)} />
    </>
  )
}
