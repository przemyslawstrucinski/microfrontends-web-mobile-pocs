# Astro Microfrontends PoC

This is a Proof of Concept (PoC) demonstrating a **microfrontend architecture** using **Astro**, **React**, **Nanostores** for state management, and **Tailwind CSS** for styling.

## 🏗️ Architecture Overview

This project consists of three independent applications:

1. **HostApp** (Port 4000) - Main application shell
2. **SearchMFE** (Port 4001) - Search microfrontend with shared widget
3. **DoctorMFE** (Port 4002) - Doctor profile microfrontend

Each microfrontend is a **completely independent repository** with no direct file references between them. They can be developed, deployed, and scaled independently.

## 🎯 Key Features

- **Independent Deployments**: Each microfrontend runs on its own port and can be deployed separately
- **Shared Widget**: SearchWidget from SearchMFE is consumed by HostApp (simulates npm package)
- **State Management**: Nanostores for reactive, framework-agnostic state management
- **Modern Stack**: Astro + React + TypeScript + Tailwind CSS
- **No Backend Required**: Uses mock data for demonstration

## 📁 Project Structure

```
AstroMicrofrontends/
├── HostApp/           # Main application (Port 4000)
│   ├── src/
│   │   ├── components/
│   │   │   └── Navigation.tsx
│   │   ├── pages/
│   │   │   └── index.astro (embeds SearchWidget via iframe)
│   │   └── styles/
│   └── package.json
│
├── SearchMFE/         # Search microfrontend (Port 4001)
│   ├── src/
│   │   ├── components/
│   │   │   ├── DoctorCard.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── SearchWidget.tsx
│   │   ├── data/
│   │   │   └── mockData.ts
│   │   ├── store/
│   │   │   └── searchStore.ts (Nanostores)
│   │   ├── utils/
│   │   │   └── filterDoctors.ts
│   │   └── pages/
│   │       ├── index.astro
│   │       └── widget.astro (embeddable widget endpoint)
│   └── package.json
│
└── DoctorMFE/         # Doctor profile microfrontend (Port 4002)
    ├── src/
    │   ├── components/
    │   │   ├── ProfileHeader.tsx
    │   │   ├── AppointmentBooking.tsx
    │   │   └── ReviewsList.tsx
    │   ├── data/
    │   │   └── mockData.ts
    │   ├── store/
    │   │   └── doctorStore.ts (Nanostores)
    │   └── pages/
    │       ├── index.astro
    │       └── [id].astro
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation & Running

You need to run all three applications simultaneously. Open three terminal windows:

#### Terminal 1 - HostApp
```bash
cd AstroMicrofrontends/HostApp
npm install
npm run dev
```
Access at: http://localhost:4000

#### Terminal 2 - SearchMFE
```bash
cd AstroMicrofrontends/SearchMFE
npm install
npm run dev
```
Access at: http://localhost:4001/search

#### Terminal 3 - DoctorMFE
```bash
cd AstroMicrofrontends/DoctorMFE
npm install
npm run dev
```
Access at: http://localhost:4002/doctor

## 🔗 Navigation Flow

1. **Homepage** (HostApp - Port 4000)
   - Displays SearchWidget (shared from SearchMFE)
   - Links to both microfrontends
   
2. **Search Page** (SearchMFE - Port 4001)
   - Search and filter doctors
   - Links to doctor profiles
   
3. **Doctor Profile** (DoctorMFE - Port 4002)
   - View doctor details
   - Book appointments
   - Read reviews

## 📦 State Management with Nanostores

Both microfrontends use **Nanostores** for state management:

### SearchMFE Store
```typescript
// searchStore.ts
import { atom, map } from 'nanostores';

export const searchFilters = map<SearchFilters>({
  specialty: '',
  location: '',
  query: '',
});

export const searchResults = atom<Doctor[]>(mockDoctors);
```

### DoctorMFE Store
```typescript
// doctorStore.ts
import { atom } from 'nanostores';

export const currentDoctor = atom<DoctorProfile | null>(null);
export const appointments = atom<Appointment[]>([]);
export const reviews = atom<Review[]>([]);
```

## 🎨 Shared Components (Runtime Script Loading)

The **SearchWidget** demonstrates true microfrontend independence using **runtime script loading**:

### How It Works

1. **SearchMFE exposes** the widget as a JavaScript module at `/search/widget-standalone.js`
2. **HostApp loads** the script dynamically at runtime (not build time)
3. **Widget mounts** into a container div via JavaScript
4. **Zero code duplication** - single source of truth in SearchMFE
5. **Independent deployment** - widget updates automatically when SearchMFE deploys

### Why This Approach?

**Astro Islands Problem:**
- Astro Islands need components at build time
- Separate repos = can't import directly
- `import { Widget } from 'other-repo'` won't work

**Why Not Iframe:**
- ❌ Styling limitations & fixed sizing
- ❌ Poor communication
- ❌ SEO & accessibility issues

**Runtime Script Loading:**
- ✅ Loaded dynamically from SearchMFE
- ✅ Seamless integration (no iframe)
- ✅ True independence
- ✅ Better UX than iframe

This is similar to **Module Federation** but simpler and framework-agnostic.

## 🔧 Technology Stack

- **Framework**: [Astro](https://astro.build/) - Modern web framework with Islands architecture
- **UI Library**: [React 19](https://react.dev/) - Interactive components
- **State Management**: [Nanostores](https://github.com/nanostores/nanostores) - Tiny state manager
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- **Language**: TypeScript - Type safety
- **Build Tool**: Vite - Fast builds
- **Integration**: Runtime script loading for cross-MFE component sharing

## 🌟 Key Differences from NextJsZones

1. **Framework**: Uses Astro instead of Next.js
2. **State Management**: Uses Nanostores instead of Zustand
3. **Routing**: Each microfrontend has independent routing via Astro
4. **Integration**: Cross-origin navigation between microfrontends
5. **Islands Architecture**: Astro's selective hydration for better performance

## 📝 Production Considerations

For production deployment:

1. **Separate Repositories**: Each microfrontend should be in its own Git repository
2. **CI/CD Pipelines**: Independent deployment pipelines for each app
3. **Shared Packages**: Publish shared components (like SearchWidget) to npm
4. **API Gateway**: Use a reverse proxy (nginx, API Gateway) to route requests
5. **CORS Configuration**: Configure CORS for cross-origin communication
6. **Version Management**: Semantic versioning for shared packages
7. **Monitoring**: Independent monitoring and logging for each microfrontend

## 🎯 Use Cases

This architecture is ideal for:

- Large teams working on different features
- Different release cycles for different parts of the app
- Technology diversity (mixing frameworks)
- Independent scaling of features
- Gradual migration from monolith to microservices

## 📚 Learning Resources

- [Astro Documentation](https://docs.astro.build/)
- [Nanostores Documentation](https://github.com/nanostores/nanostores)
- [Microfrontends.dev](https://microfrontends.dev/)
- [Astro Islands](https://docs.astro.build/en/concepts/islands/)

## 🤝 Contributing

This is a PoC project. Feel free to experiment and extend it!

## 📄 License

MIT License - feel free to use this for learning and experimentation.

