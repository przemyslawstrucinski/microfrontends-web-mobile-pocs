# React Microfrontend Architecture

Module Federation implementation for **Web** and **React Native** platforms.

## Structure

```
reactMF/
├── SuperApp/              # Web host (Webpack Module Federation)
├── SuperAppNative/        # React Native host (Metro Module Federation)
├── ToDo/
│   ├── api/              # NestJS backend
│   └── app/              # Microfrontend (works on web & native)
└── Weather/
    ├── api/              # NestJS backend
    └── app/              # Microfrontend (works on web & native)
        └── ssr/          # Next.js SSR (web only)
```

## Key Principle

**One microfrontend codebase works on both platforms:**
- Same React components
- Different bundlers (Webpack for web, Metro for native)
- Different Module Federation configs

## Getting Started

### Kill All Services (If Needed)

If ports are already in use or you need a fresh start:

```bash
./kill-all.sh
```

This kills all processes on ports 3000-3003, 4000-4001, 8081-8083 and all Expo/Metro/Webpack processes.

### Web Platform
See [SuperApp/README.md](./SuperApp/README.md)

**Quick start:**
```bash
cd SuperApp
npm install
npm start
```

### React Native Platform
See [SuperAppNative/README.md](./SuperAppNative/README.md)

**Quick start:**
```bash
cd SuperAppNative
npm install --legacy-peer-deps
npm run start:all
```

## Technologies

- **Frontend**: React, React Native
- **Bundlers**: Webpack (web), Metro (native)
- **Module Federation**: @module-federation/enhanced (web), @module-federation/metro (native)
- **Backend**: NestJS
- **SSR**: Next.js (web weather module)
- **Navigation**: React Router (web), React Navigation (native)

## Microfrontend Benefits

✅ **Independent Development** - Each team owns their microfrontend  
✅ **Independent Deployment** - Deploy microfrontends separately  
✅ **Runtime Integration** - No build-time dependencies  
✅ **Technology Freedom** - Each microfrontend can use different versions  
✅ **Code Sharing** - Shared dependencies loaded once  

## Architecture

### Web (Webpack)
```
SuperApp (3000)
  ↓ loads via remoteEntry.js
  ├─→ TodoApp (3001)
  ├─→ WeatherApp (3002)
  └─→ WeatherSSR (3003)
```

### Native (Metro)
```
SuperAppNative (8083)
  ↓ loads via mf-manifest.json
  ├─→ TodoApp (8081)
  └─→ WeatherApp (8082)
```

Both use **Module Federation** to load microfrontends dynamically at runtime.
