# Honeypot Media Site

## Client

**Honey Pot Media** — A boutique social media management and content creation studio based in Tampa, FL. They specialize in lifestyle brands (wellness, hospitality, beauty, fitness) and offer social media management, content creation, influencer marketing, event activations, strategy consulting, and community management.

---

## Tech Stack

| Layer        | Technology                        |
| ------------ | --------------------------------- |
| Framework    | Next.js 16.1.6 (App Router)      |
| Language     | TypeScript 5                      |
| UI           | React 19.2.3                      |
| Styling      | Tailwind CSS 4 + custom CSS       |
| Icons        | Lucide React 0.577.0              |
| Email        | Resend 6.9.3                      |
| PostCSS      | @tailwindcss/postcss              |
| Deployment   | Vercel (.vercel/ directory exists) |

---

## Pages & Routes

This is a single-page site. All content lives on the index route.

| Route          | File                           | Description                                            |
| -------------- | ------------------------------ | ------------------------------------------------------ |
| `/`            | `src/app/page.tsx`             | Home — all sections rendered in sequence                |
| `/api/contact` | `src/app/api/contact/route.ts` | POST — receives form submissions, sends email via Resend |

---

## Components

All components live in `src/components/`.

| Component        | File               | Client? | Description |
| ---------------- | ------------------ | ------- | ----------- |
| `Navbar`         | `Navbar.tsx`       | Yes     | Fixed sticky navbar. Tracks scroll position and hero visibility via IntersectionObserver. Transparent with only "Book a Call" button over the hero; full navbar (logo, links, CTA) after scrolling past. Mobile hamburger menu with animated open/close. Publishes its rendered height as `--nav-h` CSS variable via ResizeObserver. |
| `Logo`           | `Logo.tsx`         | No      | Reusable logo image with proportional scaling (16:7.5 aspect ratio). Accepts `height` prop. |
| `Hero`           | `Hero.tsx`         | No      | Full-viewport (100vh) section with centered white logo on dark brown background. Priority-loaded image. |
| `HeroSnap`       | `HeroSnap.tsx`     | Yes     | JS-based scroll snap between hero and content. Listens for wheel events (desktop/trackpad) and touch events (mobile). Snaps to hero top or hero bottom with a 30px delta threshold. Locks scroll during animation to prevent stutter. Only active in the hero-to-first-section zone; free scrolling everywhere else. |
| `TopRibbon`      | `TopRibbon.tsx`    | No      | Marquee/ticker ribbon. Repeats "For Brands Worth Buzzing About ✦" 12 times in two spans for seamless infinite CSS animation loop. Sits directly after the hero with `margin-top: var(--nav-h)` to clear the fixed navbar. |
| `Services`       | `Services.tsx`     | No      | Two core services in a 2-column grid: Social Media Management and Content Creation. Each card has a Lucide icon, description, and platform/capability tags. |
| `SubServices`    | `SubServices.tsx`  | No      | Four add-on services in a 2-column grid: Influencer Marketing, Event & Brand Activations, Strategy & Growth Consulting, Community Management. Data-driven from array. |
| `WhyUs`          | `WhyUs.tsx`        | No      | Four value propositions in a 4-column grid (2-col on mobile): Strategy That Attracts, Content That Performs, Local Insight, Lifestyle Expertise. Includes intro paragraph. |
| `DreamClients`   | `DreamClients.tsx` | No      | Cloud of 15 pill-shaped badges listing target client niches (wellness studios, cafes, boutiques, restaurants, etc.). |
| `Process`        | `Process.tsx`      | No      | 4-step numbered timeline: Discovery Call, Custom Strategy, Create & Launch, Grow & Optimize. |
| `Testimonials`   | `Testimonials.tsx` | No      | Two testimonial cards with styled quotation marks, avatar initials, and client name/role. Content is hardcoded. |
| `ContactSection` | `ContactSection.tsx` | No    | Wrapper section with heading/subheading that renders ContactForm. |
| `ContactForm`    | `ContactForm.tsx`  | Yes     | Multi-field form: name, business name, email, platform checkboxes (Instagram, TikTok, Facebook, LinkedIn) with conditional handle inputs, message textarea. Submits to `/api/contact`. Also logs lead to `app.thedigitalwash.com/api/log-lead` (silent failure). Shows success/error states. Social media links below the form. |
| `Footer`         | `Footer.tsx`       | No      | Four-column footer: brand blurb with bear mascot image (wiggles on hover), services links, company links, social links. Copyright line. |
| `ScrollReveal`   | `ScrollReveal.tsx` | Yes     | Renders nothing. IntersectionObserver watches all `.reveal` elements and adds `.visible` class when they enter the viewport (threshold 0.15). Staggered 100ms delay per element for cascade effect. |

---

## Design System

### Colors

Defined as CSS custom properties in `:root` (`globals.css`):

| Variable         | Value     | Usage                              |
| ---------------- | --------- | ---------------------------------- |
| `--honey`        | `#F5C842` | Accent, ribbon text                |
| `--honey-light`  | `#FFF3CC` | Light accent                       |
| `--honey-glow`   | `#FFE07A` | Glow effects                       |
| `--pink`         | `#E8A0BF` | Link underlines, accents           |
| `--pink-light`   | `#FFD6E8` | Light pink                         |
| `--pink-deep`    | `#D4789C` | Deep pink                          |
| `--brown`        | `#6B4226` | Primary brand color, buttons, icons |
| `--brown-light`  | `#8B6244` | Nav link text                      |
| `--brown-dark`   | `#4a3a33` | Hero background, ribbon background |
| `--cream`        | `#f8f4ee` | Page background, nav background    |
| `--cream-dark`   | `#F5EDE0` | Card backgrounds                   |
| `--white`        | `#FFFFFF` | White                              |
| `--text`         | `#3D2B1F` | Body text                          |
| `--text-light`   | `#7A6355` | Secondary text                     |

### Fonts

Loaded via `next/font/google` in `layout.tsx`, exposed as CSS variables:

| Variable         | Font             | Usage                  |
| ---------------- | ---------------- | ---------------------- |
| `--font-display` | Playfair Display | Section titles (serif) |
| `--font-sans`    | DM Sans          | Body text, UI (sans)   |

### Spacing Conventions

- Sections: `padding: 6rem 3rem` (desktop), `4rem 1.5rem` (mobile at 768px)
- Section titles use `.section-label` (uppercase small text) + `.section-title` (large serif heading) + `.section-subtitle` (muted body text) pattern
- Grid gaps: generally `2rem`–`2.5rem`
- Cards: `2rem` padding, `16px` border-radius

### Buttons

- `.btn-primary`: Brown background, cream text, 50px border-radius, hover darkens + slight lift
- `.btn-secondary`: Transparent with brown border, hover fills brown

### Animations

- `fadeUp`: 0→1 opacity + translateY(20px→0), used on hero logo
- `marquee`: continuous translateX(0→-50%), 30s linear infinite loop for ribbon
- `wiggle`: subtle rotation oscillation on footer bear image (hover-triggered)
- `slideDown`: menu dropdown animation for mobile nav
- `.reveal` → `.visible`: opacity 0→1 + translateY(30px→0), 0.7s ease transition

### Responsive Breakpoint

Single breakpoint at `max-width: 768px`. Changes include:
- Nav switches from grid to flex, hides desktop links, shows hamburger
- Service/sub-service grids collapse to 1 column
- Why Us grid goes from 4 to 2 columns
- Platform checkboxes go single column
- Hero logo scales down via `clamp(280px, 70vw, 400px)`

---

## API Routes

### `POST /api/contact`

**File:** `src/app/api/contact/route.ts`

Receives contact form submissions and sends an email via the Resend API.

**Request body:**
```json
{
  "name": "string (required)",
  "businessName": "string (optional)",
  "email": "string (required)",
  "platforms": [{ "platform": "string", "handle": "string" }],
  "message": "string (required)"
}
```

**Behavior:**
- Validates name, email, and message are present (returns 400 if missing)
- Sends email from `Honey Pot Media <onboarding@resend.dev>` to `hello@honeypotmedia.com`
- Sets `replyTo` to the submitter's email
- Returns `{ success: true }` on success, `{ error: "..." }` on failure

**Note:** The client-side form (`ContactForm.tsx`) also makes a secondary POST to `https://app.thedigitalwash.com/api/log-lead` to log leads in an external CRM. This call is fire-and-forget with silent failure handling.

---

## Environment Variables

| Variable               | Required | Description                                       |
| ---------------------- | -------- | ------------------------------------------------- |
| `RESEND_API_KEY`       | Yes      | API key for Resend email service                  |
| `NEXT_PUBLIC_SITE_KEY` | Yes      | Site identifier for TheDigitalWash lead tracking   |

No `.env.example` file exists in the repo.

---

## Current State

### What's Built
- Complete single-page marketing site with all sections functional
- Full responsive layout (desktop + mobile)
- Working contact form with email delivery via Resend
- Lead tracking integration with TheDigitalWash CRM
- Custom JS scroll-snap behavior between hero and content
- Scroll-reveal animations on all sections
- Navbar with hero-aware state transitions
- Marquee ribbon ticker
- Mobile navigation with animated hamburger

### Placeholders / Incomplete
- **Testimonials are hardcoded** — "Sarah K." and "Marcus R." appear to be placeholder names, not real client testimonials
- **Social links are mostly `#` hrefs** — only the Instagram link (`https://www.instagram.com/honeypot.media/`) is real; TikTok, Facebook, and LinkedIn are placeholder anchors in both the footer and contact form
- **Resend sender address** uses `onboarding@resend.dev` (Resend's sandbox domain) — needs to be updated to a verified custom domain for production
- **No favicon or Open Graph meta** configured beyond the basic title/description in `layout.tsx`
- **`public/media/` directory** exists (untracked) — likely intended for media assets but contents unknown
- **`public/assets/honey-pot-media-logo.svg`** exists (untracked) — appears to be a new/alternate logo file

### Known Issues
- **`html { scroll-behavior: auto }`** is set because `smooth` was conflicting with the JS-based hero snap. This means anchor link clicks (nav links like `#services`, `#contact`) will jump instantly rather than smooth-scroll. A per-click `scrollTo({ behavior: "smooth" })` approach would be needed to restore smooth anchor navigation without breaking the hero snap.
