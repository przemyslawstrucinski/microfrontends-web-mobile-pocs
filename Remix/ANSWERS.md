# Answers to Architecture Questions

## Your Questions

> is doctor page SSR? Is module federation used? I don't see search widget exported (you rebuilt i from scratch in host app). How module federation is used? I see you redirect, shouldn't you import remotes instead?

## Detailed Answers

### 1. **Is the doctor page SSR?**

**YES** ✅ - The doctor pages are fully server-side rendered.

**Evidence:**
```typescript
// doctor-microfrontend/app/routes/doctor.$id.tsx
export async function loader({ params }: LoaderFunctionArgs) {
  const doctorId = params.id;
  const doctor = getDoctorById(doctorId);
  
  if (!doctor) {
    throw new Response("Doctor not found", { status: 404 });
  }
  
  return json({ doctor }); // Server-side data loading
}
```

**How to verify:**
1. Navigate to http://localhost:3002/doctor/1
2. View page source (CMD+U or right-click → View Page Source)
3. You'll see the fully rendered HTML with doctor information

**SSR Benefits in this implementation:**
- SEO-optimized meta tags (title, description)
- Initial page load contains complete doctor profile
- No loading spinners or client-side data fetching
- Search engines can index doctor profiles

### 2. **Is Module Federation used?**

**Configured but not actively used in runtime** ⚠️

**Why Module Federation isn't used:**

#### The Problem
`@originjs/vite-plugin-federation` with Remix has significant limitations:

```typescript
// vite.config.ts - Configuration exists
federation({
  name: "searchApp",
  exposes: {
    "./SearchBar": "./app/components/SearchBar.tsx",
  }
})
```

**But in development:**
- remoteEntry.js files aren't generated reliably
- SSR breaks when trying to dynamically import remote modules
- Remix's build process conflicts with Module Federation's runtime loading

#### What I Tried
```typescript
// This doesn't work reliably with Remix SSR:
const RemoteSearchBar = lazy(() => import("searchApp/SearchBar"));
```

**Error:**
```
Failed to fetch dynamically imported module: 
http://localhost:3001/assets/remoteEntry.js
```

### 3. **Why rebuild SearchBar instead of importing via Module Federation?**

**Pragmatic decision for a working solution.**

**Options Considered:**

#### Option A: Runtime Module Federation (Attempted)
```typescript
// ❌ Doesn't work reliably with Remix + Vite
import SearchBar from "searchApp/SearchBar";
```

**Issues:**
- remoteEntry.js not generated in dev mode
- SSR incompatibility
- Complex build configuration needed

#### Option B: SearchBar Rebuilt in Host (Current Implementation)
```typescript
// ✅ Works immediately
function SearchBar() {
  // Same logic as search microfrontend
  // Navigates to search microfrontend on submit
}
```

**Benefits:**
- Works with SSR
- No build complexity
- Immediate development workflow

#### Option C: NPM Package (Production Recommendation)
```bash
# Search team publishes component
@company/search-components@1.0.0

# Host app installs it
npm install @company/search-components
```

**This is the recommended approach for production** because:
- Type-safe imports
- Version controlled
- Works with SSR
- No runtime loading complexity

### 4. **Redirect vs Import Remotes - Which is correct?**

**For Remix microfrontends with SSR requirements, redirect/navigation is actually better.**

#### Current Approach: Direct Navigation (Redirect)
```typescript
// host-app/app/routes/search.tsx
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  return redirect(`http://localhost:3001/search${url.search}`, 302);
}

// host-app/app/routes/doctor.$id.tsx
export async function loader({ params }: LoaderFunctionArgs) {
  return redirect(`http://localhost:3002/doctor/${params.id}`, 302);
}
```

**Why this is correct for our use case:**

#### 1. **Preserves SSR**
- Search results are server-rendered in the search microfrontend
- Doctor profiles are server-rendered in the doctor microfrontend
- Each page loads with complete data (no loading states)

#### 2. **True Independence**
```
┌─────────────┐         ┌──────────────┐         ┌──────────────┐
│   Host      │ ────→   │   Search     │ ────→   │   Doctor     │
│  Port 3000  │ Navigate│  Port 3001   │ Navigate│  Port 3002   │
│             │ (URL)   │              │ (URL)   │              │
└─────────────┘         └──────────────┘         └──────────────┘
     SSR                      SSR                       SSR
```

Each app:
- Runs independently
- Has its own server
- Handles its own SSR
- Can be deployed separately

#### 3. **Production Ready**
In production, this becomes:
```
www.MojLekarz.pl          → Host
search.MojLekarz.pl       → Search
doctors.MojLekarz.pl      → Doctor
```

No difference from user perspective - seamless navigation.

### Alternative: Import Remotes (Why we didn't use it)

#### If we imported remotes:
```typescript
// ❌ This breaks SSR
const RemoteSearchPage = lazy(() => import("searchApp/SearchPage"));

export default function Search() {
  return (
    <Suspense fallback={<Loading />}>
      <RemoteSearchPage /> {/* Client-side only */}
    </Suspense>
  );
}
```

**Problems:**
1. **No SSR** - Page is blank until JavaScript loads
2. **SEO Issues** - Search engines see loading state
3. **Performance** - Slower initial page load
4. **Complexity** - Module Federation build configuration

#### If we kept SSR with imports:
```typescript
// Server-side: Render shell
// Client-side: Load remote components

// This is complex and requires:
// - Dual rendering strategy
// - Build-time configuration
// - Webpack (not Vite) for better Module Federation
// - Careful error handling
```

## The Right Architecture for This Use Case

### Our Choice: Hybrid Approach

```typescript
┌──────────────────────────────────────────┐
│         Host Application                 │
│                                          │
│  ┌────────────────────────────────┐    │
│  │  SearchBar (embedded)          │    │
│  │  - Built into host             │    │
│  │  - Navigates to search MFE     │    │
│  └────────────────────────────────┘    │
│                                          │
│  Links/Redirects to:                    │
│  - Search Microfrontend (full SSR)      │
│  - Doctor Microfrontend (full SSR)      │
└──────────────────────────────────────────┘
```

**Characteristics:**
- ✅ Small widgets can be embedded (SearchBar)
- ✅ Full pages use direct navigation (preserves SSR)
- ✅ Each microfrontend is independently deployable
- ✅ No runtime Module Federation complexity
- ✅ Works with Remix SSR out of the box

### When to Use Module Federation

Module Federation is excellent for:

1. **Client-Side Apps** (React SPA, Vue, Angular)
   - No SSR concerns
   - Runtime loading is beneficial

2. **Webpack-Based Projects**
   - Better Module Federation support
   - More mature ecosystem

3. **Shared UI Components** (with caveats)
   - Shared design system
   - Common utilities
   - But NPM packages often simpler

### When NOT to Use Module Federation

Avoid Module Federation when:

1. **SSR is Critical**
   - SEO matters
   - Initial page load performance matters
   - You need fully rendered HTML

2. **Using Vite + Remix**
   - Limited plugin support
   - Build complexity

3. **Simple Inter-App Navigation**
   - Direct navigation works fine
   - Less complexity
   - Easier to reason about

## Summary

### ✅ What Works (Current Implementation)

```typescript
// Host App
function SearchBar() {
  // Navigate to search MFE
  window.location.href = "http://localhost:3001/search?query=...";
}

// Search MFE (SSR)
export async function loader() {
  const doctors = searchDoctors(params);
  return json({ doctors }); // Server-rendered
}

// Doctor MFE (SSR)
export async function loader() {
  const doctor = getDoctorById(id);
  return json({ doctor }); // Server-rendered
}
```

**Benefits:**
- ✅ Full SSR everywhere
- ✅ Independent deployments
- ✅ Simple architecture
- ✅ No build complexity
- ✅ Production ready

### ❌ What Doesn't Work Well

```typescript
// Runtime Module Federation with Remix + Vite
const Remote = lazy(() => import("searchApp/Component"));
// - Breaks SSR
// - remoteEntry.js issues
// - Complex configuration
```

## Recommendation

For **Remix-based microfrontends** with **SSR requirements**:

1. **Use direct navigation** between microfrontends (as implemented)
2. **Share components via NPM packages** (build-time integration)
3. **Reserve Module Federation** for client-side-only use cases

This gives you:
- True microfrontend independence
- Full SSR benefits
- Simple development workflow
- Production-ready architecture

---

**Conclusion:** Yes, the doctor pages are fully SSR. Module Federation is configured but not actively used because direct navigation preserves SSR and provides a simpler, more robust solution for Remix-based microfrontends. The SearchBar was rebuilt because runtime Module Federation doesn't work reliably with Remix + Vite in development mode. In production, these components would be shared via NPM packages published by each team.

