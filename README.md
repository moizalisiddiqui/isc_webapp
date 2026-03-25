# IOBM Stock Challenge 2026

**Karachi's most elite inter-university stock trading simulation.**

---

## 🚀 Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

---

## 📁 Project Structure

```
isc/
├── app/
│   ├── layout.tsx              Root layout (SEO metadata + ClientShell)
│   ├── page.tsx                Home page
│   ├── about/page.tsx          About + full 6-day schedule
│   ├── sponsors/page.tsx       Sponsorship tiers
│   ├── team/page.tsx           Modular team grid
│   ├── gallery/page.tsx        Photo gallery
│   └── register/page.tsx       ★ Dynamic registration form
├── components/
│   ├── ClientShell.tsx         Preloader state + page fade-in
│   ├── Preloader.tsx           Cinematic boot-sequence preloader
│   ├── Navbar.tsx              Glassmorphism navbar + logo slot
│   ├── Footer.tsx              Dark minimal footer
│   ├── Hero.tsx                Full-screen hero
│   ├── StarfieldBackground.tsx Canvas starfield + shooting stars
│   ├── CountdownTimer.tsx      Live countdown → April 9, 2026
│   ├── StatsSection.tsx        Animated counter stats
│   ├── PricingCards.tsx        ★ Clickable entry type selector
│   ├── SponsorsGrid.tsx        Sponsor circles + CTA
│   └── FAQSection.tsx          Accordion FAQ
├── styles/
│   └── globals.css             Design system, utilities, animations
├── public/
│   └── images/                 ← Drop logo here (see Navbar notes)
└── tailwind.config.ts
```

---

## ⚙️ Configuration Checklist

### 1. Registration Form (Formspree)
1. Create a free account at **formspree.io**
2. Create a new form → copy the Form ID
3. In `app/register/page.tsx`, replace:
   ```ts
   'https://formspree.io/f/YOUR_FORM_ID'
   ```
   with your actual endpoint.

### 2. Logo
- Drop your logo file into `/public/images/isc-logo.png`
- Open `components/Navbar.tsx`, find the `<Image>` block (commented out) and uncomment it.
- Remove the fallback `<div>` above it.

### 3. Registration Deadline
- Default: **April 9, 2026**
- To change: edit `components/CountdownTimer.tsx`:
  ```ts
  const DEADLINE = new Date('2026-04-09T23:59:59')
  ```

### 4. Team Data
- Edit the arrays in `app/team/page.tsx`:
  - `LEADERSHIP` — core team (3 cols)
  - `EVENT_HEADS` — event heads (2 cols)
  - `MEMBERS`    — general members (3 cols)
- Add an `image` field + `<Image>` component to show real photos.

### 5. Bank Details
- Update in `app/register/page.tsx` → Payment section.

### 6. Contact Email
- Global search & replace `isc@iobm.edu.pk` with your actual address.

### 7. Social Links
- Update social hrefs in `components/Footer.tsx`.

---

## ✅ Key Fixes in This Version

| Item | Status |
|------|--------|
| Countdown targets April 9, 2026 | ✅ Fixed |
| Individual + Team both selectable | ✅ Fixed |
| Register page dynamic form | ✅ Fixed |
| CNIC + Department + Year fields | ✅ Added |
| Team Leader label (not "Primary Participant") | ✅ Fixed |
| 6-day schedule on About page | ✅ Updated |
| 3-day preview table on Home | ✅ Added |
| Navbar logo slot | ✅ Added |
| Preloader cinematic boot sequence | ✅ Included |
| Modular team page tiers | ✅ Added |

---

## 🌐 Deploy on Vercel

```bash
npx vercel
```

Set **Framework**: Next.js — everything else is auto-detected.

---

## 📞 Contact
**isc@iobm.edu.pk**  
Institute of Business Management, Karachi
