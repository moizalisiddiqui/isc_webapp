'use client'

import { useEffect, useRef } from 'react'

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W; canvas.height = H

    interface Star { x: number; y: number; r: number; a: number; s: number }
    const stars: Star[] = Array.from({ length: 140 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random(), s: Math.random() * 0.25 + 0.04,
    }))

    interface Shooter { x: number; y: number; len: number; speed: number; alpha: number; angle: number; active: boolean }
    const shooters: Shooter[] = Array.from({ length: 3 }, () => ({ x:0,y:0,len:0,speed:0,alpha:0,angle:0,active:false }))
    const launch = (s: Shooter) => {
      s.x = Math.random() * W; s.y = Math.random() * H * 0.5
      s.len = Math.random() * 90 + 70; s.speed = Math.random() * 7 + 5
      s.alpha = 1; s.angle = Math.PI/4 + (Math.random()-0.5)*0.3; s.active = true
    }
    const timers = shooters.map((_,i) => setInterval(() => launch(shooters[i]), Math.random()*4000+3000))

    const draw = () => {
      ctx.clearRect(0,0,W,H)
      // grid
      ctx.strokeStyle = 'rgba(57,255,20,0.022)'; ctx.lineWidth = 1
      for (let x=0;x<W;x+=60) { ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke() }
      for (let y=0;y<H;y+=60) { ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke() }
      // stars
      stars.forEach(s => {
        s.a += (Math.random()-0.5)*0.018; s.a = Math.max(0.08,Math.min(1,s.a))
        s.y += s.s*0.18; if (s.y>H) { s.y=0; s.x=Math.random()*W }
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2)
        ctx.fillStyle = `rgba(255,255,255,${s.a})`; ctx.fill()
        if (s.r>1.1) {
          ctx.beginPath(); ctx.arc(s.x,s.y,s.r*1.6,0,Math.PI*2)
          ctx.fillStyle = `rgba(57,255,20,${s.a*0.28})`; ctx.fill()
        }
      })
      // shooters
      shooters.forEach(s => {
        if (!s.active) return
        s.alpha -= 0.02; s.x += Math.cos(s.angle)*s.speed; s.y += Math.sin(s.angle)*s.speed
        if (s.alpha<=0||s.x>W||s.y>H) { s.active=false; return }
        const g = ctx.createLinearGradient(s.x,s.y,s.x-Math.cos(s.angle)*s.len,s.y-Math.sin(s.angle)*s.len)
        g.addColorStop(0,`rgba(255,255,255,${s.alpha})`)
        g.addColorStop(0.3,`rgba(57,255,20,${s.alpha*0.7})`)
        g.addColorStop(1,'rgba(57,255,20,0)')
        ctx.beginPath(); ctx.moveTo(s.x,s.y)
        ctx.lineTo(s.x-Math.cos(s.angle)*s.len,s.y-Math.sin(s.angle)*s.len)
        ctx.strokeStyle=g; ctx.lineWidth=1.8; ctx.stroke()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => { W=window.innerWidth; H=window.innerHeight; canvas.width=W; canvas.height=H }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); timers.forEach(clearInterval); window.removeEventListener('resize',resize) }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" aria-hidden />
}
