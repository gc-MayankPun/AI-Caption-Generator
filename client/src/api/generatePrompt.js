import { resizeImage, base64ToFile } from "../utils/imageResolution";  
import { apiClient } from "./apiInstance";

export const generatePrompt = async (prompt, tone, uploadedFile, platform) => {
  const formData = new FormData();

  if (prompt) formData.append("prompt", prompt);
  formData.append("tone", tone);
  formData.append("platform", platform);

  if (uploadedFile) {
    const base64 = await resizeImage(uploadedFile);
    const resizedFile = base64ToFile(base64, uploadedFile.name);
    formData.append("image", resizedFile);
  }

  const data = await apiClient("/generate", "POST", formData);

  return {
    caption: data.caption || data,
    platform,
    tone,
  };
};
