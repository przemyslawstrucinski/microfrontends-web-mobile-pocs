# GatsbyDoctor - Doctor Profiles Microfrontend

Doctor profile pages with Deferred Static Generation (DSG) for optimal SEO.

## Features

- Individual doctor profile pages
- DSG-enabled for SEO optimization
- Detailed doctor information
- Education, languages, availability
- Contact information
- Mock data for 8 doctors

## Port

9002 (http://localhost:9002)

## DSG Configuration

Uses Gatsby's `createPages` API with `defer: true` to generate doctor pages on-demand.

## Development

```bash
npm install
npm run develop
```

Access profiles at:
- http://localhost:9002/doctor/1
- http://localhost:9002/doctor/2
- etc.

## Build

```bash
npm run build
npm run serve
```

## Dependencies

- gatsby ^5.13.0
- react ^18.2.0
- tailwindcss ^3.4.1

## Key Files

- `gatsby-node.js`: DSG configuration with createPages API
- `src/templates/DoctorProfile.tsx`: Doctor profile template
- `src/pages/index.tsx`: All doctors listing page
- `src/data/mockDoctors.ts`: Mock doctor data

## How DSG Works

1. `gatsby-node.js` creates pages for each doctor
2. Pages are marked with `defer: true`
3. On first request, page is generated and cached
4. Subsequent requests serve cached version
5. Great for SEO and scalability

