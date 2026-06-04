export interface HourlyData {
  time: string;
  temperature: number;
  precipitation_probability: number;
  wind_speed: number;
  icon: string;
}

export interface WeatherData {
  location: {
    timezone: string;
    country: string;
  };
  current: {
    temperature: number;
    feels_like: number;
    humidity: number;
    wind_speed: number;
    icon: string;
  };
  hourly: HourlyData[];
}
