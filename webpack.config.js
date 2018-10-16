const path = require("path");

const Autoprefixer = require("autoprefixer");
const CleanPlugin = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const assetsDir = path.resolve(__dirname, "static/assets");

module.exports = {
    context: path.resolve(__dirname, "src"),
    devtool: "source-map",
    entry: {
        app: "./app",
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "all",
                    name: "vendor",
                    test: /node_modules/,
                },
            },
        },
    },
    output: {
        filename: "[name].js",
        path: assetsDir,
        publicPath: "/assets",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: path.resolve(__dirname, "node_modules"),
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: {
                                discardComments: {
                                    removeAll: true,
                                },
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                Autoprefixer(),
                            ],
                            sourceMap: true,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|png|svg|woff2?)$/,
                loader: "file-loader",
                options: {
                    name: "/[name].[ext]",
                },
            },
        ],
    },
    plugins: [
        new CleanPlugin([
            assetsDir,
        ]),
        new MiniCSSExtractPlugin({
            filename: "[name].css",
        }),
        new UglifyJSPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        port: 9000,
    },
    stats: "errors-only",
};
