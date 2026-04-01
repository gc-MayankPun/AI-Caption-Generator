# SnapScribe 🧠✨

**Your AI-Powered Social Media Caption Assistant**

SnapScribe is a powerful AI-based caption generator designed for content creators, influencers, brands, and marketers. Upload an image, take a photo directly from your device camera, or type a prompt — and let SnapScribe craft scroll-stopping, tone-appropriate captions tailored for **Instagram**, **Twitter / X**, **Facebook**, and **LinkedIn**.

---

## ⚙️ About This Project

SnapScribe is a personal project built to explore integrating Generative AI into real-world web applications. It combines file handling, camera capture, API rate-limiting, prompt engineering, image processing, and AI model invocation to deliver a practical, production-ready caption-generation tool.

The frontend is built with React and **served directly from the Express backend** — no separate static host needed.

---

## 🔗 Live Demo

> 🌐 **Live App:** [gc-snapscribe](https://ai-caption-generator-eeux.onrender.com/)  
> 🛠️ **Source Code:** [GitHub Repository](https://github.com/gc-MayankPun/AI-Caption-Generator)

---

## 🚀 Features at a Glance

- 📷 **Smart Image Upload** – Drag & drop, browse, or take a live photo. Max 5MB per image.
- 📸 **In-App Camera** – Capture directly from your front or back camera with a live viewfinder. Preview, retake, or accept before use.
- 📝 **Text Prompt Input** – Enter a topic, keyword, or scene description to guide the caption.
- 🎭 **Tone Selection** – Choose from `Fun`, `Romantic`, `Aesthetic`, `Sassy`, `Professional`, `Inspirational`, `Witty`, `Chill`, `Luxury`, `Dark Humor`, and `Nostalgic`.
- 🌐 **Platform Awareness** – Select your target platform (Instagram, Twitter / X, Facebook, LinkedIn) so the AI adapts the caption's style, length, and tone accordingly.
- ✨ **Single, High-Quality Captions** – One unique, emotionally resonant caption per generation — no noise, no filler.
- 📋 **Ready-to-Copy Output** – Each caption card shows its platform tag and tone, with a one-click copy button.
- 🛡️ **Rate Limiting** – Built-in protection against misuse.
- 🔒 **Secure & Fast** – Helmet, CORS, and timeout handling included.

---

## 🧠 How It Works

1. **Upload or capture** an image (optional) — drag & drop, browse files, or use the in-app camera.
2. **Select a tone** that matches your post's vibe.
3. **Choose your platform** — Instagram, Twitter / X, Facebook, or LinkedIn.
4. **Enter a text prompt** (optional) — describe the scene, mood, or intent.
5. The AI processes your inputs and returns a scroll-stopping caption within ~180 characters.
6. **Copy and post** 🚀

> When both an image and a prompt are provided, the AI combines both into a single, context-aware caption — it does not treat them separately.

---

## 📸 Camera Feature

- Opens a full-screen camera modal with a live viewfinder.
- Toggle between **front camera** (selfie) and **back camera** on supported devices.
- Hit the shutter button to capture, then **accept** the photo to use it or **retake** if needed.
- Captured photos are automatically resized and passed to the AI alongside your prompt.

---

## 🎯 Use Cases

- 📱 Influencers curating their brand identity
- 📸 Creators posting daily lifestyle content
- 🧠 Marketers running campaigns across platforms
- 🧍 Individuals breaking through creative block

---

## 🧪 Example Inputs & Outputs

| Input Type | Prompt / Image Description     | Tone          | Platform   | Output Caption                                        |
| ---------- | ------------------------------ | ------------- | ---------- | ----------------------------------------------------- |
| Image      | Cozy coffee shop corner        | Aesthetic     | Instagram  | "Where lattes meet lazy afternoons ☕📖"              |
| Text       | Monday Motivation              | Inspirational | LinkedIn   | "You were not born to be mediocre. Rise. 💥"          |
| Both       | Selfie at beach, "golden hour" | Romantic      | Facebook   | "You + me + sunsets = everything I need. 🌅❤️"       |
| Camera     | Live photo at a rooftop        | Witty         | Twitter /X | "Sky's the limit — until rent's due. 😅 #RooftopLife" |

---

## 🧩 Tech Stack

**Backend**
- **Node.js + Express** — API server and static file host for the React frontend
- **Mistral AI** (`mistral-small-latest`) via `@langchain/mistralai` — primary caption generation model
- **Google Gemini** (`gemini-2.5-flash-lite`) via `@langchain/google-genai` — fallback / image-capable model
- **Multer** — multipart file upload handling
- **Helmet** & **CORS** — security middleware
- **Rate Limiting** — request throttling
- **Timeout handling** — reliability under load

**Frontend**
- **React + Vite** — UI framework and build tool
- **TanStack Query** — async state and mutation management
- **react-dropzone** — drag-and-drop image uploads
- **MediaDevices API** — in-browser camera access (front & back)
- **shadcn/ui** — accessible select components
- **react-toastify** — toast notifications
- **Outfit + Playfair Display** — typography

---

## 🗂️ Project Structure

```
SnapScribe/
├── client/                  # React frontend (built output served by Express)
│   └── src/
│       ├── api/
│       │   └── generatePrompt.js
│       ├── components/
│       │   ├── App.jsx
│       │   ├── Logo.jsx
│       │   ├── CaptionUploader.jsx
│       │   ├── FileUploader.jsx
│       │   ├── CameraModal.jsx       # ← New: in-app camera
│       │   ├── PlatformSelector.jsx  # ← New: platform buttons
│       │   ├── Selector.jsx
│       │   ├── Input.jsx
│       │   └── CaptionLogs.jsx
│       ├── hooks/
│       │   └── useGenerateCaption.js
│       └── utils/
│           └── ImageResolution.js
├── server/
│   ├── services/
│   │   └── ai.service.js     # Mistral + Gemini model logic
│   ├── utils/
│   │   ├── utils.js          # buildPrompt
│   │   └── constants.js
│   └── server.js             # Serves API + built React frontend
├── .env
├── package.json
└── README.md
```

---

## 👨‍💻 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/gc-MayankPun/AI-Caption-Generator.git
cd AI-Caption-Generator
```

### 2. Install dependencies

```bash
# Backend
npm install

# Frontend
cd client && npm install && cd ..
```

### 3. Configure environment variables

Create a `.env` file in the root:

```env
MISTRAL_API_KEY=your_mistral_api_key
GEMINI_API_KEY=your_gemini_api_key
PORT=3000
```

### 4. Build the frontend

```bash
cd client && npm run build && cd ..
```

> The Express server serves the built React app from `client/dist` — no separate deployment needed.

### 5. Start the server

```bash
npm start
```

Visit `http://localhost:3000` — the app is live.

---

## 📌 Coming Soon

- 💾 Caption History & Save Feature
- 🪄 Tone Suggestions via AI
- 🎨 Auto-style formatting per platform
- 📈 Performance dashboard
- 🔁 Bulk caption generator for creators

---

## 📄 License

MIT — see [LICENSE](./LICENSE) for details.
