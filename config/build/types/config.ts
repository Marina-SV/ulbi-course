export type BuildMode = 'production' | 'development'

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
    scr: string
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    analyze: boolean;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
    isDev: boolean;
    analyze: boolean;
    port:number;
}
