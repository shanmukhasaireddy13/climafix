import React from 'react';
import TestimonialCard from './TestimonialCard';

const SuccessStories = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
        <p className="text-lg text-gray-600">Startups that gained significant traction through CLIMAFIX Summit</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard
          name="Hivericks Team"
          company="Climate Tech Startup"
          quote="The CLIMAFIX Summit provided us with invaluable connections and insights that accelerated our growth in the climate tech space."
          featured={true}
        />
        <TestimonialCard
          name="BlackRhino Founders"
          company="Sustainable Energy Solutions"
          quote="Through the summit, we connected with key investors and partners who helped us scale our sustainable energy solutions."
        />
      </div>
    </div>
  </section>
);

export default SuccessStories;


