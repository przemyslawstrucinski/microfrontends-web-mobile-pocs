# Remix Microfrontends - MojLekarz Clone

A doctor search and booking platform built with Remix and Module Federation. This project demonstrates a microfrontend architecture with three separate applications that can be developed and deployed independently.

## Project Structure

```
.
├── host-app/              # Main application (Port 3000)
├── search-microfrontend/  # Search functionality (Port 3001)
└── doctor-microfrontend/  # Doctor profiles (Port 3002)
```

## Architecture

### Host Application (Port 3000)
- Main entry point for users
- Homepage with integrated search component from search-microfrontend
- Navigation and routing coordination
- Module Federation consumer

### Search Microfrontend (Port 3001)
- Full-featured search page at `/search`
- Exports `SearchBar` component for use in host app homepage
- Search filters (specialty, location, name)
- Results display with pagination
- SSR-enabled search with Remix loaders

### Doctor Microfrontend (Port 3002)
- Doctor profile pages at `/doctor/:id`
- SSR-enabled profile rendering
- Detailed doctor information with reviews
- Availability schedules
- Exports `DoctorProfile` component

## Technology Stack

- **Remix** - Full-stack React framework with SSR
- **Vite** - Build tool and dev server
- **Module Federation** - Runtime microfrontend integration via @originjs/vite-plugin-federation
- **TypeScript** - Type safety
- **TailwindCSS** - Styling

## Setup Instructions

Each application needs to be set up and run separately. They simulate separate repositories maintained by different teams.

### 1. Install Dependencies

```bash
# Host application
cd host-app
npm install

# Search microfrontend
cd ../search-microfrontend
npm install

# Doctor microfrontend
cd ../doctor-microfrontend
npm install
```

### 2. Start Development Servers

You need to run all three applications simultaneously. Open three terminal windows:

**Terminal 1 - Search Microfrontend (must start first):**
```bash
cd search-microfrontend
npm run dev
```
Access at: http://localhost:3001

**Terminal 2 - Doctor Microfrontend:**
```bash
cd doctor-microfrontend
npm run dev
```
Access at: http://localhost:3002

**Terminal 3 - Host Application (start last):**
```bash
cd host-app
npm run dev
```
Access at: http://localhost:3000

## Features

### Homepage (Host App)
- Hero section with embedded search component
- Popular specialties
- Feature highlights
- Navigation to search and doctor pages

### Search Page (Search Microfrontend)
- Advanced search filters
- Doctor cards with key information
- Real-time search results
- Links to doctor profiles

### Doctor Profile (Doctor Microfrontend)
- Complete doctor information
- Education and credentials
- Patient reviews and ratings
- Availability schedule
- Contact information
- Booking functionality

## Module Federation Configuration

### Host App (Consumer)
Consumes remote components from microfrontends:
```typescript
federation({
  name: "host-app",
  remotes: {
    searchApp: "http://localhost:3001/assets/remoteEntry.js",
    doctorApp: "http://localhost:3002/assets/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
})
```

**Usage in Host App:**
- **SearchBar Component**: Imported via Module Federation and rendered on homepage (client-side only due to SSR limitations)
- **Doctor Pages**: Navigation to doctor microfrontend to preserve SSR

### Search Microfrontend (Provider)
Exposes SearchBar component for embedding:
```typescript
federation({
  name: "searchApp",
  filename: "remoteEntry.js",
  exposes: {
    "./SearchBar": "./app/components/SearchBar.tsx",
  },
  shared: ["react", "react-dom"],
})
```

**What's Exposed:**
- `SearchBar` component - Used on host app homepage via Module Federation

**What's Standalone:**
- `/search` route - Full search page with SSR (accessed directly)

### Doctor Microfrontend (Provider)
Provides SSR doctor profiles:
```typescript
federation({
  name: "doctorApp",
  filename: "remoteEntry.js",
  exposes: {
    "./DoctorProfile": "./app/components/DoctorProfile.tsx",
  },
  shared: ["react", "react-dom"],
})
```

**Architecture Decision:**
- Doctor profiles are accessed directly via their URLs to maintain full SSR benefits
- Each doctor page is server-rendered with complete data
- This approach ensures optimal SEO and initial page load performance

## Hybrid Architecture

This implementation uses a **hybrid approach** combining:

1. **Module Federation** - For shared UI components (SearchBar on homepage)
2. **Direct Navigation** - For SSR-heavy pages (Doctor profiles, Search results)

This balance provides:
- ✅ Component sharing where beneficial (SearchBar widget)
- ✅ Full SSR for content-heavy pages (Doctor profiles)
- ✅ Independent deployment of each microfrontend
- ✅ Optimal performance and SEO

## Development Workflow

### Independent Development
Each microfrontend can be developed independently:
- Has its own repository (simulated by separate directories)
- Has its own dependencies and package.json
- Can be deployed separately
- Different teams can work on different microfrontends

### Testing Locally
1. Start the microfrontend you're working on
2. Start the host application
3. Test the integration

### Building for Production
```bash
# In each application directory
npm run build
npm start
```

## Mock Data

Both search and doctor microfrontends include mock data for 10 doctors with:
- Personal information
- Specialties
- Locations across Poland (Warsaw, Krakow, Poznan, Wroclaw, Gdansk)
- Ratings and reviews
- Availability schedules
- Education and credentials

## Key Benefits

1. **Independent Deployment** - Each microfrontend can be deployed separately
2. **Team Autonomy** - Different teams can work on different parts
3. **Technology Flexibility** - Each microfrontend can use different versions
4. **SSR Support** - Full server-side rendering with Remix
5. **Runtime Integration** - Module Federation enables runtime composition
6. **Shared Dependencies** - React and React-DOM are shared to reduce bundle size

## Troubleshooting

### Port Already in Use
If you get port errors, check if the applications are already running:
```bash
lsof -i :3000  # Check port 3000
lsof -i :3001  # Check port 3001
lsof -i :3002  # Check port 3002
```

### Module Federation Errors
- Ensure microfrontends are running before the host app
- Check that the remoteEntry.js files are accessible
- Verify ports in vite.config.ts match running servers

### TypeScript Errors
Module Federation imports use dynamic imports which may show TypeScript errors. These can be safely ignored with `// @ts-ignore` as they work at runtime.

## Next Steps

- Add authentication and user management
- Implement real booking functionality
- Add payment integration
- Create admin dashboard
- Add real-time notifications
- Implement doctor availability calendar
- Add video consultation support

## License

MIT

