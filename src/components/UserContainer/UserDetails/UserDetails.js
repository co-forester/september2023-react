import React from 'react';

import css from './UserDetails.module.css'
const UserDetails = ({userDetails}) => {
   const {id, name, username, email} = userDetails
    return (
        <div className={css.UserDetails}>
           <div className={css.Field}>
               <div>id</div>
               <div className={css.FieldValue}>{id}</div>
           </div>
           <div className={css.Field}>
               <div>name</div>
               <div className={css.FieldValue}>{name}</div>
           </div>
            <div className={css.Field}>
                <div> username</div>
                <div className={css.FieldValue}>{ username}</div>
            </div>
            <div className={css.Field}>
                <div>email</div>
                <div className={css.FieldValue}>{email}</div>
            </div>
        </div>
    );
};

export {UserDetails};