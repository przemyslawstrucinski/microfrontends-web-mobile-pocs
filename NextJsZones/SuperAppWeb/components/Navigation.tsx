export function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              MedicalSuperApp
            </a>
          </div>

          <div className="flex items-center space-x-8">
            <a
              href="/search"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Find Doctor
            </a>
            <a
              href="/doctor"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Doctors
            </a>
            <a
              href="/search"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

