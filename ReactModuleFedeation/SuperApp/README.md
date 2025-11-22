# SuperApp (Web) - Module Federation Host

Web host application using **Webpack Module Federation** to dynamically load microfrontends.

## Architecture

- **Platform**: Web only
- **Bundler**: Webpack 5
- **Module Federation**: Webpack Module Federation
- **React**: 19.0.0
- **Router**: React Router

## Microfrontends

SuperApp loads these remote microfrontends at runtime:

| Microfrontend | URL | Port |
|--------------|-----|------|
| TodoApp | http://localhost:3001/remoteEntry.js | 3001 |
| WeatherApp | http://localhost:3002/remoteEntry.js | 3002 |
| WeatherSSR | http://localhost:3003 (Next.js SSR) | 3003 |

## Module Federation Config

```javascript
// webpack.config.js
remotes: {
  todoApp: 'todoApp@http://localhost:3001/remoteEntry.js',
  weatherApp: 'weatherApp@http://localhost:3002/remoteEntry.js',
}
```

## Running Locally

### First: Kill All Old Processes

If you get "port already in use" errors:

```bash
# From project root
cd ..
./kill-all.sh
cd SuperApp
```

### Quick Start (One Command)

```bash
# First time: Install dependencies
npm install
cd ../ToDo/api && npm install && cd -
cd ../ToDo/app && npm install && cd -
cd ../Weather/api && npm install && cd -
cd ../Weather/app && npm install && cd -
cd ../Weather/app/ssr && npm install && cd -

# Start everything (cleans ports and starts all services)
./start-all.sh
```

This script will:
1. Kill any processes on ports 3000-3003, 4000-4001
2. Start Todo & Weather APIs
3. Start Todo & Weather microfrontends
4. Start Weather SSR
5. Start SuperApp

Open http://localhost:3000

### Manual Start (Step by Step)

```bash
# Clean ports
npm run clean

# Terminal 1: Todo API
cd ../ToDo/api && npm start

# Terminal 2: Weather API
cd ../Weather/api && npm start

# Terminal 3: Todo App
cd ../ToDo/app && npm run start:web

# Terminal 4: Weather App
cd ../Weather/app && npm run start:web

# Terminal 5: Weather SSR
cd ../Weather/app/ssr && npm run dev

# Terminal 6: SuperApp
npm start
```

## How It Works

1. **SuperApp** runs on port 3000
2. User navigates to `/todo` or `/weather`
3. React Router loads the route
4. Module Federation dynamically fetches the remote module
5. Remote module renders in SuperApp

**Key Feature**: Each microfrontend can be deployed independently and SuperApp will fetch the latest version at runtime.

## Ports

- SuperApp: 3000
- TodoApp: 3001
- WeatherApp: 3002
- WeatherSSR: 3003
- Todo API: 4000 (if using real API)
- Weather API: 4001 (if using real API)

## NPM Scripts

```bash
npm start        # Start SuperApp (port 3000)
npm run build    # Build for production
npm run clean    # Kill processes on ports 3000-3003, 4000-4001
./start-all.sh   # Clean + start all services
```

## Shared Dependencies

React and React-DOM are shared as singletons across all microfrontends to avoid duplication.

