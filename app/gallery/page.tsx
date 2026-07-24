// app/gallery/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import MuxPlayer from '@mux/mux-player-react';
import PageHero from '@/components/PageHero';

type VideoItem = { id: string; playbackId: string };
type GalleryData = Record<string, VideoItem[]>;
type ImageData = Record<string, string[]>;

const SECTIONS = [
  { key: 'Kitchen', label: 'Experience Our Kitchen' },
  { key: 'Restaurant', label: 'Restaurant' },
  { key: 'Bakery', label: 'Bakery' },
  { key: 'Customers', label: 'Customers' },
  { key: 'Festivals', label: 'Festivals' },
  { key: 'Store', label: 'Store' },
];

export default function GalleryPage() {
  const [videos, setVideos] = useState<GalleryData>({});
  const [images, setImages] = useState<ImageData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/gallery').then((r) => r.json()),
      fetch('/api/gallery-images').then((r) => r.json()),
    ]).then(([videoData, imageData]) => {
      setVideos(videoData);
      setImages(imageData);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <PageHero
        image="/gallery.png"
        imageAlt="Behind The Scenes"
        tag="A Visual Feast"
        title="Our"
        highlight="Gallery"
        subtitle="A glimpse into our world of sweets, snacks, bakery, and restaurant — every moment crafted with pride and tradition."
      />

      <section className="px-6 md:px-10 py-16 max-w-7xl mx-auto space-y-24">
        {SECTIONS.map(({ key, label }) => {
          const videoItems = videos[key] || [];
          const imageItems = images[key] || [];
          const isEmpty = videoItems.length === 0 && imageItems.length === 0;

          if (loading) {
            return (
              <div key={key} className="text-center text-brand-text/40 text-sm">
                Loading {label}…
              </div>
            );
          }

          if (isEmpty) return null;

          return (
            <div key={key}>
              <div className="mb-10">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-brand-dark">
                  {label}
                </h2>
                <div className="h-[2px] w-16 bg-gradient-to-r from-gold to-transparent mt-2" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoItems.map((v) => (
                  <div
                    key={v.id}
                    className="group relative rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-video bg-brand-dark/5">
                      <MuxPlayer
                        playbackId={v.playbackId}
                        streamType="on-demand"
                        className="w-full h-full"
                        metadata={{ video_title: label }}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gold/0 group-hover:ring-gold/40 transition-all duration-300" />
                  </div>
                ))}

                {imageItems.map((img) => (
                  <div
                    key={img}
                    className="group relative aspect-video rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <Image
                      src={`/images/gallery/${key}/${img}`}
                      alt={label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gold/0 group-hover:ring-gold/40 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="bg-gradient-to-br from-maroon to-maroon-light rounded-2xl p-10 md:p-14 text-center">
          <h3 className="font-playfair text-2xl text-cream font-bold mb-3">
            Share Your Moments With Us
          </h3>
          <p className="text-cream/70 text-sm leading-relaxed max-w-md mx-auto mb-6">
            Tag us on social media when you enjoy our sweets and food. Your moments make our day — and the best ones get featured here!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            
              <a href="https://wa.me/917055513961"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-colors"
            >
              Share on WhatsApp
            </a>
            <button className="bg-gold-pale text-maroon px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gold transition-colors">
              Email Us a Photo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}