import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true, // автоматически в браузере открывает приложение
        // для react router страницы по пути не "/" при обновлении не падали
        historyApiFallback: true,
        hot: true
    }
}