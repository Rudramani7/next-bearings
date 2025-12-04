"use client";

import { useState } from "react";

const GOLD = "rgb(202,150,24)";

export default function ProductsControls({ initialColumns = 4 }) {
  const [columns, setColumns] = useState(initialColumns);
  const [perPage, setPerPage] = useState(40);
  const [sort, setSort] = useState("best");

  const btnClass = (n) =>
    `px-2 py-1 rounded text-sm border ${columns === n ? "border-[rgb(202,150,24)]" : "border-gray-300"}`;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
      <div className="w-full sm:w-auto">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full sm:w-auto border rounded px-3 py-2 text-sm"
          aria-label="Sort products"
        >
          <option value="best">Best selling items</option>
          <option value="new">Newest arrivals</option>
          <option value="popular">Most popular</option>
        </select>
      </div>

      <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <label className="text-sm mr-1 select-none">columns:</label>

          <div className="inline-flex items-center space-x-1 px-1 py-1 rounded bg-transparent">
            <button
              type="button"
              onClick={() => setColumns(2)}
              className={btnClass(2)}
              style={columns === 2 ? { borderColor: GOLD } : {}}
              aria-pressed={columns === 2}
              aria-label="Show 2 columns"
            >
              2
            </button>

            <button
              type="button"
              onClick={() => setColumns(3)}
              className={btnClass(3)}
              style={columns === 3 ? { borderColor: GOLD } : {}}
              aria-pressed={columns === 3}
              aria-label="Show 3 columns"
            >
              3
            </button>

            <button
              type="button"
              onClick={() => setColumns(4)}
              className={btnClass(4)}
              style={columns === 4 ? { borderColor: GOLD } : {}}
              aria-pressed={columns === 4}
              aria-label="Show 4 columns"
            >
              4
            </button>
          </div>
        </div>

        {/* rows per page */}
        <div className="flex items-center gap-2 border rounded px-3 py-2 w-full sm:w-auto">
          <label className="text-sm text-gray-600">Products per page:</label>
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="text-sm"
            aria-label="Products per page"
          >
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>
    </div>
  );
}
