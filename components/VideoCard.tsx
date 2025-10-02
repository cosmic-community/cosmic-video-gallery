'use client'

import { Video } from '@/types'

interface VideoCardProps {
  video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
  if (!video || !video.metadata) {
    return null
  }
  
  const { metadata } = video
  const youtubeId = metadata.youtube_id
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`
  const thumbnailUrl = metadata.thumbnail?.imgix_url 
    ? `${metadata.thumbnail.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`
    : `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`
  
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'Date not available'
    
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    } catch (error) {
      return 'Date not available'
    }
  }
  
  return (
    <a 
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 block group"
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video bg-gray-900">
        <div className="relative w-full h-full">
          <img 
            src={thumbnailUrl}
            alt={metadata.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-cosmic-blue transition-colors">
          {metadata.title}
        </h3>
        
        {metadata.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {metadata.description}
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{formatDate(metadata.published_date)}</span>
          <span className="text-cosmic-blue group-hover:text-blue-700 font-medium flex items-center gap-1">
            Watch on YouTube
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}