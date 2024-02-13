import {useNavigate} from "react-router-dom";

const UserPost = ({post}) => {
    const {id, title} = post
    const navigate = useNavigate()
    return (
        <div>
           <div>title: {title}</div>
            <button onClick={()=>navigate('/postDetails', {state:{post}})}>post details</button>
            <hr/>
        </div>
    );
};

export {UserPost};