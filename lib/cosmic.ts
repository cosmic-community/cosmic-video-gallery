import { createBucketClient } from '@cosmicjs/sdk'
import { Video, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all videos
export async function getVideos(): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'videos' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const videos = response.objects as Video[];
    
    // Manual sorting by published date (newest first)
    return videos.sort((a, b) => {
      const dateA = new Date(a.metadata?.published_date || '').getTime();
      const dateB = new Date(b.metadata?.published_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch videos');
  }
}

// Fetch a single video by slug
export async function getVideo(slug: string): Promise<Video | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'videos',
      slug
    }).depth(1);
    
    const video = response.object as Video;
    
    if (!video || !video.metadata) {
      return null;
    }
    
    return video;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch video');
  }
}