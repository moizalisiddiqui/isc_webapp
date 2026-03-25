import Link from 'next/link'

const NAV = [
  {href:'/',label:'Home'},{href:'/about',label:'About'},{href:'/sponsors',label:'Sponsors'},
  {href:'/team',label:'Team'},{href:'/gallery',label:'Gallery'},{href:'/register',label:'Register'},
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-neon/60 flex items-center justify-center">
                <span className="text-neon font-display font-black text-xs">ISC</span>
              </div>
              <div>
                <div className="font-display font-black text-white text-sm tracking-[0.2em] uppercase leading-none">IOBM Stock</div>
                <div className="text-neon text-[10px] tracking-[0.3em] uppercase font-mono">Challenge 2026</div>
              </div>
            </div>
            <p className="text-silver text-xs leading-relaxed font-body max-w-xs">
              Karachi&apos;s most elite inter-university stock trading simulation — where the next generation of traders is forged.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-neon tracking-[0.3em] uppercase mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {NAV.map(l => (
                <Link key={l.href} href={l.href} className="font-body text-sm text-silver/55 hover:text-neon transition-colors duration-300 tracking-wide">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-neon tracking-[0.3em] uppercase mb-4">Contact</p>
            <a href="mailto:isc@iobm.edu.pk" className="block font-mono text-sm text-silver/55 hover:text-neon transition-colors duration-300 mb-2">
              isc@iobm.edu.pk
            </a>
            <p className="font-body text-xs text-silver/35">Institute of Business Management<br />Karachi, Pakistan</p>
            <div className="flex gap-3 mt-5">
              {['IG','LI','X'].map(s => (
                <a key={s} href="#" aria-label={s} className="w-8 h-8 border border-white/10 flex items-center justify-center text-silver/35 hover:text-neon hover:border-neon/35 transition-all duration-300 font-mono text-[10px]">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-silver/25 tracking-widest">© 2026 IOBM Stock Challenge. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="font-mono text-xs text-neon/55 tracking-widest">COMPETITION ACTIVE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
