import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
          <NavLink to={'/users'}>all users</NavLink>
        </div>
    );
};

export {Header};