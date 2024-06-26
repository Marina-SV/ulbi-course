import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        // main - это дефолтное название entry
        // может быть несколько entrypoint entry:{}
        output: {
            // куда делать сборку приложения
            /*  contenthash идентификатор кеширования
            (если проект изменился, то пользователь получит новые файлы) */
            filename: '[name].[contenthash].js',
            path: paths.build,
            // clean удаляет старые файлы сборки
            clean: true,
            // каждый файл, отправленный в ваш output.path будет ссылаться на output.publicPath
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        // настройка webpack-dev-server (скрипта start)
        devtool: isDev ? 'inline-source-map' : undefined, // четко видеть в каком файле произошла ошибка при сборке
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
