import * as Repack from '@callstack/repack';
import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

export default (env) => {
  const {
    mode = 'development',
    context = Repack.getDirname(import.meta.url),
    entry = './index.js',
    platform = process.env.PLATFORM || 'ios',
    minimize = mode === 'production',
    devServer = undefined,
    bundleFilename = undefined,
    sourceMapFilename = undefined,
    assetsPath = undefined,
    reactNativePath = new URL('./node_modules/react-native', import.meta.url).pathname,
  } = env;

  const isProd = mode === 'production';

  return {
    mode,
    devtool: false,
    context,
    entry: [entry],
    resolve: {
      ...Repack.getResolveOptions(platform),
      alias: {
        'react-native': reactNativePath,
      },
    },
    output: {
      clean: true,
      path: Repack.getOutputPath(context, platform),
      filename: 'index.bundle',
      chunkFilename: '[name].chunk.bundle',
      publicPath: Repack.getPublicPath({ platform, devServer }),
    },
    optimization: {
      minimize,
      chunkIds: 'named',
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: {
            loader: 'file-loader',
          },
        },
      ],
    },
    plugins: [
      new Repack.RepackPlugin({
        context,
        mode,
        platform,
        devServer,
        output: {
          bundleFilename,
          sourceMapFilename,
          assetsPath,
        },
      }),
      new ModuleFederationPlugin({
        name: 'SuperAppNative',
        remotes: {
          todoApp: 'todoApp@http://localhost:9001/remoteEntry.js',
          weatherApp: 'weatherApp@http://localhost:9002/remoteEntry.js',
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
        },
      }),
    ],
  };
};

