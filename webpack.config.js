var webpack = require('webpack');
var path = require('path'); // core module

module.exports = {

	// tells webpack where it should start processing code
	entry: [

		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'

	],
	externals: {
		// key:value => moduleName:variableNameToUse
		jquery: 'jQuery'
	},
	plugins: [

		new webpack.ProvidePlugin({
			// object that specifies key:value
			// key => variable name to watch
			// value => what module to use
			'$': 'jquery',
			'jQuery': 'jquery',
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js',
	},
	resolve: {
		// tell where it all needs to happen
		// path => /React
		root: __dirname,
		// set names for components
		alias: {
			Main: 'app/components/Main.jsx',
			applicationStyles: 'app/styles/app.scss',
			Navigation: 'app/components/Navigation.jsx',
			Timer: 'app/components/Timer.jsx',
			Countdown: 'app/components/Countdown.jsx',
			Clock: 'app/components/Clock.jsx',
			CountdownForm: 'app/components/CountdownForm.jsx',
			Controls: 'app/components/Controls.jsx',

		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015','stage-0']
				},
				// match reg express with files ending in .jsx
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'cheap-module-eval-source-map'

};
