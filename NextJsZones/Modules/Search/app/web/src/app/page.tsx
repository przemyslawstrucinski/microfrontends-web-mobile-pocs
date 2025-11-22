'use client';

import { useSearchStore, specialties, cities } from '@search/shared';
import { DoctorCard } from '@/components/DoctorCard';
import { SearchBar } from '@/components/SearchBar';

export default function SearchPage() {
  const { filters, results, isLoading, setFilters, search } = useSearchStore();

  const handleSearch = () => {
    search();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find a Doctor</h1>
          <p className="text-gray-600">Search for specialists in your area</p>
        </div>

        <SearchBar
          filters={filters}
          specialties={specialties}
          cities={cities}
          onFilterChange={setFilters}
          onSearch={handleSearch}
          isLoading={isLoading}
        />

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {results.length} doctors found
            </h2>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No doctors found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

