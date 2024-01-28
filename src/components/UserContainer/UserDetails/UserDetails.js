import React from 'react';

import css from './UserDetails.module.css'
const UserDetails = ({userDetails}) => {
   const {id, name, username, email} = userDetails
    return (
        <div className={css.UserDetails}>
           <div>id: {id}</div>
           <div>name: {name}</div>
           <div>username: {username}</div>
           <div>email: {email}</div>
        </div>
    );
};

export {UserDetails};