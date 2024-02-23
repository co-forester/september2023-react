import React from 'react';
import {Outlet} from "react-router-dom";
import {LoginForm} from "../components";

const LoginPage = () => {
    return (
        <div>
            <LoginForm/>
        </div>
    );
};

export {LoginPage};