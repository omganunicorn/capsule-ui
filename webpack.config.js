const path = require('path');
const webpack = require('webpack');

const MinifyPlugin = require("babel-minify-webpack-plugin");

const config = {
  entry: {
    capsule: ['./src/index.js'],
    'capsule.min': ['./src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'Capsule',
    umdNamedDefine: true,
  },
  mode: "production",
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new MinifyPlugin()
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
};

module.exports = config;
