import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';
import { moduleFederationPlugin } from '@module-federation/modern-js';
import { garfishPlugin } from '@modern-js/plugin-garfish';

export default defineConfig({
  runtime: {
    router: true,
  },
  deploy: {
    microFrontend: true,
  },
  server: {
    port: 8081,
  },
  dev: {
    port: 8081,
  },
  output: {
    assetPrefix: 'http://localhost:8081/',
  },
  source: {
    enableAsyncEntry: true,
  },
  plugins: [
    appTools({
      bundler: 'webpack',
    }),
    tailwindcssPlugin(),
    moduleFederationPlugin(),
    garfishPlugin(),
  ],
});

