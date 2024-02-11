import {useEffect, useState} from "react";

import {userService} from "../../services/userService";
import {Users} from "./Users/Users";
import {UserDetails} from "../UserDetails/UserDetails";

const UserContainer = ({user}) => {
    const [users, setUsers] = useState([]);


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