import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("all");
  const [location, setLocation] = useState("all");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    if (specialty !== "all") params.set("specialty", specialty);
    if (location !== "all") params.set("location", location);

    const searchUrl = `http://localhost:3001/search?${params.toString()}`;
    window.location.href = searchUrl;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
            Doctor Name
          </label>
          <input
            id="query"
            type="text"
            placeholder="Search by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
            Specialty
          </label>
          <select
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Specialties</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="dermatologist">Dermatologist</option>
            <option value="pediatrician">Pediatrician</option>
            <option value="dentist">Dentist</option>
            <option value="orthopedist">Orthopedist</option>
            <option value="psychiatrist">Psychiatrist</option>
            <option value="gynecologist">Gynecologist</option>
            <option value="neurologist">Neurologist</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Locations</option>
            <option value="warsaw">Warsaw</option>
            <option value="krakow">Krakow</option>
            <option value="poznan">Poznan</option>
            <option value="wroclaw">Wroclaw</option>
            <option value="gdansk">Gdansk</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
      >
        Search Doctors
      </button>
    </div>
  );
}

