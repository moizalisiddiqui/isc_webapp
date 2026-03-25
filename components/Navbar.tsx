'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/',          label: 'Home'     },
  { href: '/about',     label: 'About'    },
  { href: '/sponsors',  label: 'Sponsors' },
  { href: '/team',      label: 'Team'     },
  { href: '/gallery',   label: 'Gallery'  },
  { href: '/#faq',      label: 'FAQ'      },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo + Wordmark ──────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/images/isc_logo.svg"
                alt="IOBM Stock Challenge Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Wordmark */}
            <div className="leading-none">
              <div className="font-display font-black text-white text-sm tracking-[0.18em] uppercase">
                IOBM Stock
              </div>
              <div className="text-neon text-[10px] tracking-[0.32em] uppercase font-mono">
                Challenge 2026
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav ─────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:text-neon hover:drop-shadow-[0_0_8px_#39FF14] ${
                  pathname === link.href ? 'text-neon' : 'text-silver'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/register" className="btn-neon px-5 py-2 text-sm ml-2">
              <span>Register Now</span>
            </Link>
          </div>

          {/* ── Mobile Hamburger ────────────────────────────── */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span className={`block w-6 h-0.5 bg-neon transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-neon transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-neon transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ───────────────────────────────────── */}
      <div
        className={`md:hidden glass border-t border-white/5 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-semibold text-sm tracking-widest uppercase text-silver hover:text-neon transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setMenuOpen(false)}
            className="btn-neon px-5 py-3 text-sm text-center"
          >
            <span>Register Now</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
