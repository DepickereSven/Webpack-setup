const path = require("path");

module.exports = {
    entry: {
        app: './assets/js/module.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.app.min.js"
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
    }
};