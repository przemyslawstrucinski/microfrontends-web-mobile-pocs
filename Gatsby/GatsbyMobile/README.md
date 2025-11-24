# GatsbyMobile - Mobile Host Application

React Native + Expo host application with Metro Module Federation.

## Features

- Tab-based navigation (Home, Search, Doctors)
- Dynamic loading of Search and Doctor MFEs
- Native home screen
- Metro Module Federation integration

## Port

8093 (Expo Dev Tools)

## Module Federation Setup

Consumes:
- `SearchMFE/Search` from http://localhost:8091
- `DoctorMFE/DoctorList` from http://localhost:8092

## Prerequisites

- Node.js 18+
- Expo CLI
- iOS Simulator (Mac) or Android Emulator
- Expo Go app (for physical devices)

## Development

### Quick Start
```bash
# From GatsbyMobile directory
./start-all-mobile.sh
```

### Manual Start
```bash
# Terminal 1 - Search MFE
cd ../GatsbyMobileSearchMFE
npm install
npm start

# Terminal 2 - Doctor MFE
cd ../GatsbyMobileDoctorMFE
npm install
npm start

# Terminal 3 - Host App
npm install
npm start
```

Then:
- Press `i` for iOS Simulator
- Press `a` for Android Emulator
- Scan QR code with Expo Go app

## Dependencies

- expo ~52.0.0
- react-native 0.76.5
- @react-navigation/native ^7.0.0
- @module-federation/metro ^0.2.0

## Key Files

- `App.tsx`: Main app with navigation
- `metro.config.js`: Metro Module Federation configuration
- `src/screens/HomeScreen.tsx`: Native home screen
- `src/screens/SearchScreen.tsx`: Loads SearchMFE dynamically
- `src/screens/DoctorScreen.tsx`: Loads DoctorMFE dynamically

## Troubleshooting

### For Physical Devices
Replace `localhost` with your computer's IP in `metro.config.js`:
```javascript
remotes: {
  SearchMFE: 'SearchMFE@http://192.168.x.x:8091/mf-manifest.json',
}
```

Find your IP: `ifconfig | grep "inet "`

### Metro Issues
- Wait 10-15 seconds after starting Metro servers
- Check that ports 8091, 8092, 8093 are not in use

