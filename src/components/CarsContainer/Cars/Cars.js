import React from 'react';

import css from './Cars.module.css'
import {useSelector} from "react-redux";
import {Car} from "../Car";

const Cars = () => {
    const {cars} = useSelector(state => state.cars)

    return (
        <div className={css.Cars}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};