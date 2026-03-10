# AGENTS.md - Development Guidelines

## Project Overview
This is a **Vite + React 19** application with **Tailwind CSS v4** that displays country information from the REST Countries API with a dark/light theme switcher.

## Tech Stack
- **Framework**: React 19 with React Router DOM v7
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint 9 with react-hooks and react-refresh plugins

---

## Build / Lint / Test Commands

### Development
```bash
npm run dev          # Start Vite dev server
```

### Build
```bash
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
```

### Linting
```bash
npm run lint         # Run ESLint on entire project
```

**Note**: This project does not have a test framework configured (no Jest, Vitest, or Cypress). If adding tests, use:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

---

## Code Style Guidelines

### File Organization
- **Components**: `src/components/` - use `.jsx` extension
- **Pages**: `src/pages/` - use `.jsx` extension
- **Services/API**: `src/sevices/` - use `.js` extension (note: typo in folder name)
- **Hooks**: `src/hook/` - use `.jsx` extension for custom hooks
- **Context**: `src/context-data/` - use `.jsx` for context providers
- **Static assets**: `public/` folder

### Naming Conventions
- **Components**: PascalCase (e.g., `CountriesList.jsx`, `HeaderTheme.jsx`)
- **Files**: camelCase for utilities/hooks, PascalCase for components
- **Variables/functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE for true constants
- **CSS classes**: kebab-case (Tailwind utility classes)

### Imports
- Use **named imports** for React components
- Use **default imports** for pages in routing
- Include file extensions: `import { x } from './file.jsx'`
- Order: React imports → external libs → internal components/utils → styles

```jsx
// Good
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCountries } from '../sevices/api.js';
import { useSettingCountries } from '../context-data/useSettingCountries.js';
import { CountriesList } from './CountriesList.jsx';

// Bad
import React from 'react';
import * as api from '../services/api.js';
```

### React Patterns
- Use **functional components** with arrow functions
- Use **named exports** for components (preferred) or default exports for page routes
- Use **custom hooks** for reusable logic (stored in `src/hook/`)
- Use **Context API** for global state (stored in `src/context-data/`)

```jsx
// Preferred component pattern
export const CountriesList = () => {
    const { byRegion } = useSettingCountries();
    const { data, loading, error } = useFetch(getAllCountries);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {/* component content */}
        </div>
    );
};
```

### Formatting
- Use **4 spaces** for indentation (match existing code)
- Use **single quotes** for strings
- Add trailing commas in multi-line objects/arrays
- Use semicolons at end of statements

### TypeScript (Future Consideration)
- Currently using JSDoc comments in `.js` files
- If migrating to TypeScript, use `.tsx` extension
- Define prop types with TypeScript interfaces

### Error Handling
- Always wrap async operations in **try/catch**
- Throw errors after logging (don't swallow them silently)
- Display user-friendly error messages in UI

```javascript
// Good
const fetchData = async (filterByRegion) => {
    try {
        const response = await fetch(`${urlMain}${filterByRegion}`);
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API error:", error.message);
        throw error;
    }
};
```

### Tailwind CSS
- Use Tailwind utility classes directly in JSX
- Use arbitrary values with bracket notation: `grid-cols-[repeat(auto-fill,264px)]`
- Use semantic class names sparingly (e.g., `country__names` could be pure Tailwind)

### State Management
- Use **React useState** for local component state
- Use **Context API** for cross-component shared state (theme, country data)
- Custom hooks (`useFetch`) for data fetching logic

### Accessibility
- Always include `alt` props on images
- Use semantic HTML elements (`article`, `section`, `nav`)
- Ensure color contrast meets WCAG AA standards (project has dark/light themes)

---

## ESLint Rules

The project uses these ESLint configurations:
- `@eslint/js` - ECMAScript recommended rules
- `react-hooks` - Hooks rules (exhaustive-deps)
- `react-refresh` - Validates React refresh
- Custom rule: `no-unused-vars` errors except variables starting with uppercase (React components)

Run `npm run lint` before committing to catch issues.

---

## Common Tasks

### Adding a New Component
1. Create file in `src/components/` with `.jsx` extension
2. Use named export: `export const ComponentName = () => {...}`
3. Import in parent: `import { ComponentName } from './components/ComponentName.jsx'`

### Adding a New API Endpoint
1. Add function to `src/sevices/api.js`
2. Export the function
3. Use with custom hook or directly in component

### Adding a New Route
1. Add Route in `src/App.jsx` using React Router
2. Create page component in `src/pages/`

---

## Development Notes
- There's a typo in the project: folder `sevices` should be `services` (do not fix without user approval)
- The project uses a local `data.json` file (backup data)
- Theme switching is handled via CSS variables / Tailwind dark mode
- Console logs are used for debugging (consider removing in production)
