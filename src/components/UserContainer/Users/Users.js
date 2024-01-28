import React, {useEffect, useState} from 'react';

import css from './Users.module.css'
import {User} from "../User/User.js";
import axios from "axios";
import {axiosService} from "../../../services/axiosService";
import {userService} from "../../../services/userService";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const click = async (userId) =>  {
        // console.log(userId)
       const {data} = await userService.getById(userId);
       setUserDetails(data)
    }

    useEffect(()=>{
        // axiosService.get('/users')
        //     .then(({data}) => setUsers(data))
        userService.getAll().then(({data}) => setUsers(data))

    }, [])
    return (
        <div>
            <div className={css.Users}>
                {users.map(user => <User key={user.id} user={user} click={click}/>)}
            </div>
            {
                // userDetails ? <UserDetails userDetails = {userDetails}/> : <h1>Not selected</h1>
                userDetails && <UserDetails userDetails = {userDetails}/>
            }
        </div>

    );
};

export {Users};