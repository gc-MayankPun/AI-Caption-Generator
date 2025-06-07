import { base64ToFile, resizeImage } from "@/utils/imageResolution";
import { apiClient } from "./apiClient";

export const generatePrompt = async (prompt, tone, uploadedFile) => {
  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("tone", tone);

  if (uploadedFile) {
    const base64Image = await resizeImage(uploadedFile, 1920, 1080);
    const resizedFile = base64ToFile(base64Image, uploadedFile.name);
    formData.append("image", resizedFile);
  }

  const result = await apiClient("/generate", "POST", formData);
  
  if (!result.success) throw new Error(result.message);
  return result.caption;
};
