import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      testimonial: 'HEALTECH has transformed my healthcare experience. The AI disease prediction was incredibly helpful in identifying a potential issue early on.',
      image: 'https://via.placeholder.com/50x50/007bff/fff/?text=JD',
    },
    {
      name: 'Jane Smith',
      testimonial: 'Booking a consultation with a specialist through HEALTECH was quick and easy. I highly recommend this platform!',
      image: 'https://via.placeholder.com/50x50/28a745/fff/?text=JS',
    },
  ];

  return (
    <div className="py-16 px-6 md:px-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="rounded-full mr-4" />
                <h4 className="text-lg font-semibold text-gray-700">{testimonial.name}</h4>
              </div>
              <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;