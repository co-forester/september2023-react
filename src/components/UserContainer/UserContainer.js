import {useEffect, useState} from "react";

import {userService} from "../../services/userService";
import {Users} from "./Users/Users";
import {Outlet} from "react-router-dom";

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <Outlet/>
            <Users users={users}/>
        </div>
    );
};

export {UserContainer};