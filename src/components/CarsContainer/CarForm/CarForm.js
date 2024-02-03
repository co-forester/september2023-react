import React from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../../services/carService";
import  css from './CarForm.module.css'
const CarForm = ({setTrigger}) => {

    const {reset, handleSubmit,register}= useForm();

    const save = async (car) => {
        const {data} = await carService.create(car);
        setTrigger (prev => !prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)} className={css.CarForm}>
            <input  className={css.Input} type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input className={css.Input} type={"number"} placeholder={'price'} {...register('price')}/>
            <input className={css.Input} type={"number"} placeholder={'year'} {...register('year')}/>
            <div>
                <button className={css.ButSave}>save</button>
            </div>
        </form>
    );
};

export {CarForm};