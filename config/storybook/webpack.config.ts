import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        // выйти на два уровня назад, чтобы найти src
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    /* используем функции основного webpack config для сборки сторибучного конфига */
    // для работы с абсолютными импортами
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    /* По дефолту в сторибучной сборке стоит другой лоадер для SVG,
    мы используем svgr, поэтому необходимо его изъять */
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    // затем добавляем свой loader с svgr
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module.rules.push(buildCssLoader(true));

    return config;
};
