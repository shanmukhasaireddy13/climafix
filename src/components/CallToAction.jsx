import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Climate Revolution?</h2>
      <p className="text-xl mb-8 text-green-100">Don't miss out on India's most important climate innovation event</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/summit/2025" className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">Register for Summit 2025</Link>
        <a href="#top" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center">View Past Summits</a>
      </div>
    </div>
  </section>
);

export default CallToAction;


