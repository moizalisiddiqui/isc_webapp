'use client'

import { useEffect, useState } from 'react'

// ── Registration deadline: April 9, 2026 ──────────────────────────────────────
const DEADLINE = new Date('2026-04-09T23:59:59')

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

function calcTimeLeft(): TimeLeft {
  const diff = Math.max(0, DEADLINE.getTime() - Date.now())
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="relative glass-neon w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
      <span className="font-display font-black text-2xl sm:text-3xl text-neon tabular-nums leading-none">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="font-mono text-[10px] text-silver/50 tracking-widest uppercase">{label}</span>
  </div>
)

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-mono text-[10px] text-silver/40 tracking-[0.35em] uppercase">
        Registration Closes In
      </p>
      <div className="flex items-center gap-2 sm:gap-3">
        <TimeUnit value={timeLeft.days}    label="Days"  />
        <span className="font-display font-black text-2xl text-neon/30 mb-5">:</span>
        <TimeUnit value={timeLeft.hours}   label="Hours" />
        <span className="font-display font-black text-2xl text-neon/30 mb-5">:</span>
        <TimeUnit value={timeLeft.minutes} label="Mins"  />
        <span className="font-display font-black text-2xl text-neon/30 mb-5">:</span>
        <TimeUnit value={timeLeft.seconds} label="Secs"  />
      </div>
    </div>
  )
}
