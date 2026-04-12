import StarfieldBackground from '@/components/StarfieldBackground'

// ── Page wrapper ──────────────────────────────────────────────────────────────
export default function RegisterPage() {
  return (
    <>
      <StarfieldBackground />
      <div className="relative pt-32 pb-24 px-4 z-10 min-h-[80vh] flex flex-col items-center justify-center text-center">
        <div className="max-w-lg mx-auto">

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
            <span className="font-mono text-[10px] text-silver/60 tracking-widest uppercase">
              Registrations Closed
            </span>
          </div>

          {/* Lock icon */}
          <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-10">
            <svg className="w-9 h-9 text-silver/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          {/* Eyebrow */}
          <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">
            IOBM Stock Challenge 2026
          </p>

          {/* Heading */}
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-white mb-6">
            Thank you for<br />
            <span className="neon-text">your interest</span>
          </h1>

          {/* Body */}
          <p className="font-body text-silver text-sm leading-relaxed mb-12 max-w-sm mx-auto">
            Registrations for ISC 2026 are now officially closed. We're overwhelmed
            by the response and grateful for everyone who signed up.
            We'll see you next year, inshallah.
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

          {/* Footer note */}
          <p className="font-mono text-[10px] text-silver/35 tracking-widest uppercase leading-loose">
            Questions? &nbsp;
            <a href="mailto:isc@iobm.edu.pk" className="text-silver/55 underline underline-offset-4">
              isc@iobm.edu.pk
            </a>
            <br />
            ISC 2026 &nbsp;·&nbsp; IOBM, Karachi
          </p>

        </div>
      </div>
    </>
  )
}