import React from 'react';

const Simpson = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson
       return (
        <div>
            <img src={photo} alt={name}/>
            <div>age: {age}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>info: {info}</div>
        </div>
    );
};

export {Simpson};


