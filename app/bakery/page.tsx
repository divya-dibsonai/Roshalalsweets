import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

const bakery = [
  { image: '/images/bakery/1.png',                        tag: 'Fresh Daily',  name: 'Bakery Item 1',           desc: 'Freshly baked and ready to enjoy',                          price: '₹—/pc',  bg: 'bg-amber-50'  },
  { image: '/images/bakery/3.png',                        tag: 'Fresh Daily',  name: 'Bakery Item 3',           desc: 'Freshly baked and ready to enjoy',                          price: '₹—/pc',  bg: 'bg-yellow-50' },
  { image: '/images/bakery/4.png',                        tag: 'Fresh Daily',  name: 'Bakery Item 4',           desc: 'Freshly baked and ready to enjoy',                          price: '₹—/pc',  bg: 'bg-orange-50' },
  { image: '/images/bakery/Bombay Khari.png',             tag: 'Classic',      name: 'Bombay Khari',            desc: 'Light, flaky puff pastry biscuits — perfect with tea',      price: '₹—/kg',  bg: 'bg-amber-50'  },
  { image: '/images/bakery/Bombay Pav.png',                tag: 'Homestyle',    name: 'Bombay Pav',              desc: 'Soft, pillowy pav bread baked fresh daily',                 price: '₹—/pack', bg: 'bg-yellow-50' },
  { image: '/images/bakery/Burger Bun.png',                tag: 'Fresh Daily',  name: 'Burger Bun',              desc: 'Soft, fluffy buns perfect for burgers and sliders',         price: '₹—/pack', bg: 'bg-amber-50'  },
  { image: '/images/bakery/Butter Kaju.png',               tag: 'Premium',      name: 'Butter Kaju',             desc: 'Rich, buttery cashew-flavoured bakery delight',             price: '₹—/kg',  bg: 'bg-orange-50' },
  { image: '/images/bakery/Cake Rusk 1.png',               tag: 'Crunchy',      name: 'Cake Rusk',               desc: 'Twice-baked, crunchy rusk — a classic tea-time favourite',  price: '₹—/kg',  bg: 'bg-amber-50'  },
  { image: '/images/bakery/Cake Rusk 2.png',               tag: 'Crunchy',      name: 'Cake Rusk (Style 2)',     desc: 'Twice-baked, crunchy rusk — a classic tea-time favourite',  price: '₹—/kg',  bg: 'bg-yellow-50' },
  { image: '/images/bakery/Cake Rusk Butter Kaju.png',     tag: 'Special',      name: 'Cake Rusk Butter Kaju',   desc: 'Crunchy rusk infused with rich butter & cashew flavour',    price: '₹—/kg',  bg: 'bg-orange-50' },
  { image: '/images/bakery/Cake Rusk Jeera.png',           tag: 'Savoury',      name: 'Cake Rusk Jeera',         desc: 'Crunchy rusk with a savoury hint of roasted cumin',         price: '₹—/kg',  bg: 'bg-amber-50'  },
  { image: '/images/bakery/Cake Rusk.png',                 tag: 'Classic',      name: 'Cake Rusk Original',      desc: 'The timeless original — crisp, light and delicious',       price: '₹—/kg',  bg: 'bg-yellow-50' },
  { image: '/images/bakery/Mathri.png',                    tag: 'Traditional',  name: 'Mathri',                  desc: 'Crispy, flaky savoury snack — a tea-time favourite',        price: '₹—/kg',  bg: 'bg-amber-50'  },
  { image: '/images/bakery/Milk Rusk.png',                 tag: 'Bestseller',   name: 'Milk Rusk',               desc: 'Soft-baked rusk enriched with real milk',                   price: '₹—/kg',  bg: 'bg-orange-50' },
  { image: '/images/bakery/Milk Rusk(1).png',              tag: 'Bestseller',   name: 'Milk Rusk (Box)',     desc: 'Soft-baked rusk enriched with real milk',                   price: '₹—/kg',  bg: 'bg-yellow-50' },
  { image: '/images/bakery/Pista Badam.png',               tag: 'Premium',      name: 'Pista Badam',             desc: 'Indulgent bakery treat with pistachio & almond flavour',    price: '₹—/kg',  bg: 'bg-orange-50' },
  { image: '/images/bakery/Pizza Base.png',                tag: 'Fresh Daily',  name: 'Pizza Base',               desc: 'Ready-to-top pizza base baked fresh for the perfect crust', price: '₹—/pc',  bg: 'bg-amber-50'  },
  { image: '/images/bakery/Sandwich Bread.png',            tag: 'Homestyle',    name: 'Sandwich Bread',          desc: 'Soft, evenly sliced bread ideal for sandwiches',            price: '₹—/loaf', bg: 'bg-yellow-50' },
  { image: '/images/bakery/Twisty Puff.png',               tag: 'Special',      name: 'Twisty Puff',             desc: 'Flaky, spiral-twisted puff pastry snack',                   price: '₹—/pc',  bg: 'bg-orange-50' },
];

export default function BakeryPage() {
  return (
    <>
      <PageHero
        image="/bakery.png"
        imageAlt="Fresh Bakery"
        tag="Baked Fresh Daily"
        title="Bakery"
        highlight="Items"
        subtitle="From traditional breads to eggless artisanal cakes — our bakery brings warmth and sweetness to every occasion."
      />
      <section className="px-6 md:px-10 py-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {bakery.map(p => <ProductCard key={p.name} {...p} />)}
        </div>
      </section>
    </>
  );
}
