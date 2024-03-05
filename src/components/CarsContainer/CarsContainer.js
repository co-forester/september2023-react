import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {carService} from "../../services";
import {carsActions} from "../../store";
import {Cars} from "./Cars";
import {CarForm} from "./CarForm";

const CarsContainer = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carsActions.setCars(data)))
    }, [trigger, dispatch]);

    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarsContainer};