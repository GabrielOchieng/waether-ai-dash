import axios from "axios";
import { handleApiError } from "./api-error";

const api = axios.create({
  baseURL: "/api/proxy",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    handleApiError(error);
    return Promise.reject(error);
  },
);

export default api;
