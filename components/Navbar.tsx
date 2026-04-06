'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: '🏠 Home' },
  { href: '/sweets', label: '🍬 Sweets' },
  { href: '/namkeen', label: '🌶️ Namkeen & Snacks' },
  { href: '/bhaji-box', label: '📦 Bhaji Box' },
  { href: '/bakery', label: '🥐 Bakery' },
  { href: '/restaurant', label: '🍽️ Restaurant' },
  { href: '/gallery', label: '📸 Gallery' },
  { href: '/about', label: '📖 About Us' },
  { href: '/contact', label: '📍 Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-maroon text-white text-center py-2.5 px-4 text-sm font-medium tracking-wide">
        ✨ &nbsp; Free delivery on orders above ₹999 &nbsp;|&nbsp; Flat ₹200 Off on orders ₹2000 & above &nbsp; ✨
      </div>

      {/* Main Navbar */}
      <nav className="bg-cream border-b border-amber-200 px-6 md:px-10 flex items-center gap-6 sticky top-0 z-50 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 py-3 flex-shrink-0">
          <div className="w-12 h-12 bg-maroon rounded-xl flex items-center justify-center text-gold-pale font-playfair font-black text-lg tracking-tighter">
            RLJ
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-playfair text-sm font-bold text-maroon">Roshan Lal Ji</span>
            <span className="text-[10px] text-gold font-semibold uppercase tracking-widest">Since Independence</span>
          </div>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-lg mx-auto hidden md:flex items-center bg-amber-50 border border-amber-200 rounded-lg overflow-hidden">
          <div className="px-3 py-2.5 text-xs font-semibold text-brand-text bg-amber-100 border-r border-amber-200 whitespace-nowrap">
            All ▾
          </div>
          <input
            type="text"
            placeholder="Search for sweets, namkeen, bakery..."
            className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder-amber-700/50"
          />
          <button className="bg-maroon text-white px-4 py-2.5 text-base">🔍</button>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4 ml-auto">
          <button className="hidden sm:flex flex-col items-center gap-0.5 text-[11px] font-medium text-brand-text cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            Account
          </button>
          <button className="flex flex-col items-center gap-0.5 text-[11px] font-medium text-brand-text cursor-pointer relative">
            <div className="relative">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full w-4 h-4 text-[9px] flex items-center justify-center font-bold">0</span>
            </div>
            Cart
          </button>
          {/* Hamburger */}
          <button className="md:hidden ml-2 text-maroon" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </nav>

      {/* Desktop Bottom Nav */}
      <div className="hidden md:flex bg-white border-b border-amber-100 px-6 items-center overflow-x-auto">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-3.5 text-[13px] font-medium whitespace-nowrap border-b-2 transition-all ${
              pathname === link.href
                ? 'text-maroon border-maroon font-semibold'
                : 'border-transparent text-brand-text hover:text-maroon hover:border-maroon'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-amber-100 flex flex-col z-40">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-6 py-3.5 text-sm font-medium border-b border-amber-50 ${
                pathname === link.href ? 'text-maroon bg-amber-50 font-semibold' : 'text-brand-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
