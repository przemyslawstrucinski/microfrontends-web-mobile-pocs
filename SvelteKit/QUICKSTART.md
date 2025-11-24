# SvelteKit Microfrontends - Quick Start Guide

Get up and running with the SvelteKit microfrontends implementation in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- Ports 5000, 5001, 5002 available

## Quick Start (Recommended)

### Option 1: Automated Start

```bash
cd SvelteKit
./start-all.sh
```

Wait for all services to start (about 30-60 seconds), then open:
- **http://localhost:5000** (Host App - Start here!)

### Option 2: Manual Start

Open three terminal windows:

**Terminal 1:**
```bash
cd SvelteKit/SvelteKitSearch
npm install
npm run dev
```

**Terminal 2:**
```bash
cd SvelteKit/SvelteKitDoctor
npm install
npm run dev
```

**Terminal 3:**
```bash
cd SvelteKit/SvelteKitHost
npm install
npm run dev
```

## What to Try

1. **Homepage** (http://localhost:5000)
   - See the SearchWidget loaded from Search MFE via Module Federation
   - Click on a specialty to filter searches

2. **Search Doctors** 
   - Use the search widget on homepage
   - Or visit http://localhost:5001/search directly
   - Try filters: name, specialty, location

3. **View Doctor Profile**
   - Click any doctor card in search results
   - See SSR-enabled profile at http://localhost:5002/doctor/[id]
   - Example: http://localhost:5002/doctor/1

## Stopping

```bash
./stop-all.sh
```

Or press `Ctrl+C` in each terminal window.

## Troubleshooting

### Port in Use?
```bash
./stop-all.sh
# Or manually:
lsof -ti :5000,5001,5002 | xargs kill -9
```

### Module Federation Error?
- Make sure Search MFE (port 5001) is running **before** Host App (port 5000)
- Check: http://localhost:5001/assets/remoteEntry.js should be accessible

### Need to Rebuild?
```bash
cd SvelteKitSearch
rm -rf .svelte-kit node_modules
npm install
npm run dev
```

## Architecture Summary

```
┌─────────────────────────────────────────────────────────────┐
│                     Host App (5000)                          │
│  ┌───────────────────────────────────────────────────────┐  │
│  │         Embeds SearchWidget via Module Federation     │  │
│  └───────────────────────────────────────────────────────┘  │
│                           │                                  │
│                           ▼                                  │
│              ┌────────────────────────┐                      │
│              │  Search MFE (5001)     │                      │
│              │  - Exposes SearchWidget│                      │
│              │  - Full search page    │                      │
│              └────────────────────────┘                      │
│                           │                                  │
│                           ▼                                  │
│              ┌────────────────────────┐                      │
│              │  Doctor MFE (5002)     │                      │
│              │  - SSR Doctor profiles │                      │
│              └────────────────────────┘                      │
└─────────────────────────────────────────────────────────────┘
```

## Key Features Demonstrated

✅ **Module Federation** - SearchWidget shared at runtime  
✅ **SSR** - Doctor profiles server-rendered  
✅ **Independent Apps** - Each runs on its own port  
✅ **Type Safety** - Full TypeScript support  
✅ **Modern UI** - TailwindCSS styling  

## Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Explore the code in each microfrontend
- Try modifying the SearchWidget and see it update in the Host App
- Add a new doctor to the mock data

## Need Help?

Check the [README.md](./README.md) troubleshooting section or review the configuration files in each application.

---

**Happy coding! 🚀**

