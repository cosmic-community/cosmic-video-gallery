import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmic Video Gallery - YouTube Channel Showcase',
  description: 'Explore tutorials and content from the Cosmic YouTube channel. Learn about headless CMS, content modeling, and modern web development.',
  keywords: 'Cosmic, CMS, YouTube, tutorials, web development, headless CMS',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎥</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script src="/dashboard-console-capture.js"></script>
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}