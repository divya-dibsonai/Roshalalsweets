import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Indian Sweets — Son Papdi, Kaju Katli, Mawa Barfi & More',
  description: 'Shop authentic North Indian sweets made with pure desi ghee & khoya — Son Papdi, Kaju Katli, Mawa Barfi, Gujiya, Ghaver & more. Roshan Lal Ji Sweets, Kasganj, UP.',
  openGraph: {
    title: 'Indian Sweets | Roshan Lal Ji Sweets & Restaurant',
    description: 'Handcrafted Indian sweets made with pure ghee — Son Papdi, Kaju Katli, Gulab Jamun, Ghaver & more. Order from Kasganj, UP.',
    url: 'https://roshanlalsweets.vercel.app/sweets',
  },
};
  { emoji: '🧡', tag: 'Bestseller', name: 'Son Papdi', desc: 'Melt-in-mouth flaky delight made with pure ghee & sugar', price: '₹280/kg', bg: 'bg-orange-50' },
  { emoji: '🤍', tag: 'Premium', name: 'Kaju Katli', desc: 'Classic cashew fudge with real silver varq', price: '₹720/kg', bg: 'bg-gray-50' },
  { emoji: '🍯', tag: 'Festive', name: 'Mawa Barfi', desc: 'Rich khoya barfi with cardamom, a family favourite', price: '₹480/kg', bg: 'bg-amber-50' },
  { emoji: '🌹', tag: 'Seasonal', name: 'Gujiya', desc: 'Holi special khoya-filled pastries, fried to perfection', price: '₹380/kg', bg: 'bg-pink-50' },
  { emoji: '🟤', tag: 'Classic', name: 'Gulab Jamun', desc: 'Soft, spongy milk solids soaked in rose-flavoured syrup', price: '₹320/kg', bg: 'bg-amber-50' },
  { emoji: '🍬', tag: 'Traditional', name: 'Halwa', desc: 'Warm, ghee-laden semolina halwa with cardamom & nuts', price: '₹260/kg', bg: 'bg-yellow-50' },
  { emoji: '🫐', tag: 'Special', name: 'Kheer', desc: 'Creamy rice pudding slow-cooked with milk, saffron & pistachios', price: '₹200/kg', bg: 'bg-blue-50' },
  { emoji: '🟡', tag: 'Festive', name: 'Ghaver', desc: 'Rajasthani honeycomb sweet soaked in rabdi — a festive delight', price: '₹350/kg', bg: 'bg-yellow-50' },
  { emoji: '🍮', tag: 'Premium', name: 'Kalakand', desc: 'Soft milk cake with a grainy texture, topped with pistachios', price: '₹440/kg', bg: 'bg-cream' },
  { emoji: '🟠', tag: 'Classic', name: 'Gajar Ka Halwa', desc: 'Winter special carrot halwa made with pure ghee & khoya', price: '₹380/kg', bg: 'bg-orange-50' },
  { emoji: '⚪', tag: 'Bestseller', name: 'Ras Malai', desc: 'Soft paneer dumplings in saffron-infused sweetened milk', price: '₹420/kg', bg: 'bg-gray-50' },
  { emoji: '🟣', tag: 'Special', name: 'Kaju Barfi', desc: 'Premium cashew fudge in various flavours — rose, mango, kesar', price: '₹680/kg', bg: 'bg-purple-50' },
];

export default function SweetsPage() {
  return (
    <>
      <PageHero
        emoji="🍬"
        tag="Handcrafted with Love"
        title="Our Signature"
        highlight="Sweets"
        subtitle="Pure ghee, finest khoya, and generations of expertise — every piece is a labour of love from our family kitchen."
      />
      <section className="px-6 md:px-10 py-14 max-w-7xl mx-auto">
        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {['All', 'Bestsellers', 'Festive', 'Premium', 'Seasonal', 'Traditional'].map(f => (
            <button key={f} className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${f === 'All' ? 'bg-maroon text-white border-maroon' : 'border-amber-200 text-brand-text hover:border-maroon hover:text-maroon'}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sweets.map(p => <ProductCard key={p.name} {...p} />)}
        </div>
      </section>

      {/* Gifting Banner */}
      <div id="gifting" className="bg-maroon mx-6 md:mx-10 mb-14 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8">
        <div className="text-6xl">🎁</div>
        <div className="flex-1">
          <h2 className="font-playfair text-2xl md:text-3xl text-cream font-bold mb-2">Festive Gifting & Hampers</h2>
          <p className="text-cream/75 text-sm leading-relaxed">Customise a sweet hamper for Diwali, Eid, weddings, or any celebration. We pack with premium packaging and deliver across India.</p>
        </div>
        <button className="flex-shrink-0 bg-gold-pale text-maroon px-7 py-3 rounded-full font-bold text-sm hover:bg-gold transition-colors">
          Build a Hamper →
        </button>
      </div>
    </>
  );
}
