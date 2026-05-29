import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';

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
  {
    year: 'Pre-1947',
    label: 'Founded',
    desc: 'Late Shri Roshan Lal Ji establishes the sweet shop with a mission to provide pure, quality sweets to the people of Kasganj.',
    image: '/founder.jpg',
    caption: 'Late Shri Roshan Lal Ji — Founder',
  },
  {
    year: '1960s',
    label: 'Growing Trust',
    desc: 'Word spreads. Customers from surrounding districts make special trips for our signature Son Papdi and Kaju Katli.',
    image: null,
  },
  {
    year: '1980s',
    label: 'Expansion',
    desc: 'Second generation joins the business. Restaurant wing added to serve hot North Indian food.',
    image: '/kailash.JPG',
    caption: 'Shri Kailash Chand Ji — Second Generation',
  },
  {
    year: '2000s',
    label: 'Modernisation',
    desc: 'Hygienic workshop upgrades, new product lines including bakery items and Bhaji Box introduced.',
    image: null,
  },
  {
    year: 'Today',
    label: 'Pan-India Reach',
    desc: 'Customers from all corners of India order online. Third generation upholding the original legacy.',
    image: null,
  },
];

const values = [
  { icon: '🫙', title: 'Pure Ingredients', desc: 'We never compromise on quality. Every sweet is made with pure ghee, real khoya and finest ingredients.' },
  { icon: '🧼', title: 'Hygienic Standards', desc: 'Our workshop is covered and sanitised daily. Cleanliness is not optional — it is our founding principle.' },
  { icon: '❤️', title: 'Family Values', desc: 'Run by family, for families. We treat every customer with the warmth we would a guest in our home.' },
  { icon: '🌱', title: 'Quality Promise', desc: 'We would rather sell less than compromise on quality. This is the promise Roshan Lal Ji made, and we honour it.' },
];

const founders = [
  {
    name: 'Late Shri Roshan Lal Ji',
    role: 'Founder & Visionary',
    desc: 'Founded the shop before India\'s independence with a singular vision — pure sweets, made with love and honesty.',
    image: '/founder.jpg',
    generation: '1st Generation',
  },
  {
    name: 'Shri Kailash Chand Ji',
    role: 'Second Generation',
    desc: 'Expanded the legacy, added the restaurant, and continued the tradition of quality that his father built.',
    image: '/kailash.JPG',
    generation: '2nd Generation',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        emoji="🪔"
        tag="Est. Before 1947"
        title="Our"
        highlight="Story"
        subtitle="A family-run sweet shop that has stood the test of time — serving pure, delicious sweets with love since before India's independence."
      />

      {/* Mission */}
      <section className="px-6 md:px-10 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-3xl md:text-4xl text-maroon font-bold mb-5">A Little Bit About Us</h2>
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

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {values.map(v => (
            <div key={v.title} className="bg-white rounded-2xl border border-amber-100 p-7 flex gap-4">
              <div className="text-3xl flex-shrink-0">{v.icon}</div>
              <div>
                <h4 className="font-bold text-sm text-maroon mb-1.5">{v.title}</h4>
                <p className="text-xs text-brand-text/70 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── MEET THE FAMILY ── */}
        <div className="mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl text-maroon font-bold text-center mb-3">
            The Family Behind the Legacy
          </h2>
          <p className="text-center text-brand-text/60 text-sm mb-10">
            Three generations of dedication, love, and pure ghee sweets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map(person => (
              <div
                key={person.name}
                className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Photo */}
                <div className="relative w-full bg-amber-50">
  <Image
    src={person.image}
    alt={person.name}
    width={600}
    height={800}
    className="w-full h-auto sepia-[0.3] hover:sepia-0 transition-all duration-500"
  />
                  {/* Generation badge */}
                  <div className="absolute top-3 left-3 bg-maroon text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {person.generation}
                  </div>
                  {/* Vintage vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-t-2xl" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-maroon mb-0.5">{person.name}</h3>
                  <p className="text-[11px] font-semibold text-gold uppercase tracking-widest mb-3">{person.role}</p>
                  <p className="text-sm text-brand-text/70 leading-relaxed">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TIMELINE ── */}
        <div id="story">
          <h2 className="font-playfair text-3xl md:text-4xl text-maroon font-bold text-center mb-3">Our Journey</h2>
          <p className="text-center text-brand-text/60 text-sm mb-12">Over 75 years of sweetness, tradition, and trust.</p>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-amber-200" />

            <div className="space-y-10">
              {timeline.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 md:gap-0 items-start ${
                    i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Year label — desktop */}
                  <div
                    className={`hidden md:flex w-1/2 items-start pt-4 ${
                      i % 2 === 1 ? 'justify-start pl-10' : 'justify-end pr-10'
                    }`}
                  >
                    <span className="font-playfair font-bold text-maroon text-xl">{m.year}</span>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 top-5 -translate-x-1/2 w-4 h-4 bg-maroon rounded-full border-4 border-amber-50 z-10" />

                  {/* Card */}
                  <div className={`flex-1 md:w-1/2 pl-12 md:pl-0 ${i % 2 === 1 ? 'md:pr-10' : 'md:pl-10'}`}>
                    {/* Year — mobile */}
                    <span className="md:hidden font-playfair font-bold text-maroon text-base block mb-1">{m.year}</span>

                    <div className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-sm">
                      {/* Photo if available */}
                      {m.image && (
                        <div className="relative w-full">
  <Image
    src={m.image}
    alt={m.caption || m.label}
    width={600}
    height={800}
    className="w-full h-auto sepia-[0.4]"
  />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          {m.caption && (
                            <p className="absolute bottom-2 left-0 right-0 text-center text-white text-[11px] italic font-medium px-4">
                              {m.caption}
                            </p>
                          )}
                        </div>
                      )}

                      <div className="p-5">
                        <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">{m.label}</div>
                        <p className="text-xs text-brand-text/75 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="bg-gold-light px-6 md:px-10 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl text-maroon font-bold text-center mb-9">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { text: 'The best Son Papdi I have ever tasted! We order every Diwali without fail. True family tradition.', author: 'Priya S., Delhi' },
              { text: "Roshan Lal Ji sweets are synonymous with purity. I've been eating these since childhood. No one matches this quality.", author: 'Rahul M., Lucknow' },
              { text: "Ordered for my sister's wedding. All guests were raving. The packaging was beautiful too — highly recommend!", author: 'Anjali K., Patna' },
            ].map(t => (
              <div key={t.author} className="bg-white rounded-2xl p-7 border border-amber-200">
                <div className="text-gold text-base tracking-widest mb-3">★★★★★</div>
                <p className="text-sm text-brand-text leading-relaxed italic mb-4">"{t.text}"</p>
                <div className="text-xs font-bold text-maroon">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign-off */}
      <section className="px-6 md:px-10 py-14 max-w-2xl mx-auto text-center">
        <div className="text-4xl mb-4">🪔</div>
        <p className="text-brand-text/70 text-sm leading-relaxed italic mb-4">
          "We value, relish and cherish your wishes. Verily, this will add the fuel to conduct some more useful work for our customers across the globe. Always beseeching your sincere blessings and wise counsel, with choicest wishes & regards."
        </p>
        <p className="font-bold text-sm text-maroon">— Managing Team, Roshan Lal Ji Sweets</p>
      </section>
    </>
  );
}