import PageHero from '@/components/PageHero';
import Link from 'next/link';

const boxes = [
  { emoji: '🥦', name: 'Green Veggie Box', items: ['Palak Paneer', 'Baingan Bharta', 'Lauki Sabzi', 'Dal Tadka'], price: '₹299', serves: 'Serves 2–3', tag: 'Popular' },
  { emoji: '🍅', name: 'Seasonal Special Box', items: ['Dum Aloo', 'Bhindi Masala', 'Arbi Fry', 'Mix Dal'], price: '₹349', serves: 'Serves 2–3', tag: 'Bestseller' },
  { emoji: '🎉', name: 'Feast Box', items: ['Paneer Butter Masala', 'Dal Makhani', 'Gobi Matar', 'Raita + Pickle'], price: '₹499', serves: 'Serves 4–5', tag: 'Value Pack' },
  { emoji: '🌿', name: 'Diet Box', items: ['Steamed Veggies', 'Moong Dal', 'Lauki Soup', 'Low-Oil Sabzi'], price: '₹249', serves: 'Serves 1–2', tag: 'Healthy' },
];

export default function BhajiBoxPage() {
  return (
    <>
      <PageHero
        emoji="📦"
        tag="Our Signature Offering"
        title="The Bhaji"
        highlight="Box"
        subtitle="Curated seasonal vegetables, freshly cooked and packed with love. A wholesome meal experience delivered to your doorstep."
      />

      <section className="px-6 md:px-10 py-14 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {boxes.map(box => (
            <div key={box.name} className="bg-white rounded-2xl border border-amber-100 overflow-hidden hover:shadow-lg transition-all">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 text-center text-7xl">{box.emoji}</div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-wider">{box.tag}</span>
                  <span className="text-xs text-amber-700/70">{box.serves}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-brand-dark mb-3">{box.name}</h3>
                <ul className="space-y-1 mb-5">
                  {box.items.map(item => (
                    <li key={item} className="text-xs text-brand-text/75 flex items-center gap-2">
                      <span className="text-gold">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-lg text-maroon">{box.price}</div>
                  <button className="bg-maroon text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-maroon-dark transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-12 bg-gold-light rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-playfair text-2xl text-maroon font-bold mb-3">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { step: '1', title: 'Choose Your Box', desc: 'Pick from our curated meal boxes based on your taste & appetite' },
              { step: '2', title: 'We Cook Fresh', desc: 'Our chefs cook your order fresh using seasonal vegetables & pure spices' },
              { step: '3', title: 'Delivered Hot', desc: 'Packed carefully and delivered warm right to your doorstep' },
            ].map(s => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-maroon text-white rounded-full flex items-center justify-center font-playfair text-xl font-bold mb-3">{s.step}</div>
                <h4 className="font-bold text-sm text-brand-dark mb-1">{s.title}</h4>
                <p className="text-xs text-amber-700/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
