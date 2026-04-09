import type { Metadata } from 'next'
import Link from 'next/link'
import StarfieldBackground from '@/components/StarfieldBackground'

export const metadata: Metadata = {
  title: 'About – IOBM Stock Challenge 2026',
  description:
    'Learn about the IOBM Stock Challenge: a 6-day immersive inter-university stock trading simulation in Karachi.',
}

// ── Full 6-day schedule ───────────────────────────────────────────────────────
const SCHEDULE = [
  {
    day: '01',
    dayLabel: 'Day 1',
    date: 'Monday',
    title: 'Training',
    desc:
      'Industry veterans and finance professionals deliver high-intensity briefings on market mechanics, risk management, and portfolio strategy. Participants receive simulation account credentials and initial capital allocation.',
    items: [
      'Market orientation sessions',
      'Risk management workshop',
      'Demo account activation',
      'Team strategy planning',
    ],
    tag: 'Mentorship',
  },
  {
    day: '02',
    dayLabel: 'Day 2',
    date: 'Tuesday',
    title: 'Training & Trading',
    desc:
      'The simulation goes live. Participants execute real-time buy/sell orders across PSX-listed equities, managing volatile market conditions while continuing to absorb mentorship from industry professionals.',
    items: [
      'Live trading simulation begins',
      'Continued mentorship sessions',
      'Real-time market data access',
      'Mid-day portfolio checkpoints',
    ],
    tag: 'Live Trading',
  },
  {
    day: '03',
    dayLabel: 'Day 3',
    date: 'Wednesday',
    title: 'Online Independent Trading',
    desc:
      'A structured online session where participants receive additional guidance, review their portfolio performance, and refine their strategy with virtual instructor support.',
    items: [
      'Virtual portfolio review',
      'Strategy refinement session',
      'Online Q&A with mentors',
      'Leaderboard review',
    ],
    tag: 'Online',
  },
  {
    day: '04',
    dayLabel: 'Day 4',
    date: 'Thursday',
    title: 'Online Independent Trading',
    desc:
      'Participants independently execute trades, conduct research, and stress-test their portfolio thesis. No scheduled sessions — this is pure competitive trading under live conditions.',
    items: [
      'Independent trading session',
      'Market research & analysis',
      'Portfolio stress-testing',
      'Strategy iteration',
    ],
    tag: 'Independent',
  },
  {
    day: '05',
    dayLabel: 'Day 5',
    date: 'Friday',
    title: 'Online Independent Trading',
    desc:
      'Final trading day. Participants lock in their portfolios and begin preparing their investment thesis presentation for the judges. Rehearsal sessions and coaching are provided.',
    items: [
      'Final trading session',
      'Portfolio lock-in',
      'Presentation preparation',
      'Rehearsal coaching',
    ],
    tag: 'Preparation',
  },
  {
    day: '06',
    dayLabel: 'Day 6',
    date: 'Saturday',
    title: 'Presentations & Award Ceremony',
    desc:
      'Top teams present their investment thesis and portfolio strategy to a panel of industry judges. Winners are announced based on portfolio performance combined with the quality of their reasoning. Followed by a social & dinner.',
    items: [
      'Finalist presentations',
      'Judges evaluation panel',
      'Winner announcements',
      'Social & dinner networking',
    ],
    tag: 'Finals',
  },
]

// Tag colour mapping
const TAG_STYLES: Record<string, string> = {
  Mentorship:  'bg-blue-500/15 text-blue-400   border-blue-500/25',
  'Live Trading': 'bg-neon/12    text-neon        border-neon/25',
  Online:      'bg-purple-500/15 text-purple-400 border-purple-500/25',
  Independent: 'bg-orange-500/15 text-orange-400 border-orange-500/25',
  Preparation: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
  Finals:      'bg-neon/20       text-neon        border-neon/40',
}

const RULES = [
  'All participants must be enrolled university students in Karachi.',
  'Teams must consist of exactly 3 members (1 team leader + 2 members).',
  'All trading occurs within the designated simulation platform.',
  'Short selling is permitted subject to platform margin requirements.',
  'Insider trading or collusion results in immediate disqualification.',
  'Final standings consider both portfolio return AND investment rationale.',
  'Judges\' decisions are final and binding.',
  'All participants must attend all scheduled days of the event.',
]

export default function AboutPage() {
  return (
    <>
      <StarfieldBackground />

      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="font-mono text-xs text-neon tracking-[0.4em] uppercase">The Competition</span>
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-white mb-6">
            About <span className="neon-text">ISC</span>
          </h1>
          <p className="font-body text-silver text-lg max-w-2xl leading-relaxed">
            The IOBM Stock Challenge is Karachi&apos;s most prestigious inter-university stock
            trading simulation — a 6-day crucible where elite students compete using real market
            intelligence, strategic discipline, and nerves of steel.
          </p>
          <div className="h-px bg-gradient-to-r from-neon/28 to-transparent mt-8" />
        </div>
      </section>

      {/* ── What is ISC ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">The Concept</p>
            <h2 className="font-display font-black text-4xl uppercase tracking-tight text-white mb-6">
              What Is the<br /><span className="neon-text">Stock Challenge?</span>
            </h2>
            <div className="space-y-4 text-silver font-body leading-relaxed">
              <p>
                ISC replicates the high-pressure environment of a professional trading desk. Every
                participant receives a demo trading account loaded with virtual capital and access
                to live PSX market data.
              </p>
              <p>
                Over 6 days, participants make strategic buy and sell decisions, manage risk,
                react to market movements, and build portfolios designed to outperform their peers.
              </p>
              <p>
                The final evaluation isn&apos;t just about profit — it&apos;s about{' '}
                <span className="text-neon">why</span> you made each decision. Judges evaluate
                investment thesis, risk management approach, and the quality of strategic
                reasoning. The best traders think, not just react.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { icon: '⚡', label: 'Real Market Data',      desc: 'Live PSX data feeds throughout the simulation' },
              { icon: '🎯', label: 'Performance + Reasoning', desc: 'Winners judged on returns AND investment rationale' },
              { icon: '🏆', label: '50,000+ PKR',           desc: 'Total prize pool distributed to top 3 teams' },
              { icon: '🤝', label: 'Industry Mentors',       desc: 'Learn from working finance professionals on Day 1 & 2' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="glass border border-white/5 hover:border-neon/18 transition-all duration-300 p-4 flex gap-4">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <div className="font-display font-bold text-white text-sm tracking-wide mb-1">{label}</div>
                  <div className="font-body text-xs text-silver/55">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full 6-Day Schedule ─────────────────────────────────────────── */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Full Schedule</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
              6 Days. <span className="neon-text">One Champion.</span>
            </h2>
          </div>

          {/* Schedule table — desktop */}
          <div className="hidden sm:block overflow-hidden border border-white/5 mb-8">
            {/* Table header */}
            <div className="grid grid-cols-12 bg-neon/5 border-b border-white/5">
              {['Day', 'Date', 'Activity', 'Focus'].map(h => (
                <div
                  key={h}
                  className={`px-5 py-3 font-mono text-[10px] text-neon/55 tracking-widest uppercase ${
                    h === 'Activity' ? 'col-span-4' : h === 'Focus' ? 'col-span-3' : 'col-span-2'
                  }`}
                >
                  {h}
                </div>
              ))}
            </div>
            {/* Rows */}
            {SCHEDULE.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-12 border-b border-white/5 last:border-0 hover:bg-neon/[0.018] transition-colors duration-200 items-center"
              >
                <div className="col-span-2 px-5 py-4 font-display font-black text-neon text-base tracking-wide">
                  {row.dayLabel}
                </div>
                <div className="col-span-2 px-5 py-4 font-mono text-xs text-silver/55 tracking-wide">
                  {row.date}
                </div>
                <div className="col-span-4 px-5 py-4 font-display font-bold text-white text-sm tracking-wide uppercase">
                  {row.title}
                </div>
                <div className="col-span-3 px-5 py-4">
                  <span className={`font-mono text-[10px] px-2.5 py-1 border tracking-widest uppercase ${TAG_STYLES[row.tag]}`}>
                    {row.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile accordion cards */}
          <div className="sm:hidden space-y-3">
            {SCHEDULE.map((row, i) => (
              <div key={i} className="glass border border-white/5 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-black text-neon text-lg">{row.dayLabel}</span>
                    <span className="font-mono text-xs text-silver/45">{row.date}</span>
                  </div>
                  <span className={`font-mono text-[9px] px-2 py-0.5 border tracking-widest uppercase ${TAG_STYLES[row.tag]}`}>
                    {row.tag}
                  </span>
                </div>
                <div className="font-display font-bold text-white text-sm uppercase tracking-wide">{row.title}</div>
              </div>
            ))}
          </div>

          {/* Detailed day cards */}
          <div className="mt-12 space-y-6">
            {SCHEDULE.map((row, i) => (
              <div
                key={i}
                className="relative grid lg:grid-cols-5 gap-6 glass border border-white/5 hover:border-neon/18 transition-all duration-500 p-6 sm:p-8"
              >
                {/* Day badge */}
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className="w-12 h-12 neon-border flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-black text-neon text-lg">{row.day}</span>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-silver/40 tracking-widest uppercase">{row.date}</div>
                    <span className={`font-mono text-[9px] px-2 py-0.5 border tracking-widest uppercase mt-1 inline-block ${TAG_STYLES[row.tag]}`}>
                      {row.tag}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="lg:col-span-4">
                  <h3 className="font-display font-black text-xl text-white tracking-wide mb-3 uppercase">
                    {row.title}
                  </h3>
                  <p className="font-body text-silver/65 text-sm leading-relaxed mb-4">{row.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {row.items.map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-neon flex-shrink-0" />
                        <span className="font-body text-xs text-silver/55">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Competition Rules ────────────────────────────────────────────── */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Regulations</p>
            <h2 className="font-display font-black text-4xl uppercase tracking-tight text-white">
              Competition <span className="neon-text">Rules</span>
            </h2>
          </div>
          <div className="glass border border-white/5 p-8">
            <div className="space-y-3">
              {RULES.map((rule, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0">
                  <span className="font-mono text-xs text-neon/45 flex-shrink-0 mt-0.5">
                    {String(i+1).padStart(2, '0')}
                  </span>
                  <span className="font-body text-sm text-silver">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 relative z-10 text-center">
        <Link
          href="/register"
          className="btn-neon-solid px-12 py-4 text-base font-display font-black tracking-widest uppercase"
        >
          Register Now →
        </Link>
      </section>
    </>
  )
}
