"use client";

import { useState, useEffect } from "react";
import { site, navigation } from "@/data/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-auris-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo AURIS */}
          <a
            href="#top"
            className="flex items-center gap-2 group"
            aria-label="AURIS - Retour en haut"
          >
            <span className="w-9 h-9 rounded-full bg-auris-cyan flex items-center justify-center font-bold text-auris-navy text-lg group-hover:scale-110 transition-transform">
              A
            </span>
            <span className="text-white font-bold text-xl tracking-wider">
              {site.name}
            </span>
          </a>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-auris-cyan text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Bouton contact desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-auris-cyan text-auris-navy text-sm font-semibold hover:bg-auris-sky transition-colors"
          >
            Nous contacter
          </a>

          {/* Bouton burger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-auris-navy/98 backdrop-blur-md border-t border-white/10">
          <nav className="px-6 py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-auris-cyan text-base font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex justify-center px-5 py-2 rounded-full bg-auris-cyan text-auris-navy text-sm font-semibold"
            >
              Nous contacter
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}