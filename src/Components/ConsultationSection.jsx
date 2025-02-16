import React from 'react';

const ConsultationSection = () => {
  const doctors = [
    { id: 1, name: 'Dr. Alice Johnson', specialization: 'Cardiologist', location: 'New York', hospital: 'NYU Langone', availability: 'Mon-Fri' },
    { id: 2, name: 'Dr. Bob Williams', specialization: 'Endocrinologist', location: 'Los Angeles', hospital: 'UCLA Medical Center', availability: 'Tue-Sat' },
  ];

  return (
    <div className="py-12 px-6 md:px-24 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Find a Doctor</h2>

        <div className="flex flex-col md:flex-row justify-between mb-4">
          <input type="text" placeholder="Search by name or specialization" className="p-2 border rounded-md w-full md:w-1/3 mb-2 md:mb-0" />
          <select className="p-2 border rounded-md w-full md:w-1/4">
            <option>All Specializations</option>
            <option>Cardiologist</option>
            <option>Endocrinologist</option>
          </select>
          <select className="p-2 border rounded-md w-full md:w-1/4">
            <option>All Locations</option>
            <option>New York</option>
            <option>Los Angeles</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{doctor.name}</h3>
              <p className="text-gray-600">Specialization: {doctor.specialization}</p>
              <p className="text-gray-600">Location: {doctor.location}</p>
              <p className="text-gray-600">Hospital: {doctor.hospital}</p>
              <p className="text-gray-600">Availability: {doctor.availability}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultationSection;