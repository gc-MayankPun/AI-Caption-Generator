import { generatePrompt } from "@/api/generatePrompt";
import { useMutation } from "@tanstack/react-query"; 
import { toast } from "react-toastify";

const useGenerateCaption = (setCaptionLogs) => {
  return useMutation({
    mutationKey: ["generate-caption"],
    mutationFn: ({ prompt, tone, uploadedFile }) =>
      generatePrompt(prompt, tone, uploadedFile),
    onSuccess: (caption) => {
      setCaptionLogs((prev) => [caption, ...prev]);
    },
    onError: (error) => {
      toast.error(
        error.message || "Failed to generate caption. Please try again."
      );
    },
  });
};

export default useGenerateCaption;
