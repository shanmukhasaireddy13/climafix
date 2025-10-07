import React from 'react';

const SummitHighlights = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Summit Highlights</h2>
        <p className="text-lg text-gray-600">Explore the highlights and recaps from recent and upcoming editions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <img src="https://climafix.in/uploads/climafix_2023_group.jpg" alt="Climafix Summit 2023" className="w-full h-48 object-cover" loading="lazy" decoding="async" />
          <div className="p-6">
            <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">2023 Edition</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Summit 2023</h3>
            <p className="text-gray-600 mb-4">Foundational year featuring breakthrough climate startups and ecosystem partners.</p>
            <a href="https://climafix.in/summit/2023/" className="text-green-700 font-semibold hover:underline flex items-center">Read More <span className="ml-1">→</span></a>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <img src="https://climafix.in/uploads/groupPhoto24.JPG" alt="Climafix Summit 2024" className="w-full h-48 object-cover" loading="lazy" decoding="async" />
          <div className="p-6">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">2024 Edition</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Summit 2024</h3>
            <p className="text-gray-600 mb-4">Scaled engagement with investors and industry leaders across key sectors.</p>
            <a href="https://climafix.in/summit/2024/" className="text-green-700 font-semibold hover:underline flex items-center">Read More <span className="ml-1">→</span></a>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <img src="https://climafix.in/uploads/summit2025_grp-pic.jpg" alt="Climafix Summit 2025" className="w-full h-48 object-cover" loading="lazy" decoding="async" />
          <div className="p-6">
            <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">Coming Soon</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Summit 2025</h3>
            <p className="text-gray-600 mb-4">The next chapter: deeper collaboration, tangible pilots, and scale-up pathways.</p>
            <a href="https://climafix.in/summit/2025/" className="text-green-700 font-semibold hover:underline flex items-center">Read More <span className="ml-1">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SummitHighlights;


