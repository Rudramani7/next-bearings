'use client'
import { CartProvider } from './CartContext'
import Header from './Header'
import Footer from './Footer'

export default function ClientProviders({ children }) {
  return (
    <CartProvider>
      <Header />
      {children}
      <Footer />
    </CartProvider>
  )
}
