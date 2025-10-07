import React from 'react';

const FeaturedSpeakers = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Speakers</h2>
        <p className="text-lg text-gray-600">Learn from industry leaders and climate innovation experts</p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee">
          <div className="flex items-center gap-6 pr-6">
            {[
              { name: 'Ashok Jhunjhunwala', org: 'IITMRP' },
              { name: 'Suhas Baxi', org: 'Biofuel Circle' },
              { name: 'Sivaram Pillai', org: 'Proklean Technologies' },
              { name: 'Gayathri K Reddy', org: 'NOW Ventures' },
              { name: 'Vishesh Rajaram', org: 'Speciale Invest' },
              { name: 'Roopan Aulakh', org: 'Pi Ventures' },
              { name: 'Vasu Guruswamy', org: 'Lavni Ventures' },
              { name: 'Janani Mittal', org: 'Technip' },
              { name: 'Shelly Mittal', org: 'Chrysalix VC' },
              { name: 'Pawan Mehndiratta', org: 'Thermax' },
              { name: 'Partha Talukder', org: 'NOW Venture Studio' },
              { name: 'Venkat Rajaraman', org: 'Cygni' },
              { name: 'Maxson Lewis', org: 'Magenta Mobility' },
              { name: 'Shaji John', org: 'Ohmium' },
              { name: 'Rohit Jhunjhunwala', org: 'In44 Capital' },
            ].map((s, idx) => (
              <a key={`spk-a-${idx}`} href="https://climafix.in/summit/2025/" className="min-w-[260px] bg-white border border-gray-100 shadow rounded-lg px-4 py-3 hover:shadow-md transition-shadow flex items-center">
                <img src="https://www.climafix.in/summit/2025/slides-images/6n.jpg" alt={s.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <div className="text-sm font-semibold text-gray-800">{s.name}</div>
                  <div className="text-xs text-gray-500">{s.org}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6 pr-6">
            {[
              { name: 'Ashok Jhunjhunwala', org: 'IITMRP' },
              { name: 'Suhas Baxi', org: 'Biofuel Circle' },
              { name: 'Sivaram Pillai', org: 'Proklean Technologies' },
              { name: 'Gayathri K Reddy', org: 'NOW Ventures' },
              { name: 'Vishesh Rajaram', org: 'Speciale Invest' },
              { name: 'Roopan Aulakh', org: 'Pi Ventures' },
              { name: 'Vasu Guruswamy', org: 'Lavni Ventures' },
              { name: 'Janani Mittal', org: 'Technip' },
              { name: 'Shelly Mittal', org: 'Chrysalix VC' },
              { name: 'Pawan Mehndiratta', org: 'Thermax' },
              { name: 'Partha Talukder', org: 'NOW Venture Studio' },
              { name: 'Venkat Rajaraman', org: 'Cygni' },
              { name: 'Maxson Lewis', org: 'Magenta Mobility' },
              { name: 'Shaji John', org: 'Ohmium' },
              { name: 'Rohit Jhunjhunwala', org: 'In44 Capital' },
            ].map((s, idx) => (
              <a key={`spk-b-${idx}`} href="https://climafix.in/summit/2025/" className="min-w-[260px] bg-white border border-gray-100 shadow rounded-lg px-4 py-3 hover:shadow-md transition-shadow flex items-center">
                <img src="https://climafix.in/summit/2025/slides-images/Hero-bg.png" alt={s.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <div className="text-sm font-semibold text-gray-800">{s.name}</div>
                  <div className="text-xs text-gray-500">{s.org}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedSpeakers;


