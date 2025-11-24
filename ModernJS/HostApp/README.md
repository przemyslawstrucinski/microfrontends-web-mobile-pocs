# Host App - nowoczesnylekarz

This is the host application for the nowoczesnylekarz microfrontend architecture. It orchestrates multiple microfrontends using Garfish for routing and Module Federation for component sharing.

## Architecture

The host app integrates:

1. **Search MFE** (Port 8081) - Provides search functionality
   - Loaded via Garfish at `/search` route
   - SearchWidget component imported via Module Federation on homepage

2. **Doctor MFE** (Port 8082) - Provides doctor profiles with SSR
   - Loaded via Garfish at `/doctor` route

## Features

- Homepage with embedded SearchWidget from Search MFE
- Unified navigation and layout
- Garfish-based routing for microfrontend loading
- Module Federation for component sharing
- Tailwind CSS for consistent styling

## Getting Started

### Prerequisites

Make sure the microfrontends are running:

1. Start Search MFE on port 8081
2. Start Doctor MFE on port 8082

### Install Dependencies

```bash
npm install
```

### Development

Run the host application on port 8080:

```bash
npm run dev
```

The application will be available at http://localhost:8080

### Build

Build for production:

```bash
npm run build
```

### Serve Production Build

```bash
npm run serve
```

## Routes

- `/` - Homepage with SearchWidget
- `/search` - Search MFE (loaded via Garfish)
- `/doctor/:id` - Doctor profile MFE (loaded via Garfish)

## Microfrontend Integration

### Garfish (Routing)

Garfish is used to dynamically load and mount microfrontends based on routes:

- `/search` → Loads Search MFE
- `/doctor` → Loads Doctor MFE

### Module Federation (Component Sharing)

Module Federation is used to import the SearchWidget component from the Search MFE and display it on the homepage.

## Architecture Details

- **Framework**: ModernJS
- **Styling**: Tailwind CSS
- **Microfrontend Orchestration**: Garfish
- **Component Sharing**: Module Federation
- **Port**: 8080

## Development Workflow

1. Start all three applications:
   ```bash
   # Terminal 1 - Search MFE
   cd Search && npm run dev

   # Terminal 2 - Doctor MFE
   cd Doctor && npm run dev

   # Terminal 3 - Host App
   cd HostApp && npm run dev
   ```

2. Access the host app at http://localhost:8080
3. Navigate between routes to see different microfrontends load dynamically

## Key Technologies

- **ModernJS**: Meta-framework for React applications
- **Garfish**: Micro-frontend framework for runtime integration
- **Module Federation**: Webpack feature for sharing code between applications
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library
- **TypeScript**: Type-safe JavaScript

