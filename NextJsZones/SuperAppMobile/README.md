# SuperAppMobile

Main mobile orchestrator for the SuperApp using Expo and module federation architecture.

## Architecture

This application serves as the main entry point for the mobile app. It uses tab-based navigation to integrate different modules:
- **Home**: Landing screen with features
- **Search**: Doctor search functionality
- **Doctor**: Doctor profiles and booking

In a full production setup, modules would be loaded dynamically using re.pack module federation from the Search and Doctor module packages.

## Structure

```
SuperAppMobile/
├── app/
│   ├── _layout.tsx    # Tab navigation layout
│   ├── index.tsx      # Home screen
│   ├── search.tsx     # Search module screen
│   └── doctor.tsx     # Doctor module screen
├── app.json           # Expo configuration
└── package.json
```

## Tech Stack

- Expo SDK 54
- React Native
- React 19
- TypeScript
- Expo Router (file-based routing)

## Getting Started

### Prerequisites
- Node.js 18+
- Yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

```bash
# Install dependencies
yarn install

# Start Expo development server
yarn start

# Run on iOS
yarn ios

# Run on Android
yarn android

# Run on web
yarn web
```

## Features

- **Home Screen**: Hero section with app features
- **Tab Navigation**: Bottom tabs for easy navigation
- **Module Placeholders**: Screens ready for dynamic module loading
- **Consistent Styling**: Medical/professional design theme

## Module Federation (Future Enhancement)

This app is designed to support re.pack module federation. In production:

1. Each module (Search, Doctor) would be bundled independently
2. Modules would be loaded dynamically at runtime
3. This allows:
   - Independent deployment of modules
   - Reduced initial bundle size
   - Hot updates for individual modules

### Implementation Steps (Not Yet Complete)

To implement full module federation:

1. Set up re.pack webpack configuration
2. Configure module entry points in Search and Doctor modules
3. Implement dynamic imports in SuperAppMobile
4. Set up module registry for version management

## Development Notes

- Built with Expo SDK 54 (latest at implementation)
- Uses file-based routing via Expo Router
- Tab navigation with three main sections
- Ready for integration with backend modules

## Screens

### Home
Welcome screen with feature highlights and call-to-action buttons.

### Search
Placeholder for the Search module. Will dynamically load the Search module's React Native components.

### Doctor
Placeholder for the Doctor module. Will dynamically load the Doctor module's React Native components.

## Deployment

For production deployment via Expo:

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Submit to stores
eas submit
```

Refer to [Expo documentation](https://docs.expo.dev/) for detailed deployment instructions.

