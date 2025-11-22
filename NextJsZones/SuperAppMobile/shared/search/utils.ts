import { Doctor, SearchFilters } from './types';

export function filterDoctors(doctors: Doctor[], filters: SearchFilters): Doctor[] {
  return doctors.filter((doctor) => {
    const matchesSpecialty =
      !filters.specialty || filters.specialty === '' || doctor.specialty === filters.specialty;
    const matchesLocation =
      !filters.location || filters.location === '' || doctor.city === filters.location;
    const matchesQuery =
      !filters.query ||
      filters.query === '' ||
      doctor.name.toLowerCase().includes(filters.query.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(filters.query.toLowerCase());

    return matchesSpecialty && matchesLocation && matchesQuery;
  });
}

export function sortDoctorsByRating(doctors: Doctor[]): Doctor[] {
  return [...doctors].sort((a, b) => b.rating - a.rating);
}

