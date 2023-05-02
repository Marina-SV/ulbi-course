import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolves(options: BuildOptions): ResolveOptions {
    return {
        // расширения файлов для импортов для которых не будем указывать расширение
        extensions: ['.tsx', '.ts', '.js'],
        // настройка абсолютных путей импортов
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
