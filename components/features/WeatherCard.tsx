import { WeatherData } from "@/types/Weather";
import CurrentWeatherDisplay from "./CurrentWeather";
import HourlyChart from "./HourlyChart";
import HourlyList from "./HourlyList";

interface WeatherCardProps {
  data: WeatherData | null | undefined;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  // 1. Guard clause: prevents crashing if data is still loading or null
  if (!data || !data.current || !data.hourly) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500">
        No weather data available.
      </div>
    );
  }

  const { current, location, hourly } = data;
  const hourlyData = hourly.slice(0, 12);

  return (
    <div className="space-y-6">
      <CurrentWeatherDisplay current={current} location={location} />
      <HourlyChart data={hourlyData} />
      <HourlyList data={hourlyData} />
    </div>
  );
}
