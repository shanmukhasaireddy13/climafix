import React from 'react';

const TestimonialCard = ({ name, company, quote, image, featured = false }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${featured ? 'ring-2 ring-green-500' : ''}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic">
        "{quote}"
      </blockquote>
      {featured && (
        <div className="mt-4">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            Featured Testimonial
          </span>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
