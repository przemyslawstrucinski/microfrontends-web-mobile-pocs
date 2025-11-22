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
export declare const useWeather: (city?: string | null) => UseWeatherReturn;
export {};
