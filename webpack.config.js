const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: ['./src/index.js', './style/style.scss'],
    output: {
        path: __dirname + '/dist/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader!postcss-loader!sass-loader"
              })
          },
          {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['env']
                  }
              }
          },
          {
              test: /.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['react', 'es2015'],
              },
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/style.css"),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3004,
            server: { baseDir: ['./'] },
            files: ['./dist/*']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        // })
    ],
    watch: true,
    devtool: 'source-map'
};
