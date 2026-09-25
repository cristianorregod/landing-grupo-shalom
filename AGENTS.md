## Project context

- Progress, phases, pending client items and decisions live in `IMPLEMENTATION_PLAN.md`. Read it before starting any phase and update its checkboxes and Log when a phase is done.
- Every link, CTA target and external ID lives in `src/config/site.ts` (`null` = pending client item). Replaceable copy lives in `src/content/*.ts`.
- Per-phase workflow: implement → `pnpm format` → `pnpm build` (runs `astro check`) → browser check → update plan → commit.
- Conventional commits, no AI attribution.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
