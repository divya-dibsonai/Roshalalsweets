import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import { namkeen } from '@/app/data/namkeen';


export const metadata: Metadata = {
  title: 'Namkeen & Snacks — Aloo Bhujia, Mathri, Mix Namkeen & More',
  description: 'Buy fresh North Indian namkeen & snacks — Aloo Bhujia, Mix Namkeen, Mathri, Roasted Chana & more. Handmade with pure ingredients at Roshan Lal Ji Sweets, Kasganj.',
  openGraph: {
    title: 'Namkeen & Snacks | Roshan Lal Ji Sweets',
    description: 'Crispy, spicy namkeen & snacks — Aloo Bhujia, Mathri, Dal Moth & more. Perfect with chai.',
    url: 'https://roshanlalsweets.vercel.app/namkeen',
  },
};


export default function NamkeenPage() {
  return (
    <>
      <PageHero
        image="/about-namkeen.png"
        imageAlt="Namkeen"
        tag="Crispy & Spicy"
        title="Namkeen &"
        highlight="Snacks"
        subtitle="The perfect companions for your evening chai — crunchy, spicy, and made with the finest ingredients."
      />
      <section className="px-6 md:px-10 py-14 max-w-7xl mx-auto">
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
