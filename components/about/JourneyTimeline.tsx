'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Milestone = {
  year: string;
  label: string;
  desc: string;
  image?: string | null;
  caption?: string;
};

/* ── Fires once a card scrolls into view, then stays visible ── */
function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function TimelineCard({
  milestone,
  index,
  side,
  highlight,
  featured,
}: {
  milestone: Milestone;
  index: number;
  side: 'left' | 'right';
  highlight?: boolean;
  featured?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      className={[
        'relative w-full md:w-1/2 pl-16 md:pl-0',
        side === 'left' ? 'md:pr-14 md:text-right' : 'md:pl-14 md:ml-auto',
      ].join(' ')}
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      {/* Marker dot on the spine */}
      <span
        className={[
          'absolute top-6 left-[18px] md:left-auto z-10',
          'w-4 h-4 rounded-full border-[3px]',
          highlight
            ? 'bg-[#C89B3C] border-[#F7E7C6] shadow-[0_0_0_4px_rgba(200,155,60,0.35),0_0_18px_4px_rgba(200,155,60,0.55)]'
            : 'bg-[#FFFDF8] border-[#C89B3C]',
          side === 'left' ? 'md:right-[-9px] md:left-auto' : 'md:left-[-9px]',
        ].join(' ')}
      />

      <div
        className={[
          'transition-all duration-[900ms] ease-out will-change-transform',
          inView ? 'opacity-100 translate-x-0' : 'opacity-0',
          !inView && side === 'left' ? 'md:-translate-x-10' : '',
          !inView && side === 'right' ? 'md:translate-x-10' : '',
          !inView ? '-translate-x-6 md:translate-x-0' : '',
        ].join(' ')}
      >
        <div
          className={[
            'inline-block w-full text-left rounded-[22px] bg-[#FFFDF8]',
            'border border-[#C89B3C]/30 p-6 md:p-7',
            featured
              ? 'shadow-[0_10px_40px_-8px_rgba(200,155,60,0.55)] ring-1 ring-[#C89B3C]/60'
              : 'shadow-[0_8px_28px_-10px_rgba(122,21,21,0.18)]',
            side === 'left' ? 'md:text-right' : 'md:text-left',
          ].join(' ')}
        >
          {milestone.image && (
            <div
              className={[
                'relative w-full overflow-hidden rounded-[24px] border-2 border-[#C89B3C]/70 mb-5',
                featured || milestone.caption ? 'aspect-[4/3]' : 'aspect-[16/9]',
              ].join(' ')}
            >
              <Image
                src={milestone.image}
                alt={milestone.caption || milestone.label}
                fill
                className="object-cover sepia-[0.3]"
                sizes="(max-width: 768px) 90vw, 420px"
              />
              {milestone.caption && (
                <p className="absolute bottom-0 left-0 right-0 bg-black/45 text-white text-[11px] italic font-medium text-center py-1.5 px-2 tracking-wide">
                  {milestone.caption}
                </p>
              )}
            </div>
          )}

          <span
            className={[
              'font-playfair font-bold leading-none block mb-2 text-[#7A1515]',
              featured ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl',
            ].join(' ')}
          >
            {milestone.year}
          </span>

          <div className="text-[11px] font-bold text-[#C89B3C] uppercase tracking-[0.2em] mb-3">
            {milestone.label}
          </div>

          <p className="text-sm leading-relaxed text-[#5B4636]">{milestone.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function JourneyTimeline({ items }: { items: Milestone[] }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.55;
      const raw = (viewportCenter - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      className="relative px-6 md:px-10 py-24 md:py-28 overflow-hidden"
      style={{
        backgroundColor: '#F7E7C6',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      }}
    >
      {/* ── SECTION HEADER ── */}
      <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28 relative">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C89B3C] bg-[#7A1515]/5 border border-[#C89B3C]/40 rounded-full px-4 py-1.5 mb-5">
          80+ Years of Legacy
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#7A1515] mb-4">
          Our Journey
        </h2>
        <p className="text-[#5B4636]/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          From a traditional sweet shop to a trusted multi-vertical family brand serving generations.
        </p>
        <div className="h-[3px] w-20 bg-[#C89B3C] mx-auto mt-6 rounded-full" />
      </div>

      {/* ── TIMELINE ── */}
      <div ref={sectionRef} className="relative max-w-5xl mx-auto">
        {/* Base spine */}
        <div
          className="absolute top-0 bottom-0 left-[24px] md:left-1/2 w-[2px] md:-translate-x-1/2 bg-[#C89B3C]/25"
          aria-hidden
        />
        {/* Animated fill spine */}
        <div
          className="absolute top-0 left-[24px] md:left-1/2 w-[2px] md:-translate-x-1/2 bg-gradient-to-b from-[#C89B3C] to-[#C89B3C]/70 transition-[height] duration-300 ease-out"
          style={{ height: `${progress * 100}%` }}
          aria-hidden
        />

        <div className="flex flex-col gap-[100px] md:gap-[140px]">
          {items.map((m, i) => {
            const side: 'left' | 'right' = i % 2 === 0 ? 'left' : 'right';
            const isFounder = i === 0;
            const isSecondGen = m.label.toLowerCase().includes('expansion');
            const isToday = m.year.toLowerCase() === 'today';
            return (
              <TimelineCard
                key={m.year}
                milestone={m}
                index={i}
                side={side}
                highlight={isFounder || isSecondGen || isToday}
                featured={isToday}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
