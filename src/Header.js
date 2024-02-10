import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
          <NavLink to={'/users'}>users</NavLink>
        </div>
    );
};

export {Header};