export default function CurrentWeatherDisplay({
  current,
  location,
}: {
  current: any;
  location: any;
}) {
  return (
    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-2xl">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-sm font-medium text-slate-400 uppercase">
            Current
          </h2>
          <p className="text-2xl font-bold">{location.timezone}</p>
        </div>
        <img src={current.icon} alt="Weather icon" className="w-16 h-16" />
      </div>
      <p className="text-6xl font-light mt-4">
        {Math.round(current.temperature)}°
      </p>

      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-700 pt-6">
        {[
          { label: "Feels Like", value: `${current.feels_like}°` },
          { label: "Humidity", value: `${current.humidity}%` },
          { label: "Wind", value: `${current.wind_speed} km/h` },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-slate-400 text-[10px] uppercase">{item.label}</p>
            <p className="font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
