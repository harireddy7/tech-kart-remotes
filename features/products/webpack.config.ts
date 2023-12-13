import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

const baseConfig = {
  name: 'products',
  exposes: {
    './Products': './src/remote-entry.ts',
  },
  library: {
    name: 'products',
    type: 'var',
  },
};

// Nx plugins for webpack.
export default composePlugins(withNx(), withReact(), withModuleFederation(baseConfig), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.output = {
    ...config.output,
    filename: 'static/js/[name].[contenthash:20].js',
    chunkFilename: 'static/js/[name].[chunkhash:20].chunk.js',
  };

  return config;
});
