import {useState} from "react";

const App = () => {
    // const [login, setLogin] = useState('default');
    // const [password, setPassword] = useState();
    const [formState, setFormState] = useState({login: '', password: ''})
    function onSubmit(e){
        console.log(e.target.login.value);
        console.log(e.target.password.value);
        e.preventDefault();
        console.log(formState)
    }
    // function onLoginChange(e){
    //     setLogin(e.target.value)
    // }function onPasswordChange(e){
    //     setPassword(e.target.value)
    // }
    function onChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    return (
        <div>
           <form onSubmit={onSubmit}>
               <input type={"text"} name={'login'} value={formState.login} onChange={onChange}/>
               <input type={"text"} name={'password'} value={formState.password} onChange={onChange}/>
               <button>submit</button>
           </form>
        </div>
    );
};

export {App};