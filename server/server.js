const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/v1/generate", (req, res) => {
  const { prompt, tone, uploadedFile } = req.body;

  if ((!prompt || prompt.trim() === "") && !uploadedFile) {
    return res.status(400).json({
      success: false,
      message: "Please provide either a prompt or upload an image. 🥺",
    });
  }

  res.status(200).json({ success: true, caption: "Yes Bitch!!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at PORT: ${process.env.PORT}`);
});
