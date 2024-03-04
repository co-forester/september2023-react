import React from 'react';
import {useSelector} from "react-redux";

const Cars = () => {
   const {cars} = useSelector(state => state.cars);

    return (
        <div>
            {cars.map(car=><Cars key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};