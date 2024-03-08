import React from 'react';

import css from './Character.module.css'
import {charactersActions} from "../../../stor";

const Character = ({character}) => {
    const {id, name, status, gender, image} = charactersActions
    return (
        <div className={css.Character}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <div>gender: {gender}</div>
            <div>image: {image}</div>
        </div>
    );
};

export {Character};