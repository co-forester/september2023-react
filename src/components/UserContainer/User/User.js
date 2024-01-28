import React from 'react';

import  css from './User.module.css'

const User = ({user}) => {
   const {id, name} = user;
    return (
        <div className={css.User}>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {User};