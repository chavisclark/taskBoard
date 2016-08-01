var path = require('path');
var webpack = require('webpack');

var commonLoaders = [
 {
   /*
    * TC39 categorises proposals for babel in 4 stages
    * Read more http://babeljs.io/docs/usage/experimental/
    */
   test: /\.js$|\.jsx$/,
   loaders: ['react-hot', 'babel?presets[]=react-hmre,presets[]=es2015,presets[]=react,presets[]=stage-0,plugins[]=transform-decorators-legacy'
   ],
   include: path.join(__dirname, 'src'),
   exclude: path.join(__dirname, '/node_modules/') 
 },
   {
    test: /\.(png|jpg|svg)$/,
    loader: 'url?limit=10000'
   },
   { test: /\.html$/, loader: 'html-loader' }
];

module.exports = {
  devtool: 'eval',
  module: {
    loaders: commonLoaders.concat ([
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css?module&localIdentName=[local]__[hash:base64:5]' +
        '&sourceMap!sass?sourceMap&outputStyle=expanded' +
        '&includePaths[]=' + encodeURIComponent(path.resolve(__dirname, 'src/sass'))
      }
    ])
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['node_modules']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    // The output directory as absolute path
    path: path.join(__dirname, 'dist'),
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: 'bundle.js',
    // The output path from the view of the Javascript
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
  ]
};
