import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = ({setCars}) => {

    const {reset, handleSubmit,register}= useForm();

    const save = (car) => {

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"number"} placeholder={'id'} {...register('id')}/>
            <input type={""} placeholder={''} {...register('')}/>
            <input type={""} placeholder={''} {...register('')}/>
            <input type={""} placeholder={''} {...register('')}/>
        </form>
    );
};

export {CarForm};