# 🚀 Quick Start Guide

Get the Astro Microfrontends PoC running in under 5 minutes!

## Prerequisites

Make sure you have installed:
- **Node.js** 18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)

Check your versions:
```bash
node --version  # Should be v18 or higher
npm --version
```

## Option 1: Automated Start (Recommended for macOS/Linux)

Run all three applications with a single script:

```bash
cd AstroMicrofrontends
./start-all.sh
```

This will:
1. Install dependencies for all three apps (if needed)
2. Start all applications in the background
3. Show you the URLs to access each app

**URLs after startup:**
- 🏠 HostApp: http://localhost:4000
- 🔍 SearchMFE: http://localhost:4001/search
- 👨‍⚕️ DoctorMFE: http://localhost:4002/doctor

**To stop all apps:**
```bash
./stop-all.sh
```

## Option 2: Manual Start (Works on all platforms)

### Step 1: Install Dependencies

```bash
# From the AstroMicrofrontends directory
cd HostApp && npm install && cd ..
cd SearchMFE && npm install && cd ..
cd DoctorMFE && npm install && cd ..
```

Or use the root package.json:
```bash
npm run install:all
```

### Step 2: Start Applications

Open **three separate terminal windows** and run:

**Terminal 1 - HostApp:**
```bash
cd AstroMicrofrontends/HostApp
npm run dev
```

**Terminal 2 - SearchMFE:**
```bash
cd AstroMicrofrontends/SearchMFE
npm run dev
```

**Terminal 3 - DoctorMFE:**
```bash
cd AstroMicrofrontends/DoctorMFE
npm run dev
```

### Step 3: Access the Applications

Wait about 10 seconds for all apps to start, then open:
- http://localhost:4000 (Start here!)

## 🎯 What to Try

1. **Homepage (HostApp)**
   - Use the search widget to search for doctors
   - Click on specialty cards
   - Check out the navigation

2. **Search Page (SearchMFE)**
   - Search by doctor name: "Anna"
   - Filter by specialty: "Kardiolog"
   - Filter by location: "Warsaw"
   - Click "View Profile" on a doctor card

3. **Doctor Profile (DoctorMFE)**
   - View doctor details and reviews
   - Book an appointment (click on a time slot)
   - See available appointment times

## 🐛 Troubleshooting

### Port Already in Use

If you see an error like "Port 4000 is already in use":

```bash
# Kill processes on specific ports (macOS/Linux)
lsof -ti:4000 | xargs kill -9
lsof -ti:4001 | xargs kill -9
lsof -ti:4002 | xargs kill -9

# Or use the stop script
./stop-all.sh
```

On Windows:
```bash
# Find and kill process on port 4000
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

### Dependencies Installation Failed

If npm install fails:

```bash
# Clear npm cache
npm cache clean --force

# Try again
cd HostApp && npm install
```

### Applications Won't Start

1. Check Node.js version: `node --version` (should be v18+)
2. Delete node_modules and try again:
   ```bash
   rm -rf HostApp/node_modules SearchMFE/node_modules DoctorMFE/node_modules
   npm run install:all
   ```

### Browser Shows Errors

1. Make sure all three applications are running
2. Check terminal output for errors
3. Try hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)

## 📁 Project Structure at a Glance

```
AstroMicrofrontends/
├── HostApp/           ← Main app (Port 4000)
├── SearchMFE/         ← Search microfrontend (Port 4001)
├── DoctorMFE/         ← Doctor microfrontend (Port 4002)
├── start-all.sh       ← Auto-start script
├── stop-all.sh        ← Stop all apps script
└── README.md          ← Full documentation
```

## 🎓 Learning Path

1. **Start Here**: Read the main [README.md](./README.md)
2. **Explore SearchMFE**: Check [SearchMFE/README.md](./SearchMFE/README.md)
3. **Understand DoctorMFE**: Read [DoctorMFE/README.md](./DoctorMFE/README.md)
4. **Host Integration**: See [HostApp/README.md](./HostApp/README.md)

## 🔧 Useful Commands

```bash
# Install all dependencies
npm run install:all

# Build all applications
npm run build:all

# Clean everything (node_modules, dist, logs)
npm run clean

# Run individual apps
npm run dev:host
npm run dev:search
npm run dev:doctor
```

## 💡 Key Concepts

- **Independent Apps**: Each MFE runs on its own port
- **No File Sharing**: Microfrontends don't import from each other
- **Widget Pattern**: SearchWidget simulates an npm package
- **Nanostores**: Reactive state management within each MFE
- **Cross-Navigation**: Apps navigate via full URLs

## 🎉 Next Steps

Once everything is running:

1. Explore the code in each microfrontend
2. Try modifying components (hot reload will update automatically)
3. Check out the state management with Nanostores
4. Experiment with the SearchWidget integration

## 📚 More Information

- [Astro Documentation](https://docs.astro.build/)
- [Nanostores Guide](https://github.com/nanostores/nanostores)
- [Microfrontends Concepts](https://martinfowler.com/articles/micro-frontends.html)

---

**Need help?** Check the main README.md or create an issue!

