const path = require('path');

let mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode: mode,
    target: 'web',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
    },
};
