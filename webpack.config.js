const path = require('path');

module.exports = {
   entry: './src/javascript/index.js',
   output: {
      path: path.resolve(__dirname, 'dist/javascript'),
      filename: 'bundle.js',
      publicPath: '/dist/javascript/'
   },
   devServer: {
      static: {
         directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      open: true
   },
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/i,
            use: [
               "style-loader", "css-loader", "sass-loader",
            ],
         },
      ],
   },
};
