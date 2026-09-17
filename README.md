# haddadkuwait.com — restructured offline snapshot

This repository contains a browser "Save As…" capture of <https://haddadkuwait.com>
(حداد مظلات الكويت — Arabic, RTL), restructured into a clean static site that can be
served from a single web root.

The original capture was 633 files / ~51 MB spread over 17 loose `.html` files and 17
sibling `*_files/` folders. It is now 98 files / ~15 MB under `site/`, with one copy of
each asset and route-shaped URLs that match the live site. (The blog listing, the four
blog articles and all rendered links to them were removed on request; see “Blog removal”.)

## Running locally

The pages use root-relative asset paths (`/assets/...`), so the server root must be `site/`:

```bash
python3 -m http.server 8000 --directory site
# then open http://localhost:8000/
```

Any static server works (`npx serve site`, `caddy file-server -root site`, nginx, …) as long
as it serves `index.html` for directory URLs. There is no build step, no package manager and
no backend in this repository.

## Directory structure

```
site/
├── index.html                    # homepage  ->  /
├── about/index.html              # /about
├── contact/index.html            # /contact
├── faq/index.html                # /faq
├── projects/index.html           # /projects
├── site-map/index.html           # /site-map
├── services/
│   ├── index.html                # /services  (listing)
│   ├── pvc/index.html            # service detail pages
│   ├── أبواب-حديد-خارجية-في-الكويت/index.html
│   ├── أفضل-تصميم-وتنفيذ-للمجالس-الخارجية-في/index.html
│   ├── تركيب-مظلات-الكويت/index.html
│   └── سياج-الحدائق-الأخضر-في-الكويت/index.html
└── assets/
    ├── css/    29 stylesheets (build chunks)
    ├── js/     11 scripts (build chunks)
    ├── fonts/  18 woff2 files
    ├── icons/  favicon.ico, kw.svg
    └── images/ 26 files (13 webp, 13 jpg)
```

Directory names are the URL-decoded Arabic slugs used by the live site, so the local URL of
every page is identical to its production URL.

## What the snapshot actually is

The capture is the **rendered HTML output of a Next.js (App Router) application**, not its
source. Each page contains server-rendered markup plus the React/RSC hydration payload
(`self.__next_f.push([...])`) and hashed Turbopack chunks. There is no JSX, no component
source and no CSS source (the stylesheets are minified Tailwind output) in the snapshot.

Consequences, and why the restructuring stopped where it did:

- **No component extraction.** The header, nav, footer, service/blog cards, WhatsApp and
  call buttons are repeated across pages, but they are React-rendered markup paired with a
  hydration payload that must match byte-for-byte. Replacing them with includes/partials, or
  splitting them into a template system, would break hydration and change behaviour. The
  repeated markup was therefore left in the pages; the real de-duplication win here was in
  the assets (17 copies → 1).
- **No CSS/JS rewriting.** The stylesheets and scripts are minified build artifacts. Merging,
  splitting or dead-code-eliminating them cannot be done safely without the original sources,
  and would be undone by the next real build. They were de-duplicated and re-pathed only.
- **No framework conversion.** Converting this to a fresh React/Next project would mean
  re-authoring the site from its rendered output — a rewrite, not a restructure.

## What changed

1. **Assets consolidated.** Every `*_files/` folder held its own copy of the same chunks and
   images. All 633 snapshot files reduce to 88 unique contents — the 17 pages plus 71 assets
   (verified by MD5; no two files shared a basename with differing content) — now stored once
   under `site/assets/`.
2. **Routes restored.** The 17 long, space- and `_`-laden `.html` filenames were mapped to
   their canonical paths (from each page's `<link rel="canonical">`) and written as
   `route/index.html`.
3. **Asset references normalised.** Browser-generated relative paths
   (`./حداد مظلات الكويت …_files/eb5c283bcf5fe3ff.js`) became root-relative
   `/assets/js/eb5c283bcf5fe3ff.js`. This covers `<img>`, `<link>`, `<script>`, `srcset`,
   preloads, favicons, SVG references and `url(...)` inside CSS.
4. **Internal links localised.** Absolute `https://haddadkuwait.com/...` links that point to a
   page present in the snapshot now point at the local route. SEO metadata
   (`rel=canonical`, `rel=alternate`, `og:*`, `twitter:*`, JSON-LD) deliberately keeps the
   absolute production URLs.
5. **Missing resources localised.** The browser did not save the webfonts or the favicon. The
   18 `woff2` files referenced by the saved CSS and `favicon.ico` were downloaded from the
   live site so pages render with the correct Arabic typography offline.
6. **File names cleaned.** Spaces and duplicate markers were removed
   (`Haddad Kuwait.8323c5f5.webp` → `haddad-kuwait-logo.webp`, `photo-…` extensionless
   downloads got their `.jpg` extension). Hashed chunk names were kept as-is — they are the
   build's content hashes and are referenced from inside the chunks themselves.

Nothing was deleted without checking: every removed file was byte-identical to a file kept
under `site/assets/`, and a link-resolution pass over the rebuilt tree resolves 1290 local
references with 0 missing.

## Inventory

**Pages (12):** home, services listing, 5 service detail pages, projects, about, contact,
FAQ, site map. (The blog listing and its 4 articles were removed per request.)

**Repeated blocks (present in the markup, not extracted — see above):** top contact/social
bar, main navigation + mobile menu, hero carousel, section headings, service cards, project
gallery cards, testimonial cards, stats counters, blog cards, footer, floating call/WhatsApp
buttons.

**Assets:** 30 images (17 webp, 13 jpg), 18 woff2 fonts, 2 icons (favicon + `kw.svg` flag),
29 CSS chunks, 11 JS chunks.

**JavaScript:** Next.js App Router runtime + hydration, Redux Toolkit Query data layer
pointed at `https://server.haddadkuwait.com/api`, carousel/slider, mobile menu, FAQ
accordion, contact form, scroll/animation effects, floating contact buttons.

## Blog removal

The `/blog` listing page and the four article pages were deleted together with every
rendered reference: the `المدونة` entries in the desktop and mobile navigation on all
pages, the homepage “المنشورات الأكثر شعبية” section (cards + pagination), the `/blog`
entry in the site-map list, and the four `blogs-*.webp` images that were then
unreferenced. A few `/blog` strings remain inside the `__next_f` hydration payloads as
dead data — they are not rendered or fetched, and editing the positional payload arrays
would corrupt them. If the app ever re-hydrates against the live backend, a stale nav
entry pointing at the removed `/blog` route could reappear.

## External dependencies

| Dependency | Decision |
| --- | --- |
| Webfonts (`_next/static/media/*.woff2`) | **Localised** into `assets/fonts/` |
| `favicon.ico` | **Localised** into `assets/icons/` |
| `server.haddadkuwait.com` (CMS/API + `/uploads/*` media) | **Remains external** — see limitations |
| `res.cloudinary.com`, `images.unsplash.com` | **Remains external** — used in `og:image`/JSON-LD metadata and a few inline background images |
| `wa.me`, Instagram, Facebook, YouTube, Pinterest, X, LinkedIn | **Remain external** — outbound links |
| `haddadkuwait.com` canonical/alternate/OG URLs | **Remain external** — deliberately, they are SEO metadata |

No analytics, tag manager or third-party script tags were present in the snapshot.

## Known limitations (offline)

- **The backend is not in the snapshot.** The app fetches content through Redux Toolkit Query
  from `https://server.haddadkuwait.com/api` (endpoints seen in the bundles include
  `/products`, `/products/global-search`, `/cart/*`, `/wishlist/*`, `/auth/refresh-token`,
  `/auth/logout`). Offline these requests fail; pages still display their pre-rendered
  content, but anything that re-fetches after hydration (search, cart/wishlist, live listings)
  cannot work. No replacement API was invented.
- **Contact form submissions go nowhere** for the same reason.
- **Hero slider background images** are inline styles pointing at
  `https://server.haddadkuwait.com/uploads/banners/…`; the browser never saved them and the
  URLs are also embedded in the hydration payload, so they load only when online.
- **Five service URLs referenced by the site were never saved**, so they are still absolute
  links to production: `/services/commercial-shades`, `/services/luxury-pergolas`,
  `/services/outdoor-enclosures`, `/services/retractable-roofing`,
  `/services/terrace-systems`. No placeholder pages were fabricated.
- **Hashed CSS/JS names are fixed.** They can only change by rebuilding the original
  application, which is not part of this snapshot.
