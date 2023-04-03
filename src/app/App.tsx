import React from 'react';
import {Link }  from "react-router-dom";
import "./styles/index.scss";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router/ui/AppRouter";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <main className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
           <AppRouter/>
        </main>
    );
};

export default App;