'use client'

import { useState, useEffect, useCallback } from 'react'
import Preloader from './Preloader'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [loading])

  const handleComplete = useCallback(() => setLoading(false), [])

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      <div
        style={{
          opacity:    loading ? 0 : 1,
          transform:  loading ? 'translateY(14px)' : 'translateY(0)',
          transition: 'opacity 0.65s ease, transform 0.65s ease',
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
