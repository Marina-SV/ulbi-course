// для импорта CSS modules с Typescript + React
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

// svgLoader преобразует обычные иконки в реакт компоненты
declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
