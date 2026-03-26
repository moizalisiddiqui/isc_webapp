'use client'

import { useState } from 'react'
import Link from 'next/link'

const PLANS = [
  {
    id: 'individual' as const,
    label: 'Individual',
    price: '2,500',
    currency: 'PKR',
    features: [
      'Single participant entry',
      'Full simulation access (6 days)',
      'Mentorship session (Day 1)',
      'Certificate of participation',
      'Eligible for all prize pools',
      'Networking lunch access',

    ],
    // cta: 'Register Solo',
    recommended: false,
  },
  {
    id: 'team' as const,
    label: 'Team',
    price: '5,000',
    currency: 'PKR',
    badge: 'RECOMMENDED',
    features: [
      '3 members per team',
      'Full 6-day simulation access',
      'Priority mentorship session',
      'Team certificate + awards',
      'Eligible for all prize pools',
      'Networking lunch access',
    ],
    // cta: 'Register Team',
    recommended: true,
  },
]

export default function PricingCards() {
  const [selected, setSelected] = useState<'individual' | 'team'>('team')

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Entry Fees</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
            Choose Your <span className="neon-text">Battle Formation</span>
          </h2>
          <p className="text-silver font-body mt-4 max-w-xl mx-auto text-sm">
            Every great portfolio starts with a decision. Select your entry level and compete for
            Karachi&apos;s most prestigious student trading title.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map(plan => {
            const isSelected = selected === plan.id
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelected(plan.id)}
                className={`relative text-left w-full transition-all duration-400 focus:outline-none group ${
                  isSelected
                    ? 'neon-border shadow-[0_0_32px_rgba(57,255,20,0.12)]'
                    : 'border border-white/10 hover:border-neon/25'
                }`}
              >
                {/* Recommended badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className={`font-display font-black text-xs px-4 py-1 tracking-widest uppercase transition-all duration-300 ${
                      isSelected ? 'bg-neon text-black' : 'bg-white/10 text-silver'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`glass p-8 h-full transition-all duration-300 ${isSelected ? 'bg-neon/3' : ''}`}>
                  {/* Selection indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="font-mono text-xs text-silver/50 tracking-widest uppercase mb-2">
                        {plan.label} Entry
                      </p>
                      <div className="flex items-end gap-2">
                        <span className="font-display font-black text-5xl text-white">{plan.price}</span>
                        <span className="font-mono text-sm text-neon mb-2">{plan.currency}</span>
                      </div>
                    </div>
                    {/* Radio circle */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isSelected ? 'border-neon' : 'border-white/20'
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-neon shadow-[0_0_6px_#39FF14]" />}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`h-px mb-6 transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-transparent via-neon/30 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
                  }`} />

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-3">
                        <span className={`text-sm mt-0.5 flex-shrink-0 transition-colors duration-300 ${isSelected ? 'text-neon' : 'text-silver/40'}`}>▸</span>
                        <span className="font-body text-sm text-silver">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA visual */}
                  <div className={`py-3 px-6 text-center font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                    isSelected
                      ? 'bg-neon text-black shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                      : 'border border-white/10 text-silver/50'
                  }`}>
                    {/* {plan.cta} */}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Register CTA */}
        <div className="text-center mt-10">
          <Link
            href={`/register?type=${selected}`}
            className="btn-neon-solid px-10 py-4 text-base font-display font-black tracking-widest uppercase"
          >
            Proceed to Registration →
          </Link>
        </div>
      </div>
    </section>
  )
}
