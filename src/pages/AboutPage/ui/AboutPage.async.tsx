import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    /* Искусственная задержка загрузки страниц только для курса.
    При deploy удалить */
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
