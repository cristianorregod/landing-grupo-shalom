# Grupo Shalom Landing — Implementation Plan

Tracking document for the MVP landing page. Source of scope: `docs/MVP_Landing_Shalom_SCOPES_AND_PENDINGS.pdf`. Source of design: `docs/PÁGINA WEB SHALOM 2.0.pdf` (desktop only; mobile and tablet are adapted from it).

| Item                        | Value                             |
| --------------------------- | --------------------------------- |
| Stack                       | Astro + Tailwind CSS, static site |
| Budget                      | 15 h                              |
| Start                       | 2026-09-24                        |
| Links, access and video due | 2026-09-25 – 2026-09-26           |
| Final publication           | 2026-09-28 – 2026-09-29           |
| Performance target          | Lighthouse ≥ 90 on mobile         |

**Legend:** `[ ]` to do · `[x]` done · `⏳` built with a placeholder while waiting on a client pending (see [Pending tracker](#pending-tracker))

**Working rule:** every item that depends on a client pending is fully built and styled now, using placeholder data. All links, CTA targets, IDs and replaceable copy live in `src/config/site.ts` and `src/content/*.ts`, so a pending that arrives late is resolved by editing data, not markup.

---

## Design reference

### Tokens

| Token        | Value                    | Usage                                            |
| ------------ | ------------------------ | ------------------------------------------------ |
| `green`      | `#65A63E`                | Primary CTA                                      |
| `blue`       | `#395BB2`                | Active tab, icons, card borders, WhatsApp button |
| `ink`        | `#434149`                | Headings                                         |
| `navy`       | `#303262`                | Footer background                                |
| `sky`        | `#D4E1F5`                | "Cómo responde Shalom" card                      |
| `eyebrow`    | `#6F87C7`                | Small uppercase labels                           |
| `beige`      | `#EFE9E8`                | Promise, Solutions and Catalog backgrounds       |
| CTA gradient | `#4983CB → #25253B`      | Final CTA block                                  |
| Font         | Montserrat (self-hosted) | Whole site                                       |
| Container    | ~1020 px                 | Desktop content width                            |

> Blue `#326BD8` comes from the delivered sRGB exports (icons, logos). The PDF renders disagree on color (ICC profile handling), so the remaining values were sampled from the poppler render and must be validated with the designer (P-C9).

### Asset map

| Asset                            | Target                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------- |
| `IMAGENES/Recurso 3–5@2x.webp`   | "Mientras unos improvisan" carousel (3 slides)                                  |
| `IMAGENES/Recurso 6–9@2x.webp`   | Team carousel (4 slides; design shows 3 dots)                                   |
| `IMAGENES/Recurso 10–13@2x.webp` | Press cards (4)                                                                 |
| `IMAGENES/Recurso 14@2x.webp`    | About ("Quiénes somos")                                                         |
| `LOGOS/Recurso 10@2x.webp`       | Header logo (color)                                                             |
| `LOGOS/Recurso 11@2x.webp`       | Footer logo (white text)                                                        |
| `LOGOS/Recurso 12@2x.webp`       | Isotype: favicon, final CTA block                                               |
| `LOGOS/Recurso 27@2x.webp`       | WhatsApp floating button                                                        |
| `ICONOS/Recurso 13–26.svg`       | 14 catalog category icons                                                       |
| `.ai` (embedded)                 | Client logos → `src/assets/logos/clients/` (extracted)                          |
| `.ai` (embedded)                 | Hero background → `src/assets/images/hero-earth.webp` (extracted, 1672 px wide) |

---

## Phase 0 — Project setup (1.5 h)

- [x] Initialize git repository and `.gitignore`
- [x] Scaffold Astro project (TypeScript strict)
- [x] Install and configure Tailwind CSS v4 with design tokens in `@theme`
- [x] Install `@fontsource-variable/montserrat`
- [x] Install `@astrojs/sitemap`
- [x] Create folder structure (`config/`, `content/`, `components/ui/`, `components/sections/`, `layouts/`, `assets/`)
- [x] Create `src/config/site.ts` with every link/CTA/ID as a named placeholder
- [x] Extract client logos and hero background from the `.ai` (`pdfimages`)
- [x] Validate color tokens against the `.ai` (partial, see P-C9)
- [x] Map each catalog icon (`Recurso 13–26`) to its category
- [x] Copy and rename assets into `src/assets/` with semantic names
- [x] Prettier + `astro check` scripts

## Phase 1 — Base layout and SEO (1 h)

- [x] `layouts/Base.astro` with `lang="es"`, meta title and description
- [x] Open Graph and Twitter meta tags
- [x] OG image (1200×630) built from logo + hero background
- [x] Favicon set from isotype (`favicon.ico`, 32 px PNG, `apple-touch-icon`, manifest icons; no SVG source available)
- [x] `robots.txt` and sitemap
- [x] GA4 snippet wired to `site.ts`, rendered only when an ID is set (verified with a test ID) ⏳ P-C8
- [x] Smooth scroll for anchors with `scroll-padding-top` for the fixed header
- [x] `prefers-reduced-motion` support for smooth scroll
- [x] `prefers-reduced-motion` support for carousel autoplay (Phase 2)
- [x] `prefers-reduced-motion` support for video autoplay (Phase 4)

## Phase 2 — Shared UI components (2 h)

- [x] `Container`
- [x] `Button` (variants: primary green, outline white, solid white, blue pill; renders `<a>` or `<button>`)
- [x] `Eyebrow` (small uppercase letter-spaced label)
- [x] `SectionHeading`
- [x] `Carousel` (scroll-snap, arrows, dots, keyboard, optional autoplay, touch)
- [x] `Tabs` (ARIA `tablist`, keyboard navigation, horizontally scrollable on mobile)
- [x] `ResponsiveImage` wrapper over `astro:assets` (AVIF/WebP, `srcset`, lazy by default)
- [x] Behavior verified in Chromium (Playwright): arrows, dots, wrap-around, autoplay, reduced motion, tab keyboard navigation, `#horeca` deep link, no horizontal overflow at 390 px

## Phase 3 — Header and floating WhatsApp (1.5 h)

- [x] Fixed header with logo, nav links and "Solicitar cotización" CTA ⏳ P-L1
- [x] Active link highlight on scroll (IntersectionObserver)
- [x] Mobile hamburger menu (native `<dialog>`: focus trap, `Esc` closes, body scroll lock); full nav from `xl` (1280 px), hamburger below
- [x] Nav "Garantía & Capacidad", "Trayectoria", "Catálogo" → internal anchors
- [x] Nav "HoReCa" ⏳ P-L2 (default: Solutions section with HoReCa tab preselected)
- [x] Nav "Shalom" ⏳ P-L3 (default: About anchor)
- [x] Nav "Contacto" ⏳ P-L4 (default: final CTA anchor)
- [x] Floating WhatsApp button with `wa.me` link and prefilled message ⏳ P-L21 (points to `#contacto` until a number is set)
- [x] Page skeleton with every section anchor as a stub (replaced in Phases 4–7)
- [x] Verified in Chromium: no overflow at 1024/1280/1440, scroll-spy, anchor offset, menu open/Esc/link close, focus return

## Phase 4 — Hero and client logos (2 h)

- [x] Hero with eyebrow, H1, two CTAs and four stats ⏳ P-L1, P-C2
- [x] YouTube background facade: poster image as LCP, iframe injected on visibility ⏳ P-L5
- [x] Embed params: `youtube-nocookie`, muted, loop, `playsinline`, no related videos
- [x] Fallback: poster + play button when autoplay is blocked (6 s timeout), with reduced motion or with Save-Data
- [x] Dark overlay for text legibility over video
- [x] Hero layout variant switch (text over video vs. video only) via config ⏳ P-L5
- [x] "Conozca nuestra capacidad" CTA ⏳ P-L5 (default: Promise anchor)
- [x] Client logos strip ⏳ P-L6, P-C4 (plain images, no links, until confirmed)
- [x] Custom pause and sound controls (WCAG 2.2.2); video pauses while the hero is off screen
- [x] Hero and client data in `src/content/hero.ts` and `src/content/clients.ts`
- [x] Verified in Chromium: autoplay, LCP = poster (AVIF), pause/sound toggles, iframe covers hero, reduced motion, no overflow at 390/768/1024/1440
- [x] Fix from Phase 3: header CTA no longer hides the hamburger below 640 px

## Phase 5 — Storytelling sections (2 h)

- [x] "Mientras unos improvisan" section with 3-slide carousel ⏳ P-L7 (default: images only change, text is static)
- [x] Trajectory header and 4-step timeline (vertical below 1024 px, horizontal from 1024 px)
- [x] Team carousel with 4 photos
- [x] Promise section ("Garantía & Capacidad") with two cards
- [x] Copy and slides in `src/content/story.ts`; `RichText` component renders `**bold**` markers
- [x] Verified in Chromium: no overflow at 390/768/1024/1440, lazy slides load on navigation, no 4xx responses

## Phase 6 — Solutions and Press (1.5 h)

- [x] Solutions section with 4 tabs; content from `content/solutions.ts`
- [x] Tab "Canal tradicional" with real copy
- [x] Tabs "Minimercados / supermercados", "Distribuidores regionales", "HoReCa / institucional" with draft copy ⏳ P-C1
- [x] "Conocer soluciones →" button per tab ⏳ P-L8
- [x] Press carousel with 4 cards from `content/press.ts` ⏳ P-C3
- [x] "Leer más" links, opening in a new tab (disabled while null) ⏳ P-L9
- [x] Tabs: 2x2 grid below 1024 px, pill row from 1024 px; panels via `TabPanel` (dynamic named slots are not supported inside `map`)
- [x] Carousel fixes: slide sizing in CSS (no layout shift before hydration), correct per-view count with gaps, arrows from 1024 px
- [x] Verified in Chromium: no overflow at 390/768/1024/1440, nav "HoReCa" scrolls to Solutions and opens its tab

## Phase 7 — Catalog, About, Final CTA, Footer (1.5 h)

- [ ] Catalog header, copy and CTA block
- [ ] Grid of 14 categories from `content/catalog.ts` (3 / 2 / 1 columns)
- [ ] Category cards clickable or static via config ⏳ P-L13
- [ ] "Ver catálogo completo" buttons ⏳ P-L10
- [ ] "Descargue el portafolio en PDF" link ⏳ P-L11
- [ ] "Solicite una cotización por categoría" link ⏳ P-L12
- [ ] Mobile: avoid the duplicated catalog CTA (keep one at the end of the grid)
- [ ] About section with photo and copy
- [ ] Final CTA block with gradient, isotype and two buttons ⏳ P-L1, P-L14
- [ ] Form card: placeholder card, switchable to embedded iframe or button ⏳ P-L15
- [ ] Footer: logo, tagline, company links, contact, copyright
- [ ] Footer "Valores" link ⏳ P-L16 (hidden until a target is defined)
- [ ] Footer email `mailto:` ⏳ P-L17
- [ ] Footer "Bogotá, Colombia" (plain text, Google Maps link if confirmed) ⏳ P-L18
- [ ] Footer social icons slot, hidden when empty ⏳ P-L19
- [ ] Footer data policy link (Ley 1581 de 2012) ⏳ P-L20

## Phase 8 — QA (1 h)

- [ ] `astro check` and production build without warnings
- [ ] Responsive review at 360, 390, 768, 1024, 1280, 1440 px
- [ ] Chrome, Firefox, Edge and Safari on desktop
- [ ] iOS Safari and Android Chrome (real devices or BrowserStack)
- [ ] Lighthouse mobile ≥ 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Keyboard navigation (menu, carousels, tabs) and visible focus states
- [ ] Color contrast check on text over video and over the gradient
- [ ] All links verified; list of remaining placeholders shared with the client

## Phase 9 — Deploy and handover (0.5 h)

- [ ] Choose hosting with the client (recommended: Cloudflare Pages or Netlify)
- [ ] Connect repository and configure build
- [ ] Custom domain and DNS ⏳ P-C7
- [ ] HTTPS and `www` redirect
- [ ] GA4 property ID configured and real-time event verified ⏳ P-C8
- [ ] Repository access granted to the client
- [ ] Handover note: how to update `site.ts` and `content/*.ts`

---

## Pending tracker

Mirrors the client pendings in the scope document. Update the status column as items arrive.

### Links and CTA (P-L)

| ID    | Section            | Element                                                  | Config key                            | Placeholder behavior          | Status                                                  |
| ----- | ------------------ | -------------------------------------------------------- | ------------------------------------- | ----------------------------- | ------------------------------------------------------- |
| P-L1  | Whole site         | "Solicitar cotización" (header, hero, final CTA, footer) | `links.quote`                         | `#contacto`                   | Pending                                                 |
| P-L2  | Header             | "HoReCa"                                                 | `nav.horeca`                          | Solutions anchor, HoReCa tab  | Pending                                                 |
| P-L3  | Header             | "Shalom"                                                 | `nav.shalom`                          | `#quienes-somos`              | Pending                                                 |
| P-L4  | Header             | "Contacto"                                               | `nav.contact`                         | `#contacto`                   | Pending                                                 |
| P-L5  | Hero               | Video + "Conozca nuestra capacidad" + layout             | `hero.youtubeId`, `hero.variant`      | Poster image, text over media | Test video set; final video and layout decision pending |
| P-L6  | Clients            | Logo links                                               | `clients[].href`                      | No link                       | Pending                                                 |
| P-L7  | Improvise carousel | Images only vs. image + text per slide                   | `improvise.mode`                      | Images only                   | Pending                                                 |
| P-L8  | Solutions          | "Conocer soluciones +" per tab                           | `solutions[].href`                    | `links.quote`                 | Pending                                                 |
| P-L9  | Press              | "Leer más" per note                                      | `press[].href`                        | `#` (disabled style)          | Pending                                                 |
| P-L10 | Catalog            | "Ver catálogo completo" (x2)                             | `links.catalog`                       | `#` (disabled style)          | Pending                                                 |
| P-L11 | Catalog            | Portfolio PDF                                            | `links.portfolioPdf`                  | `#` (disabled style)          | Pending                                                 |
| P-L12 | Catalog            | "Solicite una cotización por categoría"                  | `links.quoteByCategory`               | Plain text                    | Pending                                                 |
| P-L13 | Catalog            | 14 category cards                                        | `catalog[].href`                      | Not clickable                 | Pending                                                 |
| P-L14 | Final CTA          | "Hablar con un asesor"                                   | `links.advisor`                       | WhatsApp link                 | Pending                                                 |
| P-L15 | Final CTA          | Form card                                                | `contact.formMode`, `contact.formUrl` | Placeholder card              | Pending                                                 |
| P-L16 | Footer             | "Valores"                                                | `footer.values`                       | Hidden                        | Pending                                                 |
| P-L17 | Footer             | Email                                                    | `contact.email`                       | `contacto@gruposhalom.com.co` | Pending                                                 |
| P-L18 | Footer             | "Bogotá, Colombia"                                       | `contact.mapsUrl`                     | Plain text                    | Pending                                                 |
| P-L19 | Footer             | Social networks                                          | `social[]`                            | Hidden                        | Pending                                                 |
| P-L20 | Footer             | Data policy (Ley 1581 de 2012)                           | `links.privacyPolicy`                 | `#` (disabled style)          | Pending                                                 |
| P-L21 | Floating button    | WhatsApp number + message                                | `contact.whatsapp`                    | Button links to `#contacto`   | Pending                                                 |

### Content and access (P-C)

| ID   | Item                                                               | Due                             | Placeholder behavior              | Status  |
| ---- | ------------------------------------------------------------------ | ------------------------------- | --------------------------------- | ------- |
| P-C1 | Copy for 3 Solutions tabs ("Dolor típico", "Cómo responde Shalom") | At start                        | Marked placeholder copy           | Pending |
| P-C2 | Validate hero stats (+150k, +100k, 5, +11)                         | At start                        | Design values                     | Pending |
| P-C3 | Title, image and outlet per press note (if more than 4)            | At start                        | 4 notes from design               | Pending |
| P-C4 | Authorization to show client logos                                 | At start                        | Logos shown, flag to hide         | Pending |
| P-C5 | Additional carousel photos                                         | At start                        | Delivered photos                  | Pending |
| P-C6 | All links and CTA above, including YouTube video                   | 2 business days before delivery | See P-L                           | Pending |
| P-C7 | Domain and DNS access                                              | 2 business days before delivery | Hosting preview URL               | Pending |
| P-C8 | Analytics account (GA4 or other)                                   | 2 business days before delivery | Snippet disabled                  | Pending |
| P-C9 | Exact brand hex values (swatches) from the designer                | Before QA                       | Tokens in `src/styles/global.css` | Pending |

---

## Risks

| Risk                                                   | Impact | Mitigation                                                                                                                              |
| ------------------------------------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| YouTube autoplay vs. Lighthouse ≥ 90 on mobile         | High   | Poster as LCP, iframe injected after load and on visibility; inform the client in writing that immediate autoplay compromises the score |
| Hero "video only" removes visible H1                   | Medium | Recommend keeping text over video; keep a visually hidden H1 if video only is chosen                                                    |
| Client logos without authorization                     | Medium | Config flag to hide the strip                                                                                                           |
| Hosting not defined                                    | Medium | Deploy to a preview URL first; decide before 2026-09-27                                                                                 |
| Late pendings                                          | Low    | Data-driven config; delivery shifts per scope conditions                                                                                |
| GA4 without a cookie consent banner (Ley 1581 de 2012) | Medium | Consent banner is out of scope; flag to the client before enabling GA4                                                                  |

## Log

| Date       | Note                                                                                                                                                                                                                                                                  |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-09-24 | Plan created. Assets analyzed; client logos and hero background to be extracted from the `.ai`.                                                                                                                                                                       |
| 2026-09-24 | Phase 0 done. Astro 7 + Tailwind 4 + sitemap + Montserrat. TypeScript pinned to 6 (`astro check` does not support TS 7). Client logos, hero background and CTA gradient extracted from the `.ai`. Catalog icons mapped.                                               |
| 2026-09-24 | Phase 1 done. Base layout with SEO/OG/Twitter meta, favicons and OG image generated from brand assets, `robots.txt` endpoint, conditional GA4. Site URL lives only in `astro.config.mjs` (`Astro.site`).                                                              |
| 2026-09-24 | Phase 2 done. UI kit: Container, Button (null `href` renders a disabled placeholder), Eyebrow, SectionHeading, ResponsiveImage (AVIF/WebP, WebP fallback because sources have alpha), Carousel and Tabs as custom elements. `sharp` added as a direct dependency.     |
| 2026-09-24 | Phase 3 done. Fixed header with scroll-spy, mobile menu on native `<dialog>`, floating WhatsApp button, navigation data in `src/content/navigation.ts`. Desktop nav starts at 1280 px because 6 links + CTA do not fit at 1024 px.                                    |
| 2026-09-25 | Phase 4 done. Hero with YouTube background (test video `IXWEQHCKR20` in `site.ts`), custom controls, fallbacks, and client logos strip. Fixed a Phase 3 bug: `hidden` passed to `Button` lost against its base `inline-flex`; display utilities must go on a wrapper. |
| 2026-09-25 | Phase 5 done. Improvise (3-slide carousel), Trajectory (timeline + 4-photo team carousel) and Promise sections. Promise component named `OurPromise` to avoid shadowing the global `Promise`.                                                                         |
| 2026-09-25 | Phase 6 done. Solutions (4 tabs, 3 with draft copy pending client validation) and Press carousel (3/2/1 cards per view). Fixed Carousel CLS and dot count, and a Tabs bug where `scrollIntoView` cancelled the nav anchor scroll.                                     |
