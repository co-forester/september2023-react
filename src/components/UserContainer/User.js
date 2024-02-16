import {useNavigate} from "react-router-dom";

import css from './User.module.css'

const User = ({user}) => {
    const {id, name} = user;

    const navigate = useNavigate();
    return (
        <div className={css.User}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => navigate(`/users/${id}`)}>get Details</button>
        </div>
    );
};

export {User};

