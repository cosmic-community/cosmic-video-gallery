import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://imgix.cosmicjs.com/a28a7220-c98c-11ed-b01d-23d7b265c299-cosmicicon.png?w=80&h=80&fit=crop&auto=format,compress"
              alt="Cosmic Logo"
              width="40"
              height="40"
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Cosmic Videos</h1>
              <p className="text-xs text-gray-500">YouTube Channel Gallery</p>
            </div>
          </Link>
          
          <nav className="flex items-center gap-6">
            <a 
              href="https://www.youtube.com/@CosmicJS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-cosmic-blue transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch on YouTube
            </a>
            <a 
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white bg-cosmic-blue hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Visit Cosmic
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}