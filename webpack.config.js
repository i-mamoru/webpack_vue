const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    chunkFilename:'js/[name].chank.js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader:'vue-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url:true
            }
          },
          {
            loader: "sass-loader",
            options:{
              sourceMap: false
            }
          },
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   loaders: {
        //     css: {
        //       loader: 'css-loader',
        //     },
        //     scss: {
        //       loader: 'sass-loader',
        //       // options: {
        //       //   data: '@import "style.scss";',
        //       //   includePaths: [path.resolve(__dirname, './src/style/')],
        //       // }
        //     },
        //   },
        // },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 4000,
        proxy: 'http://localhost:8080/',
        // online: false,
        open: false,
        notify: false
      },
      {
        reload: true
      }
    )
  ]
}