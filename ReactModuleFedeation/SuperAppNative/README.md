# SuperAppNative - Module Federation Host for React Native

React Native host application using **Metro Module Federation** to dynamically load microfrontends on iOS and Android.

## Architecture

- **Platform**: iOS & Android (via Expo SDK 54)
- **Bundler**: Metro
- **Module Federation**: @module-federation/metro
- **React**: 18.3.1 (React Native 0.76.5)
- **Navigation**: React Navigation v7

## Microfrontends

SuperAppNative loads these remote microfrontends at runtime:

| Microfrontend | URL | Port |
|--------------|-----|------|
| TodoApp | http://localhost:8081/mf-manifest.json | 8081 |
| WeatherApp | http://localhost:8082/mf-manifest.json | 8082 |

**Note**: Microfrontends use **mock data** so no backend APIs are needed for mobile.

## Module Federation Config

```javascript
// metro.config.js
remotes: {
  todoApp: 'todoApp@http://localhost:8081/mf-manifest.json',
  weatherApp: 'weatherApp@http://localhost:8082/mf-manifest.json',
}
```

## Running Locally

### First: Kill All Old Processes

If you get "port already in use" errors:

```bash
# From project root
cd ..
./kill-all.sh
cd SuperAppNative
```

### Quick Start (One Command)

```bash
# First time: Install dependencies
npm install --legacy-peer-deps
cd ../ToDo/app && npm install --legacy-peer-deps && cd -
cd ../Weather/app && npm install --legacy-peer-deps && cd -

# Start everything (cleans ports and starts all services)
npm run start:all
```

This script will:
1. Kill any processes on ports 8081-8083
2. Start Todo Metro server (port 8081)
3. Start Weather Metro server (port 8082)
4. Wait for Metro servers to initialize
5. Start Expo (port 8083)

Then:
- **Physical Device**: Install **Expo Go** app and scan QR code
- **iOS Simulator**: Press `i` in terminal
- **Android Emulator**: Press `a` in terminal

### Manual Start (Step by Step)

```bash
# Clean ports
npm run clean

# Terminal 1: Todo Metro
cd ../ToDo/app && npm run start:native

# Terminal 2: Weather Metro  
cd ../Weather/app && npm run start:native

# Wait 10 seconds, then Terminal 3:
ulimit -n 65536
npx expo start
```

## How It Works

1. **SuperAppNative** starts Expo Metro on port 8083
2. User taps "Todo" or "Weather" tab
3. React Navigation loads the screen
4. Module Federation fetches the remote module from Metro server
5. Remote module renders in SuperAppNative

**Key Feature**: Each microfrontend runs its own Metro server and SuperAppNative loads them dynamically at runtime.

## Async Boundary

```javascript
// App.js
import { withAsyncStartup } from '@module-federation/runtime';

const WrappedApp = withAsyncStartup(
  () => require('./src/App').default
);
```

This ensures Module Federation runtime initializes before the app renders.

## Mock Data

Both microfrontends use mock data (no API calls needed):
- **TodoApp**: 3 sample todos
- **WeatherApp**: Weather for 4 cities

This makes the app work perfectly on any device without network configuration.

## Ports

- SuperAppNative: 8083 (Expo Metro)
- TodoApp Metro: 8081
- WeatherApp Metro: 8082

## Troubleshooting

### EMFILE Error (Too Many Open Files)
```bash
ulimit -n 65536
npx expo start --max-workers 2
```

### For Physical Devices
Replace `localhost` with your computer's IP in `metro.config.js`:
```javascript
remotes: {
  todoApp: 'todoApp@http://192.168.x.x:8081/mf-manifest.json',
}
```

Find your IP: `ifconfig | grep "inet "`

### Metro Not Responding
Wait 10-15 seconds after starting Metro servers before loading the app. First compile takes time.

## NPM Scripts

```bash
npm start           # Start Expo
npm run android     # Start on Android emulator
npm run ios         # Start on iOS simulator
npm run clean       # Kill processes on ports 8081-8083
npm run start:all   # Clean + start all services
```

## Shared Dependencies

React and React-Native are shared as singletons (with `eager: true`) across all microfrontends.

