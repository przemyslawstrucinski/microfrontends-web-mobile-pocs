const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig();
    
    // Modify the existing webpack config
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'gatsby_search_mfe',
        filename: 'remoteEntry.js',
        library: { type: 'var', name: 'gatsby_search_mfe' },
        exposes: {
          './SearchWidget': './src/components/SearchWidget',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
            eager: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
            eager: false,
          },
        },
      })
    );
    
    // Override output settings
    config.output.publicPath = 'http://localhost:9001/';
    config.output.uniqueName = 'gatsby_search_mfe';
    config.output.filename = '[name].js';
    config.output.chunkFilename = '[name].js';
    
    // Enable experiments
    if (stage === 'build-javascript' || stage === 'develop') {
      config.experiments = config.experiments || {};
      config.experiments.topLevelAwait = true;
    }
    
    actions.replaceWebpackConfig(config);
  }
};

