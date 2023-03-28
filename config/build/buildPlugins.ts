import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        // для изоляции css стилей в отдельной папке build
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            // для разбивки на асинхронные файлы
            chunkFilename:'css/[name].[contenthash:8].css',
        }),
    ]
}