import React from 'react';
import {carService} from "../../../services/carService";

const Car = ({car}) => {
   const {id, brand, price, year} = car;



    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button>delete</button>
            <hr/>
            <hr/>
        </div>
    );
};

export {Car};