import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmic Video Gallery - YouTube Channel Showcase',
  description: 'Explore tutorials and content from the Cosmic YouTube channel. Learn about headless CMS, content modeling, and modern web development.',
  keywords: 'Cosmic, CMS, YouTube, tutorials, web development, headless CMS',
  openGraph: {
    title: 'Cosmic Video Gallery - YouTube Channel Showcase',
    description: 'Explore tutorials and content from the Cosmic YouTube channel. Learn about headless CMS, content modeling, and modern web development.',
    url: 'https://cosmic-video-gallery.vercel.app',
    siteName: 'Cosmic Video Gallery',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/472606d0-9fca-11f0-b878-255b128b940c-image.png?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
        alt: 'Cosmic Video Gallery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmic Video Gallery - YouTube Channel Showcase',
    description: 'Explore tutorials and content from the Cosmic YouTube channel. Learn about headless CMS, content modeling, and modern web development.',
    images: ['https://imgix.cosmicjs.com/472606d0-9fca-11f0-b878-255b128b940c-image.png?w=1200&h=630&fit=crop&auto=format,compress'],
  },
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
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}