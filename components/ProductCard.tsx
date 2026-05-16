import Image from 'next/image';

interface ProductCardProps {
  image?: string;
  emoji?: string;
  tag: string;
  name: string;
  desc: string;
  price: string;
  bg?: string;
}

export default function ProductCard({ image, emoji, tag, name, desc, price, bg = 'bg-gold-light' }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-amber-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
      <div className={`w-full aspect-square flex items-center justify-center ${bg} relative`}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <span className="text-6xl">{emoji}</span>
        )}
      </div>
      <div className="p-4">
        <div className="text-[10px] font-bold text-gold uppercase tracking-wider mb-1">{tag}</div>
        <div className="font-playfair text-base font-semibold text-brand-dark mb-1.5 leading-snug">{name}</div>
        <div className="text-[11px] text-amber-700/70 mb-3 leading-relaxed">{desc}</div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-sm text-maroon">{price}</div>
          <button className="bg-maroon hover:bg-maroon-dark text-white rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors">
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}