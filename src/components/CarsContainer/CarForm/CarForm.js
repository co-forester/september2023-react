import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../../services/carService";
import {carValidator} from "../../../validators/carValidator";
import  css from './CarForm.module.css'

const CarForm = ({trigger, carForUpdate, setCarForUpdate}) => {

    const {reset, handleSubmit, register, formState: {isValid, errors}, setValue} = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue])

    const Save = async (car) => {
         await carService.create(car);
        trigger();
        reset()
    }
    const Update = async (car) => {
         await carService.updateById(carForUpdate.id, car);
        trigger();
        setCarForUpdate(null);
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? Update : Save)} className={css.CarForm}>
                <input  className={css.Input} type={"text"} placeholder={'brand'} {...register('brand')}/>
                <input className={css.Input} type={"number"} placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input className={css.Input} type={"number"} placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <div>
                    <button className={css.ButSave} disabled={!isValid} > {carForUpdate ? 'Update': 'Save'}</button>
                </div>
            </form>
            {errors.brand && <div className={css.ErrorMessage}>brand: {errors.brand.message}</div>}
            {errors.year && <div className={css.ErrorMessage}>year: {errors.year.message}</div>}
            {errors.price && <div className={css.ErrorMessage}>price: {errors.price.message}</div>}
        </div>
    );
};

export {CarForm};