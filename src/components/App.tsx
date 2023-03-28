import React from 'react';
import {Counter} from "./Counter";
import classes from "./Counter.module.scss"

const App = () => {
    return (
       <div className={classes.body}>
           <Counter/>
       </div>
    );
};

export default App;