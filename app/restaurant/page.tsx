import PageHero from '@/components/PageHero';

const menu = {
  'Starters': [
    { name: 'Paneer Tikka', desc: 'Grilled cottage cheese with mint chutney', price: '₹220' },
    { name: 'Aloo Tikki Chaat', desc: 'Crispy potato patties with yoghurt & chutneys', price: '₹120' },
    { name: 'Dahi Bhalla', desc: 'Soft lentil dumplings in spiced yoghurt', price: '₹130' },
    { name: 'Raj Kachori', desc: 'Giant stuffed kachori with sprouts, sev & chutneys', price: '₹150' },
  ],
  'Main Course': [
    { name: 'Dal Makhani', desc: 'Slow-cooked black lentils in buttery tomato gravy', price: '₹250' },
    { name: 'Paneer Butter Masala', desc: 'Cottage cheese in rich, creamy tomato sauce', price: '₹280' },
    { name: 'Dum Aloo', desc: 'Baby potatoes slow-cooked in aromatic spices', price: '₹220' },
    { name: 'Mix Veg Curry', desc: 'Seasonal vegetables in a robust, flavourful gravy', price: '₹200' },
  ],
  'Breads & Rice': [
    { name: 'Butter Naan', desc: 'Soft tandoor-baked bread with butter', price: '₹50' },
    { name: 'Laccha Paratha', desc: 'Flaky layered whole wheat flatbread', price: '₹45' },
    { name: 'Jeera Rice', desc: 'Fragrant basmati rice tempered with cumin', price: '₹150' },
    { name: 'Veg Biryani', desc: 'Aromatic saffron rice with vegetables & whole spices', price: '₹250' },
  ],
  'Sweets & Drinks': [
    { name: 'Gulab Jamun', desc: 'Soft milk dumplings soaked in rose syrup — 2 pcs', price: '₹80' },
    { name: 'Kheer', desc: 'Creamy rice pudding with saffron & pistachios', price: '₹90' },
    { name: 'Lassi (Sweet/Salted)', desc: 'Chilled whipped yoghurt — thick North Indian style', price: '₹80' },
    { name: 'Masala Chai', desc: 'Spiced tea with ginger, cardamom & milk', price: '₹40' },
  ],
};

export default function RestaurantPage() {
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

        {/* Menu Sections */}
        <h2 className="font-playfair text-3xl text-maroon font-bold mb-8 text-center">Our Menu</h2>

        {Object.entries(menu).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h3 className="font-playfair text-xl text-brand-dark font-semibold mb-5 pb-3 border-b-2 border-gold-light flex items-center gap-2">
              {category}
            </h3>
            <div className="space-y-3">
              {items.map(item => (
                <div key={item.name} className="bg-white rounded-xl border border-amber-100 px-5 py-4 flex items-center justify-between hover:shadow-sm transition-shadow">
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-brand-dark">{item.name}</div>
                    <div className="text-xs text-amber-700/60 mt-0.5">{item.desc}</div>
                  </div>
                  <div className="font-bold text-maroon text-sm ml-6 flex-shrink-0">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-xs text-amber-700/50 mt-8">All prices inclusive of taxes. Pure vegetarian kitchen. 🌿</p>
      </section>
    </>
  );
}
