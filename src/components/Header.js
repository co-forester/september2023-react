import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
          <NavLink to={'/users'} className={css.NavLink}>all users</NavLink>
        </div>
    );
};

export {Header};