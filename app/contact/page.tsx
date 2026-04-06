'use client';
import PageHero from '@/components/PageHero';
import { useState } from 'react';

// Note: with 'use client', use next/head or move metadata to a parent server component.
// SEO for this page is handled by the root layout's structured data.

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <PageHero
        emoji="📍"
        tag="Get In Touch"
        title="Reach"
        highlight="Us"
        subtitle="We'd love to hear from you — whether it's a bulk order, gifting enquiry, or just to say hello."
      />

      <section className="px-6 md:px-10 py-14 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-5">
            <h2 className="font-playfair text-2xl text-maroon font-bold mb-6">Contact Information</h2>

            {[
              {
                icon: '📞',
                title: 'Phone',
                lines: ['+91-7055513961', '+91-9456809936'],
                sub: 'Open Daily: 7:30 AM – 10:30 PM',
              },
              {
                icon: '📧',
                title: 'Email',
                lines: ['info@roshanlaljisweets.com'],
                sub: 'We reply within 24 hours',
              },
              {
                icon: '📍',
                title: 'Visit Us',
                lines: ['Circular Road, Malgodam Crossing', 'Nadrai Gate (Opp. Canara Bank)', 'Kasganj, Uttar Pradesh 207123'],
                sub: 'Open Daily: 7:30 AM – 10:30 PM',
              },
              {
                icon: '💬',
                title: 'WhatsApp',
                lines: ['+91-7055513961'],
                sub: 'Quickest way to reach us',
              },
            ].map(info => (
              <div key={info.title} className="bg-white rounded-2xl border border-amber-100 p-5 flex gap-4 hover:shadow-sm transition-shadow">
                <div className="w-11 h-11 bg-gold-light rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-maroon mb-1">{info.title}</h4>
                  {info.lines.map(l => (
                    <p key={l} className="text-sm text-brand-text font-medium">{l}</p>
                  ))}
                  <p className="text-xs text-amber-700/60 mt-0.5">{info.sub}</p>
                </div>
              </div>
            ))}

            {/* Bulk Orders */}
            <div id="bulk" className="bg-maroon rounded-2xl p-6 mt-4">
              <h3 className="font-playfair text-lg text-cream font-bold mb-2">Bulk & Corporate Orders</h3>
              <p className="text-cream/70 text-xs leading-relaxed mb-4">
                Planning a wedding, corporate event, or festive gifting? We handle large orders with special pricing and custom packaging. Call or WhatsApp us to discuss.
              </p>
              <a
                href="https://wa.me/917055513961?text=Hi!%20I%20am%20interested%20in%20a%20bulk%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-green-600 transition-colors"
              >
                💬 WhatsApp for Bulk Orders
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-amber-100 p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 gap-4">
                <span className="text-6xl">🎉</span>
                <h3 className="font-playfair text-xl text-maroon font-bold">Message Sent!</h3>
                <p className="text-sm text-brand-text/70 leading-relaxed max-w-xs">
                  Thank you for reaching out. We will get back to you within 24 hours at your email.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' }); }}
                  className="mt-2 text-maroon text-sm font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-playfair text-2xl text-maroon font-bold mb-6">Send Us a Message</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-text mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Ramesh Sharma"
                        className="w-full border border-amber-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors bg-amber-50/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-text mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full border border-amber-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors bg-amber-50/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-text mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="ramesh@email.com"
                      className="w-full border border-amber-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors bg-amber-50/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-text mb-1.5">Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-amber-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors bg-amber-50/30"
                    >
                      <option>General Enquiry</option>
                      <option>Bulk / Corporate Order</option>
                      <option>Festive Gifting</option>
                      <option>Feedback / Complaint</option>
                      <option>Restaurant Reservation</option>
                      <option>Delivery Issue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-text mb-1.5">Your Message *</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      className="w-full border border-amber-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors bg-amber-50/30 resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-maroon text-white py-3 rounded-xl font-bold text-sm hover:bg-maroon-dark transition-colors"
                  >
                    Send Message →
                  </button>
                  <p className="text-center text-[10px] text-amber-700/50">
                    Or reach us directly at +91-7055513961
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-amber-200 shadow-sm">
          <div className="bg-maroon px-6 py-4 flex items-center justify-between">
            <div>
              <p className="font-playfair text-cream font-semibold text-base">Roshan Lal Ji Sweets & Restaurant</p>
              <p className="text-cream/70 text-xs mt-0.5">Circular Road, Malgodam Crossing, Nadrai Gate, Kasganj, UP 207123</p>
            </div>
            <a
              href="https://www.google.com/maps/search/Roshan+Lal+Ji+Sweets+Nadrai+Gate+Kasganj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-gold-pale text-maroon px-4 py-2 rounded-full text-xs font-bold hover:bg-gold transition-colors"
            >
              Open in Maps ↗
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.234!2d78.6447!3d27.8074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973748a5df9e49b%3A0x7b8e2f3a1c5d6e8f!2sNadrai%20Gate%2C%20Kasganj%2C%20Uttar%20Pradesh%20207123!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Roshan Lal Ji Sweets Location - Nadrai Gate, Kasganj"
          />
          <div className="bg-amber-50 px-6 py-3 flex flex-wrap gap-4 text-xs text-amber-800">
            <span>📞 +91-7055513961 &nbsp;|&nbsp; +91-9456809936</span>
            <span>🕐 Open Daily: 7:30 AM – 10:30 PM</span>
            <span>📍 Opp. Canara Bank, Nadrai Gate</span>
          </div>
        </div>
      </section>
    </>
  );
}
