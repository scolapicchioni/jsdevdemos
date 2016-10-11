module.exports = {
    entry: {
        example01 : "./wwwroot/js/src/entry.js",
        promises01: ['babel-polyfill', './wwwroot/js/src/promises01.js'],
    },
    output: {
        filename: "./wwwroot/js/dist/[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map'
};