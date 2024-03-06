import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Cars} from "./Cars";
import {CarForm} from "./CarForm";
import {carsActions} from "../../store";
import {carService} from "../../services";

const CarsContainer = () => {
    const dispatch = useDispatch();
    const {trigger} = useSelector(state => state.cars);
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