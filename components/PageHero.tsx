import Image from "next/image";
interface PageHeroProps {
  emoji?: string;
  image?: string;
  imageAlt?: string;

  tag: string;
  title: string;
  highlight: string;
  subtitle: string;
}
export default function PageHero({
  emoji,
  image,
  imageAlt,
  tag,
  title,
  highlight,
  subtitle,
}: PageHeroProps){
  return (
    <div className="bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light min-h-[260px] flex items-center px-8 md:px-16 py-14 relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v5h5v5H0v5h20v-9.5zm-2 5.5H5v-5h13v5z'/%3E%3C/g%3E%3C/svg%3E")`}}/>
      {/* Stars */}
      <span className="absolute top-6 right-24 text-gold/60 text-2xl animate-pulse">✦</span>
      <span className="absolute bottom-8 right-40 text-gold/40 text-base animate-pulse" style={{animationDelay:'0.5s'}}>✦</span>
      <span className="absolute top-10 right-56 text-gold/50 text-lg animate-pulse" style={{animationDelay:'1s'}}>✦</span>

      <div className="relative z-10 max-w-2xl">
        <div className="inline-block bg-gold text-brand-dark px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
          {tag}
        </div>
        <h1 className="font-playfair text-4xl md:text-5xl text-cream font-extrabold leading-tight mb-4">
          {title}{' '}
          {highlight && <em className="not-italic text-gold-pale">{highlight}</em>}
        </h1>
        <p className="text-cream/75 text-base leading-relaxed max-w-lg">{subtitle}</p>
      </div>

      <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none">

  {/* Soft Golden Glow */}
  <div className="absolute inset-0 bg-yellow-300/20 blur-3xl rounded-full scale-125" />

  {image ? (
    <Image
      src={image}
      alt={imageAlt || "Hero Image"}
      width={360}
      height={360}
      priority
      className="
        relative
        w-56
        md:w-72
        h-auto
        animate-float
        drop-shadow-[0_20px_40px_rgba(255,215,100,0.35)]
      "
    />
  ) : (
    <div className="text-[100px] md:text-[130px] opacity-20">
      {emoji}
    </div>
  )}
</div>
    </div>
  );
}
