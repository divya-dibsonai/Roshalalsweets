import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import { Leaf, ChefHat, Milk, Sparkles, Gift, Heart } from 'lucide-react';
import TrustTimeline from '@/components/TrustTimeline';

export const metadata: Metadata = {
  title: 'Roshan Lal Ji Sweets & Restaurant — Authentic Indian Sweets Since Independence',
  description: 'Buy authentic North Indian sweets, namkeen, bakery & restaurant food in Kasganj, UP. Pure desi ghee sweets — Son Papdi, Kaju Katli, Mawa Barfi & more. Est. before 1947.',
  openGraph: {
    title: 'Roshan Lal Ji Sweets & Restaurant',
    description: 'Authentic Indian sweets made with pure ghee since before Independence. Son Papdi, Kaju Katli, Mawa Barfi & more — Kasganj, UP.',
    url: 'https://roshanlalsweets.vercel.app',
  },
};


const categories = [
  { image: '/images/hero/Healthy.png', label: 'Guilt-Free', bg: 'bg-green-50', href: '/guilt-free' },
  { image: '/images/hero/Festive.png', label: 'Festive Special', bg: 'bg-amber-50', href: '/sweets' },
  { image: '/images/hero/Sweets.png', label: 'Mithai', bg: 'bg-pink-50', href: '/sweets' },
  { image: '/images/hero/Namkeens.png', label: 'Namkeen', bg: 'bg-yellow-50', href: '/namkeen' },
  { image: '/images/hero/Bakery.png', label: 'Bakery', bg: 'bg-purple-50', href: '/bakery' },
  { image: '/images/hero/Gifting.png', label: 'Gifting', bg: 'bg-blue-50', href: '/gifting' },
  { image: '/images/hero/Restaurant.png', label: 'Restaurant', bg: 'bg-orange-50', href: '/restaurant' },
];

const featuredSweets = [
  { image: '/HP/BalushaiHP.png', tag: 'Classic', name: 'Balushahi', desc: 'Deep-fried, flaky sweet soaked in sugar syrup — a timeless favourite', price: '₹320/kg', bg: 'bg-yellow-50' },
  { image: '/HP/GhewarHP.png', tag: 'Seasonal Special', name: 'Ghewar', desc: 'Disc-shaped, honeycomb-textured sweet made with pure ghee', price: '₹450/kg', bg: 'bg-red-50' },
  { image: '/HP/KajukatliHP.png', tag: 'Premium', name: 'Kaju Katli', desc: 'Classic cashew fudge with real silver varq', price: '₹720/kg', bg: 'bg-gray-50' },
  { image: '/HP/sonpapdiHP.png', tag: 'Bestseller', name: 'Sonpapdi', desc: 'Melt-in-mouth flaky delight made with pure ghee & sugar', price: '₹280/kg', bg: 'bg-orange-50' },
];

const whyLoveUs = [
  { icon: Leaf, title: 'Premium Ingredients' },
  { icon: ChefHat, title: 'Handmade Daily' },
  { icon: Milk, title: 'Fresh Every Morning' },
  { icon: Sparkles, title: 'Hygienic Kitchen' },
  { icon: Gift, title: 'Beautiful Packaging' },
  { icon: Heart, title: 'Trusted by Generations' },
];

export default function Home() {
  return (
    <>
       {/* Category Circles */}
      <div className="bg-white px-6 md:px-10 py-7 flex gap-7 overflow-x-auto border-b border-amber-100">
        {categories.map(cat => (
          <Link key={cat.label} href={cat.href} className="flex flex-col items-center gap-2.5 cursor-pointer flex-shrink-0 group">
            <div className={`w-20 h-20 rounded-full ${cat.bg} flex items-center justify-center overflow-hidden relative group-hover:scale-110 transition-transform`}>
              <Image src={cat.image} alt={cat.label} fill className="object-cover" />
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

{/* Big decorative circle (shifted left) */}
<div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-white/5 flex items-center justify-center pointer-events-none">
  <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-gold/15 flex items-center justify-center overflow-hidden border-2 border-white/10 shadow-xl">
    <img 
      src="/home.jpg" 
      alt="Brand Story Highlight" 
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>

        <span className="absolute text-gold/60 animate-pulse" style={{top:'20%',left:'52%',fontSize:'22px'}}>✦</span>
        <span className="absolute text-gold/40 animate-pulse" style={{top:'70%',left:'62%',fontSize:'14px',animationDelay:'0.5s'}}>✦</span>
        <span className="absolute text-gold/50 animate-pulse" style={{top:'35%',left:'72%',fontSize:'26px',animationDelay:'1s'}}>✦</span>
      </div>

      {/* Why Customers Love Us */}
      <section className="bg-white px-6 md:px-10 py-14 border-b border-amber-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl text-maroon font-bold text-center mb-10">
            Why Customers Love Us
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10">
            {whyLoveUs.map(item => (
              <div key={item.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-maroon" strokeWidth={1.75} />
                </div>
                <span className="text-xs md:text-sm font-semibold text-brand-dark leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
  <div className="relative w-72 h-72 flex items-center justify-center">
    {/* Golden glow behind */}
    <div className="absolute inset-0 bg-gold/60 blur-3xl rounded-full scale-90" />
    
    {/* Image with soft, faded edges */}
    <img
      src="/HP/journey.png"
      alt="Heritage journey"
      className="relative w-64 h-64 object-contain"
      style={{
        maskImage: "radial-gradient(circle, black 55%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 80%)",
      }}
    />
  </div>
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
  <ProductCard 
    image="/HP/hing-namkeen.png" 
    tag="Aromatic" 
    name="Hing Namkeen" 
    desc="Asafoetida-spiced namkeen with a distinctive tangy kick" 
    bg="bg-yellow-50"
  />
  <ProductCard 
    image="/HP/beetroot-chips.png" 
    tag="Crunchy" 
    name="Beetroot Chips" 
    desc="Thinly sliced, lightly salted beetroot chips" 
    bg="bg-red-50"
  />
  <ProductCard 
    image="/HP/moong-bhujiya.png" 
    tag="Protein-rich" 
    name="Moong Bhujiya" 
    desc="Crispy moong dal sev, spiced and roasted to perfection" 
    bg="bg-green-50"
  />
  <ProductCard 
    image="/HP/ragi-chips.png" 
    tag="Healthy" 
    name="Ragi Chips" 
    desc="Finger millet chips — a wholesome, gluten-free snack" 
    bg="bg-amber-50"
  />
</div>
        </div>
      </section>

      {/* Bhaji Box Banner */}
      <section className="bg-gradient-to-br from-amber-50 to-pink-50 px-6 md:px-10 py-14">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-3">Our Special Offering</div>
            <h2 className="font-playfair text-4xl text-maroon font-extrabold leading-tight mb-4">The Bhaji Box </h2>
            <p className="text-brand-text/80 text-sm leading-relaxed mb-6">
              Celebrate life’s sweetest moments with our bespoke Bhaji Gift Boxes. Handcrafted with authentic flavors, timeless recipes, and luxurious packaging, each box is an exquisite gesture of grace, gratitude, and grandeur.
            </p>
            <Link href="/bhaji-box" className="inline-block bg-maroon text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-maroon-dark transition-colors">
              Explore Bhaji Box →
            </Link>
          </div>
          <div className="relative flex justify-center items-center py-6">
  {/* Ambient golden glow behind the image */}
  <div className="absolute w-[600px] h-[420px] rounded-full bg-yellow-400/40 blur-[80px]" />

  <Image
    src="/bhaji-box.png"
    alt="Bhaji Box"
    width={520}
    height={340}
    className="relative rounded-2xl shadow-[0_0_40px_10px_rgba(250,204,21,0.5)]"
    style={{
      maskImage:
        "radial-gradient(ellipse 85% 85% at center, black 65%, transparent 100%)",
      WebkitMaskImage:
        "radial-gradient(ellipse 85% 85% at center, black 65%, transparent 100%)",
    }}
  />
</div>
        </div>
      </section>

      {/* Testimonials */}
<section className="bg-gold-light px-6 md:px-10 py-14">
  <div className="max-w-6xl mx-auto">
    <h2 className="font-playfair text-3xl text-maroon font-bold text-center mb-2">
      What Our Customers Say
    </h2>
    <p className="text-center text-amber-700/70 text-sm mb-4">
      Trusted by families across North India
    </p>

    {/* Trust Header Badge */}
    <div className="flex justify-center mb-9">
      <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2 shadow-sm">
        <span className="text-gold text-sm tracking-widest">★★★★★</span>
        <span className="text-xs md:text-sm font-bold text-maroon">4.9 Rating on Google</span>
        <span className="text-xs md:text-sm text-amber-700/70">(1900+ reviews)</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {[
        {
          text: "Highly recommended in kasganj. We had chilly garlic noodles and veg Manchurian gravy that was a must try. Masala dosa was super crispy and sambhar was fresh and authentic taste. We had veg supreme pizza loaded with melted cheese — I personally loved it.",
          author: "Apurva Dubey",
          meta: "Local Guide · 23 reviews",
          rating: 4,
        },
        {
          text: "One and only famous Top class sweets showroom of kasganj :- Roshanlal ji sweets. All sweets are best, specially different variety of Ghewar. Now you can have special samosa filled by capsicum paneer carrot. Chocolate, pastry, coldrinks also available here.",
          author: "Rahul Verma",
          meta: "Local Guide · 200 reviews",
          rating: 5,
        },
        {
          text: "Variety of sweets. Ambience is good. They have maintained the quality and variety of sweets. Taste is amazing. I just loved it. It is at very reasonable price.",
          author: "Ankita Verma",
          meta: "Local Guide · 249 reviews",
          rating: 5,
        },
      ].map((t) => (
        <div key={t.author} className="bg-white rounded-2xl p-7 border border-amber-200 flex flex-col">
          <div className="text-gold text-base tracking-widest mb-3">
            {"★".repeat(t.rating)}
            <span className="text-amber-200">{"★".repeat(5 - t.rating)}</span>
          </div>

          <p className="text-sm text-brand-text leading-relaxed italic mb-5 flex-1">
            "{t.text}"
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-amber-100">
            <div className="w-9 h-9 rounded-full bg-maroon text-white flex items-center justify-center text-sm font-bold shrink-0">
              {t.author.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-maroon">{t.author}</span>
              <span className="flex items-center gap-1 text-[11px] text-amber-700/70">
                {t.meta}
                <svg className="w-3 h-3 shrink-0" viewBox="0 0 48 48">
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
                  <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/>
                  <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
                </svg>
                Verified
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="flex justify-center mt-10">
      
        <a 
        href="https://www.google.com/search?q=roshanlal+kasganj&oq=roshanlal&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyBwgBEC4YgAQyCAgCEEUYJxg7MgYIAxBFGDsyDAgEEC4YJxivARjHATIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDYwNTVqMGo3qAIIsAIB8QWYcoz90Ziq4fEFmHKM_dGYquE&sourceid=chrome&source=chrome.ob&ie=UTF-8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white border-2 border-maroon text-maroon font-bold text-sm px-7 py-3 rounded-full hover:bg-maroon hover:text-white transition-colors"
      >
        See All Google Reviews →
      </a>
    </div>
  </div>
</section>

<TrustTimeline />

          
      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <hr className="border-amber-200" />
      </div>

{/* Featured In */}
<section className="bg-white px-6 md:px-10 py-16">
  <div className="max-w-5xl mx-auto">
    <h2 className="font-playfair text-3xl text-brand-dark font-bold text-center mb-1">
      As Featured in National Media 📰
    </h2>
    <p className="text-center text-amber-700/70 text-sm mb-12">
      Our story, covered by leading Indian news outlets
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {/* ETV Bharat feature */}
      
        <a
        href="https://www.etvbharat.com/hindi/uttar-pradesh/state/kasganj/up-one-search-sohan-crust-of-native-ghee-roshanlal-sweets-kasganj/up20220528143954790790288"
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-gold-light rounded-2xl p-6 border border-amber-200 hover:border-maroon transition-colors"
      >
        <div className="text-xs font-bold text-maroon uppercase tracking-wide mb-2">
          ETV Bharat
        </div>
        <p className="text-sm text-brand-text leading-relaxed mb-3">
          80 साल पुरानी कासगंज की देशी घी सोहन पापड़ी — देश-विदेश तक मशहूर। ETV Bharat featured our family's 4th-generation recipe, still shipped to relatives abroad for every festival.
        </p>
        <span className="inline-flex items-center gap-1 text-xs font-bold text-maroon group-hover:underline">
          Read Full Feature →
        </span>
      </a>

      {/* Dainik Bhaskar feature */}
      <a
        href="https://www.bhaskar.com/local/uttar-pradesh/kasganj/news/complete-story-of-famous-roshan-lal-sohan-papdi-in-kasganj-132460111.html"
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-gold-light rounded-2xl p-6 border border-amber-200 hover:border-maroon transition-colors"
      >
        <div className="text-xs font-bold text-maroon uppercase tracking-wide mb-2">
          Dainik Bhaskar
        </div>
        <p className="text-sm text-brand-text leading-relaxed mb-3">
          The complete story of Kasganj's famous Roshan Lal Sohan Papdi — how a decades-old family recipe became the town's signature sweet.
        </p>
        <span className="inline-flex items-center gap-1 text-xs font-bold text-maroon group-hover:underline">
          Read Full Story →
        </span>
      </a>
    </div>

    {/* Video Feature */}
    <div className="bg-brand-dark rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 mb-16">
      <div className="flex-1">
        <div className="text-xs font-bold text-gold uppercase tracking-wide mb-2">
          Video Feature
        </div>
        <p className="text-white text-lg font-playfair leading-snug mb-4">
          ETV Bharat's team visited our shop to uncover the secret behind Kasganj's most iconic sweet.
        </p>
        
          <a
          href="https://www.youtube.com/watch?v=YKfk9NO_Xzw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-brand-dark font-bold text-sm px-6 py-3 rounded-full hover:bg-amber-400 transition-colors"
        >
          ▶ Watch on ETV Bharat
        </a>
      </div>
      
        <a
        href="https://www.youtube.com/watch?v=YKfk9NO_Xzw"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full md:w-64 aspect-video rounded-xl overflow-hidden shrink-0 group"
      >
        <img
          src="https://img.youtube.com/vi/YKfk9NO_Xzw/hqdefault.jpg"
          alt="ETV Bharat video feature thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-2xl text-maroon">
            ▶
          </div>
        </div>
      </a>
    </div>

    {/* Secondary trust strip — logo mentions */}
    <div className="border-t border-amber-100 pt-10">
      <p className="text-center text-xs font-bold text-amber-700/60 uppercase tracking-widest mb-6">
        Also Mentioned On
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
        {[
          { name: "Dainik Jagran", color: "text-rose-400" },
          { name: "Amar Ujala", color: "text-blue-700" },
          { name: "Times of India", color: "text-gray-500" },
          { name: "JustDial", color: "text-orange-400" },
          { name: "MagicPin", color: "text-purple-400" },
          { name: "TripAdvisor", color: "text-green-500" },
        ].map((brand) => (
          <span
            key={brand.name}
            className={`font-bold text-lg italic ${brand.color} opacity-80 hover:opacity-100 transition-opacity cursor-default`}
          >
            {brand.name}
          </span>
        ))}
      </div>
    </div>
</div>
</section>
    </>
  );
}
