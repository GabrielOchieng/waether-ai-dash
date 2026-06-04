// import { useMutation } from "@tanstack/react-query";
// import api from "../api";

// export const useForestryAnalysis = () => {
//   return useMutation({
//     mutationFn: async (formData: FormData) => {
//       const { data } = await api.post("/v1/trees/analyze", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       return data;
//     },
//   });
// };

// lib/hooks/useForestry.ts
import { useMutation } from "@tanstack/react-query";
import api from "../api";

// Define the shape of the data needed by the API
interface ForestryPayload {
  image: File;
  farmerId: string;
  county: string;
  landAcres: number;
}

export const useForestryAnalysis = () => {
  return useMutation({
    mutationFn: async (payload: ForestryPayload) => {
      const formData = new FormData();
      formData.append("image", payload.image);
      formData.append("farmerId", payload.farmerId);
      formData.append("county", payload.county);
      formData.append("landAcres", payload.landAcres.toString());

      const { data } = await api.post("/v1/trees/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    },
  });
};
