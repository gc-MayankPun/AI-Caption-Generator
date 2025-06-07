import { generatePrompt } from "@/api/generatePrompt";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useGenerateCaption = (setCaptionLogs) => {
  return useMutation({
    mutationKey: ["generate-caption"],
    mutationFn: ({ prompt, tone, uploadedFile }) => {
      return generatePrompt(prompt, tone, uploadedFile);
    },
    onSuccess: (caption) => {
      toast.success("Caption generated!")
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
