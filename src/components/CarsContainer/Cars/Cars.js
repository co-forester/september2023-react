import React from 'react';

import {Car} from "../Car/Car";
import css from './Cars.module.css'
const Cars = ({cars, setTrigger}) => {

    return (
        <div className={css.Cars}>
            {cars.map(car=><Car key={car.id} car={car} setTrigger={setTrigger}/>)}
        </div>
    );
};

export {Cars};