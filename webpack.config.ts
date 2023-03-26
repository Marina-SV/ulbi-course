import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPath} from "./config/build/types/config";
import path from "path";

// env - переменные окружения, задаются в package.json start
// для использования env config должен возвращаться из функции, которая принимает env
export default (env: BuildEnv): webpack.Configuration => {

    const paths: BuildPath = {
        // использование path для разных операционных систем
        // Преобразует последовательность путей или сегментов пути в абсолютный путь.
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || "development";
    const PORT = env.port || 3000;

    const isDev = mode === "development";

    const config = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config;
}


