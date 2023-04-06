import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            {/*Асинхронные компоненты нужно оборачивать в Suspense*/}
            <div className='page-wrapper'>
            <Routes>
                    {Object.values(routeConfig).map(({path, element}) =>
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />)}
            </Routes>
            </div>
        </Suspense>
    );
};

