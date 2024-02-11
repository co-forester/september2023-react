import {UserContainer} from "../components/UserContainer/UserContainer";
import {Outlet} from "react-router-dom";

const UsersPages = () => {

    return (
        <div>
            <Outlet/>
            <UserContainer/>
        </div>
    );
};

export {UsersPages};