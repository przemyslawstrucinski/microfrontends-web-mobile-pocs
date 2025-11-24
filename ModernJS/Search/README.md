# Search Microfrontend

This is the Search microfrontend for the nowoczesnylekarz application. It provides doctor search functionality and exports a SearchWidget component via Module Federation.

## Features

- Full-featured search page with filters (specialty, location, availability)
- SearchWidget component exported for use in other applications
- Mock data for doctor listings
- Built with ModernJS and Tailwind CSS

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server on port 8081:

```bash
npm run dev
```

The application will be available at http://localhost:8081

### Build

Build for production:

```bash
npm run build
```

### Serve Production Build

```bash
npm run serve
```

## Module Federation

This microfrontend exposes the following components:

- `./SearchWidget` - A widget component that can be imported by the host application

## Routes

- `/` - Main search page with filters
- Exposed as micro-app at `/search` in the host application

## Architecture

- **Framework**: ModernJS
- **Styling**: Tailwind CSS
- **Module Federation**: Exposes SearchWidget component
- **Port**: 8081

## Mock Data

The application uses mock data defined in `src/data/mockDoctors.ts`. This includes 8 sample doctors with various specialties.

