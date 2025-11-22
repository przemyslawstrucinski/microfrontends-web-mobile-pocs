const path = require('path');
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = {
  entry: './src/bootstrap.tsx',
  mode: 'development',
  devServer: {
    port: 9001,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    publicPath: 'http://localhost:9001/',
    filename: 'index.bundle',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      'react-native$': 'react-native',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'todoApp',
      filename: 'remoteEntry.js',
      exposes: {
        './TodoApp': './src/TodoApp',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '18.3.1',
        },
        'react-native': {
          singleton: true,
          eager: true,
          requiredVersion: '0.76.5',
        },
        axios: {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
};

