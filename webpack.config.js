const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // entry: './src/index.js',
  /*
  Assim também funcionaria, mas no windows o caminho de
  pastas é invertido. Ex: C:\
  Logo quando se tratar de caminhos sempre use path para
  evitar esse erros de caminho.
  */
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
};