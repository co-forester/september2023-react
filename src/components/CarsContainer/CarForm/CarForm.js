import React from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../../services/carService";
import  css from './CarForm.module.css'
const CarForm = ({setTrigger}) => {

    const {reset, handleSubmit,
        register, formState: {isValid, errors}}= useForm({mode: 'all'});

    const save = async (car) => {
        const {data} = await carService.create(car);
        setTrigger (prev => !prev)
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(save)} className={css.CarForm}>
            <input  className={css.Input} type={"text"} placeholder={'brand'} {...register('brand', {
                // minLength:{value: 1, message: 'min 1 character'},
                // maxLength:{value: 20, message: 'max 20 characters'},
                pattern:{value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message: 'only letters, min 1 character, max 20 characters'}
            })}/>
            <input className={css.Input} type={"number"} placeholder={'price'} {...register('price', {
                min:{value: 0, message: 'min 0'},
                max:{value:1_000_000, message: 'max 1 000 000'},
                valueAsNumber: true
            })}/>
            <input className={css.Input} type={"number"} placeholder={'year'} {...register('year', {
                min:{value:1990, message: 'min year 1990'},
                max:{value:2023, message: 'max year 2023'},
                valueAsNumber: true
            })}/>
            <div>
                <button className={css.ButSave} disabled={!isValid}>save</button>
            </div>
        </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};