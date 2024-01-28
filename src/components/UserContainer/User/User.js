import React from 'react';

import  css from './User.module.css'

const User = ({user, click}) => {
   const {id, name} = user;

    return (
        <div className={css.User}>
            <div>id: {id}</div>
            <div className={css.Name}>name: {name}</div>
            <button onClick={() => click(id)}>Details</button>
        </div>
    );
};

export {User};