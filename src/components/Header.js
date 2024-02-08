
import {NavLink} from "react-router-dom";
import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to='todos'>todos</NavLink>
            <NavLink to='albums'>albums</NavLink>
            <NavLink to='comments'>comments</NavLink>
        </div>
    );
};

export {Header};