import React from 'react';

const KeySessions = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Summit Sessions</h2>
        <p className="text-lg text-gray-600">Explore cutting-edge solutions for climate challenges</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-green-600 text-2xl mb-4">🌱</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Bio Economy for Decarbonization</h3>
          <p className="text-gray-600">Explore sustainable bio-based solutions and circular economy models for carbon reduction.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-600 text-2xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Energy Efficiency & Digital Solutions</h3>
          <p className="text-gray-600">Discover smart technologies and digital innovations for energy optimization.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-purple-600 text-2xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Deep Tech for Net Zero</h3>
          <p className="text-gray-600">Advanced technologies and breakthrough innovations driving towards net zero emissions.</p>
        </div>
      </div>
    </div>
  </section>
);

export default KeySessions;


