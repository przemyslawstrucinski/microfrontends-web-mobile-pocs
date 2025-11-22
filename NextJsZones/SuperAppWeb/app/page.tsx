export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-primary to-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Find Your Perfect Doctor
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Search thousands of doctors and book appointments online
          </p>
          <a
            href="/search"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Searching
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Search Doctors</h3>
            <p className="text-gray-600">
              Find doctors by specialty, location, and availability
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Online</h3>
            <p className="text-gray-600">
              Schedule appointments instantly without phone calls
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Read Reviews</h3>
            <p className="text-gray-600">
              Check verified patient reviews before booking
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Popular Specialties
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Kardiolog', 'Dermatolog', 'Pediatra', 'Dentysta', 'Okulista', 'Ortopeda', 'Ginekolog', 'Neurolog'].map(
              (specialty) => (
                <a
                  key={specialty}
                  href="/search"
                  className="bg-blue-50 hover:bg-blue-100 text-primary px-6 py-3 rounded-md text-center font-medium transition-colors"
                >
                  {specialty}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

