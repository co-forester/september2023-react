import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {userService} from "../../services/userService";
import {Users} from "./Users/Users";
import {UserDetails} from "../UserDetails/UserDetails";

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    const {state:{id}} = useLocation();
    const [user, setUser] = useState(null);

    useEffect(async () => {
       await userService.getById(id).then(({data}) => setUser(data))
    }, [id])

    useEffect(async () => {
        await userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {user && <UserDetails user={user}/>}
            <Users users={users}/>
        </div>
    );
};

export {UserContainer};