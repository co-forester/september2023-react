import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {registerValidator} from "../../validators";
import {authService} from "../../services";
import css from './RegistrForm.module.css'

const RegisterForm = () => {
    const [error, setError] = useState(null)
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(registerValidator)
    });

    const navigate = useNavigate();

    const save = async (user) => {
        try {
            await authService.register(user)
            navigate('/login')
        } catch (e) {
            setError(true)
        }
    }

    return (
        <div>
            <form className={css.RegistrForm} onSubmit={handleSubmit(save)}>
                <div className={css.div}>Username: <input className={css.Input} type="text" {...register('username')}/></div>
                <div className={css.div}>Password: <input className={css.Input} type="text" {...register('password')}/></div>
                <div className={css.div}>ConfirmPassword: <input className={css.Input} type="text" {...register('re_password')}/></div>
                <div className={css.div}>
                    <button className={css.ButRegistr} disabled={!isValid}>Register</button>
                </div>
            </form>
            {error && <div className={css.ErrorMessage}>Username already exists</div>}
            {errors.username && <div className={css.ErrorMessage}>{errors.username.message}</div>}
            {errors.password && <div className={css.ErrorMessage}>{errors.password.message}</div>}
            {errors.re_password && <div className={css.ErrorMessage}>{errors.re_password.message}</div>}
        </div>

    );
};

export {RegisterForm};