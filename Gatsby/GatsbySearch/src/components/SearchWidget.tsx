import React, { useState } from 'react';
import { mockDoctors } from '../data/mockDoctors';
import type { Doctor } from '../types';

const SearchWidget: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredDoctors = mockDoctors
    .filter((doctor: Doctor) => {
      const matchesSearch =
        searchTerm === '' ||
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = !specialty || doctor.specialty === specialty;
      return matchesSearch && matchesSpecialty;
    })
    .slice(0, 3);

  const specialties = Array.from(new Set(mockDoctors.map((d) => d.specialty)));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Find a Doctor</h2>

      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowResults(false);
            }}
            placeholder="Search by name or specialty..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-3">
          <select
            value={specialty}
            onChange={(e) => {
              setSpecialty(e.target.value);
              setShowResults(false);
            }}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">All Specialties</option>
            {specialties.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {showResults && (
        <div className="mt-6 space-y-3">
          {filteredDoctors.length > 0 ? (
            <>
              {filteredDoctors.map((doctor: Doctor) => (
                <div
                  key={doctor.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-primary-600">
                        {doctor.specialty}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-400 text-sm">★</span>
                        <span className="text-sm text-gray-600">
                          {doctor.rating} ({doctor.reviews})
                        </span>
                      </div>
                    </div>
                    <a
                      href={`http://localhost:9002/doctor/${doctor.id}`}
                      className="px-4 py-2 text-sm bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors cursor-pointer"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
              <a
                href="http://localhost:9001/search"
                className="block text-center py-2 text-primary-600 hover:text-primary-700 font-medium cursor-pointer"
              >
                See all results →
              </a>
            </>
          ) : (
            <p className="text-center text-gray-500 py-4">
              No doctors found. Try different criteria.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchWidget;

