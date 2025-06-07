const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");
const { TIMEOUT_MS } = require("./constants");

const generateCaption = async (tone, prompt, imagePath) => {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  const fullPrompt = `
You're a social media expert and creative AI copywriter.
Generate a single engaging, ${tone}-style caption for Instagram, Twitter, and Facebook.

Caption should:
- Be emotionally compelling, scroll-stopping, and unique.
- Match the tone: ${tone}.
- Reflect the context of this image and description: "${prompt}".
- Be platform-ready and within 30 words or under 200 characters.
- No explanation or options — return only the caption.
- Hashtags allowed only if they are naturally part of the sentence.
`;

  const contents = [];

  // Add image if provided
  if (imagePath) {
    const base64ImageFile = fs.readFileSync(imagePath, { encoding: "base64" });
    contents.push({
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    });
  }

  // Add text prompt
  contents.push({ text: fullPrompt });

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("AI response timed out 😢")), TIMEOUT_MS)
  );

  const responsePromise = ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: contents,
  });

  const response = await Promise.race([responsePromise, timeoutPromise]);
  return response.text;
};

module.exports = generateCaption;
