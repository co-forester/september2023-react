import React from 'react';
import {useForm} from "react-hook-form";
import {create} from "axios";

import {carService} from "../../../services/carService";

const CarForm = ({setCars}) => {

    const {reset, handleSubmit,register}= useForm();

    const save = async (car) => {
        await carService.create(data);

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"number"} placeholder={'id'} {...register('id')}/>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input type={"number"} placeholder={'price'} {...register('price')}/>
            <input type={"number"} placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export {CarForm};