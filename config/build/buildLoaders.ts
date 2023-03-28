import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";


export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    // порядок лоудеров имеет значение и лучше их выносить в переменные

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // для изоляции css стилей в build только для Dev
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // настройка css modules для webpack
            // лоудер можно указать строкой или объектом
            {
                loader: "css-loader",
                options: {
                    modules: {
                        // генерация уникальных названий классов только для модулей
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]' // читабельные названия классов
                            : '[hash:base64:8]'
                    },
                }
            },

            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader,
    ]
}