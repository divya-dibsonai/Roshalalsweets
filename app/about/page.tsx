import PageHero from '@/components/PageHero';

const milestones = [
  { year: 'Pre-1947', label: 'Founded', desc: 'Late Shri Roshan Lal Ji establishes the sweet shop with a mission to provide pure, quality sweets.' },
  { year: '1960s', label: 'Growing Trust', desc: 'Word spreads. Customers from surrounding districts make special trips for our signature Son Papdi and Kaju Katli.' },
  { year: '1980s', label: 'Expansion', desc: 'Second generation joins the business. Restaurant wing added to serve hot North Indian food.' },
  { year: '2000s', label: 'Modernisation', desc: 'Hygienic workshop upgrades, new product lines including bakery items and Bhaji Box introduced.' },
  { year: 'Today', label: 'Pan-India Reach', desc: 'Customers from all corners of India order online. Third generation upholding the original legacy.' },
];

const values = [
  { icon: '🫙', title: 'Pure Ingredients', desc: 'We never compromise on quality. Every sweet is made with pure ghee, real khoya and finest ingredients.' },
  { icon: '🧼', title: 'Hygienic Standards', desc: 'Our workshop is covered and sanitised daily. Cleanliness is not optional — it is our founding principle.' },
  { icon: '❤️', title: 'Family Values', desc: 'Run by family, for families. We treat every customer with the warmth we would a guest in our home.' },
  { icon: '🌱', title: 'Quality Promise', desc: 'We would rather sell less than compromise on quality. This is the promise Roshan Lal Ji made, and we honour it.' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
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

        {/* Timeline */}
        <div id="story">
          <h2 className="font-playfair text-3xl text-maroon font-bold text-center mb-10">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-16 md:left-1/2 top-0 bottom-0 w-px bg-amber-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-32 flex-shrink-0 text-right ${i % 2 === 1 ? 'md:text-left' : ''}`}>
                    <span className="font-playfair font-bold text-maroon text-sm">{m.year}</span>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-maroon rounded-full border-4 border-cream absolute -left-2 top-1" />
                  </div>
                  <div className="flex-1 bg-white rounded-xl border border-amber-100 p-5 ml-4">
                    <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">{m.label}</div>
                    <p className="text-xs text-brand-text/75 leading-relaxed">{m.desc}</p>
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
        <p className="text-brand-text/70 text-sm leading-relaxed italic mb-4">
          "We value, relish and cherish your wishes. Verily, this will add the fuel to conduct some more useful work for our customers across the globe. Always beseeching your sincere blessings and wise counsel, with choicest wishes & regards."
        </p>
        <p className="font-bold text-sm text-maroon">— Managing Team, Roshan Lal Ji Sweets</p>
      </section>
    </>
  );
}
