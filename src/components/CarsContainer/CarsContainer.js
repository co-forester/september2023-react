import React, {useEffect, useState} from 'react';

import {carService} from "../../services/carService";
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            <CarForm setCars={setCars}/>
            <hr/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainer};