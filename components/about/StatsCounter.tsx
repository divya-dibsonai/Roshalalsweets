'use client';

import { useEffect, useRef, useState } from 'react';

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 80, suffix: '+', label: 'Years' },
  { value: 4, suffix: '', label: 'Generations' },
  { value: 10000, suffix: '+', label: 'Happy Customers' },
  { value: 4, suffix: '+', label: 'Business Verticals' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-playfair text-4xl md:text-5xl font-bold text-gold">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
      {STATS.map((s) => (
        <div key={s.label}>
          <Counter value={s.value} suffix={s.suffix} />
          <p className="text-cream/70 text-xs uppercase tracking-widest mt-2">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
