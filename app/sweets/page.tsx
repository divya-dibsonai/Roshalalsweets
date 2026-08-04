import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import SweetsGrid from '@/components/SweetsGrid';
import Image from "next/image";
import { sweets } from '@/app/data/sweets';


export const metadata: Metadata = {
  title: 'Indian Sweets — Son Papdi, Kaju Katli, Mawa Barfi & More',
  description: 'Shop authentic North Indian sweets made with pure desi ghee & khoya — Son Papdi, Kaju Katli, Mawa Barfi, Gujiya, Ghaver & more. Roshan Lal Ji Sweets, Kasganj, UP.',
  openGraph: {
    title: 'Indian Sweets | Roshan Lal Ji Sweets & Restaurant',
    description: 'Handcrafted Indian sweets made with pure ghee — Son Papdi, Kaju Katli, Gulab Jamun, Ghaver & more. Order from Kasganj, UP.',
    url: 'https://roshanlalsweets.vercel.app/sweets',
  },
};



export default function SweetsPage() {
  return (
    <>
      <PageHero
        image="/sweet.png"
        imageAlt="Traditional Indian Sweets"

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
  <div className="relative w-24 h-24 flex-shrink-0">
    <Image src="/namkeen.png" alt="Gift Box" fill className="object-contain" />
  </div>
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