import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import "./styles/index.scss";
import {useTheme} from "./theme/useTheme";
import {classNames} from "../helpers/classNames";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme, ])}>
            <button onClick={toggleTheme}>Toggle</button>
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