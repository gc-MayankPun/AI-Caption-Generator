const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const generateCaption = require("./services/ai.service");
const { upload, deleteTempFile } = require("./utils/multerUtil");
const tokenLimitChecker = require("./utils/tokenLimitChecker");
const limiter = require("./utils/rateLimiter");
const path = require("path");

app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "blob:"],
      },
    },
  }),
);

app.post(`/generate`, limiter, upload.single("image"), async (req, res) => {
  const { prompt, tone, platform } = req.body;
  const uploadedFile = req.file;
  const imagePath = uploadedFile?.path || null;

  try {
    if ((!prompt || prompt.trim() === "") && !req.file) {
      return res.status(400).json({
        success: false,
        message: "Please provide either a prompt or upload an image. 🥺",
      });
    }

    if (prompt && !tokenLimitChecker(prompt)) {
      return res
        .status(413)
        .json({ success: false, message: "Prompt is too long 😿" });
    }

    const caption = await generateCaption({
      tone: tone || "fun",
      prompt,
      platform,
      imagePath,
    });

    await deleteTempFile(imagePath);
    return res.status(200).json({ success: true, caption });
  } catch (error) {
    console.log(error);

    await deleteTempFile(imagePath);

    if (
      error?.status === 429 ||
      error?.message?.includes("RESOURCE_EXHAUSTED")
    ) {
      return res.status(429).json({
        success: false,
        message: "AI quota exceeded. Please try again after some time ⏳",
      });
    }

    if (error?.message?.includes("timed out")) {
      return res.status(504).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to generate caption.",
    });
  }
});

app.use("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at PORT: ${process.env.PORT}`);
});
