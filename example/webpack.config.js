'use strict';

// Load modules
import path from 'path';
import webpack from 'webpack';

// Create an empty config
export default [
	{
	  entry: [
	    'webpack-hot-middleware/client',
	    path.join(__dirname, 'entry.js')
	  ],
	  output: {
	    path: __dirname,
	    publicPath: '/',
	    filename: 'bundle.js'
	  },
	  hotReloadServer: {
	    address: 'localhost',
	    port: 4000
	  },
	  devtool: '#source-map',
	  plugins: [
			new webpack.DefinePlugin({
				ENV: "'staging'"
			}),
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
	  ]
	},
	{
	  entry: [
	    'webpack-hot-middleware/client',
	    path.join(__dirname, 'entry.js')
	    // path.join(__dirname, 'entry.dup.js')
	  ],
	  output: {
	    path: __dirname,
	    publicPath: '/',
	    filename: 'bundle.asd.js'
	  },
	  hotReloadServer: {
	    address: 'localhost',
	    port: 4000
	  },
	  plugins: [
	    new webpack.DefinePlugin({
				ENV: "'production'"
			}),
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
	  ]
	}
];
