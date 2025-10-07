import React, { useState } from 'react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="https://www.climafix.in/" className="flex items-center">
              <img src="https://climafix.in/uploads/nov.png" alt="CLIMAFIX" className="h-8 w-auto" loading="eager" decoding="async" />
            </a>
          </div>
          {/* Desktop links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="https://climafix.in/" className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="https://climafix.in/about" className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="https://climafix.in/blog" className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
              <a href="https://www.climafix.in/summit/" className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Summit</a>
              <a href="https://www.climafix.in/videos" className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Videos</a>
              <a href="https://climafix.in/s/st/500/rep" className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">CLIMAFIX500</a>
              <a href="https://climafix.in/s/st/increase" className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Increase</a>
              <a href="https://climafix.in/summit/2025/" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">Register Now</a>
            </div>
          </div>
          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
            >
              <svg className={`${navOpen ? 'hidden' : 'block'} h-6 w-6`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg className={`${navOpen ? 'block' : 'hidden'} h-6 w-6`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu panel */}
      <div className={`${navOpen ? 'max-h-96' : 'max-h-0'} md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-white border-t border-gray-200 shadow`}
           onClick={() => setNavOpen(false)}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          <a href="https://climafix.in/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Home</a>
          <a href="https://climafix.in/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">About</a>
          <a href="https://climafix.in/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Blog</a>
          <a href="https://www.climafix.in/summit/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Summit</a>
          <a href="https://www.climafix.in/videos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Videos</a>
          <a href="https://climafix.in/s/st/500/rep" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">CLIMAFIX500</a>
          <a href="https://climafix.in/s/st/increase" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Increase</a>
          <a href="https://climafix.in/summit/2025/" className="block px-3 py-2 rounded-md text-base font-semibold text-white bg-green-600 hover:bg-green-700">Register Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


