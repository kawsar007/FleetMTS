# FleetMTS — Vehicle Fleet Management Landing Page

The complete FleetMTS marketing site: Navbar, Hero, Product Showcase (VTS +
VMS), Use Cases, Features, Why Choose Us, Reviews, Contact, and Footer —
plus the global loader, WhatsApp button, back-to-top button, and
production-readiness essentials (SEO metadata, sitemap/robots, dynamic
OG image/favicons, accessibility pass). Built with Next.js (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

## 1. Installation

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
```

## 2. Development

```bash
npm run dev
```

Opens the app at `http://localhost:3000` with hot reload.

## 3. Production build

```bash
npm run build
npm run start
```

`npm run build` type-checks and statically generates the site;
`npm run start` serves the production build.

> **Note on fonts:** the project uses `next/font/google` (Space Grotesk,
> Inter, JetBrains Mono), which downloads and self-hosts the fonts at build
> time. This requires outbound access to `fonts.googleapis.com` /
> `fonts.gstatic.com` — make sure that's reachable from wherever you run
> `npm run build` (it will fail behind a fully offline/locked-down network).

## 4. Where to change things

| What | File | Notes |
|---|---|---|
| **VTS product URL** | `src/config/products.ts` | `products[0].url` (id: `"vts"`) |
| **VMS product URL** | `src/config/products.ts` | `products[1].url` (id: `"vms"`) |
| **VTS / VMS copy, features, stats** | `src/config/products.ts` | Edit `name`, `description`, `features`, `stat`, `ctaLabel` per product |
| **Use Cases content** | `src/config/use-cases.ts` | Title, description, icon (lucide-react), and metric per industry card |
| **Features content** | `src/config/features.ts` | Title, description, and icon per feature card |
| **Why Choose Us content** | `src/config/why-us.ts` | `reasons` array and the `trustStats` panel figures |
| **Testimonials** | `src/config/testimonials.ts` | Quote, name, role, company, and star rating per review — all fictional placeholder content, replace with real customer quotes |
| **Footer nav/social/legal links** | `src/components/layout/Footer.tsx` | `companyLinks`, `socialLinks`, `legalLinks` arrays at the top of the file |
| **Contact form submission logic** | `src/components/sections/ContactForm.tsx` | `handleSubmit` currently simulates a network call — replace with a real API route or email service integration |
| **WhatsApp number** | `src/config/site.ts` | `contact.whatsapp` — digits only, international format (e.g. `8801XXXXXXXXX`), no `+` or spaces |
| **WhatsApp default message** | `src/config/site.ts` | `contact.whatsappMessage` |
| **Company name / tagline / description** | `src/config/site.ts` | `name`, `tagline`, `description` |
| **Site URL, page `<title>`/meta description** | `src/config/site.ts` + `src/app/layout.tsx` | `url` in `site.ts`; `metadata` object in `layout.tsx` reads from it. The OG/social share image is generated automatically from this copy by `src/app/opengraph-image.tsx` — no static image file to keep in sync |
| **Nav links / primary CTA** | `src/config/site.ts` | `nav` array and `cta.primary` |
| **Email / phone** | `src/config/site.ts` | `contact.email`, `contact.phone` — rendered in the Contact section and Footer |

**Nothing else in the codebase hardcodes these values** — components read
from `siteConfig` / `products` so you only ever need to edit these two files
for day-to-day content changes.

## 5. Where to replace product images

The product cards use lightweight inline SVG/CSS visuals (a live route
animation for VTS, a records list for VMS) rather than static screenshots, so
there's nothing to swap out of the box. If you'd like to replace them with
real product screenshots:

1. Add your image files to `public/` (e.g. `public/products/vts.png`).
2. In `src/components/sections/ProductCard.tsx`, replace the `<VtsVisual />`
   / `<VmsVisual />` calls with an `<OptimizedImage>` 
   (`src/components/ui/OptimizedImage.tsx`), e.g.:
   ```tsx
   <OptimizedImage src="/products/vts.png" alt="VTS live tracking dashboard" fill className="object-cover rounded-xl" />
   ```
3. Do the same for the hero visual in
   `src/components/sections/HeroVisual.tsx` if you want to swap in a real
   dashboard screenshot there too.

## 6. Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, global widgets
│   ├── page.tsx           # Composes all sections
│   ├── not-found.tsx      # Custom 404 page
│   ├── robots.ts          # robots.txt (file convention)
│   ├── sitemap.ts         # sitemap.xml (file convention)
│   ├── manifest.ts        # Web app manifest (file convention)
│   ├── icon.tsx            # Favicon, generated with next/og
│   ├── apple-icon.tsx      # Apple touch icon, generated with next/og
│   ├── opengraph-image.tsx # Social share image, generated with next/og
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── PageContainer.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── HeroVisual.tsx      # Signature live-tracking dashboard mockup
│   │   ├── ProductShowcase.tsx
│   │   ├── ProductCard.tsx
│   │   ├── UseCases.tsx        # Dark section — industries FleetMTS serves
│   │   ├── Features.tsx        # Light section — platform capabilities
│   │   ├── WhyUs.tsx           # Dark-accent section — differentiators + trust stats
│   │   ├── Reviews.tsx         # Light section — testimonials grid
│   │   ├── Contact.tsx         # Light/dark split — info panel + form
│   │   └── ContactForm.tsx     # Client form UI (not yet wired to a backend)
│   ├── ui/
│   │   ├── SectionHeading.tsx
│   │   ├── Button.tsx           # Shared base for Primary/SecondaryButton
│   │   ├── PrimaryButton.tsx
│   │   ├── SecondaryButton.tsx
│   │   ├── OptimizedImage.tsx
│   │   ├── StarRating.tsx
│   │   └── AnimatedSection.tsx  # Scroll-triggered fade/slide wrapper
│   └── shared/
│       ├── GlobalLoader.tsx
│       ├── WhatsAppButton.tsx
│       └── BackToTop.tsx
├── config/
│   ├── site.ts          # Company info, nav, contact, WhatsApp
│   ├── products.ts      # VTS / VMS content + URLs
│   ├── use-cases.ts     # Use Cases section content
│   ├── features.ts      # Features section content
│   ├── why-us.ts        # Why Choose Us reasons + trust stats
│   └── testimonials.ts  # Reviews section content
└── lib/
    ├── fonts.ts        # next/font Google font setup
    └── utils.ts        # cn() class-name helper
```

## 7. Tech notes

- **Server vs. Client components**: only components that need interactivity
  or animation (`Navbar`, `GlobalLoader`, `WhatsAppButton`, `BackToTop`,
  `AnimatedSection`, `HeroVisual`, `ProductCard`, `ContactForm`,
  `MotionProvider`) are marked `"use client"`. Everything else renders on
  the server.
- **Accessibility**: semantic landmarks, visible focus rings, `aria-label`s
  on icon-only buttons, a keyboard-operable mobile menu (closes on Escape),
  a skip-to-content link, and full `prefers-reduced-motion` support — both
  at the CSS level and via Framer Motion's `reducedMotion="user"`.
- **No horizontal scroll**: layout has been checked down to a 320px
  viewport, including the hero's live-tracking dashboard visual.

## 8. Production readiness (Phase 4)

- **SEO**: `src/app/robots.ts` and `sitemap.ts` (Next.js file conventions),
  a canonical URL, Organization JSON-LD (`OrganizationJsonLd.tsx`), and a
  dynamic Open Graph image (`opengraph-image.tsx`, generated with `next/og`
  so there's no static image to keep in sync with copy changes).
- **Icons**: `icon.tsx` and `apple-icon.tsx` generate the favicon and Apple
  touch icon on the fly from brand colors — replace with real artwork by
  swapping these for static files in `src/app/` if you have a logo mark.
- **404 page**: `src/app/not-found.tsx` — on-brand, not the default Next.js
  page.
- **Linting**: `npm run lint` runs ESLint directly (Next.js 16 removed the
  built-in `next lint` command) using `eslint-config-next`'s flat config.

## 9. Known limitations

- The contact form (`ContactForm.tsx`) simulates submission — see the
  `TODO` in `handleSubmit` for wiring it to a real endpoint.
- `siteConfig.url`, product URLs, phone/WhatsApp numbers, and social links
  are all placeholder values — update them per the table in section 4
  before going live.
- Legal pages (`Privacy Policy` / `Terms of Service` in the footer) are
  placeholder links (`href="#"`) — build those pages and update
  `legalLinks` in `Footer.tsx` when ready.
