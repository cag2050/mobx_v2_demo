/**
 * Created by chenanguo on 16/12/21.
 */
var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server', //
        'webpack-dev-server/client?http://localhost:8080', //
        path.resolve(__dirname, 'app/main.jsx')
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/', //
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style!css'},
            {test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: 'http://localhost:8080'})
    ]
}