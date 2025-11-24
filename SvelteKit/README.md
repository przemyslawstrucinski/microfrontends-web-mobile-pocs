# SvelteKit Microfrontends - Doctor Booking Platform

A proof-of-concept microfrontend architecture using SvelteKit and Module Federation.

---

## ⚠️ Known Limitation: Module Federation Incompatibility

**Module Federation does not work with SvelteKit** due to fundamental incompatibilities between `@originjs/vite-plugin-federation` and SvelteKit's architecture. This is a proof-of-concept that demonstrates the architectural approach, but **the federated component loading will fail at runtime**.

### Root Cause

There are two critical issues that prevent Module Federation from working with SvelteKit:

#### 1. Development Mode: `remoteEntry.js` Not Generated

The `@originjs/vite-plugin-federation` plugin **only generates the `remoteEntry.js` file during production builds** (`vite build`), not during development mode (`vite dev`). This means:

- In dev mode, the host app cannot load remote modules because `http://localhost:5001/assets/remoteEntry.js` returns 404
- Hot Module Replacement (HMR) is not supported for federated modules
- Development workflow requires building and running in preview mode, which is impractical

#### 2. SSR Build: Virtual Module Resolution Failure

When attempting to build for production, SvelteKit's SSR build process fails because:

- The federation plugin creates virtual modules (e.g., `virtual:__federation_fn_import`, `__federation_fn_satisfy`)
- SvelteKit runs both client and SSR builds automatically
- The SSR build cannot resolve these virtual modules, causing build failures with errors like:
  ```
  Rollup failed to resolve import "__federation_fn_satisfy" from "virtual:__federation_fn_import"
  ```
- Attempting to externalize these modules causes "Entry module cannot be external" errors

### Documentation References

- **vite-plugin-federation GitHub**: https://github.com/originjs/vite-plugin-federation
  - The plugin documentation does not mention SvelteKit support
  - Known issues with dev mode and HMR: https://github.com/originjs/vite-plugin-federation/issues
  
- **SvelteKit Discussion on Module Federation**: https://github.com/sveltejs/kit/discussions/13455
  - Community discussion about the challenges of integrating Module Federation with SvelteKit
  
- **vite-plugin-federation Dev Mode Limitations**: https://medium.com/@krishan101090/we-were-facing-an-issue-in-development-mode-where-the-remoteentry-js-05b1d74e366e
  - Documents the `remoteEntry.js` not being served in development mode

### Alternative Approaches for SvelteKit Microfrontends

If you need microfrontends with SvelteKit, consider these alternatives:

1. **Iframe Embedding**: Embed micro-frontends using iframes for complete isolation
2. **Web Components**: Build micro-frontends as Web Components that can be loaded dynamically
3. **`@module-federation/vite`**: An alternative plugin that may have better dev mode support (not tested with SvelteKit SSR)
4. **Static Site Generation (SSG)**: Disable SSR and use static adapter to avoid SSR build conflicts
5. **Zones Pattern**: Use simple HTTP redirects/proxying between independent SvelteKit apps (similar to Next.js Zones)

### Current State

This demo shows the **intended architecture** but the SearchWidget component will display an error message:

> "Failed to load search component. Please ensure the Search MFE is running on port 5001."

This error occurs because the Module Federation integration cannot work due to the limitations described above.
