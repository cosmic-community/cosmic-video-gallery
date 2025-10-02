# 🎥 Cosmic Video Gallery

![App Preview](https://imgix.cosmicjs.com/c2ed5890-250a-11ef-adb1-8b946b3a80e4-cosmic-banner.png?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive video gallery showcasing videos from the Cosmic YouTube channel. Built with Next.js 15, TypeScript, and Tailwind CSS, this application provides an elegant interface for browsing and watching Cosmic's tutorial content.

## ✨ Features

- 🎬 **Video Grid Display** - Beautiful card-based layout showcasing all videos
- ▶️ **Embedded YouTube Players** - Watch videos directly on the page
- 🔍 **Search Functionality** - Find videos quickly with real-time search
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance Optimized** - Fast loading with image optimization
- 🎨 **Modern UI/UX** - Clean design with smooth animations and transitions
- 🔗 **Direct YouTube Links** - Open videos on YouTube for the full experience

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68ded2b5260d9dd939d1b075&clone_repository=68ded441260d9dd939d1b082)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a website to showcase the videos from the Cosmic YouTube channel https://www.youtube.com/@CosmicJS Use the Cosmic Banner: https://imgix.cosmicjs.com/c2ed5890-250a-11ef-adb1-8b946b3a80e4-cosmic-banner.png and Cosmic logo: https://imgix.cosmicjs.com/a28a7220-c98c-11ed-b01d-23d7b265c299-cosmicicon.png"

### Code Generation Prompt

> Based on the content model I created for "Create a website to showcase the videos from the Cosmic YouTube channel https://www.youtube.com/@CosmicJS Use the Cosmic Banner: https://imgix.cosmicjs.com/c2ed5890-250a-11ef-adb1-8b946b3a80e4-cosmic-banner.png and Cosmic logo: https://imgix.cosmicjs.com/a28a7220-c98c-11ed-b01d-23d7b265c299-cosmicicon.png", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with the Videos content model configured
- Your Cosmic Bucket credentials (slug, read key)

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching All Videos
```typescript
const response = await cosmic.objects
  .find({ type: 'videos' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
const videos = response.objects as Video[];
```

### Fetching a Single Video
```typescript
const response = await cosmic.objects.findOne({
  type: 'videos',
  slug: videoSlug
}).depth(1);
const video = response.object as Video;
```

## 🎨 Cosmic CMS Integration

This application uses the following Cosmic features:

- **Object Type**: `videos` with metafields for YouTube ID, description, thumbnail, and published date
- **File Uploads**: Custom thumbnails stored in Cosmic media library
- **API Integration**: Real-time content fetching with the Cosmic SDK
- **Image Optimization**: Automatic image optimization via imgix

### Content Model Structure

```typescript
interface Video {
  id: string;
  slug: string;
  title: string;
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
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in Vercel project settings:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

The application is optimized for Vercel's Edge Network and includes:
- Automatic static optimization
- Image optimization via imgix
- Fast global content delivery

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

For questions about Cosmic CMS, visit the [Cosmic Docs](https://www.cosmicjs.com/docs).

---

Built with ❤️ using [Cosmic](https://www.cosmicjs.com)

<!-- README_END -->