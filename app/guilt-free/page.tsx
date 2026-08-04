import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import { sweets } from '@/app/data/sweets';
import { namkeen } from '@/app/data/namkeen';

export const metadata: Metadata = {
  title: 'Guilt-Free Sweets & Snacks — Sugar-Free & Healthy Options',
  description: 'Shop our guilt-free range — sugar-free sweets and healthy namkeen snacks, made with the same authentic quality. Roshan Lal Ji Sweets, Kasganj.',
  openGraph: {
    title: 'Guilt-Free | Roshan Lal Ji Sweets',
    description: 'Sugar-free sweets and healthy namkeen — the same quality, lighter on sugar.',
    url: 'https://roshanlalsweets.vercel.app/guilt-free',
  },
};

const guiltFree = {
  'Sugar-Free Sweets': sweets.filter((s) => s.tag === 'Guilt Free'),
  'Healthy Namkeen': Object.values(namkeen).flat().filter((n) => n.tag === 'Healthy'),
};

export default function GuiltFreePage() {
  return (
    <>
      <PageHero
        image="/namkeen.png"
        imageAlt="Guilt-Free Sweets & Snacks"
        tag="Healthier Choices"
        title="Guilt-Free"
        highlight="Treats"
        subtitle="Sugar-free sweets and wholesome snacks — the same care and quality, lighter on sugar."
      />
      <section className="px-6 md:px-10 py-14 max-w-7xl mx-auto">
        <div className="flex gap-2 flex-wrap mb-10">
          {['All', 'Sugar-Free Sweets', 'Healthy Namkeen'].map((f) => (
            <button
              key={f}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                f === 'All'
                  ? 'bg-maroon text-white border-maroon'
                  : 'border-amber-200 text-brand-text hover:border-maroon hover:text-maroon'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        {Object.entries(guiltFree).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-maroon mb-5">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {items.map((p, i) => (
                <ProductCard key={`${p.name}-${i}`} {...p} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
