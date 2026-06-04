"use client";

import { useState } from "react";
import WeatherCard from "@/components/features/WeatherCard";
import { useWeather } from "../lib/hooks/useWeather";
import { Loader2, AlertCircle, Settings2 } from "lucide-react";

export default function WeatherDashboard() {
  const [coords, setCoords] = useState({ lat: -1.2921, lon: 36.8219 });
  const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const [lang, setLang] = useState("en");

  // Passing dynamic parameters to the hook
  const { data, isLoading, error } = useWeather(
    coords.lat,
    coords.lon,
    units,
    lang,
  );

  return (
    <div className=" mx-auto p-6 md:p-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900">Live Weather</h1>
        <p className="text-slate-500 mt-2">
          Monitor real-time environmental conditions.
        </p>
      </header>

      {/* Configuration & Search Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Latitude"
            className="p-3 rounded-lg border border-slate-200"
            onChange={(e) =>
              setCoords({ ...coords, lat: parseFloat(e.target.value) })
            }
          />
          <input
            type="number"
            placeholder="Longitude"
            className="p-3 rounded-lg border border-slate-200"
            onChange={(e) =>
              setCoords({ ...coords, lon: parseFloat(e.target.value) })
            }
          />
        </div>

        <div className="flex gap-4">
          <select
            className="p-2 border rounded-lg text-sm bg-slate-50"
            value={units}
            onChange={(e) => setUnits(e.target.value as "metric" | "imperial")}
          >
            <option value="metric">Metric (°C)</option>
            <option value="imperial">Imperial (°F)</option>
          </select>

          <select
            className="p-2 border rounded-lg text-sm bg-slate-50"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>

      {/* Weather Display */}
      <section className="space-y-4">
        {isLoading ? (
          <div className="flex items-center gap-2 text-slate-500 bg-white p-6 rounded-2xl border">
            <Loader2 className="animate-spin h-5 w-5" />
            <span>Updating weather data...</span>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-6 rounded-2xl border border-red-100">
            <AlertCircle className="h-5 w-5" />
            <span>Unable to load weather data. Please check coordinates.</span>
          </div>
        ) : (
          <WeatherCard data={data} />
        )}
      </section>
    </div>
  );
}
