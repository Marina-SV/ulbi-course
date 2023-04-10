import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // порядок лоудеров имеет значение и лучше их выносить в переменные

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: false,
                            saveMissing: true,
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                        },
                    ],
                ],
            },
        },
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // для изоляции css стилей в build только для Dev
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // настройка css modules для webpack
            // лоудер можно указать строкой или объектом
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // генерация уникальных названий классов только для модулей
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]' // читабельные названия классов
                            : '[hash:base64:8]',
                    },
                },
            },

            'sass-loader',
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // в регулярку можно добавить и расширения шрифтов
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
