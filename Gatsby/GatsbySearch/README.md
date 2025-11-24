# GatsbySearch - Search Microfrontend

Search functionality microfrontend that exposes SearchWidget component.

## Features

- Full search page with filters
- Exposed SearchWidget component via Module Federation
- Filter by specialty, location, name
- Doctor cards with ratings
- Mock data for 8 doctors

## Port

9001 (http://localhost:9001)

## Module Federation Setup

Exposes:
- `./SearchWidget`: Embeddable search component

## Development

```bash
npm install
npm run develop
```

Access standalone at: http://localhost:9001/search

## Build

```bash
npm run build
npm run serve
```

## Dependencies

- gatsby ^5.13.0
- react ^18.2.0
- @module-federation/enhanced ^0.2.0
- tailwindcss ^3.4.1

## Key Files

- `gatsby-node.js`: Module Federation provider configuration
- `src/pages/search.tsx`: Full search page
- `src/components/SearchWidget.tsx`: Exposed widget component
- `src/data/mockDoctors.ts`: Mock doctor data

## Usage in Host App

```tsx
import { lazy, Suspense } from 'react';

const SearchWidget = lazy(() => import('gatsby_search_mfe/SearchWidget'));

function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchWidget />
    </Suspense>
  );
}
```

