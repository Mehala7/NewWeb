var config = {
      entry: './main.js',

      output: {
        path: __dirname + "/dist/js",
        filename: 'index.js'
      },


      devServer: {
        inline: true,
        port: 7777
      },

      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          },
		  {
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: true
					}
				}
			]
		  }
        ]
      }
    }

    module.exports = config;