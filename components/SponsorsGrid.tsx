'use client'

import Link from 'next/link'

const SPONSOR_TIERS = [
  { tier: 'Title Sponsor',   sponsors: [{ name: 'Your Brand Here' }] },
  { tier: 'Gold Sponsors',   sponsors: [{ name: 'Gold Partner 1' }, { name: 'Gold Partner 2' }] },
  { tier: 'Silver Sponsors', sponsors: [{ name: 'Silver Partner 1' }, { name: 'Silver Partner 2' }, { name: 'Silver Partner 3' }] },
]

const SponsorCircle = ({ name }: { name: string }) => (
  <div className="group flex flex-col items-center gap-3 cursor-pointer">
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full glass border border-white/10 flex items-center justify-center transition-all duration-400 group-hover:border-neon/40 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.18)]">
      <span className="font-display font-bold text-xs text-silver/35 text-center px-2 tracking-widest uppercase">{name}</span>
      <div className="absolute inset-0 rounded-full group-hover:bg-neon/5 transition-all duration-400" />
    </div>
    <span className="font-mono text-[10px] text-silver/35 tracking-widest">{name}</span>
  </div>
)

export default function SponsorsGrid() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Powered By</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
            Our <span className="neon-text">Partners</span>
          </h2>
        </div>

        <div className="space-y-16">
          {SPONSOR_TIERS.map(tier => (
            <div key={tier.tier} className="text-center">
              <p className="font-mono text-xs text-silver/35 tracking-[0.3em] uppercase mb-8">— {tier.tier} —</p>
              <div className="flex flex-wrap justify-center gap-8">
                {tier.sponsors.map(s => <SponsorCircle key={s.name} name={s.name} />)}
              </div>
            </div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-20 text-center glass-neon p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon/0 via-neon/4 to-neon/0" />
          <p className="font-mono text-xs text-neon tracking-[0.4em] uppercase mb-4">Opportunity</p>
          <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mb-4">
            Reach 500+ Future Finance Leaders
          </h3>
          <p className="text-silver text-sm max-w-lg mx-auto mb-8">
            Position your brand at Karachi&apos;s most elite inter-university trading event.
          </p>
          <Link href="/sponsors" className="btn-neon px-8 py-3 text-sm inline-block">
            <span>Become a Sponsor</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
