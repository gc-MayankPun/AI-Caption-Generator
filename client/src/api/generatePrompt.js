import { resizeImage, base64ToFile } from "../utils/imageResolution";

export const generatePrompt = async (prompt, tone, uploadedFile, platform) => {
  const formData = new FormData();

  if (prompt) formData.append("prompt", prompt);
  formData.append("tone", tone);
  formData.append("platform", platform);

  if (uploadedFile) {
    // Resize image before upload
    const base64 = await resizeImage(uploadedFile);
    const resizedFile = base64ToFile(base64, uploadedFile.name);
    formData.append("image", resizedFile);
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}/generate`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || "Failed to generate caption");
  }

  const data = await response.json();

  return {
    caption: data.caption || data,
    platform,
    tone,
  };
};
