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

const namkeen = {
  'Healthy Bites': [
    { image: '/images/namkeen/Roasted Chana Jor Garam.JPG', tag: 'Spicy', name: 'Chana Jor Garam', desc: 'Flattened chickpeas tossed with tangy spices', price: '₹160/kg', bg: 'bg-red-50' },
    { image: '/images/namkeen/Dal Biji Namkeen.JPG', tag: 'Classic', name: 'Dal Biji', desc: 'Crunchy mixed lentil namkeen blend', price: '₹200/kg', bg: 'bg-amber-50' },
    { image: '/images/namkeen/Hing Mixture Namkeen.JPG', tag: 'Spicy', name: 'Hing Mixture', desc: 'Asafoetida-spiced crunchy mixture', price: '₹220/kg', bg: 'bg-red-50' },
    { image: '/images/namkeen/Khokla Chana Namkeen.JPG', tag: 'Crunchy', name: 'Khokla Chana', desc: 'Crisp roasted chana namkeen', price: '₹180/kg', bg: 'bg-green-50' },
    { image: null, tag: 'Healthy', name: 'Millet Chips', desc: 'Light, crunchy chips made from millet', price: '₹—', bg: 'bg-emerald-50' }, // no photo available
    { image: '/images/namkeen/Moong Bhujiya.JPG', tag: 'Crispy', name: 'Moong Bujiya', desc: 'Crispy fried moong dal bhujiya', price: '₹180/kg', bg: 'bg-yellow-50' },
    { image: '/images/namkeen/Gud Chana.JPG', tag: 'Sweet', name: 'Roasted Gud Chana', desc: 'Roasted chana coated in jaggery', price: '₹160/kg', bg: 'bg-yellow-50' },
    { image: '/images/namkeen/Roasted Hing Chana.JPG', tag: 'Healthy', name: 'Roasted Hing Chana', desc: 'Roasted chickpeas seasoned with asafoetida', price: '₹180/kg', bg: 'bg-green-50' },
    { image: '/images/namkeen/Roasted Makhana- Mint Pudina.JPG', tag: 'Light', name: 'Roasted Makhana Jar - Mint/Pudina', desc: 'Roasted fox nuts seasoned with mint', price: '₹300/kg', bg: 'bg-emerald-50' },
    { image: '/images/namkeen/Roasted Makhana- Chilli Tomato.JPG', tag: 'Spicy', name: 'Roasted Makhana Jar - Chilli Tomato', desc: 'Roasted fox nuts seasoned with chilli-tomato', price: '₹300/kg', bg: 'bg-red-50' },
    { image: '/images/namkeen/Roasted Makhana- salt & Pepper (Falhari).JPG', tag: 'Light', name: 'Roasted Makhana Jar - Salt & Pepper (Falhari)', desc: 'Roasted fox nuts with salt & pepper, fasting-friendly', price: '₹300/kg', bg: 'bg-amber-50' },
    { image: '/images/namkeen/Roasted Moong.JPG', tag: 'Healthy', name: 'Roasted Moth/Moong - Moong', desc: 'Roasted moong dal, a light protein-rich snack', price: '₹160/kg', bg: 'bg-green-50' },
    { image: '/images/namkeen/Roasted Moth.JPG', tag: 'Healthy', name: 'Roasted Moth/Moong - Moth', desc: 'Roasted moth beans, a light crunchy snack', price: '₹160/kg', bg: 'bg-emerald-50' },
    { image: null, tag: 'Classic', name: 'Roasted Peanuts', desc: 'Simple roasted peanuts, lightly salted', price: '₹—', bg: 'bg-amber-50' }, // no photo available
    // Photos on file with no matching sheet item — included for completeness, flag with client
    { image: '/images/namkeen/Beetroot Chips- Chilli Chat.JPG', tag: 'Crispy', name: 'Beetroot Chips - Chilli Chat', desc: 'Crispy beetroot chips tossed in chaat masala', price: '₹180/kg', bg: 'bg-yellow-50' },
    { image: '/images/namkeen/Oats Chips- Punjabi Tadka.JPG', tag: 'Healthy', name: 'Oats Chips - Punjabi Tadka', desc: 'Crunchy oats chips with a Punjabi tadka twist', price: '₹200/kg', bg: 'bg-emerald-50' },
    { image: '/images/namkeen/Ragi Chips- Peri Peri.JPG', tag: 'Healthy', name: 'Ragi Chips - Peri Peri', desc: 'Crunchy ragi chips with a peri-peri kick', price: '₹200/kg', bg: 'bg-green-50' },
    { image: '/images/namkeen/Roasted Bajra Mix.JPG', tag: 'Healthy', name: 'Roasted Bajra Mix', desc: 'Wholesome roasted bajra snack mix', price: '₹180/kg', bg: 'bg-amber-50' },
  ]
};

export default function NamkeenPage() {
  return (
    <>
      <PageHero
        image="/namkeen.jpg"
        imageAlt="Namkeen"
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
        {Object.entries(namkeen).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-maroon mb-5">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {items.map(p => <ProductCard key={p.name} {...p} />)}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
