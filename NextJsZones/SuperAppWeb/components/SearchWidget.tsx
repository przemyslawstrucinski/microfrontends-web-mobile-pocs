'use client';

import React, { useState } from 'react';

export interface SearchWidgetProps {
  onSearch?: (query: string, specialty: string, city: string) => void;
  onNavigateToSearch?: () => void;
  className?: string;
}

const specialties = [
  'Kardiolog',
  'Dermatolog',
  'Pediatra',
  'Dentysta',
  'Okulista',
  'Ortopeda',
  'Ginekolog',
  'Neurolog',
];

const cities = ['Warsaw', 'Krakow', 'Gdansk', 'Wroclaw'];

export function SearchWidget({ 
  onSearch, 
  onNavigateToSearch,
  className = '' 
}: SearchWidgetProps) {
  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSearch) {
      onSearch(query, specialty, city);
    } else if (onNavigateToSearch) {
      onNavigateToSearch();
    } else if (typeof window !== 'undefined') {
      // Default behavior: navigate to search page with query params
      const params = new URLSearchParams();
      if (query) params.set('query', query);
      if (specialty) params.set('specialty', specialty);
      if (city) params.set('location', city);
      window.location.href = `/search?${params.toString()}`;
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label 
              htmlFor="search-query" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Search
            </label>
            <input
              type="text"
              id="search-query"
              placeholder="Doctor name or specialty..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label 
              htmlFor="search-specialty" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Specialty
            </label>
            <select
              id="search-specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Specialties</option>
              {specialties.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label 
              htmlFor="search-city" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Location
            </label>
            <select
              id="search-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Search Doctors
          </button>
        </div>
      </form>
    </div>
  );
}

