/**
 * webpack config
 * @author: Arie M. Prasetyo (2020)
 */

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 
const port = 3000;
const host = 'localhost';
 
module.exports = {
    mode: 'production',
    bail: true,
    devtool: 'eval',
    entry: [
        __dirname + '/src/index.js',
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        libraryTarget: 'umd',
        library: 'sudah_kudugong'
    },
    module: {
        rules: [
            {
                // Transform JS files from ES2015/JSX to ES5.
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                // CSS imports
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            },
                            url: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: loader => [
                                require('autoprefixer')()
                            ]
                        }
                    }
                ],
            },
            {
                // load image files
                test: /\.(png|jpg|svg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};