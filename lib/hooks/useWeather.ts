// import { useQuery } from "@tanstack/react-query";
// import api from "../api";

// export const useWeather = (lat: number, lon: number) => {
//   return useQuery({
//     queryKey: ["weather", lat, lon],
//     queryFn: async () => {
//       const { data } = await api.get("/v1/weather", {
//         params: { lat, lon, ai: true },
//       });
//       return data;
//     },
//   });
// };

// lib/hooks/useWeather.ts
import { useQuery } from "@tanstack/react-query";
import api from "../api";

export const useWeather = (
  lat: number,
  lon: number,
  units: "metric" | "imperial" = "metric",
  lang: string = "en",
) => {
  return useQuery({
    queryKey: ["weather", lat, lon, units, lang],
    queryFn: async () => {
      const { data } = await api.get("/v1/weather", {
        params: {
          lat,
          lon,
          ai: true,
          units,
          lang,
        },
      });
      return data;
    },
  });
};
