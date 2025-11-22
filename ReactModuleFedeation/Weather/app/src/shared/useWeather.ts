import { useState, useEffect } from 'react';

// Mock data - works without API (perfect for mobile!)
const MOCK_WEATHER_LIST = [
  {
    city: 'New York',
    temperature: 22,
    condition: 'Sunny ☀️',
    humidity: 65,
    windSpeed: 12,
  },
  {
    city: 'London',
    temperature: 15,
    condition: 'Cloudy ☁️',
    humidity: 78,
    windSpeed: 18,
  },
  {
    city: 'Tokyo',
    temperature: 28,
    condition: 'Partly Cloudy ⛅',
    humidity: 72,
    windSpeed: 8,
  },
  {
    city: 'Paris',
    temperature: 19,
    condition: 'Rainy 🌧️',
    humidity: 85,
    windSpeed: 15,
  },
];

export interface Weather {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

interface UseWeatherReturn {
  weather: Weather | null;
  weatherList: Weather[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useWeather = (city: string | null = null): UseWeatherReturn => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [weatherList, setWeatherList] = useState<Weather[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (cityName: string | null): Promise<void> => {
    try {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      if (cityName) {
        const found = MOCK_WEATHER_LIST.find(w => w.city.toLowerCase() === cityName.toLowerCase());
        setWeather(found || null);
      } else {
        setWeatherList(MOCK_WEATHER_LIST);
      }
      setError(null);
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return {
    weather,
    weatherList,
    loading,
    error,
    refetch: () => fetchWeather(city),
  };
};
