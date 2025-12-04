"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductsGrid({ products = [] }) {
  const ITEMS_PER_PAGE = 8;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageItems = products.slice(start, end);

  const prev = () => page > 0 && setPage(page - 1);
  const next = () => page < totalPages - 1 && setPage(page + 1);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {pageItems.map((p) => (
          <div key={p.id} className="w-full flex justify-center">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-10">
        <button
          onClick={prev}
          disabled={page === 0}
          className={`
            text-gray-500 transition
            ${page === 0 ? "opacity-30 cursor-not-allowed" : "hover:text-[rgb(202,150,24)]"}
          `}
          aria-label="Previous page"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={next}
          disabled={page === totalPages - 1}
          className={`
            text-gray-500 transition
            ${page === totalPages - 1 ? "opacity-30 cursor-not-allowed" : "hover:text-[rgb(202,150,24)]"}
          `}
          aria-label="Next page"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
