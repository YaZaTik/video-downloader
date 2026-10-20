# 🎬 Video Downloader — X (Twitter) & Instagram

A clean, modern, fast, and responsive web application for downloading public videos from **X (Twitter)** and **Instagram**.

Built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **yt-dlp**.

---

## ✨ Features

- **Paste & Download** — Paste any public X or Instagram video URL, pick a quality, and download instantly.
- **Multi-Quality** — Choose from multiple resolutions (1080p, 720p, 480p) or audio-only formats.
- **Client-Side Validation** — Real-time regex URL validation before hitting the server.
- **Paste from Clipboard** — One-click button to paste URLs directly.
- **Animated UI** — Smooth skeleton loaders, animated transitions, and micro-interactions via Framer Motion.
- **Error Classification** — User-friendly error messages for private content, deleted posts, rate limiting, and more.
- **Server-Side Rate Limiting** — Built-in in-memory rate limiter to protect the API endpoint.
- **Dark Mode** — Sleek dark theme with glass-morphism card effects.
- **Responsive** — Fully mobile-responsive design.

---

## 🛠️ Prerequisites

### 1. Node.js (v18+)

```powershell
winget install OpenJS.NodeJS.LTS
```

### 2. yt-dlp

The backend uses [yt-dlp](https://github.com/yt-dlp/yt-dlp) to extract video metadata and direct download URLs.

```powershell
# Option A: via pip
pip install yt-dlp

# Option B: via winget
winget install yt-dlp

# Option C: download the binary
# https://github.com/yt-dlp/yt-dlp/releases
# Place yt-dlp.exe in your PATH or set the YTDLP_PATH env variable.
```

Verify installation:
```powershell
yt-dlp --version
```

---

## 🚀 Getting Started

```bash
# 1. Navigate to the project
cd "C:\Users\hhh\.gemini\antigravity\scratch\video-downloader"

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
video-downloader/
├── app/
│   ├── api/download/
│   │   └── route.ts          # POST /api/download — main extraction endpoint
│   ├── globals.css            # Tailwind + custom CSS variables & effects
│   ├── layout.tsx             # Root layout (dark theme, background blobs, footer)
│   └── page.tsx               # Main page — orchestrates all UI states
├── components/
│   ├── url-input.tsx          # URL input form with paste & validation
│   ├── video-result.tsx       # Result card with quality selector & download buttons
│   ├── skeleton-loader.tsx    # Animated loading skeleton
│   └── error-display.tsx      # Classified error messages with icons
├── lib/
│   ├── validators.ts          # URL regex patterns, platform detection, sanitization
│   └── yt-dlp.ts              # yt-dlp child_process wrapper & output parser
├── types/
│   └── index.ts               # TypeScript interfaces & Zod schemas
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.js
```

---

## 📡 API Specification

### `POST /api/download`

**Request:**
```json
{
  "url": "https://x.com/user/status/1234567890"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "title": "Video title or caption",
    "thumbnail": "https://pbs.twimg.com/...",
    "duration": "0:45",
    "platform": "twitter",
    "uploader": "@username",
    "formats": [
      { "quality": "1080p", "url": "https://...", "extension": "mp4", "formatNote": "1080p • 12.4 MB" },
      { "quality": "720p", "url": "https://...", "extension": "mp4", "formatNote": "720p • 8.1 MB" },
      { "quality": "Audio", "url": "https://...", "extension": "m4a", "formatNote": "Audio • 1.2 MB" }
    ]
  }
}
```

**Error Response (4xx/5xx):**
```json
{
  "success": false,
  "error": "Human-readable error message",
  "code": "INVALID_URL | PRIVATE_CONTENT | NOT_FOUND | RATE_LIMITED | EXTRACTION_FAILED | SERVER_ERROR"
}
```

---

## ⚖️ Disclaimer

This tool is intended for **personal and educational use only**. Always respect content creators' rights and only download content you have permission to save. The developers are not responsible for misuse.
