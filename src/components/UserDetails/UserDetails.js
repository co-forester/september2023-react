import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/userService";


const UserDetails = () => {
    const {state:{user}} = useLocation();
    const {id, name, username, email, phone, website} = user
   // useEffect(() => {
   //
   // }, [user])

    return (
        <div>
            {user && <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>username: {username}</div>
                <div>email: {email}</div>
                <div>phone: {phone}</div>
                <div>website: {website}</div>

            </div>}
        </div>
    );
};

export {UserDetails};