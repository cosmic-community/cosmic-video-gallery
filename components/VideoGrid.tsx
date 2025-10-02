'use client'

import { useState } from 'react'
import { Video } from '@/types'
import VideoCard from '@/components/VideoCard'

interface VideoGridProps {
  videos: Video[]
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  
  // Filter videos based on search query
  const filteredVideos = videos.filter(video => {
    if (!searchQuery.trim()) return true
    
    const query = searchQuery.toLowerCase()
    const title = video.metadata?.title?.toLowerCase() || ''
    const description = video.metadata?.description?.toLowerCase() || ''
    
    return title.includes(query) || description.includes(query)
  })
  
  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No videos found. Check back soon!</p>
      </div>
    )
  }
  
  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-xl">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmic-blue focus:border-transparent"
          />
          <svg 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {searchQuery && (
          <p className="mt-3 text-sm text-gray-600">
            Found {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'}
          </p>
        )}
      </div>
      
      {/* Video Grid */}
      {filteredVideos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No videos match your search. Try different keywords.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  )
}