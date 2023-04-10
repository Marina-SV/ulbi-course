import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        // для изоляции css стилей в отдельной папке build
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            // для разбивки на асинхронные файлы
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // DefinePlugin прокидывает глобальные переменные в само приложение
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];
}
