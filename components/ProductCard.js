"use client";

import Link from 'next/link'
import { useCart } from './CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const img = product.thumbnail || product.images?.[0] || product.image

  return (
    <div
      className="
        border border-gray-300
        rounded-sm
        shadow-md shadow-gray-400/40
        backdrop-blur-sm
        pb-4
        flex flex-col items-center text-center
        transition-transform
        hover:scale-[1.02]
        font-['Roboto_Slab']
        w-full
        max-w-[320px]
      "
    >
      <Link href={`/product/${product.id}`} className="w-full">
        <div className="h-36 sm:h-40 md:h-44 flex items-center justify-center w-full px-3">
          <img
            src={img}
            alt={product.title}
            className="max-h-full object-contain w-full"
          />
        </div>

        <h3 className="mt-3 text-md font-semibold line-clamp-2 px-3">
          {product.title}
        </h3>
      </Link>

      <div className="mt-2 flex flex-col items-center gap-2 w-full px-4">
        <div className="text-sm font-bold text-gray-800">
          ${product.price}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="px-4 py-2 text-white bg-[rgb(28,37,65)] rounded-sm text-sm font-medium font-['Roboto_Slab'] w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
