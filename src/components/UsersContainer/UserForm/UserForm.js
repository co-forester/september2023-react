import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../../services/userService";

const UserForm = ({setUsers}) => {
    const {reset,handleSubmit, register} = useForm();

    const save = async (user)=> {
        const {data}= await userService.create(user);
        setUsers(prev=>[...prev, data]);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input title='text' placeholder={'username'} {...register('username')}/>
            <input type={"text"} placeholder={'email'} {...register('email')}/>
            <input title='text' placeholder={'street'} {...register('address.street')}/>
            <input title='text' placeholder={'suite'} {...register('address.suite')}/>
            <input title='text' placeholder={'city'} {...register('address.city')}/>
            <input title='text' placeholder={'zipcode'} {...register('address.zipcode')}/>
            <input title='text' placeholder={'lat'} {...register('address.geo.lat')}/>
            <input title='text' placeholder={'lng'} {...register('address.geo.lng')}/>
            <input title='text' placeholder={'phone'} {...register('phone')}/>
            <input title='text' placeholder={'website'} {...register('website')}/>
            <input title='text' placeholder={'nameCompany'} {...register('company.name')}/>
            <input title='text' placeholder={'catchePhrase'} {...register('company.catchePhrase')}/>
            <input title='text' placeholder={'bs'} {...register('company.bs')}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};