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
  { image: '/images/namkeen/Beetroot Chips- Chilli Chat.JPG', tag: 'Crispy', name: 'Beetroot Chips - Chilli Chat', desc: '...', price: '₹180/kg', bg: 'bg-yellow-50' },
  { image: '/images/namkeen/Dal Biji Namkeen.JPG', tag: 'Classic', name: 'Dal Biji Namkeen', desc: '...', price: '₹200/kg', bg: 'bg-amber-50' },
  { image: '/images/namkeen/Gud Chana.JPG', tag: 'Sweet', name: 'Gud Chana', desc: '...', price: '₹160/kg', bg: 'bg-yellow-50' },
  { image: '/images/namkeen/Hing Mixture Namkeen.JPG', tag: 'Spicy', name: 'Hing Mixture Namkeen', desc: '...', price: '₹220/kg', bg: 'bg-red-50' },
  { image: '/images/namkeen/Hing Peanut Namkeen.JPG', tag: 'Nutty', name: 'Hing Peanut Namkeen', desc: '...', price: '₹200/kg', bg: 'bg-orange-50' },
  { image: '/images/namkeen/Khokla Chana Namkeen.JPG', tag: 'Crunchy', name: 'Khokla Chana Namkeen', desc: '...', price: '₹180/kg', bg: 'bg-green-50' },
  { image: '/images/namkeen/Moong Bhujiya.JPG', tag: 'Crispy', name: 'Moong Bhujiya', desc: '...', price: '₹180/kg', bg: 'bg-yellow-50' },
  { image: '/images/namkeen/Oats Chips- Punjabi Tadka.JPG', tag: 'Healthy', name: 'Oats Chips - Punjabi Tadka', desc: '...', price: '₹200/kg', bg: 'bg-emerald-50' },
  { image: '/images/namkeen/Ragi Chips- Peri Peri.JPG', tag: 'Healthy', name: 'Ragi Chips - Peri Peri', desc: '...', price: '₹200/kg', bg: 'bg-green-50' },
  { image: '/images/namkeen/Roasted Bajra Mix.JPG', tag: 'Healthy', name: 'Roasted Bajra Mix', desc: '...', price: '₹180/kg', bg: 'bg-amber-50' },
  { image: '/images/namkeen/Roasted Chana Jor Garam.JPG', tag: 'Spicy', name: 'Roasted Chana Jor Garam', desc: '...', price: '₹160/kg', bg: 'bg-red-50' },
  { image: '/images/namkeen/Roasted Hing Chana.JPG', tag: 'Healthy', name: 'Roasted Hing Chana', desc: '...', price: '₹180/kg', bg: 'bg-green-50' },
  { image: '/images/namkeen/Roasted Makhana- Mint Pudina.JPG', tag: 'Light', name: 'Roasted Makhana - Mint/Pudina', desc: '...', price: '₹300/kg', bg: 'bg-emerald-50' },
  { image: '/images/namkeen/Roasted Makhana- Chilli Tomato.JPG', tag: 'Spicy', name: 'Roasted Makhana - Chilli Tomato', desc: '...', price: '₹300/kg', bg: 'bg-red-50' },
  { image: '/images/namkeen/Roasted Makhana- salt & Pepper (Falhari).JPG', tag: 'Light', name: 'Roasted Makhana - Salt & Pepper', desc: 'FALHARI', price: '₹300/kg', bg: 'bg-amber-50' },
  { image: '/images/namkeen/Roasted Moong.JPG', tag: 'Healthy', name: 'Roasted Moong', desc: '...', price: '₹160/kg', bg: 'bg-green-50' },
  { image: '/images/namkeen/Roasted Moth.JPG', tag: 'Healthy', name: 'Roasted Moth', desc: '...', price: '₹160/kg', bg: 'bg-emerald-50' },
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
