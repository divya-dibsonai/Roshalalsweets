import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import SweetsGrid from '@/components/SweetsGrid';

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
  { emoji: '🍡', tag: 'Bengali Sweets', name: 'Bengali Mix', desc: 'Assorted Bengali sweets in one mixed selection', price: 'TBD', bg: 'bg-pink-50', category: 'Bengali Sweets' },
  { image: '/images/sweets/Bengali Sweet.png', tag: 'Bengali Sweets', name: 'Bengali Sweet', desc: 'Classic chena-based Bengali sweet in rose syrup', price: 'TBD', bg: 'bg-pink-50', category: 'Bengali Sweets' },
  { emoji: '🍡', tag: 'Bengali Sweets', name: 'Dahi Chena Cup', desc: 'Sweetened yogurt and chena served in a cup', price: 'TBD', bg: 'bg-pink-50', category: 'Bengali Sweets' },
  { emoji: '🍡', tag: 'Bengali Sweets', name: 'Gulab/Mango Chena Cup', desc: 'Chena cup flavoured with rose or seasonal mango', price: 'TBD', bg: 'bg-pink-50', category: 'Bengali Sweets' },
  { image: '/images/sweets/kheer Mohan.png', tag: 'Bengali Sweets', name: 'Kheer Mohan', desc: 'Soft paneer dumplings soaked in saffron rabdi', price: 'TBD', bg: 'bg-blue-50', category: 'Bengali Sweets' },
  { image: '/images/sweets/Malai Chaap.png', tag: 'Bengali Sweets', name: 'Malai Chaap', desc: 'Delicate malai sweet with a soft, creamy texture', price: 'TBD', bg: 'bg-gray-50', category: 'Bengali Sweets' },
  { image: '/images/sweets/Pakija.png', tag: 'Bengali Sweets', name: 'Pakija', desc: 'Traditional North Indian sweet with a rich, dense texture', price: 'TBD', bg: 'bg-orange-50', category: 'Bengali Sweets' },
  { emoji: '🍡', tag: 'Bengali Sweets', name: 'Parval', desc: 'Pointed gourd stuffed with sweet khoya filling', price: 'TBD', bg: 'bg-pink-50', category: 'Bengali Sweets' },
  { emoji: '🍡', tag: 'Bengali Sweets', name: 'Rabri Cup', desc: 'Thickened, sweetened milk served chilled in a cup', price: 'TBD', bg: 'bg-pink-50', category: 'Bengali Sweets' },
  { emoji: '🍡', tag: 'Bengali Sweets', name: 'Rajbhog', desc: 'Large saffron-infused rasgulla stuffed with dry fruits', price: 'TBD', bg: 'bg-pink-50', category: 'Bengali Sweets' },
  { emoji: '🍡', tag: 'Bengali Sweets', name: 'Rasgulla', desc: 'Soft spongy chena balls soaked in light sugar syrup', price: 'TBD', bg: 'bg-pink-50', category: 'Bengali Sweets' },
  { emoji: '🍡', tag: 'Bengali Sweets', name: 'Rasmalai', desc: 'Chena discs soaked in sweetened, cardamom-flavoured milk', price: 'TBD', bg: 'bg-pink-50', category: 'Bengali Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: '1 Pc Chappan Bhog Thaal', desc: 'Single-serve platter of 56 traditional festive sweets', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: '2 Pc Chapan Bhog Thal', desc: 'Two-piece platter of assorted 56-bhog sweets', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Balushahi.png', tag: 'Desi Ghee Sweets', name: 'Balushahi', desc: 'Flaky, crispy deep-fried sweet dipped in sugar syrup', price: 'TBD', bg: 'bg-orange-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Besan Laddoo.png', tag: 'Desi Ghee Sweets', name: 'Besan Laddoo', desc: 'Roasted gram flour laddoo with ghee, sugar & cardamom', price: 'TBD', bg: 'bg-yellow-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Boondi Laddoo.png', tag: 'Desi Ghee Sweets', name: 'Boondi Laddoo', desc: 'Tiny crisp boondi bound together in a sweet ball', price: 'TBD', bg: 'bg-orange-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Chana Almond Bite', desc: 'Chickpea sweet bite studded with almonds', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Chana Laddoo.png', tag: 'Desi Ghee Sweets', name: 'Chana Laddoo', desc: 'Hearty chickpea laddoo packed with ghee and dry fruits', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Chandrakala', desc: 'Crescent-shaped fried pastry filled with sweet khoya', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Chura (Morning)', desc: 'Flattened rice sweet, a traditional morning treat', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Churma Laddu', desc: 'Ground wheat laddoo cooked in pure ghee and jaggery', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Dharma.png', tag: 'Desi Ghee Sweets', name: 'Dharma', desc: 'Traditional sweet made with pure ghee and finest ingredients', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Doda Barfi.png', tag: 'Desi Ghee Sweets', name: 'Doda Burfi', desc: 'Rustic Punjab-style wheat barfi cooked with ghee & jaggery', price: 'TBD', bg: 'bg-orange-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Dry Soanpapdi', desc: 'Flaky, dry-textured version of classic soan papdi', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Feeki Balushahi', desc: 'Mildly sweetened balushahi for a lighter treat', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Feeki Gujiya', desc: 'Low-sugar gujiya with a milder sweet filling', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Ghee Mix', desc: 'Assorted ghee-based sweets mixed together', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Gift Pack-Sweets', desc: 'Curated assortment of sweets packed for gifting', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Gujiya.png', tag: 'Desi Ghee Sweets', name: 'Gujiya', desc: 'Holi special khoya-filled pastries, fried to perfection', price: 'TBD', bg: 'bg-pink-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Guldana Boondi', desc: 'Sugar-coated boondi pearls, sweet and crunchy', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Imerti', desc: 'Spiral-shaped fried sweet soaked in sugar syrup', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Kala Jamun.png', tag: 'Desi Ghee Sweets', name: 'Kala Jamun', desc: 'Deep-fried dark gulab jamun soaked in sugar syrup', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Magdal', desc: 'Crisp lentil-based sweet with a delicate flavour', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Malai Puri.png', tag: 'Desi Ghee Sweets', name: 'Malaipuri', desc: 'Crispy puri soaked in thickened sweetened cream', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Malaipuri + Gujiya', desc: 'Combo pack of malai puri and gujiya', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Mewa Soanpapdi', desc: 'Flaky soan papdi loaded with dry fruits', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Mix Mithai', desc: 'Assorted selection of our classic mithai', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Modak', desc: 'Steamed or fried dumpling with sweet coconut filling', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Mysore Paag.png', tag: 'Desi Ghee Sweets', name: 'Mysore Pag', desc: 'Soft, melt-in-mouth South Indian besan sweet made with ghee', price: 'TBD', bg: 'bg-yellow-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Panjeeri Laddoo.png', tag: 'Desi Ghee Sweets', name: 'Panjeeri Laddoo', desc: 'Nourishing whole wheat laddoo with nuts, seeds & ghee', price: 'TBD', bg: 'bg-yellow-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Patisa', desc: 'Flaky, layered sweet similar to soan papdi', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Pinni Urd Dal', desc: 'Winter special laddoo made with urad dal and ghee', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Rajasthani Laddoo.png', tag: 'Desi Ghee Sweets', name: 'Rajasthani Laddoo', desc: 'Traditional Rajasthani style laddoo with a crumbly texture', price: 'TBD', bg: 'bg-orange-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Sugarless Besan Laddoo.png', tag: 'Desi Ghee Sweets', name: 'S L Besan Laddu', desc: 'Sugar-free version of classic besan laddoo', price: 'TBD', bg: 'bg-green-50', category: 'Desi Ghee Sweets' },
  { image: '/images/sweets/Sugarless Panjeeri Laddoo.png', tag: 'Desi Ghee Sweets', name: 'S L Panjeeri Laddu', desc: 'Sugar-free panjeeri laddoo for a healthier treat', price: 'TBD', bg: 'bg-green-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'S L Soan Papdi', desc: 'Sugar-free take on the classic flaky soan papdi', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Soan Papdi', desc: 'Melt-in-mouth flaky delight made with pure ghee & sugar', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Soan Papdi + Balushahi', desc: 'Combo pack of soan papdi and balushahi', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Soanpapdi + Dharma', desc: 'Combo pack of soan papdi and dharma sweets', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍯', tag: 'Desi Ghee Sweets', name: 'Sugar Less Mix', desc: 'Assorted sugar-free sweets for a guilt-free treat', price: 'TBD', bg: 'bg-amber-50', category: 'Desi Ghee Sweets' },
  { emoji: '🍂', tag: 'Gazak', name: 'Gur Kaju Roll Gazak', desc: 'Jaggery and cashew rolled into a crunchy gazak', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Gazak', name: 'Gur Rewri', desc: 'Sesame seed rewri sweetened with jaggery', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Gazak', name: 'Mewa Chikki', desc: 'Crunchy dry fruit chikki bound in jaggery', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Gazak', name: 'Moongfali Patti', desc: 'Peanut brittle made with jaggery, a winter favourite', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Gazak', name: 'Sada Gazak [Kutema]', desc: 'Plain sesame and jaggery winter gazak', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Gazak', name: 'Shahi Gazak', desc: 'Premium gazak loaded with dry fruits', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Gazak', name: 'Til Kaju Chikki', desc: 'Sesame and cashew brittle, crunchy and rich', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Gazak', name: 'Til Patti', desc: 'Thin sesame seed brittle sweetened with jaggery', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { image: '/images/sweets/Choco Vanilla.png', tag: 'Khoya Sweets', name: 'Choco Vanilla', desc: 'Classic chocolate-vanilla swirl barfi, a modern favourite', price: 'TBD', bg: 'bg-purple-50', category: 'Khoya Sweets' },
  { emoji: '🥛', tag: 'Khoya Sweets', name: 'Coconut Laddoo', desc: 'Sweet coconut laddoo rolled in desiccated coconut', price: 'TBD', bg: 'bg-yellow-50', category: 'Khoya Sweets' },
  { emoji: '🥛', tag: 'Khoya Sweets', name: 'Khoya (Raw Mava)', desc: 'Fresh raw khoya, unsweetened milk solids', price: 'TBD', bg: 'bg-yellow-50', category: 'Khoya Sweets' },
  { image: '/images/sweets/Khoya Barfi.png', tag: 'Khoya Sweets', name: 'Khoya Burfi', desc: 'Dense, creamy khoya barfi with cardamom', price: 'TBD', bg: 'bg-amber-50', category: 'Khoya Sweets' },
  { emoji: '🥛', tag: 'Khoya Sweets', name: 'Khoya Cutlate', desc: 'Khoya sweet shaped and fried like a cutlet', price: 'TBD', bg: 'bg-yellow-50', category: 'Khoya Sweets' },
  { emoji: '🥛', tag: 'Khoya Sweets', name: 'Khoya Gulkand Laddoo', desc: 'Khoya laddoo flavoured with sweet rose petal preserve', price: 'TBD', bg: 'bg-yellow-50', category: 'Khoya Sweets' },
  { image: '/images/sweets/Khoya Laddoo.png', tag: 'Khoya Sweets', name: 'Khoya Laddoo', desc: 'Rich khoya laddoo flavoured with cardamom and pistachios', price: 'TBD', bg: 'bg-cream', category: 'Khoya Sweets' },
  { emoji: '🥛', tag: 'Khoya Sweets', name: 'Khoya Mix Mithai', desc: 'Assorted khoya-based sweets in one selection', price: 'TBD', bg: 'bg-yellow-50', category: 'Khoya Sweets' },
  { image: '/images/sweets/Khoya Roll.png', tag: 'Khoya Sweets', name: 'Khoya Rolls', desc: 'Rolled khoya sweet stuffed with dry fruits and rose petals', price: 'TBD', bg: 'bg-pink-50', category: 'Khoya Sweets' },
  { image: '/images/sweets/Lauki Lauj.png', tag: 'Khoya Sweets', name: 'Lauki/Aam Ki Lauj', desc: 'Traditional bottle gourd sweet slow-cooked with milk & sugar', price: 'TBD', bg: 'bg-green-50', category: 'Khoya Sweets' },
  { emoji: '🥛', tag: 'Khoya Sweets', name: 'Malai Burfi', desc: 'Soft, creamy malai barfi with a delicate texture', price: 'TBD', bg: 'bg-yellow-50', category: 'Khoya Sweets' },
  { emoji: '🥛', tag: 'Khoya Sweets', name: 'Meeng Burfi', desc: 'Traditional khoya barfi with a distinct rich flavour', price: 'TBD', bg: 'bg-yellow-50', category: 'Khoya Sweets' },
  { image: '/images/sweets/Milkcake.png', tag: 'Khoya Sweets', name: 'Milk Cake', desc: 'Soft, grainy milk cake slow-cooked to golden perfection', price: 'TBD', bg: 'bg-amber-50', category: 'Khoya Sweets' },
  { image: '/images/sweets/Peda.png', tag: 'Khoya Sweets', name: 'Peda', desc: 'Classic milk peda with a crumbly, melt-in-mouth texture', price: 'TBD', bg: 'bg-amber-50', category: 'Khoya Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Anjeer Honey Dew', desc: 'Fig-based sweet infused with honey', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Anjeer Rolls', desc: 'Rolled fig sweet stuffed with dry fruits', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Badam Kesar Burfi', desc: 'Almond barfi flavoured with saffron', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Badam Lichi', desc: 'Almond sweet with a fruity lychee twist', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Bites Mix', desc: 'Assorted bite-sized dry fruit sweets', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Butter Scotch Bite', desc: 'Butterscotch-flavoured sweet bite, rich and creamy', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Chocolate Bite.png', tag: 'Mewa Sweets', name: 'Chocolate Bite', desc: 'Bite-sized chocolate mithai — where Indian meets indulgent', price: 'TBD', bg: 'bg-gray-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Chocolate Mango Roll', desc: 'Chocolate sweet rolled with mango flavouring', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Crunches Mix', desc: 'Assorted crunchy dry fruit sweet bites', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Dry Fruit Basket', desc: 'Basket-shaped sweet filled with assorted dry fruits', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Fruit Crunch.png', tag: 'Mewa Sweets', name: 'Fruit Crunch', desc: 'Fruity sweet with a crunchy surprise centre', price: 'TBD', bg: 'bg-pink-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Gond Khus Ladddoo', desc: 'Edible gum laddoo with dry fruits, a winter special', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Gulab Fruit Burfi', desc: 'Fruit-flavoured burfi with a hint of rose', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Gulab Mewa Laddoo', desc: 'Dry fruit laddoo with a delicate rose flavour', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Kaju Anarkali.png', tag: 'Mewa Sweets', name: 'Kaju Anarkali', desc: 'Elegant kaju sweet shaped like a blooming flower', price: 'TBD', bg: 'bg-pink-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Kaju Basket.png', tag: 'Mewa Sweets', name: 'Kaju Basket', desc: 'Cashew basket filled with dry fruit, perfect for gifting', price: 'TBD', bg: 'bg-purple-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Kaju Burfi', desc: 'Premium cashew fudge, rich and smooth', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Kaju Diya', desc: 'Cashew sweet shaped like a traditional diya lamp', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Kaju Kalash.png', tag: 'Mewa Sweets', name: 'Kaju Kalash', desc: 'Artisan cashew sweet shaped as a kalash for celebrations', price: 'TBD', bg: 'bg-amber-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Kaju Kesar Katli', desc: 'Cashew katli flavoured with saffron', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Kaju Mix', desc: 'Assorted cashew-based sweets in one mix', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Kaju Roll.png', tag: 'Mewa Sweets', name: 'Kaju Rolls', desc: 'Soft cashew roll filled with colourful dry fruit filling', price: 'TBD', bg: 'bg-gray-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Kaju Soanpapdi', desc: 'Cashew-enriched soan papdi, extra rich and flaky', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Khajoor Laddoo', desc: 'Date-based laddoo, naturally sweet and nutritious', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Mango Bite.png', tag: 'Mewa Sweets', name: 'Mango Bite', desc: 'Summer special mango-flavoured sweet bite', price: 'TBD', bg: 'bg-yellow-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Mango Delight', desc: 'Mango-flavoured sweet delight, fruity and refreshing', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Mewa Bite.png', tag: 'Mewa Sweets', name: 'Mewa Bite', desc: 'Dry fruit bite loaded with cashews, almonds and pistachios', price: 'TBD', bg: 'bg-amber-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Orange Bite.png', tag: 'Mewa Sweets', name: 'Orange Bite', desc: 'Tangy orange-flavoured sweet bite with a zesty twist', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Oreo Crunch.png', tag: 'Mewa Sweets', name: 'Oreo Crunch', desc: 'Indulgent Oreo-topped barfi, a hit with kids and adults', price: 'TBD', bg: 'bg-gray-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Paan Shot', desc: 'Paan-flavoured sweet bite with a refreshing finish', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Pista Bite.png', tag: 'Mewa Sweets', name: 'Pista Bite', desc: 'Pistachio-rich sweet bite with a delicate flavour', price: 'TBD', bg: 'bg-green-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Pista Burfi', desc: 'Pistachio-rich burfi with a delicate green hue', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Rose Bite.png', tag: 'Mewa Sweets', name: 'Rose Bite', desc: 'Fragrant rose-flavoured sweet bite with a floral finish', price: 'TBD', bg: 'bg-pink-50', category: 'Mewa Sweets' },
  { image: '/images/sweets/Shahi Laddoo.png', tag: 'Mewa Sweets', name: 'Shahi Laddoo', desc: 'Royal laddoo loaded with dry fruits, saffron and silver varq', price: 'TBD', bg: 'bg-amber-50', category: 'Mewa Sweets' },
  { emoji: '🌰', tag: 'Mewa Sweets', name: 'Tiranga Burfi', desc: 'Tricolour burfi layered with three distinct flavours', price: 'TBD', bg: 'bg-orange-50', category: 'Mewa Sweets' },
  { emoji: '🍂', tag: 'Monsoon Special', name: 'Feeka Ghevar', desc: 'Mildly sweet, disc-shaped monsoon delicacy', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Monsoon Special', name: 'Kesar Kaju Ghevar', desc: 'Saffron and cashew topped ghevar, rich and festive', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Monsoon Special', name: 'Kesariya Ghevar', desc: 'Saffron-flavoured ghevar, a Teej and Rakhi favourite', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Monsoon Special', name: 'Khoya Ghevar', desc: 'Ghevar topped generously with rich khoya', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Monsoon Special', name: 'Lite Ghevar', desc: 'Lighter, less sweet version of classic ghevar', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Monsoon Special', name: 'Malai Faini', desc: 'Delicate faini soaked in sweetened malai', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Monsoon Special', name: 'Malai Ghevar', desc: 'Ghevar topped with thick, creamy malai', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Monsoon Special', name: 'Sada Meetha Ghevar', desc: 'Classic sweetened ghevar, simple and traditional', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Monsoon Special', name: 'Soot Faini', desc: 'Thread-like fried sweet, light and crisp', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Monsoon Special', name: 'Sugar Less Ghevar', desc: 'Sugar-free ghevar for a healthier monsoon treat', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🥘', tag: 'Snacks', name: 'Badam Milk (Rlkc)', desc: 'Warm almond-flavoured milk from our restaurant counter', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Bedmi Thali', desc: 'Spiced urad dal kachori served with a full thali', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Cholle Bhature (Rlkc)', desc: 'Spiced chickpea curry served with fluffy fried bread', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Dahi', desc: 'Fresh, thick homemade curd', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Dahi Cup', desc: 'Fresh curd served in a convenient single cup', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Dhokla/Khandavi', desc: 'Steamed savoury Gujarati snack, soft and tangy', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Extra Bhatura (Rlkc)', desc: 'Additional fluffy fried bhatura to go with your meal', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Extra Cholle (Rlkc)', desc: 'Extra serving of spiced chickpea curry', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Extra Pori Kachori', desc: 'Additional crisp, spiced pori kachori', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Grilled Cheese Sandwich', desc: 'Toasted sandwich with melted cheese filling', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Grilled Paneer Sandwich', desc: 'Toasted sandwich filled with spiced paneer', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Grilled Veg Sandwich', desc: 'Toasted sandwich packed with fresh vegetables', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Jalebi', desc: 'Crispy, syrup-soaked spirals, a classic Indian favourite', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Kachori Thali', desc: 'Full thali served with hot, spiced kachori', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Kesar Badam Milk', desc: 'Saffron and almond flavoured warm milk', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Khasta  Kachori', desc: 'Crisp, flaky kachori with a spiced lentil filling', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Khasta + Subji', desc: 'Crisp kachori served with spiced vegetable curry', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Lassi (Rlkc)', desc: 'Thick, chilled sweet yogurt drink', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Paneer Pakoda', desc: 'Deep-fried paneer fritters, crisp and spiced', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Poori Thali', desc: 'Full thali served with hot, fluffy poori', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Samosa', desc: 'Crisp fried pastry filled with spiced potatoes', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Samosa + Cholle', desc: 'Samosa served with spiced chickpea curry', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Samosa + Subji', desc: 'Samosa served with spiced vegetable curry', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Stuffed Kulcha Bread', desc: 'Soft leavened bread stuffed with a spiced filling', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Veg Cheese Burger', desc: 'Vegetable patty burger topped with melted cheese', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🥘', tag: 'Snacks', name: 'Veg Sandwich', desc: 'Fresh vegetable sandwich, simple and satisfying', price: 'TBD', bg: 'bg-gray-50', category: 'Snacks' },
  { emoji: '🍂', tag: 'Winter Special', name: 'Gazar Halwa (Hot)', desc: 'Warm carrot halwa slow-cooked in milk and ghee', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Winter Special', name: 'Gazar Loge', desc: 'Winter carrot sweet cooked with khoya and ghee', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Winter Special', name: 'Gazar Paag', desc: 'Carrot-based paag sweet, rich and warming', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Winter Special', name: 'Gulab Jamun (Hot)', desc: 'Warm, syrup-soaked milk dumplings, a classic favourite', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Winter Special', name: 'Kadak Sohan Halwa', desc: 'Crisp, dense halwa cooked slow in pure ghee', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Winter Special', name: 'Moong Dal Halwa', desc: 'Rich lentil halwa slow-cooked with ghee and nuts', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Winter Special', name: 'Sada Gazar Halwa', desc: 'Simple, classic carrot halwa cooked in milk', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Winter Special', name: 'Til Khoya Peda', desc: 'Sesame-studded peda made with rich khoya', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
  { emoji: '🍂', tag: 'Winter Special', name: 'Til Laddoo', desc: 'Sesame seed laddoo, a warming winter treat', price: 'TBD', bg: 'bg-green-50', category: 'Seasonal Sweets' },
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
    
        <SweetsGrid sweets={sweets} />
      </section>

      {/* Gifting Banner */}
      <div id="gifting" className="bg-maroon mx-6 md:mx-10 mb-14 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8">
        <div className="text-6xl">🎁</div>
        <div className="flex-1">
          <h2 className="font-playfair text-2xl md:text-3xl text-cream font-bold mb-2">Festive Gifting & Hampers</h2>
          <p className="text-cream/75 text-sm leading-relaxed">Customise a sweet hamper for Diwali, Eid, weddings, or any celebration. We pack with premium packaging and deliver across India.</p>
        </div>
        <Link href="/gifting" className="flex-shrink-0 bg-gold-pale text-maroon px-7 py-3 rounded-full font-bold text-sm hover:bg-gold transition-colors">
  Build a Hamper →
</Link>
      </div>
    </>
  );
}