import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  findAll() {
    return this.weatherService.findAll();
  }

  @Get(':city')
  findByCity(@Param('city') city: string) {
    const weather = this.weatherService.findByCity(city);
    if (!weather) {
      return { error: 'City not found' };
    }
    return weather;
  }
}

