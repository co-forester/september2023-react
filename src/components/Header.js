import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={}>todos</NavLink>
            <NavLink to={}>albums</NavLink>
            <NavLink to={}>comments</NavLink>
        </div>
    );
};

export {Header};