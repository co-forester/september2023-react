import {UserContainer} from "../components/UserContainer/UserContainer";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";

const UsersPages = () => {
    const {state:{id}} = useLocation();
    const [user, setUser] = useState(null);

    useEffect(async () => {
        await userService.getById(id).then(({data}) => setUser(data))
    }, [id])
    return (
        <div>
            <UserContainer user={user}/>
        </div>
    );
};

export {UsersPages};