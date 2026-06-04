export default function HourlyList({ data }: { data: any[] }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 overflow-x-auto">
      <h3 className="font-bold text-slate-900 mb-4">Hourly Details</h3>
      <div className="flex gap-6">
        {data.map((hour, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-15">
            <span className="text-xs text-slate-500">
              {new Date(hour.time).getHours()}:00
            </span>
            <img src={hour.icon} alt="icon" className="w-8 h-8 my-2" />
            <span className="font-bold">{Math.round(hour.temperature)}°</span>
            <span className="text-[10px] text-blue-500">
              {hour.precipitation_probability}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
