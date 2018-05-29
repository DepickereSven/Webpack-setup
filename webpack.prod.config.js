const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "bundle.app": "./assets/js/module.js",
        "bundle.app.min": "./assets/js/module.js",
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['env']
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        }),
        new CopyWebpackPlugin([
            {
                from: './assets/css', to: '../../../Cryptocoinchecker/app/src/main/assets/www/assets/css'
            },
            {
                from: './assets/libraries', to: '../../../Cryptocoinchecker/app/src/main/assets/www/assets/libraries'
            },
            {
                from: './assets/media', to: '../../../Cryptocoinchecker/app/src/main/assets/www/assets/media'
            },
            {
                from: './build', to: '../../../Cryptocoinchecker/app/src/main/assets/www/build'
            },
            {
                from: 'index.html', to: '../../../Cryptocoinchecker/app/src/main/assets/www/'
            },
            {
                from: 'settings.html', to: '../../../Cryptocoinchecker/app/src/main/assets/www/'
            },
            {
                from: 'watchlist.html', to: '../../../Cryptocoinchecker/app/src/main/assets/www/'
            },
            {
                from: 'localStorage.html', to: '../../../Cryptocoinchecker/app/src/main/assets/www/'
            },
            {
                from: 'info.html', to: '../../../Cryptocoinchecker/app/src/main/assets/www/'
            },
            {
                from: 'choiceCoin.html', to: '../../../Cryptocoinchecker/app/src/main/assets/www/'
            },
            {
                from: 'charts.html', to: '../../../Cryptocoinchecker/app/src/main/assets/www/'
            }
        ])
    ]
};