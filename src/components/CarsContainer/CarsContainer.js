import {useEffect, useState} from "react";

import {carService} from "../../services";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import css from './CarsContainer.module.css'

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [flag, setFlag] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    const trigger = () => {
        setFlag (prev => !prev)
    }

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data.items))
    }, [flag])

    return (
        <div className={css.CarsContainer}>
            <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars cars={cars} trigger={trigger} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};