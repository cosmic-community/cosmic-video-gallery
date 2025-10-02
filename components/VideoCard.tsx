import Link from 'next/link'
import { Video } from '@/types'

interface VideoCardProps {
  video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
  const { slug, metadata } = video
  
  if (!metadata) {
    return null
  }

  const thumbnailUrl = metadata.thumbnail?.imgix_url 
    ? `${metadata.thumbnail.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`
    : `https://i.ytimg.com/vi/${metadata.youtube_id}/maxresdefault.jpg`

  const publishedDate = metadata.published_date 
    ? new Date(metadata.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : null

  return (
    <Link 
      href={`/videos/${slug}`}
      className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gray-200">
        <img
          src={thumbnailUrl}
          alt={metadata.title}
          className="w-full h-full object-cover"
          width={800}
          height={450}
        />
        {/* Play button overlay - always visible */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {metadata.title}
        </h3>
        
        {metadata.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {metadata.description}
          </p>
        )}
        
        {publishedDate && (
          <p className="text-gray-500 text-xs">
            {publishedDate}
          </p>
        )}
      </div>
    </Link>
  )
}