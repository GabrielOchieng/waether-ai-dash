import ForestryUploader from "@/components/features/ForestryUploader";

export default function ForestryPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6">Forestry Analysis</h1>
      <p className="text-slate-600 mb-8">
        Upload aerial imagery to perform canopy analysis.
      </p>
      <ForestryUploader />
    </div>
  );
}
