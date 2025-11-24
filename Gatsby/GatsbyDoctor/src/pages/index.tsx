import React from 'react';
import { mockDoctors } from '../data/mockDoctors';

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="http://localhost:9000" className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-xl font-bold text-gray-900">
                DoctorBook
              </span>
            </a>

            <div className="flex items-center gap-6">
              <a
                href="http://localhost:9000"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="http://localhost:9001/search"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Search
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          All Doctors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDoctors.map((doctor) => (
            <a
              key={doctor.id}
              href={`/doctor/${doctor.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {doctor.specialty}
                </p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-medium text-gray-700">
                    {doctor.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({doctor.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {doctor.location}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>All Doctors | DoctorBook</title>
    <meta name="description" content="Browse all our verified doctors" />
  </>
);

