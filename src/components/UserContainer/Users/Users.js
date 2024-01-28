import React, {useEffect, useState} from 'react';

import css from './Users.module.css'
import {User} from "../User/User.js";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=> res.json())
            .then(value => setUsers(value))
    }, [])
    return (
        <div className={css.Users}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};