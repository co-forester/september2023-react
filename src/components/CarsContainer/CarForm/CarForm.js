import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../../validators";
import {carService} from "../../../services";
import {carsActions} from "../../../store";
import css from './CarForm.module.css'

const CarForm = () => {

    const {reset, handleSubmit, register, formState: {isValid, errors}, setValue} = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    const dispatch = useDispatch();
    const carForUpdate = useSelector (state => state.cars)

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue])

    const Save = async (car) => {
        await carService.create(car);
        dispatch(carsActions.trigger());
       reset()
    }
    const Update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        dispatch(carsActions.trigger());
        dispatch(carsActions.setCarForUpdate(null));
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? Update : Save)} className={css.CarForm}>
                <input className={css.Input} type={"text"} placeholder={'brand'} {...register('brand')}/>
                <input className={css.Input} type={"number"}
                       placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input className={css.Input} type={"number"}
                       placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <div>
                    <button className={css.ButSave} disabled={!isValid}> {carForUpdate ? 'Update' : 'Save'}</button>
                </div>
            </form>
            {errors.brand && <div className={css.ErrorMessage}>brand: {errors.brand.message}</div>}
            {errors.year && <div className={css.ErrorMessage}>year: {errors.year.message}</div>}
            {errors.price && <div className={css.ErrorMessage}>price: {errors.price.message}</div>}
        </div>
    );
};

export {CarForm};