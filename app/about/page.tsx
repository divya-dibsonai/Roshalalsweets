import type { Metadata } from 'next';
import Image from 'next/image';
import HeroJourneyVideo from '@/components/about/HeroJourneyVideo';
import DomainsVideo from '@/components/about/DomainsVideo';
import StatsCounter from '@/components/about/StatsCounter';
import JourneyTimeline from '@/components/about/JourneyTimeline';

export const metadata: Metadata = {
  title: 'About Us — Our Story Since Before Independence',
  description: 'Learn about Roshan Lal Ji Sweets — founded before India\'s independence by Late Shri Roshan Lal Ji. A family legacy of pure, hygienic, delicious sweets in Kasganj, UP.',
  openGraph: {
    title: 'Our Story | Roshan Lal Ji Sweets & Restaurant',
    description: 'A family sweet shop founded before 1947. Three generations of pure ghee sweets, love, and tradition in Kasganj, Uttar Pradesh.',
    url: 'https://roshanlalsweets.vercel.app/about',
  },
};

const timeline = [
  { year: 'Pre-1947', label: 'Founded', desc: 'Late Shri Roshan Lal Ji establishes the sweet shop with a mission to provide pure, quality sweets.', image: '/founder.jpg', caption: 'Late Shri Roshan Lal Ji — Founder' },
  { year: '1960s', label: 'Growing Trust', desc: 'Customers from surrounding districts make special trips for our signature Son Papdi and Kaju Katli.', image: null },
  { year: '1980s', label: 'Expansion', desc: 'Second generation joins. Restaurant wing added to serve hot North Indian food.', image: '/kailash.JPG', caption: 'Shri Kailash Chand Ji — Second Generation' },
  { year: '2000s', label: 'Modernisation', desc: 'Hygienic workshop upgrades, new bakery and Bhaji Box lines introduced.', image: null },
  { year: 'Today', label: 'Pan-India Reach', desc: 'Customers from all corners of India. Fourth generation upholding the legacy.', image: null },
];

const verticals = [
  { image: '/about-restaurant.png', title: 'Restaurant', desc: 'Hot North Indian food served fresh, every day.' },
  { image: '/bakery.png', title: 'Bakery', desc: 'Fresh-baked breads, cakes and pastries.' },
  { image: '/about-sweets.jpg', title: 'Traditional Sweets', desc: 'Pure ghee mithai made the old way.' },
  { image: '/about-namkeen.png', title: 'Namkeen & Snacks', desc: 'Crisp, savoury snacks for every occasion.' },
];


const galleryImages = [
  { src: '/founder.jpg', size: 'large' },
  { src: '/bakery.png', size: 'small' },
  { src: '/sweet.png', size: 'small' },
  { src: '/kailash.JPG', size: 'large' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section className="min-h-[75vh] flex items-center bg-cream px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-4">
              80+ Years of Sweet Traditions
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-maroon leading-tight mb-6">
              Four generations.
              <br />
              Thousands of celebrations.
              <br />
              One commitment to
              <br />
              authentic taste.
            </h1>
            <a
              href="#story"
              className="inline-block text-sm font-semibold text-brand-dark border-b-2 border-gold pb-1 hover:text-maroon transition-colors"
            >
              Scroll to Explore ↓
            </a>
          </div>

          <HeroJourneyVideo />
        </div>
      </section>

      {/* ── SECTION 2: OUR STORY ── */}
      <section id="story" className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[24px] overflow-hidden shadow-lg border border-amber-100 group">
            <Image
              src="/founder.jpg"
              alt="Heritage storefront"
              width={700}
              height={850}
              className="w-full h-auto sepia-[0.25] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>

          <div className="flex gap-6">
            <div className="w-[2px] bg-gold flex-shrink-0" />
            <div>
              <p className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-2">
                Since Before 1947
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl text-maroon font-bold mb-6">
                Serving Happiness Across Generations
              </h2>
              <p className="text-brand-text/75 text-base leading-relaxed mb-4">
                Today, <strong>Roshan Lal Ji Sweets</strong> is a reputed sweet and confectionery brand in North India. We are known for the excellent quality of sweets and namkeen we make and have won accolades amongst our customers.
              </p>
              <p className="text-brand-text/70 text-sm leading-relaxed mb-4">
                Our mission arose from a dissatisfaction with the poor quality of sweets being sold by numerous shops, most prepared using poor quality ingredients under unhygienic conditions. We set out to create a one-stop solution — good quality sweets made of fine ingredients at affordable rates.
              </p>
              <p className="text-brand-text/70 text-sm leading-relaxed">
                Roshan Lal Ji Sweets has earned such a reputation that we are always flooded with customers who throng from all corners of the country to purchase our delicious sweets. Some of our specialties include son papdi, mawa sweets, kaju katli and many other delicacies — and we are especially famous for our festive sweets like Gujiyas, Ghaver, and Gazar Pag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TIMELINE ── */}
      <JourneyTimeline items={timeline} />



      {/* ── SECTION 4: WHAT WE DO ── */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-14">
          <DomainsVideo />
          <div>
            <p className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-2">What We Do</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-maroon font-bold mb-6">
              One Roof, Four Traditions
            </h2>
            <p className="text-brand-text/70 text-sm leading-relaxed">
              From our sweet counter to our kitchen, everything we make carries the same promise of purity and care — whether it's a festive mithai box, a hot thali, or a fresh-baked treat.
            </p>
          </div>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {verticals.map((v) => (
  <div
    key={v.title}
    className="bg-white rounded-2xl border border-amber-100 p-6 text-center hover:-translate-y-1 hover:border-gold transition-all duration-300"
  >
    <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border border-amber-100 bg-gold-light">
      <Image
        src={v.image}
        alt={v.title}
        fill
        className="object-cover"
        sizes="64px"
      />
    </div>
    <h4 className="font-bold text-sm text-maroon mb-1.5">{v.title}</h4>
    <p className="text-xs text-brand-text/70 leading-relaxed">{v.desc}</p>
  </div>
))}
        </div>
      </section>
 


      {/* ── SECTION 7: QUOTE ── */}
      <section className="relative px-6 md:px-10 py-24 text-center overflow-hidden">
        {/* faded floral pattern background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="50" cy="50" r="30" fill="none" stroke="#6D1F1F" strokeWidth="2" />
          <circle cx="350" cy="80" r="45" fill="none" stroke="#6D1F1F" strokeWidth="2" />
          <circle cx="80" cy="350" r="40" fill="none" stroke="#6D1F1F" strokeWidth="2" />
          <circle cx="330" cy="340" r="25" fill="none" stroke="#6D1F1F" strokeWidth="2" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="#6D1F1F" strokeWidth="1.5" />
        </svg>

        <div className="relative max-w-3xl mx-auto">
          <p className="font-playfair text-2xl md:text-3xl text-maroon italic leading-relaxed">
            &ldquo;For over 80 years, families have trusted Roshan Lal Sweets to be part of their happiest moments.&rdquo;
          </p>
        </div>
      </section>

      {/* ── SECTION 8: STATISTICS ── */}
      <section className="bg-maroon px-6 md:px-10 py-20">
        <div className="max-w-5xl mx-auto">
          <StatsCounter />
        </div>
      </section>

      {/* ── SECTION 9: CTA ── */}
      <section className="bg-brand-dark px-6 md:px-10 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-cream font-bold mb-4">
            Experience a Legacy of Taste
          </h2>
          <p className="text-cream/70 text-sm leading-relaxed mb-8">
            Visit us today and discover why generations have trusted Roshan Lal Sweets.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-brand-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gold-pale transition-colors"
          >
            Visit Store
          </a>
        </div>
      </section>
    </>
  );
}
