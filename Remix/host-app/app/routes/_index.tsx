import type { MetaFunction } from "@remix-run/node";
import { lazy, Suspense } from "react";
import { ClientOnly } from "~/components/ClientOnly";

export const meta: MetaFunction = () => {
  return [
    { title: "MojLekarz - Find Your Doctor" },
    { name: "description", content: "Search and find the best doctors near you" },
  ];
};

// Import the remote SearchBar component via Module Federation
// @ts-ignore - The module is defined in remotes.d.ts but TS might still complain in some setups
const RemoteSearchBar = lazy(() => import("searchApp/SearchBar"));

// Fallback component to show while the remote component is loading
function SearchBarFallback() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="h-10 bg-blue-200 rounded mt-4"></div>
    </div>
  );
}

// Wrapper to handle Suspense for the lazy-loaded component
function SearchBarWrapper() {
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <RemoteSearchBar />
    </Suspense>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find and Book the Best Doctors
            </h1>
            <p className="text-xl mb-8">
              Search from thousands of verified healthcare professionals
            </p>
            
            {/* Search Bar Component - Loaded via Module Federation */}
            <div className="max-w-3xl mx-auto text-left text-gray-900">
              <ClientOnly fallback={<SearchBarFallback />}>
                {() => <SearchBarWrapper />}
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
            <p className="text-gray-600">Find doctors by specialty, location, or name</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Doctors</h3>
            <p className="text-gray-600">All doctors are verified healthcare professionals</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Online Booking</h3>
            <p className="text-gray-600">Book appointments instantly online</p>
          </div>
        </div>
      </div>

      {/* Popular Specialties */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Specialties</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Cardiologist", "Dermatologist", "Pediatrician", "Dentist", "Orthopedist", "Psychiatrist", "Gynecologist", "Neurologist"].map(
              (specialty) => (
                <div key={specialty} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <p className="font-medium text-gray-800">{specialty}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
