import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import DynamicSearchWidget from '../components/DynamicSearchWidget';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Find Your Perfect Doctor
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Book appointments with verified healthcare professionals across
              Poland
            </p>
          </div>
        </section>

        {/* Search Widget Section */}
        <section className="container mx-auto px-4 -mt-10 relative z-10">
          <DynamicSearchWidget />
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose DoctorBook?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Verified Doctors
              </h3>
              <p className="text-gray-600">
                All doctors are verified and certified healthcare professionals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quick Booking
              </h3>
              <p className="text-gray-600">
                Book appointments instantly with real-time availability
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trusted Reviews
              </h3>
              <p className="text-gray-600">
                Read genuine reviews from verified patients
              </p>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Popular Specialties
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Cardiology', icon: '❤️' },
                { name: 'Dermatology', icon: '👨‍⚕️' },
                { name: 'Pediatrics', icon: '👶' },
                { name: 'Orthopedics', icon: '🦴' },
                { name: 'Neurology', icon: '🧠' },
                { name: 'Ophthalmology', icon: '👁️' },
                { name: 'Psychiatry', icon: '💭' },
                { name: 'Gastroenterology', icon: '🏥' },
              ].map((specialty) => (
                <a
                  key={specialty.name}
                  href={`http://localhost:9001/search?specialty=${specialty.name}`}
                  className="p-6 bg-gray-50 rounded-lg text-center hover:bg-primary-50 hover:shadow-md transition-all"
                >
                  <div className="text-4xl mb-2">{specialty.icon}</div>
                  <div className="font-medium text-gray-900">
                    {specialty.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Doctor?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands of patients who trust DoctorBook
            </p>
            <a
              href="http://localhost:9001/search"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Search Now
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;

