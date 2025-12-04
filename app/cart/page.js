"use client";

import { useCart } from "../../components/CartContext";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateQty, remove } = useCart();
  const subtotal = cart.reduce((a, b) => a + (b.price * (b.qty || 0)), 0);
  const totalItems = cart.reduce((a, b) => a + (b.qty || 0), 0);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-['Roboto_Slab'] text-black">
      <div className="text-sm mb-4">
        <Link href="/" className="hover:underline">HOME</Link>
        <span className="mx-1">/</span>
        <span className="font-semibold">YOUR CART</span>
      </div>

      <h1 className="text-2xl font-bold mb-6">
        Your Cart ({totalItems} items)
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* products */}
          <div className="lg:col-span-2 border border-gray-300 rounded p-4 overflow-hidden">
            <div className="hidden sm:grid grid-cols-4 text-sm font-semibold border-b pb-2">
              <div>ITEM</div>
              <div className="text-center">UNIT PRICE</div>
              <div className="text-center">QUANTITY</div>
              <div className="text-right">TOTAL</div>
            </div>

            {cart.map((item) => {
              const unit = Number(item.price);
              const qty = Number(item.qty);
              const total = (unit * qty).toFixed(2);

              return (
                <div
                  key={item.id}
                  className="grid grid-cols-1 sm:grid-cols-4 items-start gap-4 py-4 text-sm"
                >
                  <div className="flex gap-3 items-start">
                    <img
                      src={item.thumbnail || item.image}
                      className="w-20 h-20 sm:w-20 sm:h-20 object-contain border rounded"
                      alt={item.title}
                    />
                    <div className="min-w-0">
                      <div className="font-semibold leading-tight line-clamp-2">{item.title}</div>
                      <div className="text-xs text-gray-600 mt-1">SKU: {item.id}</div>
                      <div className="mt-2 text-xs text-gray-600 sm:hidden">
                        <div>Price: <span className="font-semibold">${unit.toFixed(2)}</span></div>
                        <div>Qty: <span className="font-semibold">{qty}</span></div>
                        <div>Total: <span className="font-semibold">${total}</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center justify-center font-semibold">
                    ${unit.toFixed(2)}
                  </div>

                  <div className="flex justify-start sm:justify-center items-center gap-2">
                    <button
                      onClick={() => updateQty(item.id, Math.max(1, qty - 1))}
                      className="w-8 h-8 flex items-center justify-center text-white rounded"
                      style={{ backgroundColor: "rgb(202,150,24)" }}
                      aria-label={`Decrease quantity for ${item.title}`}
                    >
                      –
                    </button>

                    <div className="w-10 text-center font-semibold">{qty}</div>

                    <button
                      onClick={() => updateQty(item.id, qty + 1)}
                      className="w-8 h-8 flex items-center justify-center text-white rounded"
                      style={{ backgroundColor: "rgb(202,150,24)" }}
                      aria-label={`Increase quantity for ${item.title}`}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3">
                    <span className="font-semibold">${total}</span>

                    <button
                      onClick={() => remove(item.id)}
                      className="text-gray-500 hover:text-black"
                      aria-label={`Remove ${item.title}`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* order now */}
          <aside className="border border-gray-300 rounded p-5 h-fit">
            <div className="flex justify-between text-sm mb-3">
              <span className="font-semibold">Subtotal:</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span className="font-semibold">Shipping:</span>
              <span className="text-black">Free Shipping</span>
            </div>

            <div className="flex justify-between text-sm mb-5 border-t pt-3">
              <span className="font-semibold">Grand Total:</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>

            <button
              className="w-full py-2 rounded text-white font-semibold mb-4"
              style={{ backgroundColor: "rgb(202,150,24)" }}
            >
              CHECKOUT NOW
            </button>

            <p className="text-xs text-gray-600 leading-relaxed">
              qualitybearingsonline.com is secure and your personal details are protected.
              <span className="underline cursor-pointer ml-1">Learn more.</span>
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}
