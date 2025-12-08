'use client'

import { Linkedin, Youtube, Twitter, Facebook, Instagram, LinkedinIcon } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const navItems = [
    "Home", "About Us", "Contact Us", "Customer Service", "Delivery Information",
    "FAQs", "Privacy Policy", "Customer Reviews", "Terms & Conditions", "Blog"
  ];

  const brandLogos = [
    { src: "/assets/BE2023.webp", w: 350, h: 96 },
    { src: "/assets/sc21.webp", w: 394, h: 96 },
    { src: "/assets/IIP.jpg", w: 227, h: 80 },
    { src: "/assets/Queens_Award_White.webp", w: 151, h: 80 },
  ];


  return (
    <footer
      className="w-full py-8 px-6"
      style={{ backgroundColor: "rgb(28,28,28)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 */}
        <div>
          <h3 style={{ fontFamily: "'Roboto Slab'", fontSize: 20, fontWeight: 700, color: "white" }}>
            Quality Bearings Online Ltd
          </h3>

          <p
            className="mt-2"
            style={{ fontFamily: "'Roboto Slab'", fontSize: 15, color: "white" }}
          >
            Canada – 438 800 2658
          </p>

          <a
            href="#"
            className="mt-4 inline-block"
            style={{
              fontFamily: "'Roboto Slab'",
              fontSize: 15,
              color: "white",
            }}
          >
            Contact Us
          </a>
        </div>

        {/* Col 2*/}
        <div>
          <h4 style={{ fontFamily: "'Roboto Slab'", fontSize: 20, fontWeight: 700, color: "white" }}>
            Navigate
          </h4>

          <ul className="mt-3 space-y-1">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: "'Roboto Slab'", fontSize: 15 }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* col 3 */}
        <div>
          <div className="flex flex-col gap-4 mb-6">
            {brandLogos.slice(0, 2).map((item, i) => (
              <img
                key={i}
                src={item.src}
                alt={`brand-${i + 1}`}
                style={{
                  width: item.w,
                  height: item.h,
                  objectFit: "contain",
                }}
              />
            ))}

            <div className="flex flex-row gap-4 items-center">
              {brandLogos.slice(2).map((item, i) => (
                <img
                  key={i + 2}
                  src={item.src}
                  alt={`brand-${i + 3}`}
                  style={{
                    width: item.w,
                    height: item.h,
                    objectFit: "contain",
                  }}
                />
              ))}
            </div>
          </div>


          <h4
            style={{
              fontFamily: "'Roboto Slab'",
              fontSize: 18,
              fontWeight: 700,
              color: "white",
              marginBottom: 8,
            }}
          >
            Follow Us on Social Media
          </h4>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebookF size={26} />
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={28} strokeWidth={1.5} />
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedinIn size={26} />
            </a>
          </div>

        </div>

      </div>

      {/* payments */}
      <div className="mt-10 pt-6 border-t border-white/100 flex flex-col md:flex-row items-center justify-between gap-6">

        <div
          className="text-center md:text-left"
          style={{ fontFamily: "'Roboto Slab'", fontSize: 14, color: "white" }}
        >
          © 2025 Quality Bearings Online Ltd. All Rights Reserved.
        </div>

        <div className="flex items-center gap-4">

          <svg width="45" height="28" viewBox="0 0 135 80">
            <rect width="135" height="80" fill="#2E77BB" rx="8" />
            <path fill="#fff" d="M26 56l-8-32h18l3 12 3-12h18l-8 32H40l-3-12-3 12H26zm55-32h-18l-3 12-3-12H38l8 32h18l3-12 3 12h18l8-32h-18l-3 12-3-12z" />
          </svg>

          <svg width="45" height="28" viewBox="0 0 48 32">
            <rect width="48" height="32" rx="4" fill="#fff" />
            <circle cx="18" cy="16" r="10" fill="#EB001B" />
            <circle cx="30" cy="16" r="10" fill="#F79E1B" />
            <path d="M23 6a10 10 0 0 1 0 20a10 10 0 0 1 0-20" fill="#FF5F00" />
          </svg>

          <svg width="45" height="28" viewBox="0 0 48 32">
            <rect width="48" height="32" rx="4" fill="#003087" />
            <text x="50%" y="55%" font-size="12" font-family="Arial" font-weight="700" fill="white" text-anchor="middle">
              PayPal
            </text>
          </svg>

          <svg width="45" height="28" viewBox="0 0 48 32">
            <rect width="48" height="32" rx="4" fill="white" />
            <path fill="#1A1F71" d="M18.2 10.5l-3.3 11h3.2l3.3-11h-3.2z" />
            <path fill="#1A1F71" d="M14.2 21.5l-2-11h-3l2 11h3z" />
            <path fill="#1A1F71" d="M31.4 10.7c-.6-.2-1.4-.4-2.4-.4-2.6 0-4.4 1.3-4.4 3.1 0 1.4 1.3 2.2 2.2 2.7.9.4 1.2.7 1.2 1.1 0 .6-.7.9-1.3.9-1 0-1.6-.1-2.5-.5l-.3-.1-.4 2.4c.6.3 1.8.6 3 .6 2.8 0 4.6-1.3 4.6-3.2 0-1.1-.7-1.9-2.1-2.7-.9-.5-1.5-.8-1.5-1.3 0-.4.5-.8 1.4-.8.8 0 1.5.2 2 .4l.3.1.4-2.3z" />
            <path fill="#1A1F71" d="M39.6 10.5h-2.5c-.8 0-1.4.2-1.7 1l-4.8 10h3.3l.9-2.3h3.9l.5 2.3h2.9l-2.5-11zm-3.8 7l1.6-4.3 1 4.3h-2.6z" />
          </svg>

          <svg width="45" height="28" viewBox="0 0 48 32">
            <rect width="48" height="32" rx="4" fill="white" />
            <text x="50%" y="55%" font-size="12" font-family="Arial" font-weight="700" fill="#202124" text-anchor="middle">
              G Pay
            </text>
          </svg>

        </div>

      </div>

    </footer>
  );
}
