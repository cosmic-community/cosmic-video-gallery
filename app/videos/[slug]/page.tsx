// app/videos/[slug]/page.tsx
import { getVideo, getVideos } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface VideoPageProps {
  params: Promise<{ slug: string }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { slug } = await params
  const video = await getVideo(slug)
  
  if (!video || !video.metadata) {
    return {
      title: 'Video Not Found',
    }
  }

  const title = video.metadata.title || video.title
  const description = video.metadata.description || `Watch ${title} on Cosmic Video Gallery`
  const imageUrl = video.metadata.thumbnail?.imgix_url 
    ? `${video.metadata.thumbnail.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`
    : 'https://imgix.cosmicjs.com/472606d0-9fca-11f0-b878-255b128b940c-image.png?w=1200&h=630&fit=crop&auto=format,compress'

  return {
    title: `${title} | Cosmic Video Gallery`,
    description,
    openGraph: {
      title,
      description,
      url: `https://cosmic-video-gallery.vercel.app/videos/${slug}`,
      siteName: 'Cosmic Video Gallery',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'video.other',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

// Generate static paths for all videos
export async function generateStaticParams() {
  const videos = await getVideos()
  
  return videos.map((video) => ({
    slug: video.slug,
  }))
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function VideoPage({ params }: VideoPageProps) {
  const { slug } = await params
  const video = await getVideo(slug)
  
  if (!video || !video.metadata) {
    notFound()
  }

  const { metadata } = video
  const publishedDate = metadata.published_date 
    ? new Date(metadata.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Video Player */}
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${metadata.youtube_id}`}
              title={metadata.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Video Details */}
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {metadata.title}
            </h1>
            
            {publishedDate && (
              <p className="text-gray-500 mb-6">
                Published on {publishedDate}
              </p>
            )}
            
            {metadata.description && (
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {metadata.description}
                </p>
              </div>
            )}
            
            {/* Watch on YouTube Button */}
            <div className="mt-8">
              <a
                href={`https://www.youtube.com/watch?v=${metadata.youtube_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm3.5 10.5l-5 3a.5.5 0 01-.75-.433v-6a.5.5 0 01.75-.433l5 3a.5.5 0 010 .866z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
        
        {/* Back Button */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center text-[#29ABE2] hover:text-[#1e8ab8] font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Gallery
          </a>
        </div>
      </div>
    </div>
  )
}