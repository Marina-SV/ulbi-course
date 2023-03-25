import webpack from "webpack";


export function buildLoaders(): webpack.RuleSetRule[] {
    // порядок лоудеров имеет значение и лучше их выносить в переменные

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [typescriptLoader,
    ]
}