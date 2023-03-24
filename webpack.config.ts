import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";


const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    // main - это дефолтное название entry
    // может быть несколько entrypoint entry:{}
    // использование path для разных операционных систем
    // стартовая точка нашего приложения './src/index.ts'
    output: {
        // куда делать сборку приложения
        // contenthash идентификатор кеширования (если проект изменился, то пользователь получит новые файлы
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        // clean удаляет старые файлы сборки
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            // конфигурация лоудеров
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // расширения файлов для импортов для которых не будем указывать расширение
        extensions: ['.tsx', '.ts', '.js']
    },
}

export default config;


