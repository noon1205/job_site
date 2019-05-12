import webpack from 'webpack';
import path from 'path';

export default {
  mode: 'development',
  entry:[
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/')
  ],
  output:{
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve:{
    extensions: ['.js','.json','.jsx']
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        use:{
          loader: 'babel-loader'
        },
        include: path.resolve(__dirname, 'src')
      }
    ]
  }
};
