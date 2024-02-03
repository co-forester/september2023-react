import React, {useEffect, useState} from 'react';

import {carService} from "../../services/carService";
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import css from './CarsContainer.module.css'

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger])

    return (
        <div className={css.CarsContainer}>
            <CarForm setTrigger={setTrigger}/>
            <Cars cars={cars} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarsContainer};