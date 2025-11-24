# Doctor Microfrontend

This is the Doctor microfrontend for the nowoczesnylekarz application. It provides SSR-enabled doctor profile pages.

## Features

- Server-Side Rendered (SSR) doctor profile pages for better SEO
- Dynamic routes for individual doctor profiles
- Comprehensive doctor information display
- Built with ModernJS and Tailwind CSS

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server with SSR on port 8082:

```bash
npm run dev
```

The application will be available at http://localhost:8082

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

- `/doctor/:id` - Individual doctor profile page (SSR-enabled)
- Exposed as micro-app at `/doctor` in the host application

## SSR Configuration

This microfrontend is configured for Server-Side Rendering (SSR) to optimize SEO for doctor profile pages. The SSR mode is enabled in `modern.config.ts`.

## Architecture

- **Framework**: ModernJS
- **Styling**: Tailwind CSS
- **Rendering**: Server-Side Rendering (SSR)
- **Port**: 8082

## Mock Data

The application uses mock data defined in `src/data/mockDoctors.ts`. This includes 8 sample doctors with detailed profiles.

## Doctor Profile Features

Each profile includes:
- Name, specialty, and location
- Rating and reviews
- Biography and experience
- Education and training
- Languages spoken
- Availability
- Contact information

