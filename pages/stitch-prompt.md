# Google Stitch Prompt

---

Design a **personal portfolio website** for a senior AI Product Manager named **JQ Zhao**.

## Site Structure

4 pages with a fixed navigation bar in the top-right corner:

1. **Home** — Full-screen hero section. Top-left logo: pixel-style text "JQ". Center headline: "HI, HERE IS JQ ZHAO". Subtitle: "AI Product Manager · 10 Years Experience". Typewriter animation on the headline.

2. **About** — A single card with a short bio (2–3 paragraphs of placeholder text). Optional avatar on the left, text on the right.

3. **Contact** — Centered card with a circular avatar photo, name, email, and phone number listed below it.

4. **Work & Projects** — Two sections:
   - **Work Experience**: A vertical timeline showing 3 past companies with title, company name, and date range.
   - **Projects**: A 2×2 card grid. Each card shows project name, role, date, and a one-line highlight stat. Clicking a card opens a modal/drawer with detailed content (placeholder text is fine).

## Visual Style

**Retro pixel / geek aesthetic** — inspired by NES game UI and terminal interfaces.

- **Primary mode**: Dark mode
- **Color palette**:
  - Background: `#0D0D0D` / `#1A1A1A`
  - Text: `#E0E0E0`
  - Accent: `#00FF41` (hacker green)
  - Borders: `#333333`
- **Light mode** (toggle supported):
  - Background: `#F5F5F0`
  - Text: `#1A1A1A`
  - Accent: `#D62828` (pixel red)
- **Fonts**: Pixel/bitmap font (e.g. "Press Start 2P") for headings; monospace font (e.g. "JetBrains Mono") for body text
- **UI elements**: Hard pixel borders (no border-radius), blocky buttons with hover color-invert effect, subtle pixel-dot or scanline background texture
- **Dark/Light toggle button**: visible in the navigation bar

## Layout & Interactions

- Navigation: fixed top-right, pixel-style text links, active page highlighted with accent color
- Page transitions: fade in / fade out
- Loading screen: NES boot animation style — black screen → pixel scan lines → logo appears
- Responsive: desktop-first layout
