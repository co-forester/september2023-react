import {useState} from "react";

const App = () => {
    // const [login, setLogin] = useState('default');
    // const [password, setPassword] = useState();
    const [formState, setFormState] = useState({login: '', password: ''})
    function onSubmit(e){
        e.preventDefault();
        // console.log(e.target)
        // console.log(e.target.login.value);
        // console.log(e.target.password.value);
        // create obj && send to api
        // console.log(formState);
        // e.target.reset()
    }
    // function onLoginChange(e){
    //     setLogin(e.target.value)
    // }function onPasswordChange(e){
    //     setPassword(e.target.value)
    // }
    function onChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
        console.log(e.target.value, e.target.name )
    }

    return (
        <div>
           <form  name={11} onSubmit={onSubmit}>
               <input type={"text"} name={'login'} value={formState.login} onChange={onChange} placeholder={'введить ім`я'}/>
               <input type={"text"} name={'password'} value={formState.password} onChange={onChange} placeholder={'введить пароль'}/>
               <button>збережити</button>
           </form>
        </div>
    );
};

export {App};