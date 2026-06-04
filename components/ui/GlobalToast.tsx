import { Toaster, toast } from "sonner";

export const triggerErrorToast = (message: string) => {
  toast.error(message, {
    description: "Please check your API key configuration.",
  });
};

export default function GlobalToaster() {
  return <Toaster position="top-right" />;
}
