'use client'

import { useState } from 'react'
import Image from 'next/image'
import StarfieldBackground from '@/components/StarfieldBackground'

// Only 2025 entries remaining
const GALLERY = [
  { id: 1,  src: '/images/1.png',  orientation: 'h', title: 'Opening Ceremony' },
  { id: 2,  src: '/images/2.jpg',  orientation: 'v', title: 'Trading Floor'    },
  { id: 3,  src: '/images/3.jpg',  orientation: 'v', title: 'Mentorship Session'},
  { id: 4,  src: '/images/4.jpg',  orientation: 'h', title: 'Strategy Briefing' },
  { id: 5,  src: '/images/5.jpeg', orientation: 'h', title: 'Team Collaboration'},
  { id: 6,  src: '/images/6.jpg',  orientation: 'h', title: 'Networking Event'  },
  { id: 7,  src: '/images/7.jpg',  orientation: 'h', title: 'Keynote Address'   },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<null | typeof GALLERY[0]>(null)

  return (
    <>
      <StarfieldBackground />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 px-4 z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display font-black text-5xl sm:text-7xl uppercase tracking-tighter text-white mb-6">
            Event <span className="neon-text">Gallery</span>
          </h1>
          <p className="font-body text-silver max-w-xl mx-auto">
            Highlights from the 2025 IOBM Stock Challenge — moments of pressure, strategy, and triumph.
          </p>
        </div>
      </section>

      {/* ── Masonry Grid (No Text) ── */}
      <section className="py-8 px-4 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY.map(item => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group relative overflow-hidden break-inside-avoid cursor-pointer border border-white/5 hover:border-neon/30 transition-all duration-400"
              >
                <div
                  className={`relative w-full overflow-hidden bg-black/40 ${
                    item.orientation === 'v' ? 'aspect-[3/4]' : 'aspect-[16/10]'
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Visual Overlay Only */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-400" />

                  {/* Zoom icon remains for UX feedback */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 border border-neon/50 flex items-center justify-center bg-black/40">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1 1h5M1 1v5M15 1h-5M15 1v5M1 15h5M1 15v-5M15 15h-5M15 15v-5" stroke="currentColor" strokeWidth="1.5" className="text-neon"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Submit CTA ── */}
      <section className="py-12 px-4 relative z-10 text-center">
        <p className="font-body text-silver/35 text-sm mb-2">Are you an ISC participant or photographer?</p>
        <a href="mailto:isc@iobm.edu.pk" className="font-mono text-xs text-neon hover:underline tracking-widest">
          Submit your photos → isc@iobm.edu.pk
        </a>
      </section>

      {/* ── Lightbox (Minimalist) ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div
              className={`relative w-full ${
                lightbox.orientation === 'v' ? 'aspect-[3/4] max-h-[85vh]' : 'aspect-[16/9]'
              }`}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-20 font-mono text-xs text-white/50 hover:text-neon transition-colors tracking-widest uppercase bg-black/20 p-2"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}