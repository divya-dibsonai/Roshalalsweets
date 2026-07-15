'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';

const menu = {
  'Indian Main Course': {
    icon: '🫓',
    items: [
      { name: 'Aloo Gobhi', desc: 'Potatoes and cauliflower tossed with everyday spices', price: '₹—' },
      { name: 'Aloo Gobhi Muter', desc: 'Potatoes, cauliflower & green peas in a light masala', price: '₹—' },
      { name: 'Aloo Jeera', desc: 'Potatoes tempered with cumin and light spices', price: '₹—' },
      { name: 'Banerasi Dum Aloo', desc: 'Baby potatoes slow-cooked Banarasi style in rich gravy', price: '₹—' },
      { name: 'Chana Masala', desc: 'Chickpeas simmered in a tangy onion-tomato masala', price: '₹—' },
      { name: 'Chhole Masala', desc: 'Classic spiced chickpea curry', price: '₹—' },
      { name: 'Dal Amritsari', desc: 'Whole black gram dal cooked Amritsari style', price: '₹—' },
      { name: 'Dal Bukhara', desc: 'Rich, slow-simmered black lentils with butter', price: '₹—' },
      { name: 'Dal Fry', desc: 'Yellow lentils tempered with garlic and spices', price: '₹—' },
      { name: 'Dal Makhani', desc: 'Slow-cooked black lentils in a buttery tomato gravy', price: '₹—' },
      { name: 'Dal Panchratan', desc: 'A blend of five lentils cooked together', price: '₹—' },
      { name: 'Dal Tadka', desc: 'Yellow lentils finished with a hot ghee tempering', price: '₹—' },
      { name: 'Dhaniya Mushroom', desc: 'Mushrooms in a fresh coriander-based gravy', price: '₹—' },
      { name: 'Dil Khush Kofta', desc: 'Soft vegetable koftas in a creamy gravy', price: '₹—' },
      { name: 'Handi Paneer', desc: 'Cottage cheese simmered in a handi-style rich gravy', price: '₹—' },
      { name: 'Indian Dish (Customised)', desc: 'Made-to-order Indian dish as per your preference', price: '₹—' },
      { name: 'Kadhai Paneer', desc: 'Cottage cheese and peppers tossed in kadhai masala', price: '₹—' },
      { name: 'Kashmiri Dum Aloo', desc: 'Baby potatoes in a mildly sweet Kashmiri-style gravy', price: '₹—' },
      { name: 'Malai Kofta Makhmali', desc: 'Silky koftas in a rich, creamy malai gravy', price: '₹—' },
      { name: 'Masala Mushrum', desc: 'Mushrooms cooked in a spiced onion-tomato masala', price: '₹—' },
      { name: 'Matar Paneer', desc: 'Cottage cheese and green peas in tomato gravy', price: '₹—' },
      { name: 'Mix Veg', desc: 'Seasonal vegetables tossed in a light curry', price: '₹—' },
      { name: 'Muglai Paneer', desc: 'Cottage cheese in a rich Mughlai-style gravy', price: '₹—' },
      { name: 'Mushroom Do Pyaza', desc: 'Mushrooms cooked with a double portion of onions', price: '₹—' },
      { name: 'Mutter Methi Malai', desc: 'Green peas and fenugreek leaves in a creamy gravy', price: '₹—' },
      { name: 'Mutter Mushrum', desc: 'Green peas and mushrooms in a light masala', price: '₹—' },
      { name: 'Navratan Korma', desc: 'Nine vegetables and fruits in a mildly sweet korma', price: '₹—' },
      { name: 'Palak Paneer', desc: 'Cottage cheese cubes in a smooth spinach gravy', price: '₹—' },
      { name: 'Paneer Achari', desc: 'Cottage cheese in a tangy pickle-spiced gravy', price: '₹—' },
      { name: 'Paneer Amritsari', desc: 'Cottage cheese cooked Amritsari style', price: '₹—' },
      { name: 'Paneer Bhujiya', desc: 'Cottage cheese sautéed with onions and spices', price: '₹—' },
      { name: 'Paneer Butter Masala', desc: 'Cottage cheese in a rich, creamy tomato sauce', price: '₹—' },
      { name: 'Paneer Do Pyaza', desc: 'Cottage cheese with a double portion of onions', price: '₹—' },
      { name: 'Paneer Kurchan', desc: 'Cottage cheese in a distinctively spiced gravy', price: '₹—' },
      { name: 'Paneer Lababdar', desc: 'Cottage cheese in a thick, creamy tomato-based gravy', price: '₹—' },
      { name: 'Paneer Methi Malai', desc: 'Cottage cheese and fenugreek leaves in a creamy sauce', price: '₹—' },
      { name: 'Paneer Pasanda', desc: 'Stuffed cottage cheese slices in a rich gravy', price: '₹—' },
      { name: 'Paneer Takatak', desc: 'Cottage cheese tossed on a hot griddle with spices', price: '₹—' },
      { name: 'Paneer Tikka Makhani', desc: 'Grilled cottage cheese tikkas in a buttery gravy', price: '₹—' },
      { name: 'Paneer Tikka Masala', desc: 'Grilled cottage cheese tikkas in a spiced masala', price: '₹—' },
      { name: 'Potato Capsicum', desc: 'Potatoes and bell peppers tossed with spices', price: '₹—' },
      { name: 'Punjabi Kofta', desc: 'Vegetable koftas in a classic Punjabi-style gravy', price: '₹—' },
      { name: 'Shahi Paneer', desc: 'Cottage cheese in a royal, cashew-enriched gravy', price: '₹—' },
      { name: 'Soya Kadhai Chaap', desc: 'Soya chaap tossed in kadhai masala', price: '₹—' },
      { name: 'Soya Malai Chaap Gravy', desc: 'Soya chaap in a creamy malai gravy', price: '₹—' },
      { name: 'Soya Masala Chaap Gravy', desc: 'Soya chaap in a spiced masala gravy', price: '₹—' },
      { name: 'Soya Mutter Keema', desc: 'Minced soya with green peas in a spiced masala', price: '₹—' },
      { name: 'Tawa Paneer', desc: 'Cottage cheese cooked tawa-style with peppers and onions', price: '₹—' },
      { name: 'Veg Butter Masala', desc: 'Mixed vegetables in a rich, buttery tomato gravy', price: '₹—' },
      { name: 'Veg Jaipuri', desc: 'Mixed vegetables in a Jaipuri-style spiced gravy', price: '₹—' },
      { name: 'Veg Kadhai', desc: 'Seasonal vegetables tossed in kadhai masala', price: '₹—' },
      { name: 'Veg Kofta', desc: 'Vegetable koftas in a mildly spiced gravy', price: '₹—' },
      { name: 'Veg Korma', desc: 'Mixed vegetables in a mild, creamy korma', price: '₹—' },
    ],
  },
  'Chinese': {
    icon: '🥡',
    items: [
      { name: 'Baby Corn Chilli Gravy', desc: 'Baby corn tossed in a spicy chilli gravy', price: '₹—' },
      { name: 'Baby Corn Manchurian Gravy', desc: 'Baby corn in a classic Manchurian gravy', price: '₹—' },
      { name: 'Chilli Garlic Fried Rice', desc: 'Fried rice tossed with chilli and garlic', price: '₹—' },
      { name: 'Chilli Garlic Noodles', desc: 'Noodles tossed with chilli, garlic and vegetables', price: '₹—' },
      { name: 'Chinese Fried Rice', desc: 'Classic wok-tossed vegetable fried rice', price: '₹—' },
      { name: 'Chowmein + Veg Chilli', desc: 'Chowmein served with vegetable chilli', price: '₹—' },
      { name: 'Chowmien + Paneer Manchurian', desc: 'Chowmein served with paneer Manchurian', price: '₹—' },
      { name: 'Chowmien + Veg Manchurian', desc: 'Chowmein served with vegetable Manchurian', price: '₹—' },
      { name: 'Chowmien+ Chilli Paneer', desc: 'Chowmein served with chilli paneer', price: '₹—' },
      { name: 'Fried Rice + Chilli Paneer', desc: 'Fried rice served with chilli paneer', price: '₹—' },
      { name: 'Fried Rice + Paneer Manchurian', desc: 'Fried rice served with paneer Manchurian', price: '₹—' },
      { name: 'Fried Rice + Veg Chilli', desc: 'Fried rice served with vegetable chilli', price: '₹—' },
      { name: 'Fried Rice + Veg Manchurian', desc: 'Fried rice served with vegetable Manchurian', price: '₹—' },
      { name: 'Hakka Noodles', desc: 'Wok-tossed noodles with vegetables, Hakka style', price: '₹—' },
      { name: 'Mushroom Chilli Gravy', desc: 'Mushrooms tossed in a spicy chilli gravy', price: '₹—' },
      { name: 'Mushroom Manchurian Gravy', desc: 'Mushrooms in a classic Manchurian gravy', price: '₹—' },
      { name: 'Paneer Chilli Gravy', desc: 'Cottage cheese tossed in a spicy chilli gravy', price: '₹—' },
      { name: 'Paneer Fried Rice', desc: 'Fried rice tossed with cottage cheese', price: '₹—' },
      { name: 'Paneer Manchurian Gravy', desc: 'Cottage cheese in a classic Manchurian gravy', price: '₹—' },
      { name: 'Paneer Noodles', desc: 'Noodles tossed with cottage cheese and vegetables', price: '₹—' },
      { name: 'Schezwan Fried Rice', desc: 'Fried rice tossed in fiery Schezwan sauce', price: '₹—' },
      { name: 'Schezwan Noodles', desc: 'Noodles tossed in fiery Schezwan sauce', price: '₹—' },
      { name: 'Singapore Yellow Noodles', desc: 'Lightly spiced Singapore-style yellow noodles', price: '₹—' },
      { name: 'Singapori Yellow Fried Rice', desc: 'Lightly spiced Singapore-style yellow fried rice', price: '₹—' },
      { name: 'Soya Chilli Gravy', desc: 'Soya chunks tossed in a spicy chilli gravy', price: '₹—' },
      { name: 'Soya Manchurian Gravy', desc: 'Soya chunks in a classic Manchurian gravy', price: '₹—' },
      { name: 'Veg Chilli Gravy', desc: 'Mixed vegetables tossed in a spicy chilli gravy', price: '₹—' },
      { name: 'Veg Manchurian Gravy', desc: 'Mixed vegetable balls in a classic Manchurian gravy', price: '₹—' },
      { name: 'Veg Noodles', desc: 'Wok-tossed noodles with mixed vegetables', price: '₹—' },
    ],
  },
  'South Indian': {
    icon: '🥞',
    items: [
      { name: 'Butter Masala Dosa', desc: 'Crisp dosa with masala filling, finished with butter', price: '₹—' },
      { name: 'Butter Paneer Dosa', desc: 'Crisp dosa stuffed with paneer, finished with butter', price: '₹—' },
      { name: 'Butter Plain Dosa', desc: 'Classic crisp dosa finished with butter', price: '₹—' },
      { name: 'Idli Sambhar', desc: 'Steamed rice cakes served with sambhar and chutney', price: '₹—' },
      { name: 'Masala Dosa', desc: 'Crisp dosa filled with spiced potato masala', price: '₹—' },
      { name: 'Mix Uttapam', desc: 'Thick savoury pancake topped with mixed vegetables', price: '₹—' },
      { name: 'Onion Masala Dosa', desc: 'Crisp dosa with onions and spiced potato masala', price: '₹—' },
      { name: 'Onion Plain Dosa', desc: 'Crisp dosa topped with onions', price: '₹—' },
      { name: 'Onion Uttapam', desc: 'Thick savoury pancake topped with onions', price: '₹—' },
      { name: 'Paneer Dosa', desc: 'Crisp dosa filled with spiced cottage cheese', price: '₹—' },
      { name: 'Paneer Uttapam', desc: 'Thick savoury pancake topped with cottage cheese', price: '₹—' },
      { name: 'Plain Dosa', desc: 'Classic crisp, thin rice-and-lentil crepe', price: '₹—' },
      { name: 'Rava Masala Dosa', desc: 'Crisp semolina dosa with spiced potato masala', price: '₹—' },
      { name: 'Rava Onion Masala Dosa', desc: 'Crisp semolina dosa with onions and potato masala', price: '₹—' },
      { name: 'Rava Onion Plain Dosa', desc: 'Crisp semolina dosa topped with onions', price: '₹—' },
      { name: 'Rava Paneer Dosa', desc: 'Crisp semolina dosa filled with cottage cheese', price: '₹—' },
      { name: 'Rava Plain Dosa', desc: 'Classic crisp semolina dosa', price: '₹—' },
      { name: 'South Indian Platter', desc: 'An assorted platter of South Indian favourites', price: '₹—' },
      { name: 'Special Dosa', desc: 'House-special stuffed dosa', price: '₹—' },
      { name: 'Spring Dosa', desc: 'Crisp dosa rolled with a savoury filling', price: '₹—' },
      { name: 'Tomato Uttapam', desc: 'Thick savoury pancake topped with tomatoes', price: '₹—' },
    ],
  },
  'Pizza': {
    icon: '🍕',
    items: [
      { name: 'Mini Pizza', desc: 'Small-sized pizza topped with classic vegetables', price: '₹—' },
      { name: 'Mushroom Pizza', desc: 'Pizza topped with fresh mushrooms and cheese', price: '₹—' },
      { name: 'Paneer Tikka Chilli Pizza', desc: 'Pizza topped with spicy paneer tikka', price: '₹—' },
      { name: 'Plain Cheese Pizza', desc: 'Classic pizza loaded with cheese', price: '₹—' },
      { name: 'Special Pizza', desc: 'House-special pizza with a mix of toppings', price: '₹—' },
      { name: 'Spicy Paneer Pizza', desc: 'Pizza topped with spicy paneer and cheese', price: '₹—' },
      { name: 'Veg Cheese Pizza', desc: 'Pizza topped with mixed vegetables and cheese', price: '₹—' },
      { name: 'Veg Supreme Pizza', desc: 'Loaded pizza with an assortment of vegetable toppings', price: '₹—' },
    ],
  },
  'Shakes, Soda & Sundae': {
    icon: '🥤',
    items: [
      { name: 'Awadh Ki Shaan', desc: 'House-special signature shake', price: '₹—' },
      { name: 'B.Stoch Shake', desc: 'Creamy butterscotch-flavoured milkshake', price: '₹—' },
      { name: 'Black Coffee', desc: 'Freshly brewed black coffee', price: '₹—' },
      { name: 'Black Forest Single Sundae', desc: 'Chocolate ice cream sundae, Black Forest style', price: '₹—' },
      { name: 'Blue Moon', desc: 'Signature blue-hued fruit mocktail', price: '₹—' },
      { name: 'Butter Fantasy', desc: 'Rich, buttery ice cream indulgence', price: '₹—' },
      { name: 'Butterscotch Soda', desc: 'Fizzy soda with butterscotch flavour', price: '₹—' },
      { name: 'Chocolate Shake', desc: 'Thick, creamy chocolate milkshake', price: '₹—' },
      { name: 'Cocktail Garden', desc: 'Refreshing mixed-fruit mocktail', price: '₹—' },
      { name: 'Coffe Tangy Shake', desc: 'Coffee shake with a tangy twist', price: '₹—' },
      { name: 'Cold Coffee Plain', desc: 'Chilled cold coffee, classic style', price: '₹—' },
      { name: 'Cold Coffee W Ice Cream', desc: 'Chilled cold coffee topped with ice cream', price: '₹—' },
      { name: 'Creamy Vanilla Shake', desc: 'Smooth, creamy vanilla milkshake', price: '₹—' },
      { name: 'Create Your Own Sundae', desc: 'Build your own sundae with your favourite toppings', price: '₹—' },
      { name: 'Delicious Pista', desc: 'Rich pistachio-flavoured ice cream treat', price: '₹—' },
      { name: 'Divorce Party', desc: 'Signature multi-scoop indulgent sundae', price: '₹—' },
      { name: 'Fresh Lime Soda', desc: 'Refreshing fizzy lime soda, sweet or salted', price: '₹—' },
      { name: 'Fruit  Cocktail Sundae', desc: 'Ice cream sundae topped with mixed fruits', price: '₹—' },
      { name: 'Fruit Valley', desc: 'Assorted fresh fruit dessert', price: '₹—' },
      { name: 'Green Tea', desc: 'Freshly brewed green tea', price: '₹—' },
      { name: 'Hot Coffee', desc: 'Freshly brewed hot coffee', price: '₹—' },
      { name: 'Hot Tea', desc: 'Freshly brewed hot Indian tea', price: '₹—' },
      { name: 'Kaju Kishmish Shake', desc: 'Milkshake blended with cashew and raisins', price: '₹—' },
      { name: 'Lassi', desc: 'Chilled whipped yoghurt, sweet or salted', price: '₹—' },
      { name: 'Lemon Tea', desc: 'Hot tea infused with fresh lemon', price: '₹—' },
      { name: 'Love 21', desc: 'Signature layered fruit-and-cream dessert', price: '₹—' },
      { name: 'Love Affair', desc: 'Signature indulgent ice cream sundae', price: '₹—' },
      { name: 'Mango Lassi', desc: 'Chilled whipped yoghurt blended with mango', price: '₹—' },
      { name: 'Mango Shake', desc: 'Thick, creamy mango milkshake', price: '₹—' },
      { name: 'Mango Tropical Float', desc: 'Mango float with a tropical fruit twist', price: '₹—' },
      { name: 'Mix Fruit Shake', desc: 'Milkshake blended with assorted fresh fruits', price: '₹—' },
      { name: 'Orange Ocean Float', desc: 'Refreshing orange-flavoured ice cream float', price: '₹—' },
      { name: 'Oreo Shake', desc: 'Creamy milkshake blended with Oreo cookies', price: '₹—' },
      { name: 'Over Load Junction', desc: 'Loaded sundae with generous toppings', price: '₹—' },
      { name: 'Pina Colada Soda', desc: 'Fizzy soda with pineapple and coconut flavour', price: '₹—' },
      { name: 'Pineapple Shake', desc: 'Thick, creamy pineapple milkshake', price: '₹—' },
      { name: 'Premium Cone', desc: 'Premium ice cream served in a crisp cone', price: '₹—' },
      { name: 'Premium Scoop', desc: 'A scoop of premium ice cream', price: '₹—' },
      { name: 'Regular Cone', desc: 'Classic ice cream served in a crisp cone', price: '₹—' },
      { name: 'Regular Scoop', desc: 'A scoop of classic ice cream', price: '₹—' },
      { name: 'Sea Blue Moon', desc: 'Signature blue-hued fruit mocktail', price: '₹—' },
      { name: 'Smoothie', desc: 'Thick, chilled fruit smoothie', price: '₹—' },
      { name: 'Special Cone', desc: 'House-special ice cream cone', price: '₹—' },
      { name: 'Special Scoop', desc: 'House-special ice cream scoop', price: '₹—' },
      { name: 'Special Sundae', desc: 'House-special loaded ice cream sundae', price: '₹—' },
      { name: 'Strawberry Delight Shake', desc: 'Creamy strawberry-flavoured milkshake', price: '₹—' },
      { name: 'Strawberry Float', desc: 'Refreshing strawberry-flavoured ice cream float', price: '₹—' },
      { name: 'Sweet 16', desc: 'Signature layered dessert indulgence', price: '₹—' },
      { name: 'Sweet Fruit', desc: 'Assorted sweetened fresh fruit dessert', price: '₹—' },
      { name: 'Triple Fountain', desc: 'Three-scoop indulgent ice cream sundae', price: '₹—' },
      { name: 'Voltage 440', desc: 'Signature high-energy mixed shake', price: '₹—' },
    ],
  },
};

type Category = keyof typeof menu;

export default function RestaurantPage() {
  const categories = Object.keys(menu) as Category[];
  const [active, setActive] = useState<Category>(categories[0]);

  return (
    <>
      <PageHero
        emoji="🍽️"
        tag="Dine With Us"
        title="Our"
        highlight="Restaurant"
        subtitle="Authentic North Indian cuisine served with warmth. Every dish is cooked fresh, with the same love and purity that goes into our sweets."
      />

      <section className="px-6 md:px-10 py-14 max-w-5xl mx-auto">
        {/* Hours & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {[
            { icon: '🕐', title: 'Opening Hours', lines: ['Mon–Sun: 8:00 AM – 10:00 PM', 'Kitchen closes at 9:30 PM'] },
            { icon: '📍', title: 'Location', lines: ['Roshan Lal Ji Sweets', 'Main Branch, North India'] },
            { icon: '📞', title: 'Reservations', lines: ['+91-7055513961', 'info@roshanlaljisweets.com'] },
          ].map(info => (
            <div key={info.title} className="bg-white rounded-2xl border border-amber-100 p-6 flex gap-4">
              <div className="text-3xl">{info.icon}</div>
              <div>
                <h4 className="font-bold text-sm text-maroon mb-2">{info.title}</h4>
                {info.lines.map(l => <p key={l} className="text-xs text-brand-text/70 leading-relaxed">{l}</p>)}
              </div>
            </div>
          ))}
        </div>

        {/* Menu Heading */}
        <h2 className="font-playfair text-3xl text-maroon font-bold mb-6 text-center">Our Menu</h2>

        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                active === cat
                  ? 'bg-maroon text-white border-maroon'
                  : 'border-amber-200 text-brand-text hover:border-maroon hover:text-maroon bg-white'
              }`}
            >
              <span>{menu[cat].icon}</span>
              <span>{cat}</span>
              <span className={active === cat ? 'text-white/70' : 'text-amber-700/40'}>
                {menu[cat].items.length}
              </span>
            </button>
          ))}
        </div>

        {/* Active Category List */}
        <div>
          <h3 className="font-playfair text-xl text-brand-dark font-semibold mb-5 pb-3 border-b-2 border-gold-light flex items-center gap-2">
            <span>{menu[active].icon}</span>
            {active}
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {menu[active].items.map(item => (
              <div
                key={item.name}
                className="bg-white rounded-xl border border-amber-100 px-5 py-4 flex items-center justify-between hover:shadow-sm hover:border-gold transition-all"
              >
                <div className="flex-1 min-w-0 pr-4">
                  <div className="font-semibold text-sm text-brand-dark truncate">{item.name}</div>
                  <div className="text-xs text-amber-700/60 mt-0.5 line-clamp-1">{item.desc}</div>
                </div>
                <div className="font-bold text-maroon text-sm flex-shrink-0">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-amber-700/50 mt-10">All prices inclusive of taxes. Pure vegetarian kitchen. 🌿</p>
      </section>
    </>
  );
}