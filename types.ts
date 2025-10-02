// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Video object type with properly typed metadata
export interface Video extends CosmicObject {
  type: 'videos';
  metadata: {
    title: string;
    youtube_id: string;
    description?: string;
    thumbnail?: {
      url: string;
      imgix_url: string;
    };
    published_date?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guard for runtime validation
export function isVideo(obj: CosmicObject): obj is Video {
  return obj.type === 'videos';
}