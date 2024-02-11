import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services/userService";


const UserDetails = () => {
    const {state:{id}} = useLocation();
    const [user, setUser] = useState(null);

    useEffect( () => {
         userService.getById(id).then(({data}) => setUser(data))
    }, [id]);



    console.log(user)

    return (
        <div>
            UserDetails
        </div>
    );
};

export {UserDetails};