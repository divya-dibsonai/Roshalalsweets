import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Bhaji Box — Exclusive Wedding Gifting Range',
  description: 'Explore our exclusive Bhaji Box range for weddings — premium MDF and jar hampers filled with mithai, dry fruits & namkeen. Fully customisable. Roshan Lal Ji, Kasganj, UP.',
  openGraph: {
    title: 'Bhaji Box | Roshan Lal Ji Sweets & Restaurant',
    description: 'Exclusive Bhaji Boxes for weddings — premium hampers of mithai, dry fruits & namkeen, fully customisable for your celebration.',
    url: 'https://roshanlalsweets.vercel.app/bhaji-box',
  },
};

const WHATSAPP_NUMBER = '917055513961';

function waLink(boxNumber: number) {
  const message = encodeURIComponent(
    `Hi! I'd like to enquire about Bhaji Box #${boxNumber} for my wedding order.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

// Each image is a full catalogue page (from our Premium Gifting Catalogue 2024)
// showing the box photo, size tag, and full ingredient list already baked in —
// no separate text data needed, the photo itself has everything.
// Files are named 2.png-27.png (original catalogue page numbers).
const bhajiBoxes = Array.from({ length: 26 }, (_, i) => ({
  number: i + 1,
  image: `/images/bhaji-box/${i + 2}.png`,
}));

export default function BhajiBoxPage() {
  return (
    <>
      {/* Flyer-styled hero — cream & gold, matching the Premium Gifting 2024 catalogue */}
      <div className="bg-cream relative overflow-hidden border-b border-amber-100">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v5h5v5H0v5h20v-9.5zm-2 5.5H5v-5h13v5z'/%3E%3C/g%3E%3C/svg%3E")`}}
        />

        <div className="relative z-10 text-center px-8 pt-16 pb-8 max-w-2xl mx-auto">
          <div className="inline-block border border-gold/50 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold mb-6">
            A Trusted Name Over 60 Years
          </div>
          <h1 className="font-playfair italic text-5xl md:text-6xl text-maroon font-bold mb-1 leading-tight">
            Premium Gifting
          </h1>
          <p className="text-brand-text/70 text-sm leading-relaxed mb-2">
            L. Roshan Lal Ji presents you with an
          </p>
          <p className="font-bold text-maroon text-xl tracking-wide mb-1">EXCLUSIVE BHAJI BOXES</p>
          <p className="text-maroon/80 text-base">RANGE FOR <span className="font-bold">WEDDING</span></p>
        </div>

        {/* Real floral & couple illustration from the catalogue cover */}
        <div className="relative w-full">
          <Image
            src="/images/bhaji-box/cover-floral.jpg"
            alt=""
            width={1600}
            height={825}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      <section className="px-6 md:px-10 py-14 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-9 flex-wrap gap-4">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl text-maroon font-bold">Choose Your Bhaji Box</h2>
            <p className="text-amber-700/70 text-sm mt-1">Tap any box to enquire on WhatsApp — item selection can be changed as per your choice</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {bhajiBoxes.map((box) => (
            <a
              key={box.number}
              href={waLink(box.number)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-amber-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer block"
            >
              <div className="w-full aspect-[210/297] relative bg-amber-50">
                <Image
                  src={box.image}
                  alt={`Bhaji Box ${box.number}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="p-3 flex items-center justify-center gap-1.5 text-sm font-bold text-maroon">
                💬 Enquire to Customize
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-maroon mx-6 md:mx-10 mb-14 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8">
        <div className="text-6xl">📦</div>
        <div className="flex-1">
          <h2 className="font-playfair text-2xl md:text-3xl text-cream font-bold mb-2">Planning a Wedding?</h2>
          <p className="text-cream/75 text-sm leading-relaxed">Box design, item selection and bag branding can all be customised. Prices on request — let's plan your order together.</p>
        </div>
        <a
          href={waLink(0)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-gold-pale text-maroon px-7 py-3 rounded-full font-bold text-sm hover:bg-gold transition-colors"
        >
          Chat With Us →
        </a>
      </div>
    </>
  );
}
