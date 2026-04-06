import PageHero from '@/components/PageHero';

const galleryItems = [
  { emoji: '🍬', label: 'Son Papdi', category: 'Sweets', color: 'bg-orange-50' },
  { emoji: '🤍', label: 'Kaju Katli', category: 'Sweets', color: 'bg-gray-50' },
  { emoji: '🍮', label: 'Gulab Jamun', category: 'Sweets', color: 'bg-amber-50' },
  { emoji: '🌹', label: 'Gujiya', category: 'Sweets', color: 'bg-pink-50' },
  { emoji: '🟡', label: 'Ghaver', category: 'Sweets', color: 'bg-yellow-50' },
  { emoji: '🥜', label: 'Aloo Bhujia', category: 'Namkeen', color: 'bg-yellow-50' },
  { emoji: '🌶️', label: 'Mix Namkeen', category: 'Namkeen', color: 'bg-red-50' },
  { emoji: '🥨', label: 'Mathri', category: 'Namkeen', color: 'bg-amber-50' },
  { emoji: '🥐', label: 'Croissant', category: 'Bakery', color: 'bg-amber-50' },
  { emoji: '🍪', label: 'Nankhatai', category: 'Bakery', color: 'bg-orange-50' },
  { emoji: '🎂', label: 'Eggless Cake', category: 'Bakery', color: 'bg-pink-50' },
  { emoji: '🫕', label: 'Bhaji Box', category: 'Bhaji Box', color: 'bg-green-50' },
  { emoji: '🍽️', label: 'Dal Makhani', category: 'Restaurant', color: 'bg-orange-50' },
  { emoji: '🥧', label: 'Paneer Tikka', category: 'Restaurant', color: 'bg-red-50' },
  { emoji: '🎁', label: 'Gift Hamper', category: 'Gifting', color: 'bg-purple-50' },
  { emoji: '🪔', label: 'Diwali Special', category: 'Gifting', color: 'bg-amber-50' },
  { emoji: '🍯', label: 'Mawa Barfi', category: 'Sweets', color: 'bg-amber-50' },
  { emoji: '🧁', label: 'Cupcakes', category: 'Bakery', color: 'bg-purple-50' },
];

const categories = ['All', 'Sweets', 'Namkeen', 'Bakery', 'Bhaji Box', 'Restaurant', 'Gifting'];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        emoji="📸"
        tag="A Visual Feast"
        title="Our"
        highlight="Gallery"
        subtitle="A glimpse into our world of sweets, snacks, bakery, and restaurant — every item crafted with pride and tradition."
      />

      <section className="px-6 md:px-10 py-14 max-w-7xl mx-auto">
        {/* Filter Tabs - static for SSR, can be made interactive with client component */}
        <div className="flex gap-2 flex-wrap mb-10 justify-center">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`px-5 py-2 rounded-full text-xs font-semibold border cursor-pointer transition-colors ${
                i === 0
                  ? 'bg-maroon text-white border-maroon'
                  : 'border-amber-200 text-brand-text hover:border-maroon hover:text-maroon'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`break-inside-avoid rounded-2xl overflow-hidden border border-amber-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group ${item.color}`}
              style={{ aspectRatio: i % 5 === 0 ? '1/1.4' : i % 3 === 0 ? '1/0.8' : '1/1' }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-3 min-h-[140px]">
                <span className={`transition-transform group-hover:scale-110 duration-200 ${i % 5 === 0 ? 'text-7xl' : 'text-5xl'}`}>
                  {item.emoji}
                </span>
                <div className="text-center">
                  <p className="font-playfair text-sm font-semibold text-brand-dark leading-tight">{item.label}</p>
                  <p className="text-[10px] text-gold font-bold uppercase tracking-wider mt-0.5">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-maroon to-maroon-light rounded-2xl p-10 md:p-14 text-center">
          <span className="text-5xl mb-4 block">📷</span>
          <h3 className="font-playfair text-2xl text-cream font-bold mb-3">Share Your Moments With Us</h3>
          <p className="text-cream/70 text-sm leading-relaxed max-w-md mx-auto mb-6">
            Tag us on social media when you enjoy our sweets and food. Your moments make our day — and the best ones get featured here!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/917055513961"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-colors"
            >
              💬 Share on WhatsApp
            </a>
            <button className="bg-gold-pale text-maroon px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gold transition-colors">
              📩 Email Us a Photo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
