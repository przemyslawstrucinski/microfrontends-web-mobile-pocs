# GatsbyHostApp - Main Shell Application

The main host application that consumes microfrontends via Module Federation.

## Features

- Homepage with hero section
- Embedded SearchWidget from GatsbySearch MFE
- Features showcase
- Popular specialties grid
- Navigation to other MFEs

## Port

9000 (http://localhost:9000)

## Module Federation Setup

Consumes:
- `gatsby_search_mfe/SearchWidget` from http://localhost:9001

## Development

```bash
npm install
npm run develop
```

## Build

```bash
npm run build
npm run serve
```

## Dependencies

- gatsby ^5.13.0
- react ^18.2.0
- @module-federation/enhanced ^0.2.0
- tailwindcss ^3.4.1

## Key Files

- `gatsby-node.js`: Module Federation consumer configuration
- `src/pages/index.tsx`: Homepage with SearchWidget
- `src/components/Layout.tsx`: Main layout with navigation

