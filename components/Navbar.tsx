'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';  

const navLinks = [
  { href: '/', label: ' Home' },
  { href: '/sweets', label: 'Sweets' },
  { href: '/namkeen', label: 'Namkeen & Snacks' },
  { href: '/bhaji-box', label: 'Bhaji Box' },
  { href: '/bakery', label: 'Bakery' },
  { href: '/restaurant', label: 'Restaurant' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: '📍 Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-maroon text-white text-center py-2.5 px-4 text-sm font-medium tracking-wide">
        ✨ &nbsp; A Trusted Name for Over 60 Years &nbsp;|&nbsp; Pure Desi Ghee Preparation &nbsp; ✨
      </div>

      {/* Main Navbar */}
      <nav className="bg-cream border-b border-amber-200 px-6 md:px-10 flex items-center gap-6 sticky top-0 z-50 shadow-sm">
        {/* Logo */}
      

<Image
  src="/logo.png"
  alt="Roshan Lal Ji Sweets"
  width={120}
  height={48}
  className="object-contain"
  priority
/>



      {/* Right icons */}
        <div className="flex items-center gap-4 ml-auto">
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
