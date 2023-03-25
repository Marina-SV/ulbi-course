import webpack from "webpack";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPath} from "./config/build/types/config";
import path from "path";

const paths: BuildPath = {
    // использование path для разных операционных систем
    // Преобразует последовательность путей или сегментов пути в абсолютный путь.
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}


const mode = "development";
const isDev = mode === "development";
const PORT = 3000;

const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
})

export default config;


