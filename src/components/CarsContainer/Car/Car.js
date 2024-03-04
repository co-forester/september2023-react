import React from 'react';

import {carsActions} from "../../../store";
import {useDispatch} from "react-redux";
import css from './Car.module.css'

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();
    // const Delete = async () => {
    //     await carService.delete(id);
    //     trigger()
    // }

    return (
        <div className={css.Car}>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <div className={css.Buttons}>
                {/*<button className={css.ButUpdate} onClick={() => dispatch(carsActions.update())}>update</button>*/}
                {/*<button className={css.ButDelete} onClick={() => dispatch(carsActions.update())}>delete</button>*/}
            </div>
        </div>
    );
};

export {Car};