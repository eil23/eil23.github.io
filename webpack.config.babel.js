import { resolve } from 'path'
import PluginHTML from 'html-webpack-plugin'
import PluginVue from 'vue-loader/lib/plugin'

export default {
  mode: 'production',

  entry: './src/main.js',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  target: 'web',

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: [ '.js', '.vue' ]
  },

  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, use: [ 'vue-style-loader', 'css-loader' ] },
      { test: /\.(png|jpe?g)/, use: 'file-loader' }
    ]
  },

  plugins: [
    new PluginHTML({ filename: '../index.html', template: 'src/template.ejs' }),
    new PluginVue()
  ]
}
