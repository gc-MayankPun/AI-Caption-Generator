# SnapScribe 🧠✨

**Your AI-Powered Social Media Caption Assistant**

SnapScribe is a powerful AI-based caption generator designed for content creators, influencers, brands, and marketers. Upload an image or type a prompt, and let SnapScribe craft scroll-stopping, tone-appropriate captions tailored for platforms like **Instagram**, **Twitter**, and **Facebook**.

---

## ⚙️ About This Project

SnapScribe is a personal project created to explore and learn how to integrate Generative AI into real-world web applications. It combines file handling, API rate-limiting, prompt engineering, image input processing, and AI model invocation (Gemini 2.0 Flash) to deliver a practical caption-generation tool.

---

## 🔗 Live Demo

> 🌐 **Live App:** [gc-snapscribe.netlify.app](https://gc-snapscribe.netlify.app)  
> 🛠️ **Source Code:** [GitHub Repository](https://github.com/gc-MayankPun/AI-Caption-Generator)

---

## 🚀 Features at a Glance

- 📷 **Smart Image Upload** – AI interprets the image and crafts a matching caption.
- 📝 **Text Prompt Input** – Enter a topic, keyword, or phrase to get a creative caption.
- 🎭 **Tone Selection** – Choose from multiple tones like `Fun`, `Romantic`, `Aesthetic`, `Sassy`, `Professional`, and `Inspirational`.
- ✨ **Single, High-Quality Captions** – Unique caption every time (no options, no fluff).
- 📋 **Ready-to-Copy Output** – Optimized for social media with optional natural hashtags.
- 🛡️ **Rate Limiting** – Prevents misuse with built-in protection.
- 🔒 **Secure & Fast** – Helmet, CORS, and timeout handling built-in.

---

## 🧠 How It Works

- **Step 1**: Upload an image or provide a short text prompt.
- **Step 2**: Select the tone that best fits your post vibe.
- **Step 3**: The AI processes your input and returns a catchy, emotionally resonant caption — within 200 characters.
- **Step 4**: Copy, paste, and post 🚀

> If both image and prompt are given, the AI uses both to generate a more context-aware caption.

---

## 🎯 Use Cases

- 📱 Influencers curating their brand identity
- 📸 Creators posting daily lifestyle content
- 🧠 Marketers running campaigns
- 🧍‍♂️ Individuals struggling with creative block

---

## 🧪 Example Inputs & Outputs

| Input Type | Prompt / Image Description     | Selected Tone | Output Caption                                 |
| ---------- | ------------------------------ | ------------- | ---------------------------------------------- |
| Image      | A cozy coffee shop corner      | Aesthetic     | "Where lattes meet lazy afternoons ☕📖"       |
| Text       | Monday Motivation              | Inspirational | "You were not born to be mediocre. Rise. 💥"   |
| Both       | Selfie at beach, “golden hour” | Romantic      | "You + me + sunsets = everything I need. 🌅❤️" |

---

## 🧩 Tech Stack

- **Node.js + Express** (Backend)
- **Google Gemini 2.0 Flash** (AI model)
- **Multer** for file upload handling
- **Helmet** & **CORS** for security
- **Rate Limiting** middleware
- **Timeout handling** for reliability

---

## 📌 Coming Soon

- 💾 Caption History & Save Feature
- 🪄 Tone Suggestions via AI
- 🎨 Auto-style formatting for platforms
- 📈 Performance dashboard
- 🔁 Bulk caption generator for creators

---

## 👨‍💻 Setup Instructions

```bash
git clone https://github.com/yourusername/snapscribe.git
cd snapscribe
npm install
touch .env
# Add your environment variables (e.g., GEMINI_API_KEY, PORT, API_VERSION)
npm start
```
