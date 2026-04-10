import StarfieldBackground from '@/components/StarfieldBackground'
import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import PricingCards from '@/components/PricingCards'
import GalleryGrid from '@/components/GalleryGrid'
import FAQSection from '@/components/FAQSection'
import Link from 'next/link'

// ── 3-day at-a-glance schedule (homepage preview) ─────────────────────────────
const SCHEDULE_PREVIEW = [
  { day: 'Day 1', date: 'Monday',    activity: 'Training' },
  { day: 'Day 2', date: 'Tuesday',   activity: 'Training & Trading' },
  { day: 'Day 3', date: 'Wednesday', activity: 'Online Session' },
]

export default function Home() {
  return (
    <>
      <StarfieldBackground />
      <Hero />

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <StatsSection />

      {/* ── About Preview — Strategy Meets Execution ────────────────────── */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: text + schedule table */}
            <div>
              <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">The Competition</p>
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mb-6">
                Where Strategy
                <br />
                <span className="neon-text">Meets Execution</span>
              </h2>
              <p className="text-silver font-body leading-relaxed mb-6">
                ISC is a multi-day immersive stock trading simulation that replicates real market
                conditions. Participants manage demo portfolios, execute strategic trades, and
                present their investment reasoning to industry judges.
              </p>

              {/* Schedule table */}
              <div className="mb-8 overflow-hidden border border-white/5">
                {/* Header */}
                <div className="grid grid-cols-3 bg-neon/5 border-b border-white/5">
                  {['Day', 'Date', 'Activity'].map(h => (
                    <div key={h} className="px-4 py-2 font-mono text-[10px] text-neon/60 tracking-widest uppercase">
                      {h}
                    </div>
                  ))}
                </div>
                {/* Rows */}
                {SCHEDULE_PREVIEW.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-neon/[0.02] transition-colors duration-200"
                  >
                    <div className="px-4 py-3 font-display font-bold text-neon text-sm tracking-wide">{row.day}</div>
                    <div className="px-4 py-3 font-mono text-xs text-silver/60 tracking-wide">{row.date}</div>
                    <div className="px-4 py-3 font-body text-sm text-silver">{row.activity}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="btn-neon px-8 py-3 text-sm font-display font-bold tracking-widest uppercase"
              >
                <span>Full 6-Day Schedule →</span>
              </Link>
            </div>

            {/* Right: mock trading terminal */}
            <div className="relative">
              <div className="glass-neon p-8 relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-mono text-xs text-silver/35 tracking-widest mb-1">PORTFOLIO VALUE</div>
                    <div className="font-display font-black text-3xl text-white">PKR 2,47,830</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xs text-neon tracking-widest mb-1">+12.4%</div>
                    <div className="font-mono text-xs text-silver/35">TODAY</div>
                  </div>
                </div>
                {/* Mock bars */}
                <div className="flex items-end gap-1 h-32 mb-4">
                  {[40,55,45,70,60,80,65,90,75,95,85,100].map((h,i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{
                      height:`${h}%`,
                      background: h>70
                        ? `rgba(57,255,20,${0.35+(h-70)/120})`
                        : 'rgba(255,255,255,0.08)',
                    }} />
                  ))}
                </div>
                {/* Mock tickers */}
                <div className="space-y-2">
                  {[
                    {sym:'HUBCO',price:'102.45',change:'+3.2%',up:true},
                    {sym:'OGDC', price:'87.30', change:'-1.8%',up:false},
                    {sym:'PSO',  price:'231.70',change:'+5.1%',up:true},
                  ].map(({sym,price,change,up}) => (
                    <div key={sym} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="font-mono text-xs text-white">{sym}</span>
                      <span className="font-mono text-xs text-silver">{price}</span>
                      <span className={`font-mono text-xs ${up?'text-neon':'text-red-400'}`}>{change}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-tl from-neon/5 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────────── */}
      <PricingCards />

      {/* ── Trading Partner ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Backed By The Best</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
              Our <span className="neon-text">Trading Partner</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="max-w-xl w-full">
              <img
                src="/images/AKD.jpeg"
                alt="AKD Securities - Trading Partner"
                className="w-52 h-auto rounded-2xl object-cover border border-white/10 shadow-[0_0_40px_rgba(57,255,20,0.08)] mx-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ────────────────────────────────────────────────────── */}
      <GalleryGrid />

      {/* ── Big CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative glass border border-neon/10 p-12 sm:p-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-neon/55 to-transparent" />
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-6 relative z-10">The Clock Is Ticking</p>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white mb-6 relative z-10">
              Ready to Build Your
              <br /><span className="neon-text">Winning Portfolio?</span>
            </h2>
            <p className="text-silver font-body max-w-lg mx-auto mb-10 relative z-10">
              Hundreds of students will compete. Only the best three teams will walk away with the
              prize. Will your name be on that list?
            </p>
            <Link
              href="/register"
              className="btn-neon-solid px-12 py-4 text-base font-display font-black tracking-widest uppercase relative z-10"
            >
              Secure Your Spot →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <FAQSection />
    </>
  )
}
