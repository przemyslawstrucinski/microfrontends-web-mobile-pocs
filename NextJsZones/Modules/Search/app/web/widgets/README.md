# Search Widget

A standalone React component that provides a search interface for finding doctors. This widget can be embedded in any React/Next.js application as a microfrontend component.

## Overview

This package exposes a reusable `SearchWidget` component that can be integrated into any application within the monorepo architecture.

## Features

- 🔍 Search by doctor name or specialty
- 🏥 Filter by specialty (Kardiolog, Dermatolog, Pediatra, etc.)
- 📍 Filter by location (Warsaw, Krakow, Gdansk, Wroclaw)
- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Client-side component (Next.js 'use client')
- 🔗 Flexible navigation/callback options

## Installation

### Local File Link (Monorepo)

In your `package.json`:

```json
{
  "dependencies": {
    "@search/widget": "file:../Modules/Search/app/web/widgets"
  }
}
```

Then run:
```bash
npm install
```

## Usage

### Basic Usage

```tsx
import { SearchWidget } from '@search/widget';

export default function HomePage() {
  return (
    <div>
      <h1>Find a Doctor</h1>
      <SearchWidget />
    </div>
  );
}
```

### With Custom Navigation

```tsx
import { SearchWidget } from '@search/widget';

export default function HomePage() {
  return (
    <SearchWidget 
      onNavigateToSearch={() => window.location.href = '/search'} 
    />
  );
}
```

### With Custom Search Handler

```tsx
import { SearchWidget } from '@search/widget';

export default function HomePage() {
  const handleSearch = (query: string, specialty: string, city: string) => {
    console.log('Search params:', { query, specialty, city });
    // Custom search logic here
  };

  return (
    <SearchWidget onSearch={handleSearch} />
  );
}
```

### With Custom Styling

```tsx
import { SearchWidget } from '@search/widget';

export default function HomePage() {
  return (
    <SearchWidget className="my-custom-class" />
  );
}
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSearch` | `(query: string, specialty: string, city: string) => void` | `undefined` | Callback when search is submitted with form values |
| `onNavigateToSearch` | `() => void` | `undefined` | Callback to handle navigation (e.g., to search page) |
| `className` | `string` | `''` | Additional CSS classes to apply to the widget container |

### Default Behavior

If no props are provided, the widget will navigate to `/search` with query parameters:
- `?query=...&specialty=...&location=...`

## Development

### Build the Widget

```bash
cd Modules/Search/app/web/widgets
npm run build
```

### Watch Mode (Development)

```bash
npm run dev
```

## Architecture

This widget follows the microfrontend pattern where:
- It's a self-contained component with its own package
- Can be consumed by multiple apps (SuperAppWeb, SuperAppMobile, etc.)
- Uses local file linking instead of npm publish (for monorepo convenience)
- Maintains its own dependencies and TypeScript configuration

## Dependencies

### Peer Dependencies
- `react`: ^18.0.0 || ^19.0.0
- `react-dom`: ^18.0.0 || ^19.0.0

The component expects Tailwind CSS to be available in the consuming application.

## Files Structure

```
widgets/
├── src/
│   ├── SearchWidget.tsx    # Main widget component
│   └── index.ts            # Package exports
├── dist/                   # Compiled output
│   ├── index.js
│   ├── index.d.ts
│   ├── SearchWidget.js
│   └── SearchWidget.d.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Integration Example

See `SuperAppWeb/app/page.tsx` for a complete integration example.

## Future Enhancements

- Add loading states
- Add error handling
- Add analytics tracking
- Support for additional filters
- Internationalization support
- Theme customization options

