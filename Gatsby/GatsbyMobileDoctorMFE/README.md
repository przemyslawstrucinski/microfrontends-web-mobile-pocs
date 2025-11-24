# GatsbyMobileDoctorMFE - Mobile Doctor List Microfrontend

React Native doctor list component exposed via Metro Module Federation.

## Features

- Browse all doctors
- View detailed information
- Ratings and reviews
- Experience and bio
- Fully native React Native component

## Port

8092 (Metro Server)

## Module Federation Setup

Exposes:
- `./DoctorList`: Native doctor list component

## Development

```bash
npm install
npm start
```

The Metro server will start on port 8092 and expose the manifest at:
http://localhost:8092/mf-manifest.json

## Dependencies

- react-native 0.76.5
- @module-federation/metro ^0.2.0
- metro ^0.80.0

## Key Files

- `metro.config.js`: Module Federation configuration
- `metro-server.js`: Custom Metro server
- `src/DoctorList.tsx`: Exposed doctor list component
- `src/data/mockDoctors.ts`: Mock doctor data

## Usage in Host App

```tsx
import { lazy, Suspense } from 'react';
import { ActivityIndicator } from 'react-native';

const DoctorListComponent = lazy(() => import('DoctorMFE/DoctorList'));

function DoctorScreen() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <DoctorListComponent />
    </Suspense>
  );
}
```

