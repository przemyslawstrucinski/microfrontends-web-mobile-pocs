const { getDefaultConfig } = require('expo/metro-config');
const { MetroFederationPlugin } = require('@module-federation/metro');

const config = getDefaultConfig(__dirname);

// Configure Module Federation
config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

// Add Module Federation plugin
const federationPlugin = new MetroFederationPlugin({
  name: 'GatsbyMobileHost',
  remotes: {
    SearchMFE: 'SearchMFE@http://localhost:8091/mf-manifest.json',
    DoctorMFE: 'DoctorMFE@http://localhost:8092/mf-manifest.json',
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
    },
    'react-native': {
      singleton: true,
      eager: true,
    },
  },
});

module.exports = federationPlugin.applyConfig(config);

