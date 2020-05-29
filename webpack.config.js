const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
        use: [
           'file-loader',
         ],
       }
    ]
  },
  devServer: {
    host: '0.0.0.0',//your ip address
    port: 8081,
    disableHostCheck: true
  }
}
