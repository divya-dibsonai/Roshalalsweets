import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Namkeen & Snacks — Aloo Bhujia, Mathri, Mix Namkeen & More',
  description: 'Buy fresh North Indian namkeen & snacks — Aloo Bhujia, Mix Namkeen, Mathri, Roasted Chana & more. Handmade with pure ingredients at Roshan Lal Ji Sweets, Kasganj.',
  openGraph: {
    title: 'Namkeen & Snacks | Roshan Lal Ji Sweets',
    description: 'Crispy, spicy namkeen & snacks — Aloo Bhujia, Mathri, Dal Moth & more. Perfect with chai.',
    url: 'https://roshanlalsweets.vercel.app/namkeen',
  },
};

const namkeen = {
  'Healthy Bites': [
    { image: '/images/namkeen/Roasted Chana Jor Garam.JPG', tag: 'Spicy', name: 'Chana Jor Garam', desc: 'Flattened chickpeas tossed with tangy spices', price: '₹160/kg', bg: 'bg-red-50' },
    { image: '/images/namkeen/Dal Biji Namkeen.JPG', tag: 'Classic', name: 'Dal Biji', desc: 'Crunchy mixed lentil namkeen blend', price: '₹200/kg', bg: 'bg-amber-50' },
    { image: '/images/namkeen/Hing Mixture Namkeen.JPG', tag: 'Spicy', name: 'Hing Mixture', desc: 'Asafoetida-spiced crunchy mixture', price: '₹220/kg', bg: 'bg-red-50' },
    { image: '/images/namkeen/Khokla Chana Namkeen.JPG', tag: 'Crunchy', name: 'Khokla Chana', desc: 'Crisp roasted chana namkeen', price: '₹180/kg', bg: 'bg-green-50' },
    { image: null, tag: 'Healthy', name: 'Millet Chips', desc: 'Light, crunchy chips made from millet', price: '₹—', bg: 'bg-emerald-50' }, // no photo available
    { image: '/images/namkeen/Moong Bhujiya.JPG', tag: 'Crispy', name: 'Moong Bujiya', desc: 'Crispy fried moong dal bhujiya', price: '₹180/kg', bg: 'bg-yellow-50' },
    { image: '/images/namkeen/Gud Chana.JPG', tag: 'Sweet', name: 'Roasted Gud Chana', desc: 'Roasted chana coated in jaggery', price: '₹160/kg', bg: 'bg-yellow-50' },
    { image: '/images/namkeen/Roasted Hing Chana.JPG', tag: 'Healthy', name: 'Roasted Hing Chana', desc: 'Roasted chickpeas seasoned with asafoetida', price: '₹180/kg', bg: 'bg-green-50' },
    { image: '/images/namkeen/Roasted Makhana- Mint Pudina.JPG', tag: 'Light', name: 'Roasted Makhana Jar - Mint/Pudina', desc: 'Roasted fox nuts seasoned with mint', price: '₹300/kg', bg: 'bg-emerald-50' },
    { image: '/images/namkeen/Roasted Makhana- Chilli Tomato.JPG', tag: 'Spicy', name: 'Roasted Makhana Jar - Chilli Tomato', desc: 'Roasted fox nuts seasoned with chilli-tomato', price: '₹300/kg', bg: 'bg-red-50' },
    { image: '/images/namkeen/Roasted Makhana- salt & Pepper (Falhari).JPG', tag: 'Light', name: 'Roasted Makhana Jar - Salt & Pepper (Falhari)', desc: 'Roasted fox nuts with salt & pepper, fasting-friendly', price: '₹300/kg', bg: 'bg-amber-50' },
    { image: '/images/namkeen/Roasted Moong.JPG', tag: 'Healthy', name: 'Roasted Moth/Moong - Moong', desc: 'Roasted moong dal, a light protein-rich snack', price: '₹160/kg', bg: 'bg-green-50' },
    { image: '/images/namkeen/Roasted Moth.JPG', tag: 'Healthy', name: 'Roasted Moth/Moong - Moth', desc: 'Roasted moth beans, a light crunchy snack', price: '₹160/kg', bg: 'bg-emerald-50' },
    { image: null, tag: 'Classic', name: 'Roasted Peanuts', desc: 'Simple roasted peanuts, lightly salted', price: '₹—', bg: 'bg-amber-50' }, // no photo available
    // Photos on file with no matching sheet item — included for completeness, flag with client
    { image: '/images/namkeen/Beetroot Chips- Chilli Chat.JPG', tag: 'Crispy', name: 'Beetroot Chips - Chilli Chat', desc: 'Crispy beetroot chips tossed in chaat masala', price: '₹180/kg', bg: 'bg-yellow-50' },
    { image: '/images/namkeen/Oats Chips- Punjabi Tadka.JPG', tag: 'Healthy', name: 'Oats Chips - Punjabi Tadka', desc: 'Crunchy oats chips with a Punjabi tadka twist', price: '₹200/kg', bg: 'bg-emerald-50' },
    { image: '/images/namkeen/Ragi Chips- Peri Peri.JPG', tag: 'Healthy', name: 'Ragi Chips - Peri Peri', desc: 'Crunchy ragi chips with a peri-peri kick', price: '₹200/kg', bg: 'bg-green-50' },
    { image: '/images/namkeen/Roasted Bajra Mix.JPG', tag: 'Healthy', name: 'Roasted Bajra Mix', desc: 'Wholesome roasted bajra snack mix', price: '₹180/kg', bg: 'bg-amber-50' },
  ],
  'Namkeen Roshanlal': [
    { image: null, tag: 'Premium', name: 'Badam Laccha (Kg)', desc: 'Crisp almond-flavoured laccha namkeen', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Premium', name: 'Kaju Dalmoth (Rl) 100 Gm', desc: 'Cashew-studded dalmoth namkeen mix', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Kaju Dalmoth (Rl) 250G', desc: 'Cashew-studded dalmoth namkeen mix', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Kaju Dalmoth (Rl) 300 Gm', desc: 'Cashew-studded dalmoth namkeen mix', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Kaju Dalmoth (Rl) 500 Gms', desc: 'Cashew-studded dalmoth namkeen mix', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Kaju Dalmoth (Rl) Kg', desc: 'Cashew-studded dalmoth namkeen mix', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Savoury', name: 'Kaju Samosa (Kg)', desc: 'Crisp samosas with a cashew-studded filling', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Savoury', name: 'Kaju Samosa 400 Gm', desc: 'Crisp samosas with a cashew-studded filling', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Classic', name: 'Khasta/Samosa/Mathri Kg', desc: 'Assorted crisp savouries — khasta, samosa & mathri', price: '₹—', bg: 'bg-yellow-50' },
    { image: null, tag: 'Premium', name: 'Masala Kaju (Rl) 100 Gm', desc: 'Roasted cashews tossed in a spiced masala coating', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Masala Kaju (Rl) 500 Gm', desc: 'Roasted cashews tossed in a spiced masala coating', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Masala Kaju (Rl) Kg', desc: 'Roasted cashews tossed in a spiced masala coating', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Masala Kaju 250G', desc: 'Roasted cashews tossed in a spiced masala coating', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Classic', name: 'Mathri 400 Gm', desc: 'Crispy, flaky savoury discs, a tea-time classic', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Classic', name: 'Mini Khasta 400 Gm', desc: 'Bite-sized flaky khasta pastries', price: '₹—', bg: 'bg-yellow-50' },
    { image: null, tag: 'Classic', name: 'Mini Samosa 400 Gm', desc: 'Bite-sized crisp samosas', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Classic', name: 'Moong Dal 300G', desc: 'Crunchy fried moong dal namkeen', price: '₹—', bg: 'bg-yellow-50' },
    { image: null, tag: 'Classic', name: 'Namkeen Sev 300G Rl', desc: 'Thin, crispy gram-flour sev', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Classic', name: 'Namkeen Sev Rl (Kg)', desc: 'Thin, crispy gram-flour sev', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Premium', name: 'Roasted Almonds 100 Gm', desc: 'Lightly roasted, crunchy almonds', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Roasted Almonds 250 Gm', desc: 'Lightly roasted, crunchy almonds', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Roasted Badam (Kg)', desc: 'Lightly roasted, crunchy almonds', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Roasted Kaju (Kg)', desc: 'Lightly roasted, crunchy cashews', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Roasted Kaju 100 Gm', desc: 'Lightly roasted, crunchy cashews', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Roasted Kaju 250G', desc: 'Lightly roasted, crunchy cashews', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Premium', name: 'Roasted Kaju 500 Gm', desc: 'Lightly roasted, crunchy cashews', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Classic', name: 'Sada Dalmoth (Kg)', desc: 'Classic plain dalmoth namkeen mix', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Classic', name: 'Sada Dalmoth 300G', desc: 'Classic plain dalmoth namkeen mix', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Classic', name: 'Sada Dalmoth 500G', desc: 'Classic plain dalmoth namkeen mix', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Classic', name: 'Sem Beej (Kg)', desc: 'Roasted flat bean seeds, a crunchy snack', price: '₹—', bg: 'bg-green-50' },
    { image: null, tag: 'Classic', name: 'Sem Ke Beej 200 Gm', desc: 'Roasted flat bean seeds, a crunchy snack', price: '₹—', bg: 'bg-green-50' },
    { image: null, tag: 'Special', name: 'Special Namkeen (Rl) 250G', desc: 'House-special namkeen blend', price: '₹—', bg: 'bg-yellow-50' },
    { image: null, tag: 'Special', name: 'Special Namkeen (Rl) 300 Gms', desc: 'House-special namkeen blend', price: '₹—', bg: 'bg-yellow-50' },
    { image: null, tag: 'Special', name: 'Special Namkeen (Rl)Kg', desc: 'House-special namkeen blend', price: '₹—', bg: 'bg-yellow-50' },
    { image: null, tag: 'Special', name: 'Special Namkeen(Rl) 500 Gm', desc: 'House-special namkeen blend', price: '₹—', bg: 'bg-yellow-50' },
    { image: null, tag: 'Special', name: 'Special Namken (Rl) 100 Gm', desc: 'House-special namkeen blend', price: '₹—', bg: 'bg-yellow-50' },
  ],
  'Misc & Others': [
    { image: null, tag: 'Pickle', name: '1 Kg Pickle Mango/Mix/Chilli', desc: 'Traditional pickle — mango, mixed or chilli', price: '₹—', bg: 'bg-red-50' },
    { image: null, tag: 'Pickle', name: '1 Kg Pickle Red Chilli', desc: 'Spicy red chilli pickle', price: '₹—', bg: 'bg-red-50' },
    { image: null, tag: 'Pickle', name: '500 Gm Pickle Mix/Mango/Chilli', desc: 'Traditional pickle — mango, mixed or chilli', price: '₹—', bg: 'bg-red-50' },
    { image: null, tag: 'Pickle', name: '500 Gm Pickle Red Chilli', desc: 'Spicy red chilli pickle', price: '₹—', bg: 'bg-red-50' },
    { image: null, tag: 'Service', name: 'Delivery Charge', desc: 'Delivery service charge', price: '₹—', bg: 'bg-gray-50' }, // billing line, not a product
    { image: null, tag: 'Dairy', name: 'Desi Ghee', desc: 'Pure, traditional clarified butter', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Festive', name: 'Dry Thandai 200G', desc: 'Dry thandai mix with nuts and spices', price: '₹—', bg: 'bg-amber-50' },
    { image: null, tag: 'Pickle', name: 'Garlic/Tenti Pickle 250 Gm', desc: 'Tangy garlic or tenti pickle', price: '₹—', bg: 'bg-red-50' },
    { image: null, tag: 'Service', name: 'Hall Charges', desc: 'Banquet hall rental charge', price: '₹—', bg: 'bg-gray-50' }, // billing line, not a product
    { image: null, tag: 'Service', name: 'Hall Decoration Charges', desc: 'Banquet hall decoration charge', price: '₹—', bg: 'bg-gray-50' }, // billing line, not a product
    { image: null, tag: 'Festive', name: 'Kesariya Badam Thandai 100 Ml', desc: 'Saffron-almond flavoured thandai drink', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Festive', name: 'Kesariya Badam Thandai 250Ml', desc: 'Saffron-almond flavoured thandai drink', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Festive', name: 'Kesariya Badam Thandai 500 Ml', desc: 'Saffron-almond flavoured thandai drink', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Festive', name: 'Kesariya Badam Thandai 750 Ml', desc: 'Saffron-almond flavoured thandai drink', price: '₹—', bg: 'bg-orange-50' },
    { image: null, tag: 'Grocery', name: 'Matar', desc: 'Fresh green peas', price: '₹—', bg: 'bg-green-50' },
    { image: null, tag: 'Dairy', name: 'Milk Packet', desc: 'Fresh packaged milk', price: '₹—', bg: 'bg-blue-50' },
    { image: null, tag: 'Misc', name: 'Misc. Items', desc: 'Miscellaneous items', price: '₹—', bg: 'bg-gray-50' }, // generic/billing line, not a product
    { image: null, tag: 'Dairy', name: 'Paneer', desc: 'Fresh, soft cottage cheese', price: '₹—', bg: 'bg-gray-50' },
    { image: null, tag: 'Beverage', name: 'Sharbat 250 Ml', desc: 'Refreshing traditional fruit sharbat', price: '₹—', bg: 'bg-pink-50' },
    { image: null, tag: 'Beverage', name: 'Sharbat 750 Ml', desc: 'Refreshing traditional fruit sharbat', price: '₹—', bg: 'bg-pink-50' },
    { image: null, tag: 'Beverage', name: 'Sharbat Rl 100 Ml', desc: 'Refreshing traditional fruit sharbat', price: '₹—', bg: 'bg-pink-50' },
    { image: null, tag: 'Gift', name: 'Snacks Box (Mrp)', desc: 'Assorted snacks gift box', price: '₹—', bg: 'bg-yellow-50' },
    { image: null, tag: 'Gift', name: 'Sweet (Mrp)', desc: 'Assorted sweets, sold at MRP', price: '₹—', bg: 'bg-pink-50' },
    { image: null, tag: 'Festive', name: 'Thandai Powder (Kg)', desc: 'Traditional thandai spice powder mix', price: '₹—', bg: 'bg-amber-50' },
  ],
};

export default function NamkeenPage() {
  return (
    <>
      <PageHero
        emoji="🌶️"
        tag="Crispy & Spicy"
        title="Namkeen &"
        highlight="Snacks"
        subtitle="The perfect companions for your evening chai — crunchy, spicy, and made with the finest ingredients."
      />
      <section className="px-6 md:px-10 py-14 max-w-7xl mx-auto">
        <div className="flex gap-2 flex-wrap mb-10">
          {['All', 'Crispy', 'Spicy', 'Healthy', 'Crunchy', 'Light'].map(f => (
            <button key={f} className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${f === 'All' ? 'bg-maroon text-white border-maroon' : 'border-amber-200 text-brand-text hover:border-maroon hover:text-maroon'}`}>
              {f}
            </button>
          ))}
        </div>
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
