import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";


export function buildResolves(options: BuildOptions): ResolveOptions {
    return {
        // расширения файлов для импортов для которых не будем указывать расширение
        extensions: ['.tsx', '.ts', '.js'],
        // настройка для абсолютных путей импортов
        preferAbsolute: true,
        modules: [options.paths.scr, 'node_modules'],
        mainFiles: ["index"],
        alias: {}
    }
}