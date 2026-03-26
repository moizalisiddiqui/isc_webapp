'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value:500, suffix:'+',  label:'Participants',   sub:'University Students' },
  { value:3,   suffix:'',   label:'Winning Teams',  sub:'Top Performers'      },
  { value:50, suffix:'K+', label:'PKR Prize Pool', sub:'Total Winnings'      },
  { value:12,  suffix:'+',  label:'Universities',   sub:'Across Karachi'      },
]

function useCountUp(target: number, dur = 2000, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const id = setInterval(() => {
      const p = Math.min((Date.now()-start)/dur, 1)
      const ease = 1-Math.pow(1-p,3)
      setCount(Math.floor(ease*target))
      if (p>=1) clearInterval(id)
    }, 16)
    return () => clearInterval(id)
  }, [target, dur, active])
  return count
}

const StatCard = ({ stat, active }: { stat: typeof STATS[0]; active: boolean }) => {
  const n = useCountUp(stat.value, 2000, active)
  return (
    <div className="group relative glass-neon p-6 sm:p-8 text-center hover:border-neon/40 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_,i) => (
          <div key={i} className={`w-1.5 rounded-sm ${i%2===0?'candle-up':'candle-down'}`}
            style={{height:`${20+Math.random()*18}px`, opacity:0.55}} />
        ))}
      </div>
      <div className="stat-number text-4xl sm:text-5xl lg:text-6xl mb-2">{n}{stat.suffix}</div>
      <div className="font-display font-bold text-white text-lg tracking-widest uppercase mb-1">{stat.label}</div>
      <div className="font-mono text-xs text-silver/100 tracking-wider">{stat.sub}</div>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, {threshold:0.3})
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <section ref={ref} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(s => <StatCard key={s.label} stat={s} active={active} />)}
      </div>
    </section>
  )
}
