'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cart')
      if (stored) setCart(JSON.parse(stored))
    } catch (e) {}
  }, [])

  useEffect(() => {
    try { localStorage.setItem('cart', JSON.stringify(cart)) } catch (e) {}
  }, [cart])

  function addToCart(product, qty = 1) {
    setCart(prev => {
      const found = prev.find(x => x.id === product.id)
      if (found) return prev.map(x => x.id === product.id ? { ...x, qty: x.qty + qty } : x)
      return [...prev, { ...product, qty }]
    })
  }

  function updateQty(id, qty) {
    setCart(prev => prev.map(x => x.id === id ? { ...x, qty: Math.max(1, qty) } : x))
  }

  function remove(id) {
    setCart(prev => prev.filter(x => x.id !== id))
  }

  const totalItems = cart.reduce((a,b)=>a + (b.qty||0),0)

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, remove, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
