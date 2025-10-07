import React from 'react';

const PastEventsGallery = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Past Events Gallery</h2>
        <p className="text-lg text-gray-600">A glimpse into the energy and collaboration at past summits.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a href="https://climafix.in/summit/2022/gallery" target="_blank" rel="noreferrer">
          <img src="https://climafix.in/uploads/climafix_group.jpg" alt="Summit 2022" className="w-full h-40 object-cover rounded-lg hover:opacity-90 transition-opacity" loading="lazy" decoding="async" />
        </a>
        <a href="https://climafix.in/summit/2023/gallery" target="_blank" rel="noreferrer">
          <img src="https://climafix.in/uploads/climafix_2023_group.jpg" alt="Summit 2023" className="w-full h-40 object-cover rounded-lg hover:opacity-90 transition-opacity" loading="lazy" decoding="async" />
        </a>
        <a href="https://climafix.in/summit/2024/gallery" target="_blank" rel="noreferrer">
          <img src="https://climafix.in/uploads/groupPhoto24.JPG" alt="Summit 2024" className="w-full h-40 object-cover rounded-lg hover:opacity-90 transition-opacity" loading="lazy" decoding="async" />
        </a>
        <a href="https://climafix.in/summit/2025/" target="_blank" rel="noreferrer">
          <img src="https://climafix.in/uploads/summit2025_grp-pic.jpg" alt="Summit 2025" className="w-full h-40 object-cover rounded-lg hover:opacity-90 transition-opacity" loading="lazy" decoding="async" />
        </a>
      </div>
    </div>
  </section>
);

export default PastEventsGallery;


