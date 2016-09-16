var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
    context: srcPath,
    devtool: "inline-sourcemap",
    entry: path.join(srcPath, 'js', 'client.js'),
    output: {
        path: buildPath,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot'],
                include: path.join(__dirname, 'dist')

            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                },
                include: path.join(__dirname, 'src')
            }
        ]
    }
};