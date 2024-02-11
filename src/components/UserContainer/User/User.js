import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user

    const navigate = useNavigate()

    return (
        <div>
           <div>id: {id}</div>
           <div>name: {name}</div>
            <button onClick={()=>navigate('userDetails',{state:{user}})}>user detail</button>
        </div>
    );
};

export {User};