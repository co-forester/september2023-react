import React from 'react';

import {CarsContainer} from "./components/CarsContainer/CarsContainer";
import css from './App.module.css'
const App = () => {
    return (
        <div className={css.App}>
            <CarsContainer/>
        </div>
    );
};

export {App};