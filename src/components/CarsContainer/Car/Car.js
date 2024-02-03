import React from 'react';

import {carService} from "../../../services/carService";
import css from './Car.module.css'

const Car = ({car, setTrigger}) => {
   const {id, brand, price, year} = car;

   const Update = async (id, car) => {
       await carService.updateById(id, car);
       setTrigger (prev => !prev)
   }

   const Delete = async () => {
     await carService.delete(id);
       setTrigger (prev => !prev)
   }

    return (
        <div className={css.Car}>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <div className={css.Buttons}>
                <button className={css.ButUpdate} onClick={Update}>update</button>
                <button className={css.ButDelete} onClick={Delete}>delete</button>
            </div>
        </div>
    );
};

export {Car};