# Gatsby Microfrontends - Doctor Booking Platform

A comprehensive microfrontend architecture using Gatsby for web applications and React Native for mobile, featuring Module Federation for component sharing and hybrid SSR/DSG for optimal performance.

## Architecture Overview

This implementation demonstrates microfrontend architecture across two platforms:

### Web Platform (Gatsby)
- **GatsbyHostApp** (Port 9000): Main shell application
- **GatsbySearch** (Port 9001): Search microfrontend
- **GatsbyDoctor** (Port 9002): Doctor profiles microfrontend

### Mobile Platform (React Native + Expo)
- **GatsbyMobile**: Host application with Metro Module Federation
- **GatsbyMobileSearchMFE** (Port 8091): Search microfrontend
- **GatsbyMobileDoctorMFE** (Port 8092): Doctor list microfrontend

## Key Features

### Web Features
✅ **Module Federation**: SearchWidget component shared via Module Federation  
✅ **Deferred Static Generation (DSG)**: Doctor profiles use Gatsby's DSG for SEO  
✅ **Independent Deployment**: Each MFE can be deployed separately  
✅ **Tailwind CSS**: Consistent styling across all applications  
✅ **TypeScript**: Full type safety  

### Mobile Features
✅ **Metro Module Federation**: Dynamic loading of React Native components  
✅ **Expo Integration**: Easy development and testing  
✅ **React Navigation**: Tab-based navigation  
✅ **Shared Components**: Search and Doctor list loaded dynamically  

## Technology Stack

### Web
- **Framework**: Gatsby 5.x
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Module Federation**: @module-federation/enhanced
- **Language**: TypeScript

### Mobile
- **Platform**: React Native 0.76 + Expo 52
- **Module Federation**: @module-federation/metro
- **Navigation**: React Navigation 7
- **Language**: TypeScript

## Project Structure

```
Gatsby/
├── GatsbyHostApp/              # Web host application (Port 9000)
│   ├── gatsby-config.js
│   ├── gatsby-node.js         # Module Federation consumer config
│   ├── src/
│   │   ├── pages/
│   │   │   └── index.tsx      # Homepage with SearchWidget
│   │   └── components/
│   │       ├── Layout.tsx
│   │       └── SEO.tsx
│   └── package.json
│
├── GatsbySearch/               # Web search MFE (Port 9001)
│   ├── gatsby-node.js         # Module Federation provider config
│   ├── src/
│   │   ├── pages/
│   │   │   └── search.tsx     # Full search page
│   │   ├── components/
│   │   │   └── SearchWidget.tsx  # Exposed via MF
│   │   └── data/
│   │       └── mockDoctors.ts
│   └── package.json
│
├── GatsbyDoctor/               # Web doctor MFE (Port 9002)
│   ├── gatsby-node.js         # DSG configuration
│   ├── src/
│   │   ├── pages/
│   │   │   └── index.tsx
│   │   ├── templates/
│   │   │   └── DoctorProfile.tsx  # DSG template
│   │   └── data/
│   │       └── mockDoctors.ts
│   └── package.json
│
├── GatsbyMobile/               # Mobile host app (Port 8093)
│   ├── App.tsx
│   ├── metro.config.js        # Metro MF config
│   └── src/
│       └── screens/
│           ├── HomeScreen.tsx
│           ├── SearchScreen.tsx   # Loads SearchMFE
│           └── DoctorScreen.tsx   # Loads DoctorMFE
│
├── GatsbyMobileSearchMFE/      # Mobile search MFE (Port 8091)
│   ├── metro.config.js        # Exposes Search component
│   ├── metro-server.js
│   └── src/
│       └── Search.tsx
│
├── GatsbyMobileDoctorMFE/      # Mobile doctor MFE (Port 8092)
│   ├── metro.config.js        # Exposes DoctorList component
│   ├── metro-server.js
│   └── src/
│       └── DoctorList.tsx
│
├── start-all.sh               # Start all web services
├── kill-all.sh                # Stop all web services
└── README.md
```

## Getting Started

### Prerequisites

**For Web:**
- Node.js 18+ and npm
- Ports 9000, 9001, 9002 available

**For Mobile:**
- Node.js 18+ and npm
- Expo CLI
- iOS Simulator (Mac) or Android Emulator
- Expo Go app (for physical devices)
- Ports 8091, 8092, 8093 available

## Installation & Setup

### Web Applications

#### Option 1: Quick Start (All Services)

```bash
cd Gatsby
chmod +x start-all.sh kill-all.sh
./start-all.sh
```

This will:
1. Install dependencies for all three web applications
2. Start GatsbySearch on http://localhost:9001
3. Start GatsbyDoctor on http://localhost:9002
4. Start GatsbyHostApp on http://localhost:9000

#### Option 2: Manual Start (Step by Step)

**Terminal 1 - GatsbySearch:**
```bash
cd GatsbySearch
npm install
npm run develop
```
Access at: http://localhost:9001

**Terminal 2 - GatsbyDoctor:**
```bash
cd GatsbyDoctor
npm install
npm run develop
```
Access at: http://localhost:9002

**Terminal 3 - GatsbyHostApp:**
```bash
cd GatsbyHostApp
npm install
npm run develop
```
Access at: http://localhost:9000

### Mobile Applications

#### Quick Start

```bash
cd GatsbyMobile
chmod +x start-all-mobile.sh
./start-all-mobile.sh
```

This will:
1. Install dependencies for all mobile applications
2. Start Search MFE Metro server on port 8091
3. Start Doctor MFE Metro server on port 8092
4. Start Expo development server on port 8093

#### Manual Start

**Terminal 1 - Search MFE:**
```bash
cd GatsbyMobileSearchMFE
npm install
npm start
```

**Terminal 2 - Doctor MFE:**
```bash
cd GatsbyMobileDoctorMFE
npm install
npm start
```

**Terminal 3 - Main App:**
```bash
cd GatsbyMobile
npm install
npm start
```

Then:
- Press `i` for iOS Simulator
- Press `a` for Android Emulator
- Scan QR code with Expo Go app on physical device

## Application Flow

### Web Platform

1. **Homepage** (`http://localhost:9000`)
   - Displays hero section with features
   - Embeds SearchWidget from GatsbySearch via Module Federation
   - Shows popular specialties grid
   - Call-to-action section

2. **Search Page** (`http://localhost:9001/search`)
   - Full search functionality with filters
   - Filter by specialty, location, name
   - Display doctor cards with ratings
   - Links to individual doctor profiles

3. **Doctor Profile** (`http://localhost:9002/doctor/:id`)
   - DSG-enabled for SEO optimization
   - Detailed doctor information
   - Education, languages, availability
   - Contact information and booking

### Mobile Platform

1. **Home Tab**
   - Native home screen with features
   - Popular specialties
   - Navigation to other tabs

2. **Search Tab**
   - Dynamically loads SearchMFE component
   - Filter by name and specialty
   - Display doctor results

3. **Doctors Tab**
   - Dynamically loads DoctorMFE component
   - Browse all doctors
   - View detailed profiles

## Module Federation Configuration

### Web - GatsbyHostApp (Consumer)

```javascript
// gatsby-node.js
new ModuleFederationPlugin({
  name: 'gatsby_host_app',
  remotes: {
    gatsby_search_mfe: 'gatsby_search_mfe@http://localhost:9001/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

### Web - GatsbySearch (Provider)

```javascript
// gatsby-node.js
new ModuleFederationPlugin({
  name: 'gatsby_search_mfe',
  filename: 'remoteEntry.js',
  exposes: {
    './SearchWidget': './src/components/SearchWidget',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

### Mobile - GatsbyMobile (Consumer)

```javascript
// metro.config.js
const federationPlugin = new MetroFederationPlugin({
  name: 'GatsbyMobileHost',
  remotes: {
    SearchMFE: 'SearchMFE@http://localhost:8091/mf-manifest.json',
    DoctorMFE: 'DoctorMFE@http://localhost:8092/mf-manifest.json',
  },
  shared: {
    react: { singleton: true, eager: true },
    'react-native': { singleton: true, eager: true },
  },
});
```

### Mobile - Search/Doctor MFEs (Providers)

```javascript
// metro.config.js
const federationPlugin = new MetroFederationPlugin({
  name: 'SearchMFE',
  exposes: {
    './Search': './src/Search',
  },
  shared: {
    react: { singleton: true, eager: true },
    'react-native': { singleton: true, eager: true },
  },
});
```

## Key Technical Decisions

### Gatsby + Module Federation

**Challenge**: Gatsby doesn't natively support Module Federation.

**Solution**: Manual webpack configuration in `gatsby-node.js` using the `onCreateWebpackConfig` API to add the ModuleFederationPlugin.

### DSG for Doctor Profiles

**Why**: Deferred Static Generation provides the best of both worlds:
- SEO benefits of server-side rendering
- Fast builds (pages generated on-demand)
- Scalable for large numbers of doctor profiles

**Implementation**: Using Gatsby's `createPages` API with `defer: true`.

### Metro Module Federation for Mobile

**Why**: Enables true microfrontend architecture on React Native.

**How**: Custom Metro servers for each MFE exposing components via Module Federation manifests.

## Mock Data

All applications use mock data for demonstration purposes:

- **8 Sample Doctors** with various specialties
- Realistic data including:
  - Names, specialties, locations
  - Ratings and review counts
  - Bio, education, experience
  - Languages, availability
  - Contact information

## Port Configuration

| Application | Port | URL |
|------------|------|-----|
| GatsbyHostApp | 9000 | http://localhost:9000 |
| GatsbySearch | 9001 | http://localhost:9001 |
| GatsbyDoctor | 9002 | http://localhost:9002 |
| GatsbyMobile (Expo) | 8093 | Expo Dev Tools |
| Search MFE (Mobile) | 8091 | Metro Server |
| Doctor MFE (Mobile) | 8092 | Metro Server |

## Development Workflow

### Independent Development

Each microfrontend can be developed independently:
- Has its own repository structure
- Has its own dependencies
- Can be deployed separately
- Different teams can work on different MFEs

### Testing Locally

1. Start the MFE you're working on
2. Start any dependent MFEs (if testing integration)
3. Start the host application
4. Test the integration

### Building for Production

**Web:**
```bash
# Build each application
cd GatsbySearch && npm run build
cd ../GatsbyDoctor && npm run build
cd ../GatsbyHostApp && npm run build

# Serve production builds
cd GatsbySearch && npm run serve
cd ../GatsbyDoctor && npm run serve
cd ../GatsbyHostApp && npm run serve
```

**Mobile:**
```bash
cd GatsbyMobile
npm run build:ios    # For iOS
npm run build:android # For Android
```

## Troubleshooting

### Web Issues

**Module Federation Not Loading:**
- Ensure GatsbySearch is running before GatsbyHostApp
- Check browser console for CORS errors
- Verify remoteEntry.js is accessible at http://localhost:9001/remoteEntry.js

**Port Conflicts:**
```bash
./kill-all.sh  # Kill all services
lsof -ti:9000,9001,9002 | xargs kill -9  # Manual cleanup
```

**Build Errors:**
```bash
cd GatsbyHostApp
npm run clean  # Clear Gatsby cache
npm install    # Reinstall dependencies
```

### Mobile Issues

**Metro Bundle Not Loading:**
- Wait 10-15 seconds after starting Metro servers
- Check that ports 8091, 8092, 8093 are not in use
- Verify mf-manifest.json is accessible

**Physical Device Issues:**
- Replace `localhost` with your computer's IP address in metro.config.js
- Find IP: `ifconfig | grep "inet "`
- Ensure device and computer are on same network

**EMFILE Error (Too Many Open Files):**
```bash
ulimit -n 65536
npm start
```

## Key Benefits

### Web Platform
1. ✅ **SSR/DSG**: Doctor profiles optimized for SEO
2. ✅ **Code Splitting**: Automatic with Gatsby and Module Federation
3. ✅ **Independent Deployment**: Each MFE can be deployed separately
4. ✅ **Shared Components**: SearchWidget shared via Module Federation
5. ✅ **Static Generation**: Fast page loads with Gatsby

### Mobile Platform
1. ✅ **Dynamic Loading**: Components loaded at runtime
2. ✅ **Independent Development**: Each MFE developed separately
3. ✅ **Shared Dependencies**: React/React-Native loaded once
4. ✅ **Expo Integration**: Easy testing and deployment
5. ✅ **Module Federation**: True microfrontend architecture on mobile

## Comparison with Other Solutions

### vs ModernJS
- **Gatsby**: Better static generation and SEO out of the box
- **ModernJS**: More integrated MFE tooling with Garfish

### vs Remix
- **Gatsby**: Better for static/semi-static content with DSG
- **Remix**: Better for highly dynamic content with full SSR

### vs Next.js Zones
- **Gatsby**: Better build-time optimization with static generation
- **Next.js**: Better runtime flexibility with ISR and SSR

### vs React Module Federation
- **Gatsby**: Adds static generation and better SEO
- **React MF**: More flexible for pure client-side apps

## Future Enhancements

- [ ] Add authentication and user management
- [ ] Implement real booking functionality
- [ ] Add payment integration
- [ ] Create admin dashboard
- [ ] Add real-time notifications
- [ ] Implement doctor availability calendar
- [ ] Add video consultation support
- [ ] Connect to real backend APIs
- [ ] Add error boundaries and loading states
- [ ] Implement end-to-end testing
- [ ] Add CI/CD pipelines
- [ ] Docker containerization
- [ ] Kubernetes deployment manifests

## Contributing

Each microfrontend can be developed independently. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes in the specific MFE
4. Test integration with other MFEs
5. Submit a pull request

## License

MIT

## Support

For issues or questions:
1. Check the Troubleshooting section
2. Review Gatsby documentation: https://www.gatsbyjs.com/docs/
3. Review Module Federation docs: https://module-federation.io/
4. Open an issue in the repository

---

**Built with ❤️ using Gatsby, React Native, and Module Federation**

