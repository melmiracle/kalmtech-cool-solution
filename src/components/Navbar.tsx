"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products & Services", href: "/products" },
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/kalmlogo.png"
              alt="Kalmtech Cool Solution"
              width={180}
              height={64}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
<<<<<<< HEAD
                      ? "text-blue-500"
                      : "text-gray-700 hover:text-blue-500"
=======
                      ? "text-cyan-600"
                      : "text-gray-700 hover:text-cyan-600"
>>>>>>> e61d3ee (general updated changes)
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="https://m.me/kalmtechcoolsolution"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
=======
                className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
>>>>>>> e61d3ee (general updated changes)
              >
                Message Us
              </a>
            </li>
          </ul>

<<<<<<< HEAD
          {/* Mobile: hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              className="p-2 rounded-md text-gray-700 hover:text-blue-500"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
=======
          {/* Hamburger */}
          <button
            className="md:hidden p-3 rounded-md text-gray-700 hover:text-cyan-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
>>>>>>> e61d3ee (general updated changes)
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 pb-4">
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
<<<<<<< HEAD
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-md transition-colors"
=======
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-cyan-600 rounded-md transition-colors"
>>>>>>> e61d3ee (general updated changes)
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-4 pt-2">
                <a
                  href="https://m.me/kalmtechcoolsolution"
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="block text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
=======
                  className="block text-center bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-4 py-3 rounded-full transition-colors"
>>>>>>> e61d3ee (general updated changes)
                >
                  Message Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
