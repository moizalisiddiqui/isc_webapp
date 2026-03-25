'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOOT_SEQUENCE = [
  'Initializing Market Environment...',
  'Loading Portfolio Engine...',
  'Connecting to Exchange...',
  'Launching Simulation...',
]

function ScannerRing({ progress }: { progress: number }) {
  const R = 88, CIRC = 2 * Math.PI * R
  const dash = (progress / 100) * CIRC
  const angle = (progress / 100) * 2 * Math.PI - Math.PI / 2
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0"
      style={{ filter: 'drop-shadow(0 0 8px rgba(57,255,20,0.5))' }}>
      <circle cx="110" cy="110" r={R+12} fill="none" stroke="rgba(57,255,20,0.05)" strokeWidth="1" />
      {Array.from({length:32}).map((_,i) => {
        const a = (i/32)*2*Math.PI - Math.PI/2
        const inn = R+14, out = inn+(i%4===0?8:4)
        return (
          <line key={i}
            x1={110+inn*Math.cos(a)} y1={110+inn*Math.sin(a)}
            x2={110+out*Math.cos(a)} y2={110+out*Math.sin(a)}
            stroke={i%4===0?'rgba(57,255,20,0.38)':'rgba(57,255,20,0.12)'} strokeWidth="1" />
        )
      })}
      <circle cx="110" cy="110" r={R} fill="none" stroke="rgba(57,255,20,0.07)" strokeWidth="2" />
      <circle cx="110" cy="110" r={R} fill="none" stroke="#39FF14" strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${CIRC}`}
        strokeDashoffset={CIRC/4}
        style={{transition:'stroke-dasharray 0.28s ease'}} />
      {progress > 2 && (
        <circle
          cx={110+R*Math.cos(angle)} cy={110+R*Math.sin(angle)} r="4"
          fill="#39FF14" style={{filter:'drop-shadow(0 0 6px #39FF14)'}} />
      )}
    </svg>
  )
}

function ScannerSweep() {
  return (
    <motion.svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0"
      animate={{rotate:360}} transition={{duration:2.8,ease:'linear',repeat:Infinity}}>
      <defs>
        <radialGradient id="sweep" cx="110" cy="110" r="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#39FF14" stopOpacity="0"    />
          <stop offset="70%"  stopColor="#39FF14" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#39FF14" stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="sweepLine" x1="110" y1="110" x2="110" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#39FF14" stopOpacity="0.5"  />
          <stop offset="100%" stopColor="#39FF14" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <path d={`M 110 110 L 110 22 A 88 88 0 0 1 ${110+88*Math.sin(Math.PI/6)} ${110-88*Math.cos(Math.PI/6)} Z`}
        fill="url(#sweep)" />
      <line x1="110" y1="110" x2="110" y2="22" stroke="url(#sweepLine)" strokeWidth="1.5" />
    </motion.svg>
  )
}

function BootLine({ text, delay }: { text: string; delay: number }) {
  const [shown, setShown] = useState('')
  const [done,  setDone]  = useState(false)
  useEffect(() => {
    const t = setTimeout(() => {
      let i = 0
      const iv = setInterval(() => {
        setShown(text.slice(0, ++i))
        if (i >= text.length) { clearInterval(iv); setDone(true) }
      }, 26)
      return () => clearInterval(iv)
    }, delay)
    return () => clearTimeout(t)
  }, [text, delay])
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: shown.length?1:0}} className="flex items-center gap-2 h-5">
      <span className="text-neon/45 font-mono text-[10px]">▸</span>
      <span className="font-mono text-xs text-silver/65 tracking-widest">
        {shown}
        {!done && <span className="inline-block w-px h-3 bg-neon ml-0.5 animate-pulse" />}
      </span>
      {done && <motion.span initial={{opacity:0}} animate={{opacity:1}} className="font-mono text-[10px] text-neon ml-1">OK</motion.span>}
    </motion.div>
  )
}

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [exiting,  setExiting]  = useState(false)

  const finish = useCallback(async () => {
    await new Promise(r => setTimeout(r, 320))
    setExiting(true)
    await new Promise(r => setTimeout(r, 820))
    onComplete()
  }, [onComplete])

  useEffect(() => {
    const STEPS = [
      {target:18,dur:380},{target:42,dur:580},{target:67,dur:680},
      {target:88,dur:580},{target:100,dur:680},
    ]
    let cur = 0
    ;(async () => {
      for (const step of STEPS) {
        await new Promise<void>(res => {
          const from = cur, diff = step.target - from, t0 = Date.now()
          const id = setInterval(() => {
            const p = Math.min((Date.now()-t0)/step.dur, 1)
            const e = 1-Math.pow(1-p,2)
            setProgress(cur = Math.round(from+diff*e))
            if (p>=1) { clearInterval(id); res() }
          }, 16)
        })
      }
      finish()
    })()
  }, [finish])

  const lineDelays = [380, 950, 1530, 2120]

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div key="preloader"
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
          exit={{ y:'-100%', opacity:0, transition:{ duration:0.72, ease:[0.76,0,0.24,1] } }}>

          {/* Grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:`linear-gradient(rgba(57,255,20,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(57,255,20,0.022) 1px,transparent 1px)`,
              backgroundSize:'60px 60px',
            }} />

          {/* Corner accents */}
          {['top-6 left-6 border-t border-l','top-6 right-6 border-t border-r',
            'bottom-6 left-6 border-b border-l','bottom-6 right-6 border-b border-r'].map(cls => (
            <motion.div key={cls} className={`absolute w-8 h-8 ${cls} border-neon/25`}
              initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.55,delay:0.2}} />
          ))}

          <div className="relative flex flex-col items-center gap-10">

            {/* Scanner */}
            <motion.div className="relative w-[220px] h-[220px] flex items-center justify-center"
              initial={{opacity:0,scale:0.7}} animate={{opacity:1,scale:1}}
              transition={{duration:0.65,ease:[0.34,1.56,0.64,1]}}>
              <ScannerSweep />
              <ScannerRing progress={progress} />
              {/* ambient glow */}
              <motion.div className="absolute w-24 h-24 rounded-full"
                style={{background:'radial-gradient(circle,rgba(57,255,20,0.1) 0%,transparent 70%)'}}
                animate={{scale:[1,1.3,1],opacity:[0.5,1,0.5]}}
                transition={{duration:2,repeat:Infinity,ease:'easeInOut'}} />
              {/* Logo */}
              <motion.div className="relative z-10 flex flex-col items-center"
                initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:0.75,delay:0.5}}>
                <div className="w-14 h-14 border border-neon/60 flex items-center justify-center mb-1"
                  style={{boxShadow:'0 0 18px rgba(57,255,20,0.28),inset 0 0 18px rgba(57,255,20,0.04)'}}>
                  <span className="font-display font-black text-neon text-xl tracking-widest"
                    style={{textShadow:'0 0 10px rgba(57,255,20,0.75)'}}>ISC</span>
                </div>
                <span className="font-mono text-[9px] text-silver/35 tracking-[0.35em] uppercase">2026</span>
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.div className="text-center"
              initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.55,delay:0.38}}>
              <div className="font-display font-black text-2xl text-white tracking-[0.25em] uppercase">
                IOBM STOCK CHALLENGE
              </div>
              <div className="font-mono text-[10px] text-neon/45 tracking-[0.5em] uppercase mt-1">
                Inter-University Trading Simulation
              </div>
            </motion.div>

            {/* Boot lines */}
            <motion.div className="space-y-1.5 w-72"
              initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4,delay:0.58}}>
              {BOOT_SEQUENCE.map((line,i) => <BootLine key={line} text={line} delay={lineDelays[i]} />)}
            </motion.div>

            {/* Progress bar */}
            <motion.div className="w-72 flex flex-col gap-2"
              initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4,delay:0.78}}>
              <div className="w-full h-px bg-white/5 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full"
                  style={{
                    width:`${progress}%`,
                    background:'linear-gradient(90deg,rgba(57,255,20,0.38) 0%,#39FF14 100%)',
                    boxShadow:'0 0 8px rgba(57,255,20,0.55)',
                    transition:'width 0.28s ease',
                  }} />
                <motion.div className="absolute top-0 h-full w-8"
                  style={{background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)'}}
                  animate={{left:['-10%','110%']}}
                  transition={{duration:1.2,repeat:Infinity,ease:'easeInOut',repeatDelay:0.25}} />
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-[10px] text-silver/25 tracking-widest">SYSTEM BOOT</span>
                <span className="font-mono text-[10px] text-neon/55 tabular-nums">{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Exit flash */}
          <motion.div className="absolute inset-0 bg-neon pointer-events-none"
            initial={{opacity:0}}
            animate={exiting?{opacity:[0,0.04,0]}:{opacity:0}}
            transition={{duration:0.45}} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
