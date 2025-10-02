export default function Footer() {
  return (
    <footer className="bg-cosmic-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://imgix.cosmicjs.com/a28a7220-c98c-11ed-b01d-23d7b265c299-cosmicicon.png?w=80&h=80&fit=crop&auto=format,compress"
                alt="Cosmic Logo"
                width="40"
                height="40"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Cosmic Videos</h3>
                <p className="text-sm text-gray-400">YouTube Channel Gallery</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Explore tutorials and content about building modern web applications with Cosmic.
            </p>
          </div>
          
          {/* Resources Section */}
          <div>
            <h4 className="text-base font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.cosmicjs.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cosmic-blue text-sm transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cosmicjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cosmic-blue text-sm transition-colors"
                >
                  Cosmic Website
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cosmicjs.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cosmic-blue text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cosmicjs.com/community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cosmic-blue text-sm transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h4 className="text-base font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.youtube.com/@CosmicJS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cosmic-blue transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/cosmicjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cosmic-blue transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/cosmicjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cosmic-blue transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Subscribe to our{' '}
              <a 
                href="https://www.youtube.com/@CosmicJS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cosmic-blue hover:underline"
              >
                YouTube channel
              </a>
              {' '}for the latest tutorials and updates.
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Cosmic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.cosmicjs.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-cosmic-blue transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://www.cosmicjs.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-cosmic-blue transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}