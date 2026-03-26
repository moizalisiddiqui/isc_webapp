import type { Metadata } from 'next'
import StarfieldBackground from '@/components/StarfieldBackground'

export const metadata: Metadata = {
  title: 'Sponsors – IOBM Stock Challenge 2026',
  description: 'Partner with IOBM Stock Challenge 2026 and reach 500+ future finance leaders across Karachi.',
}

// ─── Main Sponsor Tiers ───────────────────────────────────────────────────────
const TIERS = [
  {
    name: 'Titanium Sponsor',
    price: 'PKR 600,000',
    badgeCls: 'bg-cyan-300 text-black',
    cardCls: 'border-cyan-300/30 bg-cyan-300/[0.03]',
    glowCls: 'shadow-[0_0_30px_rgba(103,232,249,0.08)]',
    benefits: [
      { label: 'Stall Space',            value: 'YES – 4 Tables' },
      { label: 'Prime Stall Location',   value: 'YES' },
      { label: 'Social Media Marketing', value: 'YES' },
      { label: 'Logo on Event Banners',  value: 'YES – Top Position' },
      { label: 'Emcee Acknowledgement',  value: 'YES' },
      { label: 'Free Passes for Staff',  value: '8 Passes' },
      { label: 'Custom Branding at Booth', value: 'YES' },
    ],
  },
  {
    name: 'Platinum Sponsor',
    price: 'PKR 450,000',
    badgeCls: 'bg-slate-300 text-black',
    cardCls: 'border-slate-300/25 bg-slate-300/[0.02]',
    glowCls: 'shadow-[0_0_30px_rgba(203,213,225,0.07)]',
    benefits: [
      { label: 'Stall Space',            value: 'YES – 3 Tables' },
      { label: 'Prime Stall Location',   value: 'YES' },
      { label: 'Social Media Marketing', value: 'YES' },
      { label: 'Logo on Event Banners',  value: 'YES' },
      { label: 'Emcee Acknowledgement',  value: 'YES' },
      { label: 'Free Passes for Staff',  value: '6 Passes' },
      { label: 'Custom Branding at Booth', value: 'YES' },
    ],
  },
  {
    name: 'Diamond Sponsor',
    price: 'PKR 350,000',
    badgeCls: 'bg-sky-300 text-black',
    cardCls: 'border-sky-300/25 bg-sky-300/[0.02]',
    glowCls: 'shadow-[0_0_30px_rgba(125,211,252,0.07)]',
    benefits: [
      { label: 'Stall Space',            value: 'YES – 3 Tables' },
      { label: 'Prime Stall Location',   value: 'YES' },
      { label: 'Social Media Marketing', value: 'YES' },
      { label: 'Logo on Event Banners',  value: 'YES' },
      { label: 'Emcee Acknowledgement',  value: 'YES' },
      { label: 'Free Passes for Staff',  value: '4 Passes' },
      { label: 'Custom Branding at Booth', value: 'YES' },
    ],
  },
  {
    name: 'Golden Sponsor',
    price: 'PKR 250,000',
    badgeCls: 'bg-yellow-400 text-black',
    cardCls: 'border-yellow-400/25 bg-yellow-400/[0.02]',
    glowCls: 'shadow-[0_0_30px_rgba(250,204,21,0.07)]',
    benefits: [
      { label: 'Stall Space',            value: 'YES – 2 Tables' },
      { label: 'Prime Stall Location',   value: 'NO' },
      { label: 'Social Media Marketing', value: 'YES' },
      { label: 'Logo on Event Banners',  value: 'YES' },
      { label: 'Emcee Acknowledgement',  value: 'YES' },
      { label: 'Free Passes for Staff',  value: '3 Passes' },
      { label: 'Custom Branding at Booth', value: 'NO' },
    ],
  },
  {
    name: 'Silver Sponsor',
    price: 'PKR 150,000',
    badgeCls: 'bg-gray-300 text-black',
    cardCls: 'border-gray-300/20 bg-white/[0.015]',
    glowCls: '',
    benefits: [
      { label: 'Stall Space',            value: 'YES – 2 Tables' },
      { label: 'Prime Stall Location',   value: 'NO' },
      { label: 'Social Media Marketing', value: 'YES' },
      { label: 'Logo on Event Banners',  value: 'YES' },
      { label: 'Emcee Acknowledgement',  value: 'YES' },
      { label: 'Free Passes for Staff',  value: '2 Passes' },
      { label: 'Custom Branding at Booth', value: 'NO' },
    ],
  },
]

// ─── Special Opportunity Packages ────────────────────────────────────────────
const SPECIAL = [
  {
    name: 'Clothing Partner',
    price: '50 Shirts or PKR 60,000',
    icon: '👕',
    badgeCls: 'bg-purple-400 text-black',
    cardCls: 'border-purple-400/25 bg-purple-400/[0.02]',
    benefits: [
      { label: 'Stall Space',              value: 'YES – 2 Tables' },
      { label: 'Prime Stall Location',     value: 'YES' },
      { label: 'Social Media Marketing',   value: 'YES' },
      { label: 'Logo on Event Banners',    value: 'YES' },
      { label: 'Emcee Acknowledgement',    value: 'YES' },
      { label: 'Free Passes for Staff',    value: '2 Passes' },
      { label: 'Custom Branding at Booth', value: 'YES' },
    ],
  },
  {
    name: 'Beverage Partner',
    price: '25 Bottles + 25 Drink Crates',
    icon: '🥤',
    badgeCls: 'bg-emerald-400 text-black',
    cardCls: 'border-emerald-400/25 bg-emerald-400/[0.02]',
    benefits: [
      { label: 'Stall Space',              value: 'YES – 2 Tables' },
      { label: 'Prime Stall Location',     value: 'YES' },
      { label: 'Social Media Marketing',   value: 'YES' },
      { label: 'Logo on Event Banners',    value: 'NO' },
      { label: 'Emcee Acknowledgement',    value: 'YES' },
      { label: 'Free Passes for Staff',    value: '2 Passes' },
      { label: 'Custom Branding at Booth', value: 'NO' },
    ],
  },
]

// ─── Vendor Package ───────────────────────────────────────────────────────────
const VENDOR = {
  name: 'Vendor Package',
  price: 'Contact for Pricing',
  icon: '🏪',
  benefits: [
    { label: 'Stall Space',              value: 'YES – 2 Tables' },
    { label: 'Social Media Marketing',   value: 'YES' },
    { label: 'Logo on Event Banners',    value: 'NO' },
    { label: 'Emcee Acknowledgement',    value: 'NO' },
    { label: 'Free Passes for Staff',    value: '1 Pass' },
    { label: 'Custom Branding at Booth', value: 'YES' },
  ],
}

// ─── Reach Stats ─────────────────────────────────────────────────────────────
const REACH = [
  { value: '500+',   label: 'University Students' },
  { value: '12+',    label: 'Universities'         },
  { value: '6 Days', label: 'Event Duration'       },
  { value: '50K+',  label: 'PKR Prize Pool'       },
]

// ─── Helper: benefit row ──────────────────────────────────────────────────────
function BenefitRow({ label, value }: { label: string; value: string }) {
  const isNo = value === 'NO'
  return (
    <li className="flex items-center justify-between gap-3 py-1.5 border-b border-white/[0.04] last:border-0">
      <span className="font-body text-sm text-silver/100">{label}</span>
      <span className={`font-mono text-xs font-bold tracking-wide flex-shrink-0 ${isNo ? 'text-white/20' : 'text-neon'}`}>
        {value}
      </span>
    </li>
  )
}

export default function SponsorsPage() {
  return (
    <>
      <StarfieldBackground />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Partnership</p>
          <h1 className="font-display font-black text-5xl sm:text-7xl uppercase tracking-tighter text-white mb-6">
            Become a <span className="neon-text">Sponsor</span>
          </h1>
          <p className="font-body text-silver text-lg max-w-2xl leading-relaxed">
            Align your brand with ambition. ISC 2026 brings together Karachi&apos;s most driven
            university students — your next employees, clients, and business leaders.
          </p>
        </div>
      </section>

      {/* ── Reach Stats ── */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {REACH.map(({ value, label }) => (
            <div key={label} className="glass-neon p-6 text-center">
              <div className="font-display font-black text-3xl text-neon mb-1">{value}</div>
              <div className="font-mono text-[10px] text-silver/100 tracking-widest uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Main Tiers ── */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Packages</p>
            <h2 className="font-display font-black text-4xl uppercase tracking-tight text-white">
              Sponsorship <span className="neon-text">Tiers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TIERS.map(tier => (
              <div
                key={tier.name}
                className={`relative glass border ${tier.cardCls} ${tier.glowCls} p-7 hover:scale-[1.01] transition-all duration-300`}
              >
                <div className="mb-5">
                  <span className={`inline-block font-display font-black text-xs px-3 py-1 tracking-widest uppercase mb-3 ${tier.badgeCls}`}>
                    {tier.name}
                  </span>
                  <div className="font-display font-black text-xl text-white">{tier.price}</div>
                </div>
                <div className="h-px bg-white/5 mb-4" />
                <ul>
                  {tier.benefits.map(b => (
                    <BenefitRow key={b.label} label={b.label} value={b.value} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Special Opportunities ── */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Finance Society</p>
            <h2 className="font-display font-black text-4xl uppercase tracking-tight text-white">
              Clothing &amp; Beverage <span className="neon-text">Opportunities</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {SPECIAL.map(pkg => (
              <div
                key={pkg.name}
                className={`relative glass border ${pkg.cardCls} p-7 hover:scale-[1.01] transition-all duration-300`}
              >
                <div className="mb-5">
                  <div className="text-3xl mb-2">{pkg.icon}</div>
                  <span className={`inline-block font-display font-black text-xs px-3 py-1 tracking-widest uppercase mb-3 ${pkg.badgeCls}`}>
                    {pkg.name}
                  </span>
                  <div className="font-display font-black text-base text-white leading-snug">{pkg.price}</div>
                </div>
                <div className="h-px bg-white/5 mb-4" />
                <ul>
                  {pkg.benefits.map(b => (
                    <BenefitRow key={b.label} label={b.label} value={b.value} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vendor Package ── */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Finance Society</p>
            <h2 className="font-display font-black text-4xl uppercase tracking-tight text-white">
              Vendor <span className="neon-text">Package</span>
            </h2>
          </div>
          <div className="max-w-sm mx-auto glass border border-white/10 bg-white/[0.02] p-7 hover:scale-[1.01] transition-all duration-300">
            <div className="mb-5">
              <div className="text-3xl mb-2">{VENDOR.icon}</div>
              <span className="inline-block font-display font-black text-xs px-3 py-1 tracking-widest uppercase mb-3 bg-white/10 text-white">
                {VENDOR.name}
              </span>
              <div className="font-display font-black text-base text-white">{VENDOR.price}</div>
            </div>
            <div className="h-px bg-white/5 mb-4" />
            <ul>
              {VENDOR.benefits.map(b => (
                <BenefitRow key={b.label} label={b.label} value={b.value} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-3xl mx-auto glass border border-neon/10 p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent" />
          <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4 relative z-10">Ready to Partner?</p>
          <h2 className="font-display font-black text-3xl uppercase text-white mb-4 relative z-10">
            Let&apos;s Build Something <span className="neon-text">Together</span>
          </h2>
          <p className="font-body text-silver text-sm mb-8 relative z-10">
            Contact us to receive the full sponsorship proposal and discuss a custom package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="mailto: std_36794@iobm.edu.pk"
              className="btn-neon-solid px-8 py-3 text-sm font-display font-bold tracking-widest uppercase"
            >
              Email Us
            </a>
            {/*
              ── HOW TO ATTACH YOUR PDF ─────────────────────────────────────────
              Option A (recommended): Copy ISC_Final_Proposal.pdf into your
              Next.js /public folder, then set href="/ISC_Final_Proposal.pdf"

              Option B: Upload to Google Drive → Share → "Anyone with the link"
              → copy the file ID from the URL → use:
              href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"

              Option C: Dropbox / OneDrive public share link.
              ──────────────────────────────────────────────────────────────────
            */}
            <a
              href="/ISC_Final_Proposal.pdf"
              download
              className="btn-neon px-8 py-3 text-sm font-display font-bold tracking-widest uppercase"
            >
              <span>Download Proposal</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}