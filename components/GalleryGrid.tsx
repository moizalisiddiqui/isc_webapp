'use client'

import Image from 'next/image'
import Link from 'next/link'

/**
 * GalleryGrid — Homepage teaser component
 *
 * Shows a tight editorial mosaic of 6 event photos.
 * Drop this anywhere in your homepage:
 *   import GalleryGrid from '@/components/GalleryGrid'
 *   <GalleryGrid />
 */

// orientation: 'h' = horizontal, 'v' = vertical
// gridArea maps to the named CSS grid template below
const PHOTOS = [
  { src: '/images/7.jpg',  orientation: 'h', title: 'Opening Ceremony',   gridArea: 'a' },
  { src: '/images/4.jpg',  orientation: 'h', title: 'Strategy Briefing',  gridArea: 'd' },
  { src: '/images/2.jpg',  orientation: 'v', title: 'Trading Floor',      gridArea: 'c' },
  { src: '/images/5.jpeg', orientation: 'h', title: 'Team Collaboration', gridArea: 'b' },
  { src: '/images/8.JPG',  orientation: 'v', title: 'Champions 2025',     gridArea: 'e' },
  { src: '/images/6.jpg',  orientation: 'h', title: 'Networking Event',   gridArea: 'f' },
]

export default function GalleryGrid() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-3">From the Archive</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tighter text-white">
              Event <span className="neon-text">Moments</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:inline-flex font-mono text-xs text-silver/40 hover:text-neon border border-white/10 hover:border-neon/30 px-5 py-2.5 tracking-widest uppercase transition-all duration-300"
          >
            View All →
          </Link>
        </div>

        {/*
          ── Grid layout ─────────────────────────────────────────────────────────
          Using named grid areas for precise mosaic control.

          Desktop (lg):  [a a c] [b b c] [d e f] [d e f]
                          ↑ wide  ↑ tall  ↑ wide  ↑ tall

          The vertical images (c = Trading Floor, e = Champions) get a rowSpan
          to fill two rows, giving them proper portrait display.
          ─────────────────────────────────────────────────────────────────────── */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gridTemplateAreas: `
              "a a c"
              "b b c"
              "d e f"
              "d e f"
            `,
          }}
        >
          {PHOTOS.map(photo => (
            <Link
              key={photo.src}
              href="/gallery"
              className="group relative overflow-hidden border border-white/5 hover:border-neon/30 transition-all duration-400 block"
              style={{ gridArea: photo.gridArea }}
            >
              {/* Aspect ratio container — vertical images taller, horizontal shorter */}
              <div
                className={`relative w-full overflow-hidden ${
                  photo.orientation === 'v' ? 'min-h-[300px] h-full' : 'aspect-[16/9]'
                }`}
                style={photo.orientation === 'v' ? { minHeight: '300px' } : undefined}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <span className="font-display font-bold text-xs text-white tracking-wide">{photo.title}</span>
                </div>

                {/* Neon corner accent */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-neon/0 group-hover:border-neon/60 transition-all duration-400" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-neon/0 group-hover:border-neon/60 transition-all duration-400" />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/gallery"
            className="inline-flex font-mono text-xs text-silver/40 hover:text-neon border border-white/10 hover:border-neon/30 px-6 py-3 tracking-widest uppercase transition-all duration-300"
          >
            View All Photos →
          </Link>
        </div>

      </div>
    </section>
  )
}