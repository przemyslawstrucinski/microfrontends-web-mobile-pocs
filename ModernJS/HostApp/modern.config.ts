import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';
import { garfishPlugin } from '@modern-js/plugin-garfish';
import { moduleFederationPlugin } from '@module-federation/modern-js';

export default defineConfig({
  runtime: {
    router: true,
    masterApp: {
      apps: [
        {
          name: 'search',
          entry: 'http://localhost:8081/',
          activeWhen: (location: Location) => location.pathname.startsWith('/search'),
        },
        {
          name: 'doctor',
          entry: 'http://localhost:8082/',
          activeWhen: (location: Location) => location.pathname.startsWith('/doctor'),
        },
      ],
    },
  },
  server: {
    port: 8080,
  },
  dev: {
    port: 8080,
  },
  output: {
    assetPrefix: 'http://localhost:8080/',
  },
  source: {
    enableAsyncEntry: true,
  },
  plugins: [
    appTools({
      bundler: 'webpack',
    }),
    tailwindcssPlugin(),
    garfishPlugin(),
    moduleFederationPlugin(),
  ],
});

