'use client';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

type Sweet = {
  image?: string; emoji?: string; tag: string; name: string; desc: string; price: string; bg: string; category: string;
};

const FILTERS = ['All', 'Bengali Sweets', 'Desi Ghee Sweets', 'Khoya Sweets', 'Mewa Sweets', 'Seasonal Sweets', 'Snacks'];

export default function SweetsGrid({ sweets }: { sweets: Sweet[] }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? sweets : sweets.filter(s => s.category === active);

  return (
    <>
      <div className="flex gap-2 flex-wrap mb-10">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
              f === active ? 'bg-maroon text-white border-maroon' : 'border-amber-200 text-brand-text hover:border-maroon hover:text-maroon'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map((p, i) => <ProductCard key={`${p.name}-${i}`} {...p} />)}
      </div>
    </>
  );
}