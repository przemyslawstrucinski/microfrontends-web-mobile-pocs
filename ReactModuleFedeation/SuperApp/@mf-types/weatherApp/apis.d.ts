
    export type RemoteKeys = 'weatherApp/WeatherApp';
    type PackageType<T> = T extends 'weatherApp/WeatherApp' ? typeof import('weatherApp/WeatherApp') :any;