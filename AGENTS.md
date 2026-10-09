# Portfolio Build Brief

Build a fast personal portfolio for **Baghaztra Van Ril**.

The portfolio represents a software engineer who builds practical systems:

- web applications;
- backend and API systems;
- AI-powered workflows;
- IoT and connected devices.

Its primary audience is recruiters, collaborators, and potential clients.

## Core Goal

Prioritize real-world loading performance.

The public site must feel immediate on mobile and desktop, even with project screenshots.

Do not add backend, database, authentication, CMS, analytics, or a public guestbook.

## Technology Decisions

Use this stack:

```text
Nuxt 4 stable
Bun package manager and local script runner
@nuxt/image
Native CSS
Vercel static hosting
```

Use static generation:

```bash
bun run generate
```

Do not use Nuxt nightly releases.

Do not use:

```text
Server API routes
Database
Authentication
Admin panel
Tailwind
Nuxt UI
Component libraries
State-management libraries
Docker
External fonts
Heavy animation libraries
```

Do not use Bun-specific runtime APIs. The project must remain compatible with the normal Node.js/Vercel build environment.

## Routes

Build exactly three public routes:

```text
/           Home
/projects/  Projects
/journey/   Background & milestones
```

No other public routes are required unless a technical detail page becomes necessary for a project later.

## Page Requirements

### Home (`/`)

The homepage should answer quickly:

1. Who is Baghaztra?
2. What systems does he build?
3. What are the strongest projects?
4. Where can visitors continue?

Include:

- concise introduction;
- selected projects, not every project;
- clear links to `/projects/` and `/journey/`;
- GitHub and LinkedIn links;
- contact path or email link.

Do not use a long generic skills grid. Prove skills through projects.

### Projects (`/projects/`)

Show all selected projects with useful detail.

Each project should state:

```text
Name
One-sentence purpose
Problem solved
Role and contribution
Key technical decision
Technology stack
Outcome or current status
GitHub and/or live demo, when available
```

Feature these projects first:

1. **Rumah Jahit Yan** — order-management web application with XGBoost Learning to Rank for work-priority ranking.
2. **ROSA** — AI-powered monitoring and control system, including ROSA Edge local inference on Jetson.
3. **Instagram Comments Service** — FastAPI-based service for collecting Instagram comments.
4. **ESP32 Monitoring and Control Experiments** — Wi-Fi, HTTP, MQTT, and device-control learning projects.

Keep older work as an archive, such as E-Bio X, Inaglob, and the SMKN2 Batusangkar TEFA application.

Avoid claiming unverified results or features.

### Journey (`/journey/`)

The page title may be **Background & Milestones**.

Use a chronological timeline for:

- education;
- work or project experience;
- organizational leadership;
- important milestones.

Use compact cards for:

- achievements;
- relevant certificates;
- selected teaching, speaking, or community activities.

Include the Software Engineering Technology degree from Politeknik Negeri Padang and the Best Graduate recognition.

Do not make this a dump of every certificate or activity. Include only evidence that supports the professional direction.

## Visual Direction

Use one coherent identity:

```text
Professional
Technical
Clear
Personal
Quietly playful
```

Do not implement separate serious and playful modes.

Do not make the whole site intentionally ugly or chaotic. Use personality in small details only:

- concise microcopy;
- subtle hover effects;
- small Easter eggs;
- project-specific visual accents.

Keep text, navigation, hierarchy, and links immediately understandable to recruiters.

Use system fonts by default. Do not fetch external fonts.

## Image Rules

Source photos and screenshots may arrive with different dimensions and formats such as PNG and JPEG.

Use `@nuxt/image` to create static optimized variants at build time.

Use responsive images. Prefer AVIF, with WebP fallback and original-format fallback where necessary.

Target display variants:

```text
Profile:       up to 480 × 480
Project card:  up to 640 × 360
Project detail: up to 960 × 540
```

Keep original files outside the deployed output when possible.

Set explicit image dimensions to prevent layout shift.

Use lazy loading for offscreen images. Do not lazy-load the visible hero/profile image.

Avoid PNG for large photographic images. Retain PNG only when transparency or sharp UI detail makes it necessary.

## Performance Rules

Treat performance as a product feature.

Required:

- static generation for every public route;
- no database or API request during page load;
- no external font request;
- no carousel;
- no autoplay video;
- no heavy animation;
- no unnecessary client-side state;
- no icon-pack-wide import;
- no third-party trackers by default;
- minimal client JavaScript;
- responsive optimized images;
- lazy loading below the fold.

Prefer CSS over JavaScript for visual behavior.

Use JavaScript only for a clear user-facing interaction.

Before delivery, test the production build and inspect the generated output for unnecessarily large JavaScript or image assets.

## Content and Writing Rules

Write in clear, specific English.

Avoid generic claims such as:

```text
Passionate developer
Hard worker
Fast learner
Clean code enthusiast
```

Prefer evidence-based language:

```text
Built a ranking system for tailoring-order priorities.
Designed a local AI inference service for Jetson devices.
```

Keep labels short. Make the project work more prominent than technology lists.

## Accessibility and Responsiveness

Required:

- semantic heading order;
- descriptive image alt text;
- keyboard-accessible navigation and links;
- visible focus styles;
- sufficient color contrast;
- no horizontal scrolling on mobile;
- readable body text at 16px or larger;
- respect `prefers-reduced-motion`.

## Agent Workflow

Do not run generate, test, or build scripts. Leave that to me.

## Deployment

Deploy the static generated site to Vercel.

The deployment must not require environment variables.

Do not expose secrets because the project must contain no secrets.

## Definition of Done

The work is complete when:

1. All three routes work in the production build.
2. Images are optimized and responsive.
3. The site has no backend or database dependency.
4. The first viewport communicates identity and strongest work.
5. The project page explains decisions and outcomes.
6. The journey page is selective and chronological.
7. Mobile and desktop layouts are verified.
8. Production asset size is reviewed before deployment.
