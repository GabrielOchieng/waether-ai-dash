// "use client";

// import { useForestryAnalysis } from "@/lib/hooks/useForestry";
// import { useState, ChangeEvent } from "react";
// import { Upload, Loader2, CheckCircle2 } from "lucide-react";

// export default function ForestryUploader() {
//   const [file, setFile] = useState<File | null>(null);
//   const mutation = useForestryAnalysis();

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     if (!file) return;
//     const formData = new FormData();
//     formData.append("image", file);
//     mutation.mutate(formData);
//   };

//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
//       <h2 className="text-lg font-bold text-slate-900 mb-4">
//         Analyze Farm Imagery
//       </h2>

//       {/* Upload Area */}
//       <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-blue-500 transition-colors bg-slate-50">
//         <input
//           type="file"
//           id="file-upload"
//           className="hidden"
//           onChange={handleFileChange}
//           accept="image/*"
//         />
//         <label
//           htmlFor="file-upload"
//           className="cursor-pointer flex flex-col items-center"
//         >
//           <Upload className="h-8 w-8 text-slate-400 mb-2" />
//           <span className="text-blue-600 font-medium">
//             {file ? file.name : "Click to upload image"}
//           </span>
//           <p className="text-slate-400 text-sm mt-1">
//             JPEG, PNG, or WEBP (max 20MB)
//           </p>
//         </label>
//       </div>

//       {/* Action Button */}
//       <button
//         onClick={handleUpload}
//         disabled={!file || mutation.isPending}
//         className="w-full mt-6 cursor-pointer bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         {mutation.isPending ? (
//           <>
//             <Loader2 className="animate-spin h-5 w-5" />
//             Analyzing...
//           </>
//         ) : (
//           "Analyze Image"
//         )}
//       </button>

//       {/* Results Display */}
//       {mutation.isSuccess && mutation.data && (
//         <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
//           <div className="flex items-center gap-2 text-green-700 font-bold mb-2">
//             <CheckCircle2 className="h-5 w-5" />
//             Analysis Complete
//           </div>
//           <p className="text-sm text-green-800">
//             Total Trees Detected:{" "}
//             <span className="font-bold">{mutation.data.total_tree_count}</span>
//           </p>
//           <a
//             href={mutation.data.overlay_image_url}
//             target="_blank"
//             className="text-xs text-blue-600 underline mt-2 block"
//           >
//             View Annotated Image
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useForestryAnalysis } from "@/lib/hooks/useForestry";
import { useState, ChangeEvent } from "react";
import { Upload, Loader2, CheckCircle2 } from "lucide-react";

export default function ForestryUploader() {
  const [file, setFile] = useState<File | null>(null);
  // New state for required metadata
  const [metadata, setMetadata] = useState({
    farmerId: "F-001",
    county: "Bomet",
    landAcres: 2.5,
  });

  const mutation = useForestryAnalysis();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    // Call mutation with object containing image and metadata
    mutation.mutate({
      image: file,
      ...metadata,
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
      <h2 className="text-lg font-bold text-slate-900 mb-4">
        Analyze Farm Imagery
      </h2>

      {/* Metadata Inputs */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Farmer ID"
          className="p-2 border rounded-lg text-sm"
          value={metadata.farmerId}
          onChange={(e) =>
            setMetadata({ ...metadata, farmerId: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Acres"
          className="p-2 border rounded-lg text-sm"
          value={metadata.landAcres}
          onChange={(e) =>
            setMetadata({ ...metadata, landAcres: parseFloat(e.target.value) })
          }
        />
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-blue-500 transition-colors bg-slate-50">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <Upload className="h-8 w-8 text-slate-400 mb-2" />
          <span className="text-blue-600 font-medium">
            {file ? file.name : "Click to upload image"}
          </span>
        </label>
      </div>

      {/* Action Button */}
      <button
        onClick={handleUpload}
        disabled={!file || mutation.isPending}
        className="w-full mt-6 cursor-pointer bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {mutation.isPending ? (
          <>
            <Loader2 className="animate-spin h-5 w-5" />
            Analyzing...
          </>
        ) : (
          "Analyze Image"
        )}
      </button>

      {/* Results Display */}
      {mutation.isSuccess && mutation.data && (
        <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
          <div className="flex items-center gap-2 text-green-700 font-bold mb-2">
            <CheckCircle2 className="h-5 w-5" />
            Analysis Complete
          </div>
          <p className="text-sm text-green-800">
            Trees Detected:{" "}
            <span className="font-bold">{mutation.data.total_tree_count}</span>
          </p>
        </div>
      )}
    </div>
  );
}
