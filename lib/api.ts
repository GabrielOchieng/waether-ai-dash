import axios from "axios";
import { handleApiError } from "./api-error";

const api = axios.create({
  baseURL: "https://api.weather-ai.co",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    handleApiError(error);
    return Promise.reject(error);
  },
);

export default api;
