import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';
import { garfishPlugin } from '@modern-js/plugin-garfish';

export default defineConfig({
  runtime: {
    router: true,
  },
  deploy: {
    microFrontend: true,
  },
  server: {
    port: 8082,
    ssr: true,
  },
  dev: {
    port: 8082,
  },
  output: {
    assetPrefix: 'http://localhost:8082/',
  },
  plugins: [
    appTools({
      bundler: 'webpack',
    }),
    tailwindcssPlugin(),
    garfishPlugin(),
  ],
});

