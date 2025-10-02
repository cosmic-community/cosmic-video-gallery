export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-cosmic-dark via-gray-900 to-cosmic-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img 
        src="https://imgix.cosmicjs.com/c2ed5890-250a-11ef-adb1-8b946b3a80e4-cosmic-banner.png?w=2400&h=600&fit=crop&auto=format,compress"
        alt="Cosmic Banner"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to the Cosmic Video Library
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Discover tutorials, guides, and insights about building modern web applications with Cosmic CMS
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.youtube.com/@CosmicJS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-cosmic-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
            <a 
              href="https://www.cosmicjs.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cosmic-dark transition-colors"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}