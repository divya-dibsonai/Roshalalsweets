import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Gifting — Customisable Gift Boxes & Hampers',
  description: 'Curated, fully customisable gift boxes and festive hampers from Roshan Lal Ji Sweets — perfect for Diwali, weddings, corporate gifting & every celebration. Kasganj, UP.',
  openGraph: {
    title: 'Gifting | Roshan Lal Ji Sweets & Restaurant',
    description: 'Customisable gift boxes and hampers for every occasion — pick a box, tell us what you\'d like inside, and we\'ll pack it fresh with premium presentation.',
    url: 'https://roshanlalsweets.vercel.app/gifting',
  },
};

// WhatsApp number used for all "Customize" enquiries (update if needed)
const WHATSAPP_NUMBER = '917055513961';

function waLink(boxName: string) {
  const message = encodeURIComponent(
    `Hi! I'd like to enquire about customising the "${boxName}" gift box.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

// ─────────────────────────────────────────────────────────────
// 45 boxes with generic-but-fancy placeholder names, mapped in
// order to the real image files in /public/images/gifting.
// Swap in real product names/descriptions later whenever you have
// them — just edit the `name` / `tag` fields in boxNames below.
// Add or remove entries freely; the grid reflows automatically.
// ─────────────────────────────────────────────────────────────
const boxBg = ['bg-amber-50','bg-gray-50','bg-pink-50','bg-blue-50','bg-green-50','bg-orange-50','bg-purple-50','bg-cream','bg-yellow-50'];

const boxNames: { name: string; tag: string }[] = [
  { name: 'Aurum Celebration Box', tag: 'Premium' },
  { name: 'Kasganj Signature Hamper', tag: 'Bestseller' },
  { name: 'Ivory Treasure Box', tag: 'Premium' },
  { name: 'Diwali Radiance Box', tag: 'Festive' },
  { name: 'Regal Heritage Hamper', tag: 'Premium' },
  { name: 'Saffron Bliss Box', tag: 'Festive' },
  { name: 'Golden Ember Hamper', tag: 'Premium' },
  { name: 'Shagun Special Box', tag: 'Occasion' },
  { name: 'Velvet Petal Hamper', tag: 'Special' },
  { name: 'Royal Varq Collection', tag: 'Premium' },
  { name: 'Utsav Joy Box', tag: 'Festive' },
  { name: 'Emerald Garden Hamper', tag: 'Special' },
  { name: 'Copper Lantern Box', tag: 'Festive' },
  { name: 'Wedding Bells Hamper', tag: 'Occasion' },
  { name: 'Mishri Elegance Box', tag: 'Premium' },
  { name: 'Sunrise Bhog Box', tag: 'Everyday' },
  { name: 'Amber Grace Hamper', tag: 'Special' },
  { name: 'Rangoli Charm Box', tag: 'Festive' },
  { name: 'Corporate Prestige Box', tag: 'Corporate' },
  { name: 'Zari Splendour Hamper', tag: 'Premium' },
  { name: 'Petite Delight Box', tag: 'Everyday' },
  { name: 'Maharaja Trove', tag: 'Premium' },
  { name: 'Rose Petal Hamper', tag: 'Special' },
  { name: 'Bandhani Bliss Box', tag: 'Festive' },
  { name: 'Silver Kalash Hamper', tag: 'Premium' },
  { name: 'Everyday Sweetness Box', tag: 'Everyday' },
  { name: 'Prosperity Trunk', tag: 'Occasion' },
  { name: 'Kesar Elegance Hamper', tag: 'Premium' },
  { name: 'Team Celebration Box', tag: 'Corporate' },
  { name: 'Lotus Bloom Hamper', tag: 'Special' },
  { name: 'Heritage Trunk Box', tag: 'Premium' },
  { name: 'Festive Radiance Hamper', tag: 'Festive' },
  { name: 'Client Appreciation Box', tag: 'Corporate' },
  { name: 'Marigold Charm Hamper', tag: 'Festive' },
  { name: 'Signature Reserve Box', tag: 'Bestseller' },
  { name: 'Anniversary Bliss Hamper', tag: 'Occasion' },
  { name: 'Pearl Trove Box', tag: 'Premium' },
  { name: 'Little Joy Box', tag: 'Everyday' },
  { name: 'Grand Utsav Hamper', tag: 'Festive' },
  { name: 'Vermillion Delight Box', tag: 'Special' },
  { name: 'Office Festive Box', tag: 'Corporate' },
  { name: 'Ruby Radiance Hamper', tag: 'Premium' },
  { name: 'New Beginnings Box', tag: 'Occasion' },
  { name: 'Classic Reserve Hamper', tag: 'Bestseller' },
  { name: 'Grand Celebration Trunk', tag: 'Premium' },
];

// Real filenames from /public/images/gifting (in this order)
const boxImageFiles = [
  'IMG_8872.JPG', 'IMG_8873.JPG', 'IMG_8874.JPG', 'IMG_8879.JPG', 'IMG_8884.JPG',
  'IMG_8885.JPG', 'IMG_8897.JPG', 'IMG_8901.JPG', 'IMG_8903.JPG', 'IMG_8907.JPG',
  'IMG_8909.JPG', 'IMG_8913.JPG', 'IMG_8915.JPG', 'IMG_8919.JPG', 'IMG_8932.JPG',
  'IMG_8935.JPG', 'IMG_8938.JPG', 'IMG_8940.JPG', 'IMG_8941.JPG', 'IMG_8946.JPG',
  'IMG_8948.JPG', 'IMG_8951.JPG', 'IMG_8954.JPG', 'IMG_8961.JPG', 'IMG_8963.JPG',
  'IMG_8965.JPG', 'IMG_8966.JPG', 'IMG_8968.JPG', 'IMG_8972.JPG', 'IMG_8976.JPG',
  'IMG_8977.JPG', 'IMG_8981.JPG', 'IMG_8986.JPG', 'IMG_8988.JPG', 'IMG_8990.JPG',
  'IMG_8993.JPG', 'IMG_8998.JPG', 'IMG_9003.JPG', 'IMG_9008.JPG', 'IMG_9018.JPG',
  'IMG_9052.JPG', 'IMG_9074.JPG', 'IMG_9076.JPG', 'IMG_9089.JPG', 'IMG_9094.JPG',
];

const giftBoxes = boxNames.map((box, i) => ({
  image: `/images/gifting/${boxImageFiles[i]}`,
  name: box.name,
  tag: box.tag,
  bg: boxBg[i % boxBg.length],
}));

export default function GiftingPage() {
  return (
    <>
      <PageHero
        emoji="🎁"
        tag="Made To Your Taste"
        title="Gifts That"
        highlight="Delight"
        subtitle="Every box is customisable — pick a style below, tell us what you'd like inside, and we'll pack it fresh with premium presentation for any occasion."
      />

      <section className="px-6 md:px-10 py-14 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-9 flex-wrap gap-4">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl text-maroon font-bold">Choose a Box to Customise</h2>
            <p className="text-amber-700/70 text-sm mt-1">Tap any box to enquire on WhatsApp — we'll help you build the perfect hamper</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {giftBoxes.map((box) => (
            <a
              key={box.name}
              href={waLink(box.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-amber-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer block"
            >
              <div className={`w-full aspect-square relative ${box.bg ?? 'bg-gold-light'}`}>
                <Image
                  src={box.image}
                  alt={box.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-bold text-gold uppercase tracking-wider mb-1">{box.tag}</div>
                <div className="font-playfair text-base font-semibold text-brand-dark mb-1.5 leading-snug">{box.name}</div>
                {box.desc && (
                  <div className="text-[11px] text-amber-700/70 mb-3 leading-relaxed">{box.desc}</div>
                )}
                <div className="flex items-center gap-1.5 text-sm font-bold text-maroon">
                  💬 Enquire to Customize
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom CTA banner — matches Sweets page gifting banner style */}
      <div className="bg-maroon mx-6 md:mx-10 mb-14 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8">
        <div className="text-6xl">🎁</div>
        <div className="flex-1">
          <h2 className="font-playfair text-2xl md:text-3xl text-cream font-bold mb-2">Don't See What You're Looking For?</h2>
          <p className="text-cream/75 text-sm leading-relaxed">Tell us your budget, occasion, and preferences — we'll build a completely custom hamper just for you.</p>
        </div>
        <a
          href={waLink('Custom Hamper')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-gold-pale text-maroon px-7 py-3 rounded-full font-bold text-sm hover:bg-gold transition-colors"
        >
          Chat With Us →
        </a>
      </div>
    </>
  );
}
