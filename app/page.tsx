import { getVideos } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import VideoGrid from '@/components/VideoGrid'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const videos = await getVideos()
  
  return (
    <div>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Latest Videos
          </h2>
          <p className="text-gray-600">
            Explore our collection of tutorials and content from the Cosmic YouTube channel
          </p>
        </div>
        <VideoGrid videos={videos} />
      </section>
    </div>
  )
}