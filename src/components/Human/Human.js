import React from 'react';

import css from './Human.module.css'

const Human = ({human}) => {
    const {image, id, name, status, species, gender}=human;
    return (
        <div className={css.Human}>
            <img src={image} alt={name}/>
           <div>id: {id}</div>
           <div className={css.Name}>name: {name}</div>
           <div>status: {status}</div>
           <div>species: {species}</div>
           <div>gender: {gender}</div>
        </div>
    );
};

export {Human};