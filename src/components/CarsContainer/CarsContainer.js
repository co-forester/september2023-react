import {useEffect, useState} from "react";

import {carService} from "../../services";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import css from './CarsContainer.module.css'
import {useAppContext} from "../../hooks";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
     const {trigger} = useAppContext();

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data.items))
    }, [trigger])

    return (
        <div className={css.CarsContainer}>
            <CarForm/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainer};