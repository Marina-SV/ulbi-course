import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

// eslint-disable-next-line max-len
export function buildPlugins({ paths, isDev, analyze }: BuildOptions): webpack.WebpackPluginInstance[] {
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
        new BundleAnalyzerPlugin({
            analyzerMode: analyze ? 'server' : 'disabled',
        }),
    ];
}
