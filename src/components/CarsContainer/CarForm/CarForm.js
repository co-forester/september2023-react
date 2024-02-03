import React from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../../services/carService";

const CarForm = ({setTrigger}) => {

    const {reset, handleSubmit,register}= useForm();

    const save = async (car) => {
        const {data} = await carService.create(car);
        setTrigger (prev => !prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input type={"number"} placeholder={'price'} {...register('price')}/>
            <input type={"number"} placeholder={'year'} {...register('year')}/>
            <div>
                <button>save</button>
                <button>update</button>
            </div>
        </form>
    );
};

export {CarForm};