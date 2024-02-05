

import css from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to = '/users'> users </NavLink>
            <NavLink to = '/comments'> comments </NavLink>
        </div>
    );
};

export {Header};