import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'search_mfe',
  filename: 'remoteEntry.js',
  exposes: {
    './SearchWidget': './src/components/SearchWidget',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});

