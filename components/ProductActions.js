"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";

export default function ProductActions({ product }) {
  const router = useRouter();
  const { cart, addToCart, updateQty } = useCart();

  const [qty, setQty] = useState(1);

  useEffect(() => {
    const found = cart.find((c) => c.id === product.id);
    if (found) setQty(found.qty);
  }, [cart, product.id]);

  const decrease = () => {
    const inCart = cart.find((c) => c.id === product.id);
    const newQty = Math.max(1, qty - 1);

    setQty(newQty);

    if (inCart) updateQty(product.id, newQty);
  };

  const increase = () => {
    const inCart = cart.find((c) => c.id === product.id);
    const newQty = qty + 1;

    setQty(newQty);

    if (inCart) {
      updateQty(product.id, newQty);
    } else {
      addToCart(product, 1);
    }
  };

  const handleBuyNow = () => {
    addToCart(product, qty);
    router.push("/");
  };

  return (
    <div className="mt-6 w-full font-['Roboto_Slab'] flex flex-col items-start">

      <div className="flex items-center border border-gray-400 rounded-sm h-[42px] w-fit">
        <button
          onClick={decrease}
          className="w-[42px] h-full flex items-center justify-center text-xl font-bold text-gray-600 border-r border-gray-300"
        >
          –
        </button>

        <div className="px-5 text-lg font-semibold text-gray-800">
          {qty}
        </div>

        <button
          onClick={increase}
          className="w-[42px] h-full flex items-center justify-center text-xl font-bold text-gray-600 border-l border-gray-300"
        >
          +
        </button>
      </div>

      <button
        onClick={handleBuyNow}
        className="mt-4 text-white font-semibold text-[15px] rounded"
        style={{ backgroundColor: "rgb(202,150,24)", width: "224px", height: "40px" }}
      >
        Buy Now
      </button>
    </div>
  );
}
