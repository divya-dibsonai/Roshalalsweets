'use client';
import { useEffect, useRef, useState } from 'react';
import { Trophy, Heart, Gem, Candy } from 'lucide-react';

const stats = [
  { icon: Trophy, target: 75, suffix: '+', label: 'Years of Tradition', subtext: 'Serving Kasganj Since 1947' },
  { icon: Heart, target: 1821, suffix: '+', label: 'Happy Families', subtext: 'Across Generations' },
  { icon: Gem, target: 500, suffix: '+', label: 'Weddings Celebrated', subtext: 'Catering Excellence' },
  { icon: Candy, target: 100, suffix: '%', label: 'Freshly Prepared Daily', subtext: 'Traditional Recipes' },
];

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatNode({ stat, active, index }: { stat: typeof stats[number]; active: boolean; index: number }) {
  const count = useCountUp(stat.target, active, 1400 + index * 150);
  const Icon = stat.icon;

  return (
    <div className="flex flex-col items-center text-center relative z-10 flex-1">
      <div className="w-14 h-14 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-sm mb-4">
        <Icon className="w-6 h-6 text-maroon" strokeWidth={1.75} />
      </div>
      <div className="font-playfair text-3xl md:text-4xl font-extrabold text-maroon mb-1.5 leading-none tabular-nums">
        {count.toLocaleString('en-IN')}{stat.suffix}
      </div>
      <div className="text-xs font-semibold text-brand-dark uppercase tracking-wider leading-tight mb-1">
        {stat.label}
      </div>
      <div className="text-[11px] text-amber-700/60 leading-snug">
        {stat.subtext}
      </div>
    </div>
  );
}

export default function TrustTimeline() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-10 py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: '#FFFDF8' }}
    >
      {/* Faint mithai-pattern texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='6'/%3E%3Ccircle cx='60' cy='60' r='6'/%3E%3Ccircle cx='60' cy='20' r='3'/%3E%3Ccircle cx='20' cy='60' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl text-brand-dark font-bold text-center mb-3">
          Why Thousands Trust Roshan Lal
        </h2>
        <p className="text-center text-amber-700/60 text-sm mb-16 max-w-xl mx-auto">
          Three generations. One promise of purity, taste and tradition.
        </p>

        <div className="relative flex items-start">
          {/* Connecting gold line, positioned behind the icon circles */}
          <div
            className="absolute top-7 left-0 right-0 h-px hidden sm:block"
            style={{
              background: 'linear-gradient(to right, transparent, #D4AF37 8%, #D4AF37 92%, transparent)',
            }}
          />

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-4">
            {stats.map((stat, i) => (
              <StatNode key={stat.label} stat={stat} active={active} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
