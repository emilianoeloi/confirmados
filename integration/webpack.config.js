const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/dashboard.js',
    output: {
        filename: 'bundler.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.csv$/,
                loader: 'csv-loader',
                options: {
                    dynamicTyping: true,
                    header: true,
                    skipEmptyLines: true
                }
            },
            {
                test: /\.(png|jpe?g|gif|csv)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.csv$/i,
                        name: '[name].[ext]',
                    },
                  },
                  
                ],
                
            },
        ],
        
    },
};