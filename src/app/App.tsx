import React from 'react';
import "./styles/index.scss";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar/Sidebar";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;