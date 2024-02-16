import {Outlet, useNavigate} from "react-router-dom";

import css from './MainLayout.module.css'

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div className={css.MainLayout}>
            <button onClick={() => navigate(-1)}>prev</button>
            <button onClick={() => navigate(1)}>next</button>
            <Outlet/>
        </div>
    );
};

export {MainLayout};