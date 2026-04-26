# Project Overview: Portfolio Astro

This is a personal portfolio website built with **Astro 5** and **Tailwind CSS**. It is designed as a fast, SEO-friendly, and accessible showcase of projects, skills, and contact information.

## Architecture & Technologies

- **Framework:** Astro 5 (Static Site Generation - SSG)
- **Styling:** Tailwind CSS with `@midudev/tailwind-animations`
- **Type Safety:** TypeScript
- **Internationalization (i18n):** Custom implementation for Spanish (`es` - default) and English (`en`).
- **SEO & Social:** OpenGraph and Twitter meta tags configured in `src/layouts/Layout.astro`.
- **Transitions:** Astro `ClientRouter` for smooth navigation.
- **Dark Mode:** Supported via Tailwind's `dark:` classes and a radial gradient background.

## Directory Structure

- `src/components/`: Modular UI sections (About, Skills, Projects, Contact, etc.).
- `src/layouts/`: Base `Layout.astro` containing the HTML shell, meta tags, and global styles.
- `src/pages/`: 
    - `index.astro`: Entry point for the default language (Spanish).
    - `[lang]/index.astro`: Dynamic route for additional languages (English).
- `src/i18n/`: Translation strings (`ui.ts`) and utility functions (`utils.ts`).
- `src/icons/`: SVG icons implemented as reusable Astro components.
- `public/`: Static assets like favicons, CV PDFs, and direct redirects.

## Building and Running

The project uses `pnpm` as its package manager.

| Task | Command |
| :--- | :--- |
| **Development** | `pnpm run dev` |
| **Build** | `pnpm run build` (Includes `astro check`) |
| **Preview** | `pnpm run preview` |
| **Type Check** | `pnpm run astro check` |

## Development Conventions

1. **i18n Usage:**
   - Translations are managed in `src/i18n/ui.ts`.
   - Use the `useTranslations(lang)` hook in Astro components to retrieve localized strings.
   - Default language is Spanish (`es`), and it does not have a URL prefix (e.g., `/` instead of `/es/`).

2. **Styling:**
   - Prefer Tailwind utility classes for all styling.
   - Global styles and CSS variables are located in `src/layouts/Layout.astro`.
   - Dark mode is toggled using the `dark` class on the `html` element.

3. **Components:**
   - Each section of the page (About, Projects, etc.) is a standalone Astro component.
   - Icons should be imported from `src/icons/` as components.

5. **Links:**
   - External links (Social, Projects, etc.) MUST use `target="_blank"` and `rel="noopener noreferrer"`.
   - The `SocialPill` component is configured with these defaults.
   - Internal navigation links (Header, Footer, LanguagePicker) should NOT use `target="_blank"`.
