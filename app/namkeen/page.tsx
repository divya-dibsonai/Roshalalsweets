import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Namkeen & Snacks — Aloo Bhujia, Mathri, Mix Namkeen & More',
  description: 'Buy fresh North Indian namkeen & snacks — Aloo Bhujia, Mix Namkeen, Mathri, Roasted Chana & more. Handmade with pure ingredients at Roshan Lal Ji Sweets, Kasganj.',
  openGraph: {
    title: 'Namkeen & Snacks | Roshan Lal Ji Sweets',
    description: 'Crispy, spicy namkeen & snacks — Aloo Bhujia, Mathri, Dal Moth & more. Perfect with chai.',
    url: 'https://roshanlalsweets.vercel.app/namkeen',
  },
};

const namkeen = [
  { emoji: '🥜', tag: 'Crispy', name: 'Aloo Bhujia', desc: 'Thin, spiced potato sev — a classic North Indian favourite', price: '₹180/kg', bg: 'bg-yellow-50' },
  { emoji: '🌶️', tag: 'Spicy', name: 'Mix Namkeen', desc: 'Medley of sev, peanuts & dal with the perfect spice blend', price: '₹220/kg', bg: 'bg-red-50' },
  { emoji: '🫘', tag: 'Healthy', name: 'Roasted Chana', desc: 'Lightly spiced roasted chickpeas, high protein & delicious', price: '₹160/kg', bg: 'bg-green-50' },
  { emoji: '🥨', tag: 'Crunchy', name: 'Mathri', desc: 'Flaky, seasoned wheat crackers made with pure ghee', price: '₹240/kg', bg: 'bg-amber-50' },
  { emoji: '🌿', tag: 'Light', name: 'Sev Murmura', desc: 'Light puffed rice tossed with sev and spices', price: '₹140/kg', bg: 'bg-emerald-50' },
  { emoji: '🔴', tag: 'Spicy', name: 'Lal Mirch Mathri', desc: 'Red chilli-infused crispy crackers for the bold palate', price: '₹260/kg', bg: 'bg-red-50' },
  { emoji: '🌰', tag: 'Nutty', name: 'Masala Peanuts', desc: 'Crunchy peanuts coated in chickpea flour & spices', price: '₹200/kg', bg: 'bg-orange-50' },
  { emoji: '🟡', tag: 'Classic', name: 'Dal Moth', desc: 'Traditional North Indian snack of fried lentils with spices', price: '₹280/kg', bg: 'bg-yellow-50' },
];

export default function NamkeenPage() {
  return (
    <>
      <PageHero
        emoji="🌶️"
        tag="Crispy & Spicy"
        title="Namkeen &"
        highlight="Snacks"
        subtitle="The perfect companions for your evening chai — crunchy, spicy, and made with the finest ingredients."
      />
      <section className="px-6 md:px-10 py-14 max-w-7xl mx-auto">
        <div className="flex gap-2 flex-wrap mb-10">
          {['All', 'Crispy', 'Spicy', 'Healthy', 'Crunchy', 'Light'].map(f => (
            <button key={f} className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${f === 'All' ? 'bg-maroon text-white border-maroon' : 'border-amber-200 text-brand-text hover:border-maroon hover:text-maroon'}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {namkeen.map(p => <ProductCard key={p.name} {...p} />)}
        </div>
      </section>
    </>
  );
}
