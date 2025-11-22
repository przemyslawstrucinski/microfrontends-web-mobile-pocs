export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  location: string;
  city: string;
  photoUrl: string;
  experience: number;
  price: number;
}

export interface SearchFilters {
  specialty: string;
  location: string;
  query: string;
}

export interface SearchState {
  filters: SearchFilters;
  results: Doctor[];
  isLoading: boolean;
}

