const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            assets: path.resolve(__dirname, 'src', 'assets'),
            components: path.resolve(__dirname, 'src', 'components'),
            containers: path.resolve(__dirname, 'src', 'containers'),
            img: path.resolve(__dirname, 'src', 'assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /(\.svg|\.jpg|\.gif|\.png|\.woff2?|\.eot|\.ttf|\.otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                    name: file => {
                        let dirNameInsideAssets = path.relative(path.join(__dirname, 'src', 'img'), path.dirname(file));
                        return `${dirNameInsideAssets}/[name].[ext]`;
                    }
                }
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
}