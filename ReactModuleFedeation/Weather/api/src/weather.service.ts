import { Injectable } from '@nestjs/common';

export interface Weather {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

@Injectable()
export class WeatherService {
  private weatherData: Weather[] = [
    {
      city: 'New York',
      temperature: 22,
      condition: 'Sunny',
      humidity: 65,
      windSpeed: 12,
    },
    {
      city: 'London',
      temperature: 15,
      condition: 'Cloudy',
      humidity: 78,
      windSpeed: 18,
    },
    {
      city: 'Tokyo',
      temperature: 26,
      condition: 'Partly Cloudy',
      humidity: 72,
      windSpeed: 8,
    },
    {
      city: 'Sydney',
      temperature: 20,
      condition: 'Rainy',
      humidity: 85,
      windSpeed: 22,
    },
  ];

  findAll(): Weather[] {
    return this.weatherData;
  }

  findByCity(city: string): Weather | undefined {
    return this.weatherData.find(
      w => w.city.toLowerCase() === city.toLowerCase()
    );
  }
}

