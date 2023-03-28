import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";


const App = () => {
    return (
        <div>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            {/*Асинхронные компоненты нужно оборачивать в Suspense*/}
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;