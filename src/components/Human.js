import React from 'react';

const Human = ({human}) => {
    const {image, id, name, status, species, gender}=human;
    return (
        <div>
            <img src={image} alt={name}/>
           <div>id: {id}</div>
           <div>name: {name}</div>
           <div>status: {status}</div>
           <div>species: {species}</div>
           <div>gender: {gender}</div>
        </div>
    );
};

export {Human};