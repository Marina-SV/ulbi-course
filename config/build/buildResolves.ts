import {ResolveOptions} from "webpack";


export function buildResolves(): ResolveOptions {
    return {
        // расширения файлов для импортов для которых не будем указывать расширение
        extensions: ['.tsx', '.ts', '.js']
    }
}