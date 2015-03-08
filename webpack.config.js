module.exports = {
	entry: './js/app.js',
	module: {
		loaders: [
			{ test: /\.hbs$/,  loader: "handlebars-loader" },
			{ test: /\.less$/, loader: "style-loader!css-loader!autoprefixer-loader!less-loader" },
			{ test: /\.woff$/, loader: "file-loader" },
			{ test: /\.ttf$/,  loader: "file-loader" },
			{ test: /\.eot$/,  loader: "file-loader" },
			{ test: /\.svg$/,  loader: "file-loader" }
		]
	},
	output: {
		path: './dist',
		filename: 'app.js',
		publicPath: './dist/'
	},
	resolve: {
		modulesDirectories: ['node_modules'],
	}
}