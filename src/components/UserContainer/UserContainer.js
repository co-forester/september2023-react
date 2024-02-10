import {Users} from "./Users/Users";
import {useEffect, useState} from "react";
import {userService} from "../../services/userService";

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export {UserContainer};