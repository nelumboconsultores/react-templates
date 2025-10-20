# React Templates

Opinionated starter built with Next.js 15, React 19, TypeScript, and Next Intl to help you spin up internationalized front-end apps quickly.

## Key Features

- Fast dev experience powered by Next.js with Turbopack for lightning-fast builds.
- Built-in internationalization with Next Intl for multi-language support.
- Modular architecture (`src/modules`) that keeps domains and routes separated.
- App Router with TypeScript for type-safe routing and server components.
- ESLint already configured for consistent code quality.
- Ready-to-extend shared hooks and reusable components in `src/core`.

## Prerequisites

- Node.js 18 or newer.
- A package manager; examples below use `npm`, but `yarn` or `pnpm` work as well.

## Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Available Scripts

```bash
npm run dev       # Start the dev server with Turbopack
npm run build     # Produce the optimized production build
npm run start     # Start the production server
npm run lint      # Run ESLint on src
```

## Project Structure

```
src/
  app/                    # Next.js App Router
    [locale]/            # Internationalized routes
      (authenticated)/   # Route groups
      layout.tsx         # Locale-specific layout
      page.tsx           # Home page
    globals.css          # Global styles
    layout.tsx           # Root layout
  core/                  # Shared resources
    components/          # Reusable components
    hooks/              # Custom hooks
    types/              # TypeScript types
    enums/              # Enums
  i18n/                  # Internationalization
    navigation.ts        # Next Intl navigation
    routing.ts           # Locale routing config
    request.ts           # Request configuration
  modules/               # Feature modules
    getStarted/          # Example module
      components/        # Module-specific components
      pages/            # Module pages
      hooks/            # Module-specific hooks
      types/            # Module types
      enums/            # Module enums
      services/         # Module services
  messages/              # Translation files
    es/                 # Spanish translations
  middleware.ts          # Next.js middleware
public/                  # Static files
```

## Internationalization

This template comes with Next Intl pre-configured:

- **Locales:** Currently configured for Spanish (`es`) with easy extension
- **Routing:** Automatic locale detection and routing
- **Translations:** Organized in `src/messages/[locale]/` directories
- **Navigation:** Type-safe internationalized navigation helpers

## Recommended Workflow

1. Run `npm run dev` and open http://localhost:3000/.
2. Extend or create modules inside `src/modules` for new features.
3. Add new locales in `src/i18n/routing.ts` and create corresponding message files.
4. Run `npm run lint` before opening a pull request.
5. Use `npm run build` to validate the production output.

## Quick Customization

- **Locales:** Add new locales in `src/i18n/routing.ts` and create message files in `src/messages/[locale]/`.
- **Routes:** Create new pages in `src/app/[locale]/` or use route groups for organization.
- **Modules:** Add new feature modules in `src/modules/` following the established pattern.
- **Styling:** Use CSS Modules or global styles in `src/app/globals.css`.

## Suggested Best Practices

- Re-export public items from each domain via `index.ts` files to keep imports clean.
- Document new shared hooks and components in `src/core` for clarity.
- Follow the modular architecture pattern for scalable applications.
- Use TypeScript strictly for better development experience.

---

You're set to build on top of React Templates—happy coding!
