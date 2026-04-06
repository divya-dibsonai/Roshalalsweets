import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const categories = [
  { emoji: '🌿', label: 'Guilt-Free', bg: 'bg-green-50', href: '/sweets' },
  { emoji: '🪔', label: 'Festive Special', bg: 'bg-amber-50', href: '/sweets' },
  { emoji: '🍮', label: 'Mithai', bg: 'bg-pink-50', href: '/sweets' },
  { emoji: '🍫', label: 'Chocolates', bg: 'bg-emerald-50', href: '/sweets' },
  { emoji: '🌶️', label: 'Namkeen', bg: 'bg-yellow-50', href: '/namkeen' },
  { emoji: '🥐', label: 'Bakery', bg: 'bg-purple-50', href: '/bakery' },
  { emoji: '🎁', label: 'Gifting', bg: 'bg-blue-50', href: '/sweets' },
  { emoji: '🍽️', label: 'Restaurant', bg: 'bg-orange-50', href: '/restaurant' },
];

const featuredSweets = [
  { emoji: '🧡', tag: 'Bestseller', name: 'Son Papdi', desc: 'Melt-in-mouth flaky delight made with pure ghee & sugar', price: '₹280/kg', bg: 'bg-orange-50' },
  { emoji: '🤍', tag: 'Premium', name: 'Kaju Katli', desc: 'Classic cashew fudge with real silver varq', price: '₹720/kg', bg: 'bg-gray-50' },
  { emoji: '🍯', tag: 'Festive', name: 'Mawa Barfi', desc: 'Rich khoya barfi with cardamom, a family favourite', price: '₹480/kg', bg: 'bg-amber-50' },
  { emoji: '🌹', tag: 'Seasonal', name: 'Gujiya', desc: 'Holi special khoya-filled pastries, fried to perfection', price: '₹380/kg', bg: 'bg-pink-50' },
];

const features = [
  { icon: '🫙', title: 'Pure Ingredients', desc: 'Made with pure ghee, finest khoya & real milk' },
  { icon: '🧼', title: 'Hygienic Process', desc: 'Prepared in covered, sanitised workshops' },
  { icon: '🚀', title: 'Pan-India Delivery', desc: 'Fresh sweets delivered across the country' },
  { icon: '🎁', title: 'Custom Gifting', desc: 'Festive hampers for every celebration' },
];

export default function Home() {
  return (
    <>
      {/* Category Circles */}
      <div className="bg-white px-6 md:px-10 py-7 flex gap-7 overflow-x-auto border-b border-amber-100">
        {categories.map(cat => (
          <Link key={cat.label} href={cat.href} className="flex flex-col items-center gap-2.5 cursor-pointer flex-shrink-0 group">
            <div className={`w-20 h-20 rounded-full ${cat.bg} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
              {cat.emoji}
            </div>
            <span className="text-[12px] font-semibold text-brand-text text-center leading-tight">{cat.label}</span>
          </Link>
        ))}
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light min-h-[480px] flex items-center px-8 md:px-20 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E")`}}/>

        <div className="relative z-10 max-w-xl">
          <div className="inline-block bg-gold text-brand-dark px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
            Since Before Independence 🇮🇳
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl text-cream font-extrabold leading-[1.05] mb-5">
            All Things <br/>
            <em className="not-italic text-gold-pale">Sweet &amp; Pure</em>
          </h1>
          <p className="text-cream/75 text-base leading-relaxed mb-8 max-w-md">
            From our family kitchen to your home — authentic Indian sweets made with pure ghee, finest khoya, and generations of love. Trusted by families across North India.
          </p>
          <Link href="/sweets" className="inline-flex items-center gap-2 bg-cream text-maroon px-7 py-3.5 rounded-full font-bold text-sm hover:bg-transparent hover:text-cream border-2 border-cream transition-all">
            🛒 Shop Sweets
          </Link>
        </div>

        {/* Big decorative circle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-white/5 flex items-center justify-center -mr-20">
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-gold/15 flex items-center justify-center text-[100px] md:text-[140px]">
            🍬
          </div>
        </div>

        <span className="absolute text-gold/60 animate-pulse" style={{top:'20%',left:'52%',fontSize:'22px'}}>✦</span>
        <span className="absolute text-gold/40 animate-pulse" style={{top:'70%',left:'62%',fontSize:'14px',animationDelay:'0.5s'}}>✦</span>
        <span className="absolute text-gold/50 animate-pulse" style={{top:'35%',left:'72%',fontSize:'26px',animationDelay:'1s'}}>✦</span>
      </div>

      {/* Features */}
      <div className="bg-white grid grid-cols-2 md:grid-cols-4 border-b border-amber-100">
        {features.map(f => (
          <div key={f.title} className="p-6 md:p-8 flex items-start gap-4 border-r border-amber-100 last:border-r-0">
            <div className="w-11 h-11 bg-gold-light rounded-xl flex items-center justify-center text-xl flex-shrink-0">{f.icon}</div>
            <div>
              <h4 className="font-bold text-sm text-brand-dark mb-1">{f.title}</h4>
              <p className="text-xs text-amber-700/70 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Signature Sweets */}
      <section className="bg-white px-6 md:px-10 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-9">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl text-maroon font-bold">Our Signature Sweets</h2>
              <p className="text-amber-700/70 text-sm mt-1">Handcrafted with love, pure ghee & finest ingredients</p>
            </div>
            <Link href="/sweets" className="text-maroon text-sm font-semibold border-b-2 border-maroon pb-0.5 hover:opacity-75">View All →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {featuredSweets.map(p => <ProductCard key={p.name} {...p} />)}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <div className="mx-6 md:mx-10 mb-14 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="bg-maroon p-10 md:p-14">
          <h2 className="font-playfair text-3xl md:text-4xl text-cream font-extrabold mb-5 leading-tight">
            A Legacy of <span className="text-gold-pale">Sweet Traditions</span>
          </h2>
          <p className="text-cream/80 text-sm leading-relaxed mb-3">
            Founded by Late Shri Roshan Lal Ji before India's independence, we have been creating delicious, hygienic sweets for generations.
          </p>
          <p className="text-cream/70 text-sm leading-relaxed mb-8">
            Today, we are run by the founders' descendants with the same traditional values — always flooded with customers from all corners of the country.
          </p>
          <Link href="/about" className="inline-block bg-gold-pale text-maroon px-7 py-3 rounded-full font-bold text-sm hover:bg-gold transition-colors">
            Read Our Story →
          </Link>
        </div>
        <div className="bg-gradient-to-br from-maroon-light to-gold flex flex-col items-center justify-center py-14 gap-3">
          <span className="text-[90px]">🪔</span>
          <p className="font-playfair text-cream/80 text-sm tracking-widest uppercase">Est. Before 1947</p>
        </div>
      </div>

      {/* Namkeen Teaser */}
      <section className="px-6 md:px-10 pb-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-9">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl text-maroon font-bold">Namkeen & Snacks</h2>
              <p className="text-amber-700/70 text-sm mt-1">Crunchy, spicy companions for your chai</p>
            </div>
            <Link href="/namkeen" className="text-maroon text-sm font-semibold border-b-2 border-maroon pb-0.5 hover:opacity-75">View All →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <ProductCard emoji="🥜" tag="Crispy" name="Aloo Bhujia" desc="Thin, spiced potato sev — a classic North Indian favourite" price="₹180/kg" bg="bg-yellow-50"/>
            <ProductCard emoji="🌶️" tag="Spicy" name="Mix Namkeen" desc="Medley of sev, peanuts & dal with perfect spice blend" price="₹220/kg" bg="bg-red-50"/>
            <ProductCard emoji="🫘" tag="Healthy" name="Roasted Chana" desc="Lightly spiced roasted chickpeas, high protein & delicious" price="₹160/kg" bg="bg-green-50"/>
            <ProductCard emoji="🥨" tag="Crunchy" name="Mathri" desc="Flaky, seasoned wheat crackers made with pure ghee" price="₹240/kg" bg="bg-amber-50"/>
          </div>
        </div>
      </section>

      {/* Bhaji Box Banner */}
      <section className="bg-gradient-to-br from-amber-50 to-pink-50 px-6 md:px-10 py-14">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-3">Our Special Offering</div>
            <h2 className="font-playfair text-4xl text-maroon font-extrabold leading-tight mb-4">The Bhaji Box 📦</h2>
            <p className="text-brand-text/80 text-sm leading-relaxed mb-6">
              Our signature Bhaji Box brings a curated selection of seasonal vegetables, freshly cooked and packed with love — a wholesome meal delivered to your doorstep.
            </p>
            <Link href="/bhaji-box" className="inline-block bg-maroon text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-maroon-dark transition-colors">
              Explore Bhaji Box →
            </Link>
          </div>
          <div className="text-center text-[110px]">🫕</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gold-light px-6 md:px-10 py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl text-maroon font-bold text-center mb-2">What Our Customers Say</h2>
          <p className="text-center text-amber-700/70 text-sm mb-9">Trusted by families across North India</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { text: 'The best Son Papdi I have ever tasted! Melts in your mouth instantly. We order every Diwali without fail. True family tradition.', author: 'Priya S., Delhi' },
              { text: "Roshan Lal Ji sweets are synonymous with purity. I've been eating these since childhood. The Kaju Katli is extraordinary — no one matches this quality.", author: 'Rahul M., Lucknow' },
              { text: "Ordered for my sister's wedding. All guests were raving about the sweets. The packaging was beautiful too. Highly recommend for gifting!", author: 'Anjali K., Patna' },
            ].map(t => (
              <div key={t.author} className="bg-white rounded-2xl p-7 border border-amber-200">
                <div className="text-gold text-base tracking-widest mb-3">★★★★★</div>
                <p className="text-sm text-brand-text leading-relaxed italic mb-4">"{t.text}"</p>
                <div className="text-xs font-bold text-maroon">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
