"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const items = [
    { img: "/assets/Delivery.webp", title: "Super-Fast, Hassle Free Delivery", desc: "Delivered within 1-3 days, with all tax & duties paid within Canada. The price you see online is the price you pay." },
    { img: "/assets/Customer_Service.webp", title: "Unrivalled Customer Service", desc: "With over 75 years' industry experience, you can trust Quality Bearings Online." },
    { img: "/assets/Awards.webp", title: "Multi-Award-Winning", desc: "Winners Of The Queen's Award For Enterprise For International Trade, 2023 Lloyds Bank Employer Of The Year." },
    { img: "/assets/Trusted_Brands.webp", title: "World Renowned Brands", desc: "Quality branded products from the world’s leading brands such as SKF, Kluber, Timken, FAG, and many more." }
  ];

  const categories = [
    { img: "/assets/Precision.webp", title: "Precision Bearings" },
    { img: "/assets/Deep.webp", title: "Deep Groove Bearings" },
    { img: "/assets/Taper.webp", title: "Taper Roller Bearings" },
    { img: "/assets/Spherical.webp", title: "Spherical Roller Bearings" },
    { img: "/assets/Maintenance.webp", title: "Maintance Tools" },
    { img: "/assets/dow.webp", title: "Dow Corning Products" },
    { img: "/assets/KluberPro.webp", title: "Kluber Products" },
    { img: "/assets/shellLub.webp", title: "Shell Lubricants" },
    { img: "/assets/Paste.webp", title: "Molykote Greases" },
    { img: "/assets/skf20grease.webp", title: "SKF Lubricants" }
  ];

  const reviews = [
    { text: "Service was fantastic!", name: "Trusted Customer", date: "1 December 2025" },
    { text: "Great service", name: "Trusted Customer", date: "30 November 2025" },
    { text: "Right bearings arriving on time. The speed and service were excellent with Quality Bearings online.", name: "Leslie Miles", date: "26 November 2025" },
    { text: "Super quick delivery", name: "David McNamara", date: "21 November 2025" },
    { text: "Item as ordered, quick shipping", name: "Trusted Customer", date: "5 November 2025" },
    { text: "Simply the best", name: "Trusted Customer", date: "5 November 2025" },
    { text: "Excellent service, got product within reasonable time. Service was great.", name: "Trusted Customer", date: "5 November 2025" },
    { text: "Easy ordering process & swift, complete delivery information", name: "GARY LUDWIG", date: "22 October 2025" },
    { text: "Great Service!", name: "Neil", date: "13 October 2025" },
    { text: "Great service", name: "jeremy helm", date: "8 October 2025" },
    { text: "Extremely pleased, outstanding service", name: "Tom Patterson", date: "8 October 2025" },
    { text: "Excellent service! Thank you", name: "Trusted Customer", date: "8 October 2025" },
    { text: "Great products, fast shipping! Ordered Monday and received Thursday in Canada! SKF quality is outstanding.", name: "Trusted Customer", date: "25 September 2025" },
    { text: "Good product, shipping problems. Name label error caused customs delay.", name: "Jasper Michal", date: "22 September 2025" },
    { text: "They kept me informed of shipment details each day until received.", name: "Trusted Customer", date: "22 September 2025" },
    { text: "Exactly the experience we all dream for in industrial parts orders. Perfect!", name: "Trusted Customer", date: "19 September 2025" },
    { text: "Great Website fast shipping quick order. Super easy.", name: "Joel Delira", date: "12 September 2025" },
    { text: "Great service.", name: "Trusted Customer", date: "12 September 2025" },
    { text: "Bon service et livraison rapide", name: "Ghislain Bernier", date: "12 September 2025" }
  ];

  const worldBrand = [
    { img: "/assets/NSK.webp", link: "#" },
    { img: "/assets/Koyo.webp", link: "#" },
    { img: "/assets/FAG.webp", link: "#" },
    { img: "/assets/SKF.webp", link: "#" },
    { img: "/assets/RHP.webp", link: "#" },
    { img: "/assets/Molykote.webp", link: "#" },
    { img: "/assets/Shell.webp", link: "#" },
    { img: "/assets/Loctite.webp", link: "#" },
    { img: "/assets/IKO.webp", link: "#" },
    { img: "/assets/Kluber.webp", link: "#" }
  ]

  const perPage = 4;
  const [page, setPage] = useState(0);
  const pages = Math.ceil(reviews.length / perPage);

  const start = page * perPage;
  const current = reviews.slice(start, start + perPage);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pages - 1, p + 1));


  return (
    <main className="container mx-auto mt-6">

      <h2 style={{ fontFamily: "'Roboto Slab'", fontSize: 35, fontWeight: 700, color: "rgb(26, 35, 72)", textAlign: "center" }}>
        Industry Leading Bearings Supplier
      </h2>

      {/* top 4 */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={item.img} alt={item.title} style={{ width: 150, height: 150, objectFit: "cover", borderRadius: 8 }} />
            <h3 className="mt-4" style={{ fontFamily: "'Oswald'", fontSize: 17, fontWeight: 700, textAlign: "center" }}>
              {item.title}
            </h3>
            <p className="mt-2 text-gray-500" style={{ fontFamily: "'Roboto Slab'", fontSize: 14, fontWeight: 300, width: 300, height: 140, textAlign: "center" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Top Categories */}
      <section className="text-center">
        <h2
          style={{
            fontFamily: "'Oswald'",
            fontSize: 30,
            fontWeight: 700,
            color: "rgb(26, 35, 72)"
          }}
        >
          Top Categories
        </h2>

        <p
          className="mt-4 text-gray-600"
          style={{
            fontFamily: "'Roboto Slab'",
            fontSize: 16,
            fontWeight: 300,
            lineHeight: "24px"
          }}
        >
          Whatever bearing, adhesive, lubricant or grease you are after at Quality Bearings Online
          we are bound to stock it. As a leading bearings supplier we offer products from
          trusted industry manufacturers. Discover some of our top product categories below.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/products?category=${encodeURIComponent(cat.title)}`}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.title}
                style={{ width: 150, height: 106, objectFit: "cover" }}
              />

              <h3
                className="
          mt-3 
          text-black 
          hover:text-[#d4af37] 
          transition-colors 
          text-center 
          leading-snug
        "
                style={{
                  fontFamily: "'Oswald'",
                  fontSize: 24,
                  fontWeight: 700,
                  maxWidth: "140px",
                  wordWrap: "break-word"
                }}
              >
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/*  Why Choose */}
      <section className="mt-20  bg-gray-200 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2
            style={{
              fontFamily: "'Oswald'",
              fontSize: 24,
              fontWeight: 600,
              color: "rgb(26, 35, 72)"
            }}
          >
            Why Choose Quality Bearings Online?
          </h2>

          <p
            className="text-gray-900"
            style={{
              fontFamily: "'Roboto Slab'",
              fontSize: 14,
              fontWeight: 300,
              lineHeight: "21px"
            }}
          >
            At Quality Bearings Online, we are a leading bearings supplier with over 75 years
            of industry experience. We are a multi award winning company, supplying bearings
            and engineering spares to customers in over 110 countries worldwide. We pride
            ourselves on offering trusted brands, expert knowledge, excellent customer service
            and rapid delivery anywhere in the world. What’s more, we ensure that our products
            are distributed globally within 1-3 working days.
          </p>

          <p
            className="mt-4 text-gray-900"
            style={{
              fontFamily: "'Roboto Slab'",
              fontSize: 14,
              fontWeight: 300,
              lineHeight: "21px"
            }}
          >
            Our products are used in sectors as diverse as Food Manufacturing, Aerospace,
            Oil and Gas and Precision Engineering, and whether you are a large multi-national
            or single site company, we delight in exceeding your expectations. Trust us as
            your industry bearings supplier.
          </p>
          <a
            href="#"
            className="
    inline-block mt-6 px-6 py-3 rounded
    bg-[rgb(202,150,24)] text-white
    border border-[rgb(202,150,24)]
    transition-all duration-200
    hover:bg-white hover:text-[rgb(202,150,24)] hover:border-[rgb(202,150,24)]
  "
            style={{
              fontFamily: "'Roboto Slab'",
              fontSize: 16,
              fontWeight: 600
            }}
          >
            Read More
          </a>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="w-full bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            style={{
              fontFamily: "'Oswald'",
              fontSize: 30,
              fontWeight: 700,
              color: "rgb(26, 35, 72)"
            }}
          >
            Customer Reviews
          </h2>
        </div>

        {/* Rating row + badge */}
        <div className="mt-10 flex justify-center items-center gap-12 flex-wrap">

          <div className="text-center flex flex-col items-center">

            <div className="flex items-center gap-4 flex-wrap justify-center">

              {/* Label */}
              <span
                style={{
                  fontFamily: "'Roboto Slab'",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "rgb(26,35,72)"
                }}
              >
                Average Customer Rating:
              </span>

              {/* Stars (inline SVGs) */}
              <div className="flex gap-1 items-center" aria-hidden>
                {[0, 1, 2, 3, 4].map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.169L12 18.896l-7.336 3.967 1.402-8.169L.132 9.21l8.2-1.192z"
                      fill="rgb(202,150,24)"
                    />
                  </svg>
                ))}
              </div>

              {/* Rating number */}
              <span
                style={{
                  fontFamily: "'Oswald'",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "rgb(26,35,72)"
                }}
              >
                4.8/5
              </span>

              {/* Feefo logo (svg in public) */}
              <img
                src="/assets/feefo.svg"
                alt="Feefo"
                style={{ width: 93, height: 28 }}
              />

            </div>

            <p
              className="mt-3"
              style={{
                fontFamily: "'Roboto Slab'",
                fontSize: 14,
                color: "gray"
              }}
            >
              Independent Service Rating based on 1226 verified reviews.
              <a
                href="#"
                style={{
                  color: "rgb(0,102,204)",
                  marginLeft: 4,
                  fontWeight: 600
                }}
              >
                Read all reviews
              </a>
            </p>

          </div>

          {/* Right badge */}
          <div className="ml-16">
            <img
              src="/assets/feeAward.svg"
              alt="rating-badge"
              style={{ width: 85, height: 85 }}
            />
          </div>

        </div>

        {/* --- TOP BORDER ONLY --- */}
        <div className="mt-8 border-t border-gray-200"></div>

        {/* --- 4-per-view reviews list --- */}
        {/* ---------- HORIZONTAL 4-AT-A-TIME REVIEWS (cards) ---------- */}
        <div className="mt-6 flex items-start justify-center">
          <div className="max-w-6xl w-full relative px-12">

            {/* LEFT ARROW */}
            <button
              onClick={prev}
              disabled={page === 0}
              aria-label="Previous reviews"
              className="absolute left-[-45px] top-1/2 -translate-y-1/2 p-2 rounded"
              style={{ opacity: page === 0 ? 0.4 : 1 }}
            >
              <ChevronLeft size={22} color="gray" strokeWidth={2} />
            </button>


            {/* REVIEWS ROW */}
            <div className="overflow-hidden">
              <div className="flex gap-4 transition-transform duration-300">
                {current.map((r, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                    style={{ minWidth: "220px" }}
                  >
                    <div className="p-4  h-full flex flex-col bg-white">

                      {/* STARS */}
                      <div className="flex gap-1 mb-3">
                        {[0, 1, 2, 3].map((s) => (
                          <svg key={s} width="16" height="16" viewBox="0 0 24 24">
                            <path
                              d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.169L12 18.896l-7.336 3.967 1.402-8.169L.132 9.21l8.2-1.192z"
                              fill="rgb(202,150,24)"
                            />
                          </svg>
                        ))}
                      </div>

                      {/* REVIEW TEXT */}
                      <p style={{ fontFamily: "'Roboto Slab'", fontSize: 15, color: "#111" }}>
                        {r.text}
                      </p>

                      {/* NAME + DATE */}
                      <p className="mt-3" style={{ fontFamily: "'Roboto Slab'", fontSize: 13, color: "#666" }}>
                        — <strong>{r.name}</strong> · {r.date}
                      </p>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={next}
              disabled={page >= pages - 1}
              aria-label="Next reviews"
              className="absolute right-[-45px] top-1/2 -translate-y-1/2 p-2 rounded"
              style={{ opacity: page >= pages - 1 ? 0.4 : 1 }}
            >
              <ChevronRight size={22} color="gray" strokeWidth={2} />
            </button>


          </div>
        </div>


      </section>

      {/* Renowned Brands */}
      <section className=" bg-gray-200 w-full py-12 px-6 text-center">

        <h2
          style={{
            fontFamily: "'Oswald'",
            fontSize: 30,
            fontWeight: 700,
            color: "rgb(26,35,72)"
          }}
        >
          Distributing World Renowned Brands
        </h2>

        <div
          className="mt-20 flex gap-20 overflow-x-auto justify-center"
          style={{
            whiteSpace: "nowrap",
            paddingBottom: 10
          }}
        >
          {worldBrand.map((brand, i) => (
            <a
              key={i}
              href={brand.link}
              className="inline-block transition-transform duration-300 hover:scale-110"
            >
              <img
                src={brand.img}
                alt="brand-logo"
                style={{
                  width: 60,
                  height: 30,
                  objectFit: "contain"
                }}
              />
            </a>
          ))}
        </div>

      </section>

      {/* Other Services */}
      <section className=" w-full py-12 px-6 text-center">

        <h2
          style={{
            fontFamily: "'Oswald'",
            fontSize: 30,
            fontWeight: 700,
            color: "rgb(26,35,72)"
          }}
        >
          Other Services We Offer
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">

          <div className="max-w-xs flex flex-col items-center text-center">
            <img
              src="/assets/Int-Presence.webp"
              alt="International Presence"
              style={{
                width: 150,
                height: 150,
                objectFit: "cover",
                borderRadius: 8,

              }}
            />

            <h3
              className="mt-4"
              style={{
                fontFamily: "'Oswald'",
                fontSize: 20,
                fontWeight: 700,
                color: "rgba(0, 0, 0, 1)"
              }}
            >
              International Presence
            </h3>

            <p
              className="mt-3 text-gray-700"
              style={{
                fontFamily: "'Roboto Slab'",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: "22px"
              }}
            >
              We are the preferred supplier of bearings and engineering spares to customers
              in over 110 countries. With 1,000,000 products in stock, we deliver worldwide
              within 1–3 working days.
            </p>
          </div>

          <div className="max-w-xs flex flex-col items-center text-center">
            <img
              src="/assets/Prof-Team.png"
              alt="Professional Team"
              style={{
                width: 150,
                height: 150,
                objectFit: "cover",
                borderRadius: 8
              }}
            />

            <h3
              className="mt-4"
              style={{
                fontFamily: "'Oswald'",
                fontSize: 20,
                fontWeight: 700,
                color: "rgba(0, 0, 0, 1)"
              }}
            >
              Professional Team
            </h3>

            <p
              className="mt-3 text-gray-700"
              style={{
                fontFamily: "'Roboto Slab'",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: "22px"
              }}
            >
              Every member of our team undertakes continuous training, ensuring we provide
              the best possible service to customers worldwide.
            </p>
          </div>

          <div className="max-w-xs flex flex-col items-center text-center">
            <img
              src="/assets/Warehouse-Logistics.png"
              alt="Warehouse & Logistics"
              style={{
                width: 150,
                height: 150,
                objectFit: "cover",
                borderRadius: 8
              }}
            />

            <h3
              className="mt-4"
              style={{
                fontFamily: "'Oswald'",
                fontSize: 20,
                fontWeight: 700,
                color: "rgba(0, 0, 0, 1)"
              }}
            >
              Warehouse & Logistics
            </h3>

            <p
              className="mt-3 text-gray-700"
              style={{
                fontFamily: "'Roboto Slab'",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: "22px"
              }}
            >
              We are fully ISO 9001:2015 certified. With DHL and UPS as partners, we hold a
              99.8% order delivery success rate.
            </p>
          </div>

          <div className="max-w-xs flex flex-col items-center text-center">
            <img
              src="/assets/Cust-Serv.png"
              alt="Customer Service"
              style={{
                width: 150,
                height: 150,
                objectFit: "cover",
                borderRadius: 8
              }}
            />

            <h3
              className="mt-4"
              style={{
                fontFamily: "'Oswald'",
                fontSize: 20,
                fontWeight: 700,
                color: "rgba(0, 0, 0, 1)"
              }}
            >
              Customer Service
            </h3>

            <p
              className="mt-3 text-gray-700"
              style={{
                fontFamily: "'Roboto Slab'",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: "22px"
              }}
            >
              With 75+ years of bearings expertise, our team resolves customer queries
              within 2 hours on working days and 24 hours outside them.
            </p>
          </div>

        </div>
      </section>

      {/* Subscribe */}
      <section
        className="w-full py-8 px-6"
        style={{ backgroundColor: "rgb(26, 36, 66)" }}
      >
        <div
          className="
      max-w-7xl mx-auto 
      flex flex-nowrap items-center 
      justify-between
      gap-6
      text-white
      overflow-hidden
    "
        >

          <span
            style={{
              fontFamily: "'Roboto Slab'",
              fontSize: "24px",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Subscribe Today
          </span>

          <span
            style={{
              fontFamily: "'Roboto Slab'",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22px",
              color: "#e0e0e0",
              flex: "1 1 auto",
              minWidth: 0,
            }}
          >
            Be the first to know about exclusive deals, new product lines, company
            announcements, and industry news.
          </span>

          <div className="flex flex-nowrap items-center">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="px-4 h-10 border border-gray-300  focus:outline-none text-gray-800 placeholder-gray-500"
              style={{
                fontFamily: "'Roboto Slab'",
                fontSize: 15,
                width: "240px"
              }}
            />

            <button
              className="
      px-6 h-10
      bg-[rgb(202,150,24)] text-white
    "
              style={{
                fontFamily: "'Roboto Slab'",
                fontSize: 16,
                fontWeight: 700
              }}
            >
              SUBSCRIBE
            </button>
          </div>

        </div>

        <style jsx global>{`
          /* Small tweaks to make the existing layout responsive WITHOUT changing structure */

          /* Make images scale down on small screens (overrides inline widths) */
          @media (max-width: 640px) {
            main.container { padding-left: 0.75rem !important; padding-right: 0.75rem !important; }

            /* Top items images */
            section img[alt] { max-width: 100% !important; height: auto !important; }

            /* Limit long paragraphs that had fixed widths/heights */
            section p[style] { max-width: 100% !important; height: auto !important; }

            /* Headings scale down */
            main > h2 { font-size: 1.25rem !important; }
            section h2 { font-size: 1.125rem !important; }
            section h3 { font-size: 1rem !important; }

            /* Reviews section: reduce padding and move arrows inside container */
            .max-w-6xl { padding-left: 1rem !important; padding-right: 1rem !important; }
            button[aria-label="Previous reviews"] { left: 0 !important; transform: translateY(-50%) !important; }
            button[aria-label="Next reviews"] { right: 0 !important; transform: translateY(-50%) !important; }

            /* Make review cards take full width on small screens */
            .max-w-6xl .flex-shrink-0 { min-width: 100% !important; width: 100% !important; }

            /* Brands row spacing */
            .mt-20.flex.gap-20 { gap: 1rem !important; }

            /* Subscribe: stack and allow input to grow */
            .max-w-7xl.mx-auto.flex { flex-direction: column !important; align-items: stretch !important; gap: 0.75rem !important; }
            .max-w-7xl.mx-auto.flex input { width: 100% !important; }
            .max-w-7xl.mx-auto.flex form, .max-w-7xl.mx-auto.flex .flex { justify-content: flex-start !important; }
          }

          /* Medium screens adjustments */
          @media (min-width: 641px) and (max-width: 1024px) {
            main > h2 { font-size: 1.5rem !important; }
            section h2 { font-size: 1.25rem !important; }

            /* Reviews show 2 per row on medium */
            .max-w-6xl .flex-shrink-0 { min-width: 48% !important; width: 48% !important; }

            /* Reduce the large fixed gaps in brand row */
            .mt-20.flex.gap-20 { gap: 2.5rem !important; }

            /* Keep subscribe inline but allow input expansion */
            .max-w-7xl.mx-auto.flex input { width: 220px !important; }
          }

          /* Desktop: keep original look but ensure images don't overflow */
          @media (min-width: 1025px) {
            section img[alt] { max-width: 100% !important; height: auto !important; }
            .max-w-6xl .flex-shrink-0 { min-width: 220px !important; }
          }

          /* Small accessibility focus indicator for arrow buttons */
          button[aria-label] { outline: none; }
          button[aria-label]:focus { box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.3); }
        `}</style>

      </section>

    </main>
  );
}
