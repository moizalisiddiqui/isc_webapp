'use client'

import Link from 'next/link'
import CountdownTimer from './CountdownTimer'

const Candlesticks = () => {
  const candles = [
    {h:60,body:40,up:true},{h:80,body:55,up:false},{h:50,body:35,up:true},
    {h:100,body:70,up:true},{h:70,body:45,up:false},{h:90,body:65,up:true},
    {h:55,body:38,up:false},{h:85,body:60,up:true},
  ]
  return (
    <div className="absolute bottom-0 right-0 hidden lg:flex items-end gap-2 opacity-20 pr-8 pb-8 pointer-events-none">
      {candles.map((c,i) => (
        <div key={i} className="flex flex-col items-center" style={{height:c.h+'px'}}>
          <div className={`w-px flex-1 ${c.up?'bg-[#39FF14]':'bg-red-500'}`} />
          <div className={`w-4 flex-shrink-0 ${c.up?'candle-up':'candle-down'}`} style={{height:c.body+'px'}} />
          <div className={`w-px flex-1 ${c.up?'bg-[#39FF14]':'bg-red-500'}`} />
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle,rgba(57,255,20,0.04) 0%,transparent 70%)'}}
      />
      <Candlesticks />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 glass border border-neon/20 px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          <span className="font-mono text-xs text-neon tracking-[0.4em] uppercase">
            Karachi &bull; 2026 &bull; Inter-University
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black uppercase leading-none mb-6">
          <div className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tighter">IOBM</div>
          <div
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tighter"
            style={{color:'#39FF14', textShadow:'0 0 8px rgba(57,255,20,0.38)'}}
          >
            STOCK
          </div>
          <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white/80 tracking-tighter">CHALLENGE</div>
        </h1>

        {/* Sub */}
        <p className="font-body text-silver text-base sm:text-lg max-w-2xl mx-auto mb-4 tracking-wide">
          The most elite inter-university stock trading simulation in Pakistan.
          <br />
          <span className="text-neon/80">Build your portfolio. Outperform the market. Dominate the competition.</span>
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
          {[{v:'50K+ PKR',l:'Prize Pool'},{v:'500+',l:'Participants'},{v:'6 Days',l:'Simulation'}].map(({v,l}) => (
            <div key={l} className="flex items-center gap-2">
              <span className="font-display font-bold text-neon">{v}</span>
              <span className="text-silver/100 font-mono text-xs tracking-wide">{l}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/register" className="btn-neon-solid px-10 py-4 text-base font-display font-black tracking-widest uppercase">
            Register Now →
          </Link>
          <Link href="/about" className="btn-neon px-10 py-4 text-base font-display font-black tracking-widest uppercase">
            <span>Learn More</span>
          </Link>
        </div>

        <CountdownTimer />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
