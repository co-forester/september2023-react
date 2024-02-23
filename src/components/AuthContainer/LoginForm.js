import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";

import {authService} from "../../services";
import css from './Loginform.module.css'

const LoginForm = () => {
    const {handleSubmit, register} = useForm();
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const login = async (user) => {
        try {
            await authService.login(user)
            navigate('/cars')
        } catch (e) {
            setError(true)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(login)} className={css.LoginForm}>
                <div className={css.div}>Username: <input className={css.Input} type="text" {...register('username')}/></div>
                <div className={css.div}>Password: <input className={css.Input} type="text" {...register('password')}/></div>
                <div className={css.div}>
                    <button className={css.ButLogin}>Login</button>
                </div>
            </form>
            {error && <div className={css.ErrorMessage}>Username or password incorrect</div>}
        </div>

    );
};

export {LoginForm};