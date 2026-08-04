'use client';
import { useState } from 'react';
import Image from 'next/image';
 
type Box = { image: string; name: string; tag: string; bg: string };
 
const WHATSAPP_NUMBER = '917055513961';
 
function waLink(boxName: string) {
  const message = encodeURIComponent(
    `Hi! I'd like to enquire about customising the "${boxName}" gift box.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
 
export default function GiftingGrid({ boxes }: { boxes: Box[] }) {
  const [broken, setBroken] = useState<Set<string>>(new Set());
 
  const visibleBoxes = boxes.filter((b) => !broken.has(b.image));
 
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {visibleBoxes.map((box) => (
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
              onError={() => setBroken((prev) => new Set(prev).add(box.image))}
            />
          </div>
          <div className="p-4">
            <div className="text-[10px] font-bold text-gold uppercase tracking-wider mb-1">{box.tag}</div>
            <div className="font-playfair text-base font-semibold text-brand-dark mb-1.5 leading-snug">{box.name}</div>
            <div className="flex items-center gap-1.5 text-sm font-bold text-maroon">
              💬 Enquire to Customize
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
 