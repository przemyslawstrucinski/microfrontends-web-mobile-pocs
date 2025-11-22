# SuperAppWeb

Main web orchestrator for the SuperApp using Next.js multizones architecture.

## Architecture

This application serves as the main entry point and orchestrator for web microfrontends. It uses Next.js multizones to integrate independent modules:
- **Search Module**: Doctor search functionality (port 3001)
- **Doctor Module**: Doctor profiles and booking (port 3002)

## Structure

```
SuperAppWeb/
├── app/
│   ├── layout.tsx     # Root layout with navigation
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── components/
│   └── Navigation.tsx # Top navigation bar
├── next.config.js     # Multizone configuration
└── package.json
```

## Tech Stack

- Next.js 16 (React 19)
- Tailwind CSS
- TypeScript

## Multizone Configuration

The app routes to different microfrontends based on path:

```javascript
/search/*  → http://localhost:3001/search/* (Search Module)
/doctor/*  → http://localhost:3002/doctor/* (Doctor Module)
```

## Getting Started

### Prerequisites
- Node.js 18+
- Yarn
- Running instances of Search and Doctor modules

### Installation

```bash
# Install dependencies
yarn install

# Run dev server (port 3000)
yarn dev
```

### Running the Full Stack

1. Start Search module: `cd ../Modules/Search && yarn web:dev` (port 3001)
2. Start Doctor module: `cd ../Modules/Doctor && yarn web:dev` (port 3002)
3. Start SuperAppWeb: `yarn dev` (port 3000)

Visit `http://localhost:3000` to see the integrated application.

## Features

- **Home Page**: Hero section with features and popular specialties
- **Navigation**: Sticky top navigation with links to all modules
- **Routing**: Seamless navigation between microfrontends
- **Styling**: Consistent Tailwind CSS theme across the app

## Development Notes

- Each module runs independently on its own port
- Modules are integrated at runtime via Next.js rewrites
- Navigation uses standard `<a>` tags for cross-zone navigation
- Each module maintains its own state and routing

## Deployment

For production:
1. Deploy each microfrontend independently
2. Update rewrite URLs in `next.config.js` to production URLs
3. Configure CDN/reverse proxy to route requests appropriately

