# FORME Design System

FORME is a premium curated marketplace for modern living — furniture, lighting, objects, home essentials and lifestyle products from independent brands and emerging designers. The product should feel **editorial, curated and tactile**, never like a generic e-commerce catalogue or a SaaS dashboard.

**Audience:** design-conscious people, 25–45, who value aesthetics, quality, function and independent makers.
**Character:** editorial, modern, tactile, refined, confident, minimal, slightly artistic.
**Categories:** Furniture · Lighting · Home Decor · Kitchen & Dining · Workspace · Lifestyle · Tech Accessories · Objects & Gifts.

## Sources
- `uploads/DESIGN.md` — a style reference ("Shop — Floating shopping constellation on white marble") supplied by the user. It is the primary visual reference: pillow-soft 20–28px radii, pill controls, compact negative-tracked sans, warm neutrals, a single vivid violet (#5433eb), soft dual-layer shadows. FORME preserves this DNA but is its own brand — warmer canvas, larger editorial type, its own layouts.
- Brief from the user (positioning, categories, page structure, mobile requirements).
- No codebase, Figma, logo, photography or font files were provided.

## Products / surfaces
One product: **the FORME web marketplace** (desktop 1440 + mobile 390). See `ui_kits/marketplace/`.

---

## CONTENT FUNDAMENTALS
- **Voice:** a knowledgeable friend with good taste. Calm, specific, quietly confident. Never hype.
- **Person:** speak to the reader as *you*; FORME speaks as *we* sparingly ("We spent a week with Kiln & Co."). Products and makers are the subject, not FORME.
- **Casing:** sentence case everywhere — headlines, buttons, nav ("Explore products", "Shop collections", "Add to cart"). Uppercase is reserved for mono eyebrow labels ("NEW THIS WEEK · 24 PIECES").
- **Length:** headlines short and declarative, often with a full stop: *"Find things worth having."*, *"Makers worth knowing"*, *"Clay, patience and the Porto light."* Supporting copy ≤ 2 sentences.
- **Specificity over adjectives:** say where and how it's made ("Cast by hand in Milan", "about forty a day, on a good day"), not "premium luxury quality".
- **Numbers:** tabular, honest — "1,284 pieces", "$18 away from free shipping", "Ships in 2–4 days".
- **No emoji, no exclamation marks, no ALL-CAPS shouting, no urgency tricks** ("Hurry!", countdowns). Scarcity is stated plainly: "Only 2 left".
- **Empty / error states** stay warm and useful: *"Nothing for 'xyz' — yet."* + suggestions.
- **Microcopy examples:** "Quick add", "Save to wishlist", "View cart", "Free returns within 30 days", "Letters from FORME — twice a month, never more."

## VISUAL FOUNDATIONS
- **Color:** a warm off-white canvas (`--bg` #f5f3ef), white surfaces, ink text (#161413, never pure black), and warm "stone" greys. **One** saturated accent: violet #5433eb (`--accent`). It appears on the search submit, the single key commerce CTA per view (Add to cart / Checkout), the cart count, and the focus ring — nowhere else. Product photography supplies all other color. Semantic success/warning/error exist only for status.
- **Type:** one sans family (Geist, standing in for GT Standard) carrying hierarchy through **size and tight negative tracking**, not weight — headings are Medium 500, never bold. Display 96px at −0.055em; body 16px at −0.012em. Geist Mono 11px uppercase for eyebrow labels only. Mobile display drops to 46px.
- **Spacing:** 4px base scale (2 → 128). Compact inside components (8–12px gaps), generous between sections (112px desktop, 72px mobile). 1360px content max, 40px gutters (16px mobile).
- **Backgrounds:** flat warm neutrals only. No gradients, textures, patterns or illustrations. Large full-bleed-feeling photography provides atmosphere.
- **Imagery:** warm, natural-light product and lifestyle photography — tans, terracotta, sage, ivory, stone. 4:5 product crops, 1:1 thumbs, wide 21:9 / 16:9 editorial bands. Until real photos exist, `Media` renders tonal placeholders from `--tone-*` with a mono caption naming the intended shot.
- **Corner radii:** pillow-soft. 28px cards and hero images, 20px images/menus, 12px thumbnails, 36px modals/newsletter panels, 9999px for every control (buttons, inputs, search, chips, toasts). 0px is never used for UI.
- **Cards:** product cards have **no chrome** — the rounded image is the card; text sits beneath. Only brand cards and floating hero cards get a white surface + soft dual-layer shadow (no border). Never cards inside cards.
- **Borders:** 1px `--border` (#e6e2db) on controls (inputs, secondary buttons, pills) and as section hairlines. Hover darkens a border to ink rather than changing fill.
- **Shadows:** restrained and layered — `--shadow-1` pills, `--shadow-2` elevated cards, `--shadow-3` floating controls (carousel arrows, over imagery), `--shadow-4` modals/drawers, `--shadow-accent` violet-tinted glow only under the violet button. No inner shadows.
- **Hover:** borders → ink; ghost → sunken fill; primary ink → stone-700; accent → violet-600; product/collection images zoom 1.035 over 700ms; product cards reveal a translucent white "Quick add" pill; brand cards lift 2px.
- **Press:** scale 0.98 (buttons), 0.94 (icon buttons). No color flash.
- **Motion:** quick and calm — 140/220/420ms on `cubic-bezier(.2,.7,.2,1)`. Fades + short slides for menus, drawers, toasts. A small "pop" when a heart is saved. No bounces, no parallax.
- **Transparency & blur:** translucent white only for chips/pills sitting on photos (rgba(255,255,255,.9)). Scrims are warm ink at 42%. **No backdrop blur / glassmorphism.**
- **Layout rules:** sticky header (68px + 44px nav row) on the canvas color; mobile header 56px. Asymmetric 5/7 and 7/5 splits for hero, collections, stories and category headers. 4-up product grids desktop, 2-up mobile; horizontal rails with surface arrows. Product page: 7/5 gallery/info with sticky info column; mobile gets an edge-to-edge swipe gallery and a fixed bottom buy bar.
- **Responsive mechanism:** wrap pages in `.fm-app` — a CSS container. Below 760px of *container* width, tokens rescale and components switch layouts (`@container fm`), so a 390px frame on a desktop screen renders true mobile.

## ICONOGRAPHY
- **System:** [Lucide](https://lucide.dev) outline icons, pinned `lucide@0.468.0` from unpkg, rendered by the `Icon` component at **1.5px stroke**, `currentColor`, round caps. Sizes 16 / 20 (default) / 24.
- **Substitution flag:** no icon set was supplied; the reference describes "minimal mono ink outlined strokes", which Lucide at 1.5 matches. Swap if FORME adopts a proprietary set.
- **Filled** only for: active wishlist heart, rating stars.
- **Common glyphs:** search, shopping-bag, heart, user-round, menu, arrow-right, arrow-up-right, chevron-down, sliders-horizontal, plus/minus, x, truck, rotate-ccw, shield-check, history, map-pin.
- **No emoji, no unicode-symbol icons, no icon fonts, no hand-drawn SVGs.** Category navigation uses photography (tonal thumbs), not icons.
- **Logo:** none was provided. The `Wordmark` component sets "FORME" in Geist Semibold at −0.06em as plain type. Replace with real artwork when available.

---

## Index
- `styles.css` — entry point (imports only)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css` (+ border system), `elevation.css`, `motion.css`, `base.css` (resets, type-role classes, `.fm-app` container, grid/scroll helpers)
- `components/components.css` — all component styles (`fm-` prefix)
- `components/` — React primitives, each with `.jsx`, `.d.ts`, `.prompt.md`, plus one card per folder
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/marketplace/` — click-through marketplace (`index.html` desktop, `mobile.html` 390px)
- `thumbnail.html`, `SKILL.md`

## Components
- **core/** — Icon, Button, IconButton, Tag, Media, Wordmark, SectionHeader
- **forms/** — Input, SearchBar, Dropdown, Checkbox, QuantityControl, VariantPicker
- **navigation/** — Header, CategoryPill, Breadcrumbs, Pagination, Footer
- **commerce/** — ProductCard, Price, Rating, WishlistButton, ProductGallery, CollectionCard, BrandCard, CartItem, OrderSummary
- **filters/** — FilterGroup, PriceRange, SortControl
- **feedback/** — Toast (+ ToastRegion), Modal, Drawer

### Intentional additions
- **Icon** — wrapper for the Lucide set at FORME's stroke weight.
- **Media** — image frame with tonal placeholder fallback (no photography supplied).
- **Wordmark** — typeset brand name in lieu of a logo.
- **SectionHeader, OrderSummary, PriceRange, Checkbox, VariantPicker** — needed to compose the requested homepage, cart, filter and product-page structures.

## UI kit — marketplace
Home (hero, categories, featured, collection, trending rail, brands, journal story, newsletter) · Category (filters sidebar / mobile sheet, sort, grid, pagination) · Product (gallery, variants, quantity, add to cart, shipping, specs, maker band, related, recommended, mobile buy bar, size-guide modal) · Search (recent, suggested categories, results, filters, sort, empty state) · Cart drawer + cart page. Wishlist, follow, toasts are live.
