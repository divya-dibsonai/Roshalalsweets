'use client';

import { useEffect, useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';

export default function DomainsVideo() {
  const [playbackId, setPlaybackId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/about')
      .then((r) => r.json())
      .then((data) => setPlaybackId(data.domains));
  }, []);

  return (
    <div className="rounded-[24px] overflow-hidden shadow-lg border border-amber-100">
      {playbackId ? (
        <MuxPlayer
          playbackId={playbackId}
          streamType="on-demand"
          className="w-full aspect-video"
          metadata={{ video_title: 'What We Do' }}
        />
      ) : (
        <div className="w-full aspect-video bg-brand-dark/5 animate-pulse" />
      )}
    </div>
  );
}
