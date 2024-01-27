import React, {useEffect, useState} from 'react';

import {User} from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(items => setUsers(items))
    }, []);
        return (
            <div>
                {users.map(value => <User key={value.id} item = {value}/>)}
            </div>
        );
};

export {Users};