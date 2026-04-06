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
            <div className="text-xs text-white/70 space-y-1.5">
              <p>📞 +91-7055513961</p>
              <p>📧 info@roshanlaljisweets.com</p>
              <p>🕐 Open Daily: 8 AM – 10 PM</p>
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
          <span>Made with 🍬 in North India</span>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/917055513961"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-13 h-13 bg-green-500 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform z-50 w-14 h-14"
      >
        💬
      </a>
    </footer>
  );
}
