export const generatePrompt = async (prompt, tone, uploadedFile) => {
  const data = {
    prompt,
    tone,
    image: uploadedFile,
  };

  const result = await apiClient("/api/v1/generate", "POST", data);

  if (!result.success) throw new Error(result.message);
  return result.caption;
};
