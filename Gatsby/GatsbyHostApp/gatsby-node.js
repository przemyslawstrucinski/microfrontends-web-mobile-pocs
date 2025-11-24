const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  const config = getConfig();

  if (stage === 'develop' || stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new ModuleFederationPlugin({
          name: 'gatsby_host_app',
          remotes: {
            gatsby_search_mfe: 'gatsby_search_mfe@http://localhost:9001/remoteEntry.js',
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: false,
              eager: true,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: false,
              eager: true,
            },
          },
        }),
      ],
      output: {
        publicPath: stage === 'develop' ? 'http://localhost:9000/' : 'auto',
        uniqueName: 'gatsby_host_app',
      },
    });
  }

  // Enable top-level await for dynamic imports
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      experiments: {
        topLevelAwait: true,
      },
    });
  }
};

