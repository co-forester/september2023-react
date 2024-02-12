import {Outlet} from "react-router-dom";
import {UserContainer} from "../components/UserContainer/UserContainer";

const UsersPages = () => {

    return (
        <div>
            <Outlet/>
            <UserContainer/>
        </div>
    );
};

export {UsersPages};