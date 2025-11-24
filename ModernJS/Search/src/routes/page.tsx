import { useState } from 'react';
import { mockDoctors } from '../data/mockDoctors';
import type { Doctor } from '../types';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('');
  
  const filteredDoctors = mockDoctors.filter((doctor: Doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !specialty || doctor.specialty === specialty;
    const matchesLocation = !location || doctor.location.toLowerCase().includes(location.toLowerCase());
    const matchesAvailability = !availability || doctor.availability.includes(availability);
    
    return matchesSearch && matchesSpecialty && matchesLocation && matchesAvailability;
  });

  const specialties = Array.from(new Set(mockDoctors.map(d => d.specialty)));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Find a Doctor</h1>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Doctor name or specialty..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specialty
            </label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">All Specialties</option>
              {specialties.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Availability
            </label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Any time</option>
              <option value="Today">Today</option>
              <option value="This week">This week</option>
              <option value="Next week">Next week</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <p className="text-gray-600">
          Found {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
        </p>
        
        {filteredDoctors.map((doctor: Doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-6">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                <p className="text-gray-600 mt-1">{doctor.location}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-700 font-medium">{doctor.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{doctor.reviews} reviews</span>
                </div>
                <p className="text-gray-700 mt-3 line-clamp-2">{doctor.bio}</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-600">Available: </span>
                  <span className="text-sm font-medium text-green-600">{doctor.availability.join(', ')}</span>
                </div>
                <a
                  href={`/doctor/${doctor.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    // Navigate parent window if in iframe, otherwise current window
                    const targetWindow = window.self !== window.top ? window.parent : window;
                    targetWindow.location.href = `/doctor/${doctor.id}`;
                  }}
                  className="inline-block mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors cursor-pointer"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

