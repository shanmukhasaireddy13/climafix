## CLIMAFIX Frontend (Vite + React)

Summit-first homepage for **CLIMAFIX** with a modern, responsive UI built on React and Tailwind CSS. Focuses on promoting the **CLIMAFIX Summit** with live links and fast rendering in production.

---

### 🌟 Highlights
- Summit-focused hero with auto-rotating background images
- Countdown timer (accessible, dynamic target date) or **LIVE** badge during event
- Past Summits dropdown with animated mindmap path and links (2022–2025)
- Summit Highlights cards (2023, 2024, 2025)
- Featured Speakers marquee (auto-scrolling)
- Past Events Gallery with linked images
- Mobile-friendly navbar with hamburger menu
- Production optimizations: preconnect/preload, lazy image loading, reduced motion

---

### ⚙️ Tech Stack
- **React 19 + Vite**
- **React Router DOM** (routing shell)
- **Tailwind CSS**

---

### 🚀 Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build
```

No backend or env variables are required for the homepage.

---

### 📂 Project Structure

```text
.
├── index.html
├── public/
│   └── bg_img.png
├── src/
│   ├── assets/
│   │   ├── arrow_icon.svg
│   │   ├── assets.js
│   │   └── bg_img.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CountdownTimer.jsx
│   │   ├── SummitHighlights.jsx
│   │   ├── AboutSection.jsx
│   │   ├── KeySessions.jsx
│   │   ├── FeaturedSpeakers.jsx
│   │   ├── SuccessStories.jsx
│   │   ├── PastEventsGallery.jsx
│   │   ├── CallToAction.jsx
│   │   └── SiteFooter.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── eslint.config.js
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── package.json
└── package-lock.json
```

---

### 🔗 Content & Links

Uses live **CLIMAFIX** assets and pages for accuracy:

- 2025 → [climafix.in/summit/2025](https://climafix.in/summit/2025/)
- 2024 → [climafix.in/summit/2024](https://climafix.in/summit/2024/)
- 2023 → [climafix.in/summit/2023](https://climafix.in/summit/2023/)
- Gallery → [climafix.in/summit/2022/gallery](https://climafix.in/summit/2022/gallery)

---

### ♿ Accessibility & Performance

- `aria-live` timer, `role="timer"`, accessible buttons
- `prefers-reduced-motion` fallback for marquee
- Lazy/async image decoding, preconnect to asset hosts
- Pauses hero rotation when tab is hidden
