import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 pt-14 pb-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-playfair text-xl text-gold-pale mb-3">Roshan Lal Ji</h3>
            <p className="text-xs leading-relaxed text-white/60 mb-4">
              Founded before India's independence, we bring authentic North Indian sweets, namkeen & restaurant fare — made with pure ingredients and generations of love.
            </p>

            <div className="text-xs text-white/70 space-y-2 mb-5">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91-7055513961</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>rlkcfoods@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Open Daily: 7:30 AM – 10:30 PM</span>
              </div>
            </div>

            {/* Contact & Social Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="tel:+917055513961"
                aria-label="Call Us"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold hover:text-brand-dark hover:border-gold transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              <a
                href="mailto:info@roshanlaljisweets.com"
                aria-label="Email Us"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold hover:text-brand-dark hover:border-gold transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              <a
                href="https://wa.me/917055513961"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 004.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.42 1.32-1.96 1.4-.5.08-1.13.11-1.83-.12-.42-.13-.96-.32-1.65-.62-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36l.56.01c.18 0 .42-.07.65.5.24.58.83 2 .9 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.5-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2 1.11.99 2.05 1.3 2.34 1.45.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.93.29.14.48.22.55.34.07.13.07.72-.17 1.39z"/>
                </svg>
              </a>

              <a
                href="https://facebook.com/roshanlalsweets"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold hover:text-brand-dark hover:border-gold transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com/roshanlaljisweets"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold hover:text-brand-dark hover:border-gold transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.76 4.9 4.9 0 01-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.76-1.15 4.9 4.9 0 01-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 015.44 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[11px] font-bold text-gold uppercase tracking-widest mb-4">Products</h4>
            {[['Sweets','/sweets'],['Namkeen & Snacks','/namkeen'],['Bhaji Box','/bhaji-box'],['Bakery Items','/bakery'],['Restaurant Menu','/restaurant']].map(([label,href])=>(
              <Link key={href} href={href} className="block text-xs text-white/60 hover:text-gold-pale mb-2.5 transition-colors">{label}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold text-gold uppercase tracking-widest mb-4">Company</h4>
            {[['About Us','/about'],['Gallery','/gallery'],['Customer Reviews','/about#reviews'],['Our Story','/about#story']].map(([label,href])=>(
              <Link key={href} href={href} className="block text-xs text-white/60 hover:text-gold-pale mb-2.5 transition-colors">{label}</Link>
            ))}
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] font-bold text-gold uppercase tracking-widest mb-4">Help & Info</h4>
            {[['Reach Us','/contact'],['Bulk Orders','/contact#bulk'],['Gifting & Hampers','/sweets#gifting'],['WhatsApp Us','https://wa.me/917055513961']].map(([label,href])=>(
              <Link key={href} href={href} className="block text-xs text-white/60 hover:text-gold-pale mb-2.5 transition-colors">{label}</Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-white/40">
          <span>© 2025 Roshan Lal Ji Sweets & Restaurant. All Rights Reserved.</span>
          <span>Made with love in North India</span>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/917055513961"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 004.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.42 1.32-1.96 1.4-.5.08-1.13.11-1.83-.12-.42-.13-.96-.32-1.65-.62-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36l.56.01c.18 0 .42-.07.65.5.24.58.83 2 .9 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.5-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2 1.11.99 2.05 1.3 2.34 1.45.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.93.29.14.48.22.55.34.07.13.07.72-.17 1.39z"/>
        </svg>
      </a>
    </footer>
  );
}
