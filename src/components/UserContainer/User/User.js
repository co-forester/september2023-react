import {useNavigate} from "react-router-dom";

import css from './User.module.css'

const User = ({user}) => {
    const {id, name} = user

    const navigate = useNavigate()

    return (
        <div className={css.User}>
            <div>id: {id}</div>
            <div className={css.Name}>
                <div>name:</div>
                <div className={css.NameValue}> {name}</div>
            </div>
            <button onClick={() => navigate('/userDetails', {state: {user}})}>user details</button>
            <hr/>
        </div>
    );
};

export {User};