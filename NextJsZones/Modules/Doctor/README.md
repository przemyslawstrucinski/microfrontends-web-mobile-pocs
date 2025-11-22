# Doctor Module

A microfrontend module for viewing doctor profiles and booking appointments, part of the SuperApp ecosystem.

## Architecture

This is an Nx monorepo containing:
- **Web**: Next.js 15 application with Tailwind CSS
- **Mobile**: React Native/Expo application
- **Shared**: Common business logic, types, and state management

## Structure

```
Doctor/
├── api/               # Reserved for future API implementation
├── app/
│   ├── shared/        # Shared logic (Zustand stores, types, utils)
│   ├── mobile/        # React Native mobile module
│   └── web/           # Next.js web application
├── nx.json            # Nx workspace configuration
└── package.json       # Root package.json with workspaces
```

## Tech Stack

- **Web**: Next.js 15, React 19, Tailwind CSS, Zustand
- **Mobile**: Expo SDK 54, React Native, Zustand
- **Tooling**: Nx, TypeScript, ESLint, Prettier

## Getting Started

### Prerequisites
- Node.js 18+
- Yarn

### Installation

```bash
# Install dependencies
yarn install

# Run web app (port 3002)
yarn web:dev

# Run mobile app
yarn mobile:start
```

## Development

### Web Module
The web module runs on port 3002 with basePath `/doctor` for multizone support.

```bash
cd app/web
yarn dev
```

### Mobile Module
The mobile module exports screens that can be loaded by the SuperAppMobile orchestrator.

```bash
cd app/mobile
yarn start
```

### Shared Logic
Common logic is in `app/shared` including:
- TypeScript types for doctors, appointments, reviews
- Zustand stores for state management
- Mock data for development
- Utility functions

## Features

- Doctor profile display with photo, bio, and ratings
- Appointment booking interface
- Patient reviews section
- Education and language information
- Available time slots grid

## Integration

This module is designed to work as part of a larger microfrontend architecture:
- Web module integrates with SuperAppWeb via Next.js multizones
- Mobile module can be loaded dynamically using re.pack module federation

