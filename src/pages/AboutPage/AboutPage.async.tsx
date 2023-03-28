import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    //@ts-ignore
    // Искусственная задержка загрузки только для курса. При deploy удалить
    setTimeout(() => resolve(import("./AboutPage")),1500)
}));
