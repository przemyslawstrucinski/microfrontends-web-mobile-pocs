# Architecture & Module Federation Considerations

## Current Implementation

This project demonstrates a **microfrontend architecture** with Remix using a **hybrid approach** that balances the benefits of Module Federation with the practical limitations of Remix SSR.

## Module Federation Challenges with Remix + Vite

### The Problem

`@originjs/vite-plugin-federation` has limitations when used with Remix:

1. **SSR Incompatibility**: Module Federation loads modules dynamically at runtime, which doesn't work during SSR
2. **Development Mode Issues**: remoteEntry.js files aren't reliably generated in Vite dev mode
3. **Build Complexity**: Requires careful configuration of build outputs and module resolution

### What We've Configured

The vite.config.ts files include Module Federation setup:
- Host app configured to consume remotes
- Microfrontends configured to expose components
- Shared dependencies (React, React-DOM)

However, in practice, **Module Federation works better with Webpack** or requires **significant additional configuration** for Remix + Vite.

## Architectural Solution

### Approach: Independent Microfrontends with Direct Navigation

Instead of runtime Module Federation, we use:

#### 1. **Separate Applications** (True Microfront architecture)
- Each microfrontend runs independently
- Each has its own server, routes, and data loading
- Can be deployed separately to different domains

#### 2. **Direct Navigation** (For SSR pages)
```typescript
// Host app routes/search.tsx
export async function loader() {
  return redirect("http://localhost:3001/search");
}
```

**Benefits:**
- ✅ Full SSR support
- ✅ Each microfrontend independently deployable
- ✅ No client-side bundling complexity  
- ✅ SEO-friendly
- ✅ Optimal performance

#### 3. **Shared Components** (Future Enhancement)
For components that truly need embedding, use:
- **NPM packages**: Build-time integration
- **iFrames**: For isolated embedding
- **Web Components**: Framework-agnostic approach

## Real-World Microfrontend Patterns

### Pattern 1: Domain-Based Routing (Recommended for Production)

```
Main App:     https://MojLekarz.com          (Host - homepage, navigation)
Search:       https://search.MojLekarz.com   (Search microfrontend)
Doctors:      https://doctors.MojLekarz.com  (Doctor profiles)
```

**Implementation:**
- Reverse proxy (nginx/CloudFront) routes to appropriate services
- Each service is independently deployed
- SSR maintained in each service
- True microservice architecture

### Pattern 2: Build-Time Integration

```bash
# Publish shared components as NPM packages
search-components@1.0.0
doctor-components@1.0.0

# Install in host app
npm install @company/search-components
npm install @company/doctor-components
```

**Benefits:**
- Type-safe imports
- No runtime loading
- Works with SSR
- Version controlled

### Pattern 3: iframe Integration

```tsx
<iframe 
  src="http://localhost:3001/search" 
  style={{ width: '100%', border: 'none' }}
/>
```

**Use Cases:**
- Complete isolation needed
- Different frameworks
- Legacy system integration

## Current Project Structure

```
┌─────────────────────────────────────────┐
│         Host App (Port 3000)            │
│  - Homepage with navigation             │
│  - Redirects to microfrontends          │
└────────────┬────────────────────────────┘
             │
       ┌─────┴─────┐
       │           │
┌──────▼─────┐ ┌──▼──────────┐
│  Search    │ │   Doctor    │
│ (Port 3001)│ │ (Port 3002) │
│            │ │             │
│ - /search  │ │ - /doctor/:id│
│ - SSR      │ │ - SSR       │
│ - Filters  │ │ - Reviews   │
└────────────┘ └─────────────┘
```

## Benefits of This Approach

### 1. **True Independence**
- Each team owns their microfrontend completely
- Separate repositories
- Separate deployments
- Separate scaling

### 2. **SSR Preserved**
- Doctor profiles are server-rendered
- Search results are server-rendered
- Optimal SEO and performance

### 3. **Technology Flexibility**
- Each microfrontend could use different Remix versions
- Different dependencies
- Different deployment strategies

### 4. **Simpler Development**
- No complex build configurations
- Standard Remix development workflow
- Clear boundaries

## Future Enhancements

If true runtime Module Federation is required:

### Option A: Use Webpack
Replace Vite with Webpack, which has better Module Federation support:
- `@module-federation/webpack-5`
- Better SSR support
- More mature ecosystem

### Option B: Use Module Federation for Client-Only Components
- Server-render the page shell
- Hydrate with remote components client-side
- Requires careful error handling and fallbacks

### Option C: Server Components
When React Server Components become stable:
- Better SSR + component sharing story
- Native to React
- Framework-level support

## Testing Strategy

### 1. Integration Testing
Test navigation between microfrontends:
```bash
# Test flow
Homepage → Search → Doctor Profile
```

### 2. Independent Testing
Each microfrontend tests independently:
```bash
cd search-microfrontend
npm test
```

### 3. E2E Testing
Use Playwright/Cypress to test full user flows across microfrontends

## Deployment Recommendations

### Development
```bash
# Run all three in parallel (as demonstrated)
Terminal 1: cd search-microfrontend && npm run dev
Terminal 2: cd doctor-microfrontend && npm run dev
Terminal 3: cd host-app && npm run dev
```

### Production

**Option 1: Separate Services**
```bash
# Each microfrontend deployed separately
search.example.com → search-microfrontend
doctors.example.com → doctor-microfrontend
www.example.com → host-app
```

**Option 2: Monorepo with Independent Deployments**
```
apps/
  ├── host-app/
  ├── search-microfrontend/
  └── doctor-microfrontend/
```
Deploy each app independently but manage code in single repo

## Conclusion

This architecture prioritizes:
- ✅ **SSR** and performance over pure Module Federation
- ✅ **Independence** of teams and deployments
- ✅ **Simplicity** of development workflow
- ✅ **Scalability** through clear boundaries

While Module Federation is powerful, for Remix-based microfrontends with SSR requirements, **direct navigation and independent services** provide a more robust and maintainable solution.

