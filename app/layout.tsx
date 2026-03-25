import type { Metadata } from 'next'
import '../styles/globals.css'
import ClientShell from '@/components/ClientShell'

export const metadata: Metadata = {
  title: 'IOBM Stock Challenge – Inter-University Trading Competition',
  description:
    'Karachi\'s most elite inter-university stock trading simulation. 500+ participants, 200,000+ PKR prize pool. Register your team now.',
  icons: {
    icon: '/images/isc_logo.svg',
  },
  keywords: ['stock trading', 'simulation', 'university', 'Karachi', 'IOBM', 'finance', 'competition'],
  authors: [{ name: 'IOBM Stock Challenge' }],
  openGraph: {
    title: 'IOBM Stock Challenge 2026 – Inter-University Trading Simulation',
    description: 'Karachi\'s most elite inter-university stock trading simulation. 200,000+ PKR prize pool.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'IOBM Stock Challenge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IOBM Stock Challenge 2026',
    description: 'Karachi\'s most elite inter-university stock trading simulation.',
  },
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
