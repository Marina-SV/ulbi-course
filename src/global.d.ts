// для импорта CSS modules с Typescript + Reactqqi::
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}