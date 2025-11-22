import { create } from 'zustand';
import { SearchState, SearchFilters } from './types';
import { mockDoctors } from './mockData';
import { filterDoctors } from './utils';

interface SearchStore extends SearchState {
  setFilters: (filters: Partial<SearchFilters>) => void;
  search: () => void;
  reset: () => void;
}

const initialFilters: SearchFilters = {
  specialty: '',
  location: '',
  query: '',
};

export const useSearchStore = create<SearchStore>((set, get) => ({
  filters: initialFilters,
  results: mockDoctors,
  isLoading: false,

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));
  },

  search: () => {
    set({ isLoading: true });
    
    // Simulate API call
    setTimeout(() => {
      const { filters } = get();
      const filtered = filterDoctors(mockDoctors, filters);
      set({ results: filtered, isLoading: false });
    }, 300);
  },

  reset: () => {
    set({
      filters: initialFilters,
      results: mockDoctors,
      isLoading: false,
    });
  },
}));

