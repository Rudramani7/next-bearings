import { notFound } from "next/navigation";
import ProductActions from "../../../components/ProductActions";

export const dynamic = "force-dynamic";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function ProductPage({ params, searchParams }) {
  const product = await getProduct(params.id);
  if (!product) return notFound();

  const img = product.thumbnail || product.images?.[0] || "";
  const category = searchParams?.category ?? "Bearings";

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <nav className="text-sm text-black mb-4" aria-label="Breadcrumb">
        Home {'>'} {category} {'>'} <span className="text-black">{product.title}</span>
      </nav>


      <div className="border border-gray-300 rounded p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* product */}
          <div className="flex justify-center">
            <img
              src={img}
              alt={product.title}
              className="w-full max-w-[500px] md:max-w-[500px] h-auto md:h-[400px] object-contain"
            />
          </div>

          {/* product details */}
          <div className="font-['Roboto_Slab'] text-black">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">{product.title}</h1>

            <div className="mt-2 text-sm text-black">
              <span className="text-black font-semibold">SKU: </span>
              <span className="font-semibold text-black">{product.id}</span>
            </div>

            <div className="mt-3 text-sm text-black">
              <span className="text-black font-semibold">Availability: </span>
              {product.stock > 0 ? (
                <span className="text-black">In Stock ✅</span>
              ) : (
                <span className="text-black">Out of Stock ❌</span>
              )}
            </div>

            <div className="mt-4 text-[15px] font-semibold text-black">
              BULK PRICING:{" "}
              <a href="#" className="underline text-black hover:text-black">
                Click Here to Enquire
              </a>
            </div>

            <div className="text-xl sm:text-2xl font-semibold mt-4 text-black">
              ${product.price}
            </div>

            <div className="mt-4">
              <ProductActions product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
