import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

const bakery = [
  { emoji: '🥐', tag: 'Fresh Daily', name: 'Butter Croissant', desc: 'Flaky, buttery croissants baked fresh every morning', price: '₹35/pc', bg: 'bg-amber-50' },
  { emoji: '🍞', tag: 'Homestyle', name: 'Whole Wheat Bread', desc: 'Soft, nutritious bread baked with whole wheat flour', price: '₹60/loaf', bg: 'bg-yellow-50' },
  { emoji: '🎂', tag: 'Celebration', name: 'Eggless Cake', desc: 'Moist, delicious eggless cakes in multiple flavours', price: '₹450/kg', bg: 'bg-pink-50' },
  { emoji: '🍪', tag: 'Crunchy', name: 'Nankhatai', desc: 'Traditional Indian shortbread biscuits with cardamom', price: '₹280/kg', bg: 'bg-orange-50' },
  { emoji: '🥧', tag: 'Special', name: 'Khari Biscuit', desc: 'Light, flaky puff pastry biscuits — perfect with tea', price: '₹200/kg', bg: 'bg-cream' },
  { emoji: '🧁', tag: 'Festive', name: 'Cupcakes', desc: 'Soft eggless cupcakes with cream cheese frosting', price: '₹50/pc', bg: 'bg-purple-50' },
  { emoji: '🍩', tag: 'Sweet', name: 'Gulab Jamun Doughnut', desc: 'Fusion delight — doughnut glazed with gulab jamun syrup', price: '₹60/pc', bg: 'bg-rose-50' },
  { emoji: '🥮', tag: 'Traditional', name: 'Shakarpara', desc: 'Sweet fried dough pieces — a festive Diwali staple', price: '₹220/kg', bg: 'bg-amber-50' },
];

export default function BakeryPage() {
  return (
    <>
      <PageHero
        emoji="🥐"
        tag="Baked Fresh Daily"
        title="Bakery"
        highlight="Items"
        subtitle="From traditional nankhatai to eggless celebration cakes — our bakery brings warmth and sweetness to every occasion."
      />
      <section className="px-6 md:px-10 py-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {bakery.map(p => <ProductCard key={p.name} {...p} />)}
        </div>
      </section>
    </>
  );
}
