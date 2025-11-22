// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add support for importing from parent Modules directory
config.watchFolders = [
  path.resolve(__dirname, '../Modules/Search/app/mobile'),
  path.resolve(__dirname, '../Modules/Search/app/shared'),
  path.resolve(__dirname, '../Modules/Doctor/app/mobile'),
  path.resolve(__dirname, '../Modules/Doctor/app/shared'),
];

config.resolver = {
  ...config.resolver,
  // Ensure all modules use the same React instance from SuperAppMobile
  extraNodeModules: {
    'react': path.resolve(__dirname, 'node_modules/react'),
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    'zustand': path.resolve(__dirname, 'node_modules/zustand'),
  },
  // Force resolution to SuperAppMobile's node_modules first
  nodeModulesPaths: [
    path.resolve(__dirname, 'node_modules'),
  ],
  // Block resolution from module's node_modules for React
  blockList: [
    /.*\/Modules\/.*\/node_modules\/react\/.*/,
    /.*\/Modules\/.*\/node_modules\/react-native\/.*/,
  ],
};

module.exports = config;

