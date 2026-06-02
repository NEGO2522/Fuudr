<div align="center">
  <img src="public/favicon.svg" alt="Reelish Logo" width="120" />
  <h1>Reelish Web App</h1>
  <p><strong>TikTok meets DoorDash.</strong> Discover meals through short-form videos. Swipe, watch, order.</p>
</div>

<br/>

## 🚀 Features
- **TikTok-Style UI:** Beautiful, interactive mobile-first video feed mockup.
- **Glassmorphism Design:** Modern aesthetic with a custom dark theme and Red-Orange accents (`#FF4500` & `#FF8C00`).
- **Smooth Animations:** Floating gradient blobs and sleek hover effects.
- **Responsive Layout:** Fixed fullscreen on Desktop/Tablets, cleanly scrollable on Mobile with custom CTA blocks.
- **Waitlist Integration:** Functional frontend form to capture early adopters.
- **Client-Side Routing:** Hash-based seamless routing for Terms and Privacy pages without page reloads.

---

## 📱 Phone UI Design
Here is the core TikTok-style scrolling feed design for discovering food:

> **Note:** Take a screenshot of the phone UI in your browser and save it as `screenshot.png` inside the `public/` folder to display it below!

<div align="center">
  <img src="public/screenshot.png" alt="Reelish Mobile UI Preview" width="350" style="border-radius: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);" />
</div>

---

## 🛠 Tech Stack
- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Custom CSS (Modules/CSS3) with CSS Variables
- **Icons:** `lucide-react`
- **Deployment:** Vercel (Configured with `vercel.json` for SPA rewrites)

## 📦 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NEGO2522/reelish-web.git
   cd reelish-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment
This project is configured out-of-the-box for **Vercel**. 
Simply link this GitHub repository to your Vercel account, and Vercel will automatically detect Vite and use `npm run build` to deploy the `/dist` directory. The included `vercel.json` ensures all client-side routes fallback to `index.html`.

<br/>
<div align="center">
  <i>Built with ❤️ for food lovers.</i>
</div>
