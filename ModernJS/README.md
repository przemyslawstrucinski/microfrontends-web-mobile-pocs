# nowoczesnylekarz - ModernJS Microfrontend Application

A doctor appointment booking platform built with ModernJS microfrontend architecture using Garfish for routing and Module Federation for component sharing.

## Architecture Overview

This application consists of three independent ModernJS applications:

### 1. Search MFE (Port 8081)
- **Purpose**: Doctor search functionality
- **Routes**: `/search` (full search page)
- **Exports**: `SearchWidget` component via Module Federation
- **Technology**: ModernJS, React, Tailwind CSS
- **Location**: `./Search/`

### 2. Doctor MFE (Port 8082)
- **Purpose**: Doctor profile pages with SSR
- **Routes**: `/doctor/:id` (SSR-enabled profile pages)
- **Technology**: ModernJS, React, Tailwind CSS, SSR
- **Location**: `./Doctor/`

### 3. Host App (Port 8080)
- **Purpose**: Main shell application
- **Features**: 
  - Homepage with embedded SearchWidget (Module Federation)
  - Dynamic loading of microfrontends (Garfish)
  - Unified navigation and layout
- **Technology**: ModernJS, React, Tailwind CSS, Garfish, Module Federation
- **Location**: `./HostApp/`

## Technology Stack

- **Framework**: ModernJS 2.x
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Microfrontend Orchestration**: 
  - **Garfish**: For dynamic route-based microfrontend loading
  - **Module Federation**: For sharing components (SearchWidget)
- **Language**: TypeScript
- **Rendering**: CSR for Host & Search, SSR for Doctor profiles

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Each microfrontend must be run independently

### Installation

Install dependencies for each application:

```bash
# Install Search MFE dependencies
cd Search
npm install

# Install Doctor MFE dependencies
cd ../Doctor
npm install

# Install Host App dependencies
cd ../HostApp
npm install
```

### Development

You need to run all three applications simultaneously. Open three separate terminal windows:

**Terminal 1 - Search MFE:**
```bash
cd Search
npm run dev
```
This starts the Search MFE on http://localhost:8081

**Terminal 2 - Doctor MFE:**
```bash
cd Doctor
npm run dev
```
This starts the Doctor MFE on http://localhost:8082

**Terminal 3 - Host App:**
```bash
cd HostApp
npm run dev
```
This starts the Host App on http://localhost:8080

### Accessing the Application

Once all three services are running, access the application at:

**http://localhost:8080**

## Application Flow

1. **Homepage** (`/`)
   - Displays hero section with features
   - Embeds SearchWidget from Search MFE via Module Federation
   - Shows popular specialties and call-to-action sections

2. **Search Page** (`/search`)
   - Garfish dynamically loads Search MFE
   - Full search functionality with filters (specialty, location, availability)
   - Display search results with doctor cards
   - Link to individual doctor profiles

3. **Doctor Profile** (`/doctor/:id`)
   - Garfish dynamically loads Doctor MFE
   - SSR-enabled for SEO optimization
   - Detailed doctor information, education, languages, availability
   - Contact information and booking options

## Key Features

### Module Federation Integration
- **SearchWidget** is exposed by Search MFE
- Host App imports and displays SearchWidget on homepage
- Seamless component sharing across independent applications

### Garfish Integration
- Dynamic microfrontend loading based on routes
- `/search` route triggers Search MFE mount
- `/doctor` route triggers Doctor MFE mount
- Automatic unmounting when navigating away

### Server-Side Rendering (SSR)
- Doctor profiles are server-side rendered
- Improved SEO for doctor profile pages
- Fast initial page load

### Mock Data
- All applications share the same mock doctor data structure
- 8 sample doctors with various specialties
- Realistic data for testing and demonstration

## Port Configuration

| Application | Port | URL |
|------------|------|-----|
| Host App | 8080 | http://localhost:8080 |
| Search MFE | 8081 | http://localhost:8081 |
| Doctor MFE | 8082 | http://localhost:8082 |

## Project Structure

```
ModernJS/
├── HostApp/                    # Host Application
│   ├── src/
│   │   ├── routes/
│   │   │   ├── layout.tsx     # Main layout with navigation
│   │   │   └── page.tsx       # Homepage with SearchWidget
│   │   ├── styles/
│   │   │   └── global.css     # Global styles
│   │   └── @mf-types/         # Module Federation types
│   ├── modern.config.ts       # Garfish + Module Federation config
│   ├── module-federation.config.ts
│   └── package.json
│
├── Search/                     # Search Microfrontend
│   ├── src/
│   │   ├── routes/
│   │   │   ├── layout.tsx     # Search layout
│   │   │   └── page.tsx       # Full search page
│   │   ├── components/
│   │   │   └── SearchWidget.tsx # Exportable widget
│   │   ├── data/
│   │   │   └── mockDoctors.ts # Mock data
│   │   └── types/
│   ├── modern.config.ts       # Module Federation config
│   ├── module-federation.config.ts
│   └── package.json
│
└── Doctor/                     # Doctor Microfrontend
    ├── src/
    │   ├── routes/
    │   │   ├── layout.tsx     # Doctor layout
    │   │   └── doctor/[id]/page.tsx # Profile page (SSR)
    │   ├── data/
    │   │   └── mockDoctors.ts # Mock data
    │   └── types/
    ├── modern.config.ts       # SSR config
    └── package.json
```

## Development Notes

### Independent Repositories
Each microfrontend (Search, Doctor, HostApp) is designed to be in a separate repository:
- No file sharing between apps
- Communication via Module Federation and Garfish only
- Each can be developed, tested, and deployed independently

### Module Federation
- Search MFE exposes `SearchWidget` component
- Host App consumes `SearchWidget` via remote entry
- Shared dependencies (React, React-DOM) are singletons

### Garfish Configuration
- Configured in Host App's `modern.config.ts`
- Automatic route-based microfrontend mounting
- Sandbox isolation for each microfrontend

## Building for Production

Build each application:

```bash
# Build Search MFE
cd Search
npm run build

# Build Doctor MFE
cd ../Doctor
npm run build

# Build Host App
cd ../HostApp
npm run build
```

## Deployment

Each microfrontend should be deployed independently:

1. Deploy Search MFE to `https://search.yourdomain.com`
2. Deploy Doctor MFE to `https://doctor.yourdomain.com`
3. Update Host App configuration with production URLs
4. Deploy Host App to `https://yourdomain.com`

Update the `modern.config.ts` and `module-federation.config.ts` files in Host App with production URLs.

## Troubleshooting

### Module Federation Issues
- Ensure Search MFE is running before starting Host App
- Check that ports 8081 and 8082 are not blocked
- Verify `mf-manifest.json` is accessible at http://localhost:8081/mf-manifest.json

### Garfish Issues
- Ensure all microfrontends are running on correct ports
- Check browser console for CORS errors
- Verify `activeWhen` routes in `modern.config.ts`

### SSR Issues
- Doctor MFE must be built with SSR enabled
- Check server logs for SSR errors
- Verify data loader is working correctly

## Contributing

Each microfrontend can be developed independently. Changes to one microfrontend don't require rebuilding others.

## License

MIT

