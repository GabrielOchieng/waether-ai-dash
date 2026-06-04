import CurrentWeatherDisplay from "./CurrentWeather";
import HourlyChart from "./HourlyChart";
import HourlyList from "./HourlyList";

export default function WeatherCard({ data }: { data: any }) {
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
