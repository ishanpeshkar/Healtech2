import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // For form validation
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; // Icons

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = async (data) => {
    // Simulate an API call (replace with your actual API)
    console.log('Form data:', data); // Log the data (for now)
    setFormSubmitted(true);

    // Reset the form after submission
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 animate_animated animate_fadeInDown">Contact Us</h2>
          <p className="text-gray-600 animate_animated animate_fadeInUp">
            We're here to help! Get in touch with us for any inquiries or support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information (Left Side) */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 animate_animated animate_fadeInLeft">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h3>
            <div className="flex items-center mb-3">
              <FaMapMarkerAlt className="text-blue-500 mr-3" />
              <p className="text-gray-600">123 Main Street, Cityville, State, 12345</p>
            </div>
            <div className="flex items-center mb-3">
              <FaEnvelope className="text-blue-500 mr-3" />
              <p className="text-gray-600">info@healtech.com</p>
            </div>
            <div className="flex items-center mb-3">
              <FaPhone className="text-blue-500 mr-3" />
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            {/* Google Map (Optional) */}
            {/* <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?..." // Replace with your Google Maps embed URL
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div> */}
          </div>

          {/* Contact Form (Right Side) */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 animate_animated animate_fadeInRight">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h3>

            {formSubmitted ? (
              <div className="text-green-500 font-semibold">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register('message', { required: 'Message is required' })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;