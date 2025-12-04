"use client";

import { useCart } from "./CartContext";
import clsx from "clsx";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";

export default function MiniCart({ open, onClose }) {
  const { cart, updateQty, remove } = useCart();
  const total = cart.reduce((s, i) => s + (i.price * (i.qty || 0)), 0).toFixed(2);

  useEffect(() => {
    function handleClick(e) {
      if (!open) return;
      const box = document.getElementById("mini-cart-box");
      if (!box) return;
      if (!box.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  return (
    <div
      className={clsx(
        "fixed z-50 transform transition-transform",
        "left-4 right-4 bottom-4 sm:right-4 sm:left-auto sm:top-36",
        "w-[calc(100%-32px)] sm:w-[384px]",
        "max-h-[80vh] sm:h-[524px]",
        {
          "opacity-100 pointer-events-auto translate-y-0": open,
          "opacity-0 pointer-events-none -translate-y-4": !open,
        }
      )}
      aria-hidden={!open}
    >
      <div
        id="mini-cart-box"
        className={clsx(
          "h-full bg-white shadow-lg border border-gray-200 flex flex-col overflow-hidden",
          "rounded-t-lg sm:rounded-md"
        )}
      >
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold">Shopping Cart</h3>
        </div>

        <div className="p-4 overflow-auto" style={{ flex: 1 }}>
          {cart.length === 0 ? (
            <div className="text-sm text-gray-700">Your cart is empty</div>
          ) : (
            cart.map((item) => {
              const unitPrice = Number(item.price || 0);
              const qty = Number(item.qty || 0);
              const lineTotal = (unitPrice * qty).toFixed(2);

              return (
                <div key={item.id} className="relative mb-4 p-2 border-b last:border-b-0">
                  <button
                    onClick={() => remove(item.id)}
                    className="absolute top-1 right-1 text-gray-500 hover:text-black"
                    aria-label={`Remove ${item.title}`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  <div className="flex items-start gap-3">
                    <img
                      src={item.thumbnail || item.image}
                      alt={item.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain border border-gray-100 rounded"
                    />

                    <div className="flex-1">
                      <div className="font-semibold text-sm text-black leading-tight">
                        {item.title}
                      </div>

                      {item.brand && (
                        <div className="text-sm text-black/90">{item.brand}</div>
                      )}

                      <div className="text-sm text-black/90 mt-1">
                        <span className="font-semibold">SKU:</span> {item.id}
                      </div>

                      <div className="mt-2 text-sm text-black/90">
                        {qty} × ${unitPrice.toFixed(2)} ={" "}
                        <span className="font-semibold">${lineTotal}</span>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => updateQty(item.id, Math.max(1, qty - 1))}
                          className="px-2 py-1 border rounded text-sm"
                          aria-label={`Decrease ${item.title}`}
                        >
                          -
                        </button>

                        <div className="text-sm w-8 text-center">{qty}</div>

                        <button
                          onClick={() => updateQty(item.id, qty + 1)}
                          className="px-2 py-1 border rounded text-sm"
                          aria-label={`Increase ${item.title}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center justify-between font-semibold mb-3">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              onClick={onClose}
              className="w-full text-center py-2 rounded text-white"
              style={{ backgroundColor: "rgb(202,150,24)" }}
            >
              CHECKOUT
            </Link>

            <Link
              href="/cart"
              onClick={onClose}
              className="w-full text-center py-2 rounded border border-gray-300 text-black"
            >
              VIEW CART
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
