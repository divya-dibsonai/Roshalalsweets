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

const sweets = [
  // Bestsellers
  { image: '/images/sweets/Sonpapdi.png',                   tag: 'Bestseller',  name: 'Son Papdi',                  desc: 'Melt-in-mouth flaky delight made with pure ghee & sugar',               price: '₹280/kg',  bg: 'bg-orange-50' },
  { image: '/images/sweets/Kaju Barfi.png',                 tag: 'Premium',     name: 'Kaju Barfi',                 desc: 'Premium cashew fudge — rich, smooth and irresistible',                  price: '₹680/kg',  bg: 'bg-gray-50'   },
  { image: '/images/sweets/Gujiya.png',                     tag: 'Festive',     name: 'Gujiya',                     desc: 'Holi special khoya-filled pastries, fried to perfection',               price: '₹380/kg',  bg: 'bg-pink-50'   },
  { image: '/images/sweets/Milkcake.png',                   tag: 'Classic',     name: 'Milk Cake',                  desc: 'Soft, grainy milk cake slow-cooked to golden perfection',               price: '₹420/kg',  bg: 'bg-amber-50'  },

  // Laddoos
  { image: '/images/sweets/Besan Laddoo.png',               tag: 'Traditional', name: 'Besan Laddoo',               desc: 'Roasted gram flour laddoo with ghee, sugar & cardamom',                 price: '₹340/kg',  bg: 'bg-yellow-50' },
  { image: '/images/sweets/Boondi Laddoo.png',              tag: 'Classic',     name: 'Boondi Laddoo',              desc: 'Tiny crisp boondi bound together in a perfect sweet ball',              price: '₹320/kg',  bg: 'bg-orange-50' },
  { image: '/images/sweets/Chana Laddoo.png',               tag: 'Traditional', name: 'Chana Laddoo',               desc: 'Hearty chickpea laddoo packed with ghee and dry fruits',                price: '₹300/kg',  bg: 'bg-amber-50'  },
  { image: '/images/sweets/Khoya Laddoo.png',               tag: 'Premium',     name: 'Khoya Laddoo',               desc: 'Rich khoya laddoo flavoured with cardamom and pistachios',              price: '₹460/kg',  bg: 'bg-cream'     },
  { image: '/images/sweets/Panjeeri Laddoo.png',            tag: 'Special',     name: 'Panjeeri Laddoo',            desc: 'Nourishing whole wheat laddoo with nuts, seeds & ghee',                 price: '₹380/kg',  bg: 'bg-yellow-50' },
  { image: '/images/sweets/Rajasthani Laddoo.png',          tag: 'Festive',     name: 'Rajasthani Laddoo',          desc: 'Traditional Rajasthani style laddoo with a rich, crumbly texture',      price: '₹360/kg',  bg: 'bg-orange-50' },
  { image: '/images/sweets/Shahi Laddoo.png',               tag: 'Premium',     name: 'Shahi Laddoo',               desc: 'Royal laddoo loaded with dry fruits, saffron and silver varq',          price: '₹520/kg',  bg: 'bg-amber-50'  },
  { image: '/images/sweets/Sugarless Besan Laddoo.png',     tag: 'Guilt-Free',  name: 'Sugarless Besan Laddoo',     desc: 'All the flavour of besan laddoo, made without refined sugar',           price: '₹380/kg',  bg: 'bg-green-50'  },
  { image: '/images/sweets/Sugarless Panjeeri Laddoo.png',  tag: 'Guilt-Free',  name: 'Sugarless Panjeeri Laddoo',  desc: 'Healthy panjeeri laddoo crafted specially for diabetic-friendly diets', price: '₹400/kg',  bg: 'bg-green-50'  },

  // Kaju Specials
  { image: '/images/sweets/Kaju Anarkali.png',              tag: 'Special',     name: 'Kaju Anarkali',              desc: 'Elegant kaju sweet shaped like a blooming flower',                      price: '₹720/kg',  bg: 'bg-pink-50'   },
  { image: '/images/sweets/Kaju Basket.png',                tag: 'Festive',     name: 'Kaju Basket',                desc: 'Cashew basket filled with dry fruit — perfect for gifting',             price: '₹760/kg',  bg: 'bg-purple-50' },
  { image: '/images/sweets/Kaju Kalash.png',                tag: 'Premium',     name: 'Kaju Kalash',                desc: 'Artisan cashew sweet shaped as a kalash, ideal for celebrations',       price: '₹780/kg',  bg: 'bg-amber-50'  },
  { image: '/images/sweets/Kaju Roll.png',                  tag: 'Classic',     name: 'Kaju Roll',                  desc: 'Soft cashew roll filled with colourful dry fruit filling',              price: '₹700/kg',  bg: 'bg-gray-50'   },

  // Barfis & Milk Sweets
  { image: '/images/sweets/Khoya Barfi.png',                tag: 'Classic',     name: 'Khoya Barfi',                desc: 'Dense, creamy khoya barfi with cardamom — a timeless favourite',       price: '₹480/kg',  bg: 'bg-amber-50'  },
  { image: '/images/sweets/Doda Barfi.png',                 tag: 'Special',     name: 'Doda Barfi',                 desc: 'Rustic Punjab-style wheat barfi slow-cooked with ghee & jaggery',      price: '₹440/kg',  bg: 'bg-orange-50' },
  { image: '/images/sweets/Mysore Paag.png',                tag: 'Traditional', name: 'Mysore Paag',                desc: 'Soft, melt-in-mouth South Indian besan sweet made with ghee',          price: '₹400/kg',  bg: 'bg-yellow-50' },
  { image: '/images/sweets/Khoya Roll.png',                 tag: 'Special',     name: 'Khoya Roll',                 desc: 'Rolled khoya sweet stuffed with dry fruits and rose petals',           price: '₹500/kg',  bg: 'bg-pink-50'   },
  { image: '/images/sweets/Malai Chaap.png',                tag: 'Premium',     name: 'Malai Chaap',                desc: 'Delicate malai sweet with a soft, creamy texture',                     price: '₹460/kg',  bg: 'bg-gray-50'   },
  { image: '/images/sweets/Malai Puri.png',                 tag: 'Special',     name: 'Malai Puri',                 desc: 'Crispy puri soaked in thickened sweetened cream',                      price: '₹360/kg',  bg: 'bg-amber-50'  },
  { image: '/images/sweets/Lauki Lauj.png',                 tag: 'Seasonal',    name: 'Lauki Lauj',                 desc: 'Traditional bottle gourd sweet slow-cooked with milk & sugar',         price: '₹300/kg',  bg: 'bg-green-50'  },
  { image: '/images/sweets/Kesar Peda.png',                 tag: 'Festive',     name: 'Kesar Peda',                 desc: 'Saffron-infused peda with cardamom — a festive must-have',             price: '₹420/kg',  bg: 'bg-yellow-50' },
  { image: '/images/sweets/Peda.png',                       tag: 'Classic',     name: 'Peda',                       desc: 'Classic milk peda with a crumbly, melt-in-mouth texture',              price: '₹380/kg',  bg: 'bg-amber-50'  },
  { image: '/images/sweets/kheer Mohan.png',                tag: 'Premium',     name: 'Kheer Mohan',                desc: 'Soft paneer dumplings soaked in rich, saffron-flavoured rabdi',        price: '₹480/kg',  bg: 'bg-blue-50'   },
  { image: '/images/sweets/White Chena.png',                tag: 'Special',     name: 'White Chena',                desc: 'Delicate chena sweet — soft, light and mildly sweet',                  price: '₹360/kg',  bg: 'bg-gray-50'   },
  { image: '/images/sweets/Pakija.png',                     tag: 'Traditional', name: 'Pakija',                     desc: 'Traditional North Indian sweet with a rich, dense texture',            price: '₹320/kg',  bg: 'bg-orange-50' },
  { image: '/images/sweets/Dharma.png',                     tag: 'Classic',     name: 'Dharma',                     desc: 'Traditional sweet made with pure ghee and finest ingredients',         price: '₹340/kg',  bg: 'bg-amber-50'  },

  // Bengali & Special
  { image: '/images/sweets/Bengali Sweet.png',              tag: 'Premium',     name: 'Bengali Sweet',              desc: 'Classic chena-based Bengali sweet in rose syrup',                      price: '₹440/kg',  bg: 'bg-pink-50'   },
  { image: '/images/sweets/Kala Jamun.png',                 tag: 'Classic',     name: 'Kala Jamun',                 desc: 'Deep-fried dark gulab jamun soaked in aromatic sugar syrup',          price: '₹340/kg',  bg: 'bg-amber-50'  },
  { image: '/images/sweets/Gulab Fruit.png',                tag: 'Festive',     name: 'Gulab Fruit',                desc: 'Colourful fruit-shaped sweets made from khoya — a festive delight',   price: '₹520/kg',  bg: 'bg-pink-50'   },
  { image: '/images/sweets/Balushahi.png',                  tag: 'Bestseller',  name: 'Balushahi',                  desc: 'Flaky, crispy deep-fried sweet dipped in sugar syrup',                 price: '₹280/kg',  bg: 'bg-orange-50' },

  // Chocolate & Fusion
  { image: '/images/sweets/Choco Vanilla.png',              tag: 'Fusion',      name: 'Choco Vanilla',              desc: 'Classic chocolate-vanilla swirl barfi — a modern favourite',           price: '₹560/kg',  bg: 'bg-purple-50' },
  { image: '/images/sweets/Chocolate Bite.png',             tag: 'Fusion',      name: 'Chocolate Bite',             desc: 'Bite-sized chocolate mithai — where Indian meets indulgent',           price: '₹600/kg',  bg: 'bg-gray-50'   },
  { image: '/images/sweets/Fruit Crunch.png',               tag: 'Fusion',      name: 'Fruit Crunch',               desc: 'Fruity sweet with a crunchy surprise centre',                          price: '₹540/kg',  bg: 'bg-pink-50'   },
  { image: '/images/sweets/Mango Bite.png',                 tag: 'Seasonal',    name: 'Mango Bite',                 desc: 'Summer special mango-flavoured sweet bite — refreshing & sweet',      price: '₹520/kg',  bg: 'bg-yellow-50' },
  { image: '/images/sweets/Mewa Bite.png',                  tag: 'Premium',     name: 'Mewa Bite',                  desc: 'Dry fruit bite loaded with cashews, almonds and pistachios',           price: '₹640/kg',  bg: 'bg-amber-50'  },
  { image: '/images/sweets/Orange Bite.png',                tag: 'Fusion',      name: 'Orange Bite',                desc: 'Tangy orange-flavoured sweet bite with a zesty twist',                 price: '₹500/kg',  bg: 'bg-orange-50' },
  { image: '/images/sweets/Oreo Crunch.png',                tag: 'Fusion',      name: 'Oreo Crunch',                desc: 'Indulgent Oreo-topped barfi — a hit with kids and adults alike',       price: '₹580/kg',  bg: 'bg-gray-50'   },
  { image: '/images/sweets/Pista Bite.png',                 tag: 'Premium',     name: 'Pista Bite',                 desc: 'Pistachio-rich sweet bite with a delicate flavour and aroma',         price: '₹620/kg',  bg: 'bg-green-50'  },
  { image: '/images/sweets/Rose Bite.png',                  tag: 'Special',     name: 'Rose Bite',                  desc: 'Fragrant rose-flavoured sweet bite with a floral finish',              price: '₹520/kg',  bg: 'bg-pink-50'   },

  // Sugarless
  { image: '/images/sweets/Sugarless Sonpapdi.png',         tag: 'Guilt-Free',  name: 'Sugarless Son Papdi',        desc: 'The classic son papdi taste, crafted without refined sugar',           price: '₹320/kg',  bg: 'bg-green-50'  },
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
          {['All', 'Bestsellers', 'Festive', 'Premium', 'Seasonal', 'Traditional', 'Fusion', 'Guilt-Free'].map(f => (
            <button key={f} className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${f === 'All' ? 'bg-maroon text-white border-maroon' : 'border-amber-200 text-brand-text hover:border-maroon hover:text-maroon'}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sweets.map((p, i) => <ProductCard key={`${p.name}-${i}`} {...p} />)}
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