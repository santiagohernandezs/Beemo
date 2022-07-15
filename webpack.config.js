module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: '/.'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    }
}
