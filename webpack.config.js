const sass = require('sass');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader:  'resolve-url-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: sass, // comment this line out and it will work
							sourceMap: true,
						},
					},
				],
			},
		],
	},
};
