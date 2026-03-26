'use client'

import { useState } from 'react'

const FAQS = [
  { q: 'Who can participate in ISC 2026?', a: 'Any currently enrolled university student in Karachi is eligible. Bring your university ID for verification during registration.' },
  { q: 'Do I need prior stock market experience?', a: 'No. Day 1 includes intensive mentorship and industry learning sessions designed to prepare all participants. Basic financial literacy is helpful but not required.' },
  { q: 'How does the trading simulation work?', a: 'Participants receive demo trading accounts loaded with virtual capital. Over the 6-day event you execute strategies, manage portfolios, and present your investment reasoning to industry judges.' },
  { q: 'What is the team size requirement?', a: 'Teams consist of exactly 3 members (1 team leader + 2 members). Individual entries are also accepted.' },
  { q: 'How is the prize pool distributed?', a: '1st Place: 50% · 2nd Place: 30% · 3rd Place: 20%. Total prize pool exceeds 50,000 PKR.' },
  { q: 'When is the registration deadline?', a: 'Registration closes on April 9, 2026. Spots are limited — register early to secure your place.' },
  { q: 'Can I sponsor ISC 2026?', a: 'Yes! Multiple sponsorship tiers are available. Visit the Sponsors page or email us directly for the full proposal.' },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="py-24 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Got Questions?</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
            Frequently Asked <span className="neon-text">Questions</span>
          </h2>
        </div>
        <div className="space-y-2">
          {FAQS.map((faq,i) => (
            <div key={i} className={`border transition-all duration-300 ${open===i?'border-neon/25 bg-neon/[0.02]':'border-white/5 hover:border-white/10'}`}>
              <button className="w-full flex items-center justify-between px-6 py-4 text-left group" onClick={() => setOpen(open===i?null:i)}>
                <span className={`font-display font-semibold text-sm tracking-wide transition-colors duration-300 ${open===i?'text-neon':'text-white/80 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <span className={`text-neon font-mono text-lg flex-shrink-0 ml-4 transition-transform duration-300 ${open===i?'rotate-45':''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open===i?'max-h-40 pb-4':'max-h-0'}`}>
                <p className="px-6 text-silver text-sm leading-relaxed font-body">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
