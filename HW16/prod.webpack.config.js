const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');


module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/sounds',
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                outputPath: 'assets/images',
                },
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.html'
        }),
        new MiniCssExtractPlugin(),
        new CssMinimizerPlugin()
    ],
};