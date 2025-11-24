const { MetroFederationPlugin } = require('@module-federation/metro');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const federationPlugin = new MetroFederationPlugin({
  name: 'DoctorMFE',
  exposes: {
    './DoctorList': './src/DoctorList',
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

module.exports = federationPlugin.applyConfig(defaultConfig);

