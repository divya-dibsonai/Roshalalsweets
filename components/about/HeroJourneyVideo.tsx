'use client';

import { useEffect, useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';

export default function HeroJourneyVideo() {
  const [playbackId, setPlaybackId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/about')
      .then((r) => r.json())
      .then((data) => setPlaybackId(data.journey));
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Saffron/gold glow behind the video */}
      <div className="absolute -inset-6 bg-gradient-to-br from-gold/40 via-gold/10 to-transparent blur-3xl rounded-full" />

      <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-gold/20">
        {playbackId ? (
          <MuxPlayer
            playbackId={playbackId}
            streamType="on-demand"
            autoPlay="muted"
            loop
            muted
            className="w-full aspect-[4/5] object-cover"
            metadata={{ video_title: 'Our Journey' }}
          />
        ) : (
          <div className="w-full aspect-[4/5] bg-brand-dark/5 animate-pulse" />
        )}
      </div>
    </div>
  );
}
