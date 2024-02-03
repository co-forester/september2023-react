import React, {useEffect, useState} from 'react';

import {carService} from "../../services/carService";
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger])

    return (
        <div>
            <CarForm setTrigger={setTrigger}/>
            <hr/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainer};