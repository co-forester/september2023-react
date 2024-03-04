import React, {useEffect} from 'react';
import {carService} from "../../services";
import {carsActions} from "../../store";
import {useDispatch, useSelector} from 'react-redux';

import {Cars} from "./Cars";

const CarsContainer = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carsActions.setResponse(data)))
    }, []);

    return (
        <div>
            <CarForm/>
            <Cars/>

        </div>
    );
};

export {CarsContainer};