# GatsbyMobileSearchMFE - Mobile Search Microfrontend

React Native search component exposed via Metro Module Federation.

## Features

- Search by name or specialty
- Filter by specialty chips
- Display doctor results
- Fully native React Native component

## Port

8091 (Metro Server)

## Module Federation Setup

Exposes:
- `./Search`: Native search component

## Development

```bash
npm install
npm start
```

The Metro server will start on port 8091 and expose the manifest at:
http://localhost:8091/mf-manifest.json

## Dependencies

- react-native 0.76.5
- @module-federation/metro ^0.2.0
- metro ^0.80.0

## Key Files

- `metro.config.js`: Module Federation configuration
- `metro-server.js`: Custom Metro server
- `src/Search.tsx`: Exposed search component
- `src/data/mockDoctors.ts`: Mock doctor data

## Usage in Host App

```tsx
import { lazy, Suspense } from 'react';
import { ActivityIndicator } from 'react-native';

const SearchComponent = lazy(() => import('SearchMFE/Search'));

function SearchScreen() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <SearchComponent />
    </Suspense>
  );
}
```

