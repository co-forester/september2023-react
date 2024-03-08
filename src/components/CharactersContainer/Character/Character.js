import React from 'react';

import css from './Character.module.css'
import {charactersActions} from "../../../store";

const Character = ({character}) => {
    const {id, name, status, gender, image} = character
    return (
        <div className={css.Character}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <div>gender: {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};