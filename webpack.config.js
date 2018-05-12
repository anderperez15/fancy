const path = require("path");
module.exports = {
  entry: ["./src"],
  output: {
    path: path.resolve(__dirname, "public/javascripts"),
    filename: "ander.js"
  },
  devServer: {
    inline: true,
    port: 8081
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query:{
            presets:['env','react'],
            plugins: [require('babel-plugin-transform-object-rest-spread'),require('babel-plugin-transform-es2015-for-of')]
          }
        }
      },
      {	test:	/\.css$/,	loader:	"style-loader!css-loader"	},
      {
        test:/\.scss$/,
        loader:'style-loader!css-loader!sass-loader',
        exclude: /node_modules/
      } 
    ]
  }
};

