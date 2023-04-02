import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "./styles/index.scss";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import MainPage from "pages/MainPage/ui/MainPage";
import AboutPage from "pages/AboutPage/ui/AboutPage";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            {/*Асинхронные компоненты нужно оборачивать в Suspense*/}
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;