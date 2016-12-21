var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'app/main.jsx')
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'app'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": ["es2015", "stage-0", "react"],
                    "plugins": ["transform-decorators-legacy"]
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
