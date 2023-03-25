import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return  {
        mode: mode,
        entry: paths.entry,
        // main - это дефолтное название entry
        // может быть несколько entrypoint entry:{}
        output: {
            // куда делать сборку приложения
            // contenthash идентификатор кеширования (если проект изменился, то пользователь получит новые файлы
            filename: '[name].[contenthash].js',
            path: paths.build,
            // clean удаляет старые файлы сборки
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolves(),
    }
}