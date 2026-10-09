# Baghaztra Van Ril — Portfolio

Static personal portfolio for **Baghaztra Van Ril**, software engineer
(web apps, backend & APIs, AI workflows, IoT). Audience: recruiters,
collaborators, clients.

Performance is a product feature: static generation, no runtime backend,
no external fonts, minimal client JavaScript, responsive optimized images.

## Stack

- Nuxt 4 stable, Bun (package manager + script runner)
- `@nuxt/image` (AVIF/WebP, build-time variants)
- Native CSS (`app/assets/css/main.css`), system fonts
- Static hosting on Vercel, no environment variables

## Routes

| Route       | File                  | Content                                    |
| ----------- | --------------------- | ------------------------------------------ |
| `/`         | `app/pages/index.vue` | Intro, selected projects, continue links   |
| `/projects` | `app/pages/projects.vue` | Full archive (newest first) + detail sheet |
| `/journey`  | `app/pages/journey.vue` | Background & milestones, chronological list |

## Project structure

```text
app/
  app.vue                    # layout: header, page, footer
  assets/css/main.css        # single native-CSS stylesheet
  components/
    WindowFrame.vue          # window-style section frame (min/max/close)
    ProjectRow.vue           # reusable list row (projects + journey)
    ProjectCollaborators.vue # "With:" line from people registry
    SiteHeader.vue / SiteFooter.vue / SysMenu.vue
  composables/
    useClosedFrames.ts       # parked reopen chips for closed frames
    useSysMenu.ts            # header menu state
  data/
    portfolio.ts             # profile + home goto links (site-level)
    projects.ts              # people, projects, featured, archive, helpers
    journey.ts               # timeline items (title/period/desc/tags)
  pages/
    index.vue / projects.vue / journey.vue
public/
  images/                    # profile + project screenshots (source files)
```

## Data model

- `portfolio.ts` — `profile`, `homeGotoLinks`. No project content.
- `projects.ts` — `people` registry, `projects` array, derived
  `featuredProjects` (by `featured.index`) and `archiveProjects`
  (year DESC, stable for ties), plus `getProject` / `getCollaborators`.
- `journey.ts` — `journeyItems: { title, period, desc, tags }[]`, newest first.
- `ProjectRow` props (`index/heading/strong/desc/tags/meta`) cover both
  project and journey rows; no separate journey component.

## Scripts

```bash
bun install       # install dependencies
bun dev           # dev server on http://localhost:3000
bun run generate  # static generation -> .output/public (deploy this)
bun run preview   # preview the production build locally
```

## Constraints (see AGENTS.md)

No server API routes, database, auth, admin, CMS, analytics, Tailwind,
component/state libraries, Docker, external fonts, heavy animation, or
icon-pack-wide imports. Keep `bun run generate` output free of secrets.
