import { triggerErrorToast } from "@/components/ui/GlobalToast";

export const handleApiError = (error: any) => {
  // Handle custom API business errors (e.g., quota exceeded)
  if (error.response?.data?.error === "tree_quota_exceeded") {
    triggerErrorToast(`Quota Exceeded: ${error.response.data.message}`);
    return;
  }

  // Handle standard HTTP status errors
  const status = error.response?.status;
  switch (status) {
    case 401:
      triggerErrorToast("Unauthorized: Invalid or revoked API key.");
      break;
    case 429:
      triggerErrorToast("Too many requests: Please slow down.");
      break;
    case 500:
      triggerErrorToast(
        "Server error: Our services are currently experiencing issues.",
      );
      break;
    default:
      triggerErrorToast(
        error.response?.data?.message || "An unexpected error occurred.",
      );
  }
};
