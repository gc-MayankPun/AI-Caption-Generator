const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { TIMEOUT_MS } = require("../utils/constants");
const { buildPrompt } = require("../utils/utils");
const fs = require("fs");

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY,
});

const generateCaption = async (tone, prompt, imagePath) => {
  const fullPrompt = buildPrompt({
    tone,
    userPrompt: prompt,
    platform: "LinkedIn",
  });

  const messageParts = [];

  // Image support
  if (imagePath) {
    const base64ImageFile = fs.readFileSync(imagePath, {
      encoding: "base64",
    });

    messageParts.push({
      type: "image_url",
      image_url: {
        url: `data:image/jpeg;base64,${base64ImageFile}`,
      },
    });
  }

  // Text prompt
  messageParts.push({
    type: "text",
    text: fullPrompt,
  });

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("AI response timed out 😢")), TIMEOUT_MS),
  );

  const responsePromise = geminiModel.invoke([
    {
      role: "user",
      content: messageParts,
    },
  ]);

  const result = await Promise.race([responsePromise, timeoutPromise]);
  return result.content;
};

module.exports = generateCaption;
