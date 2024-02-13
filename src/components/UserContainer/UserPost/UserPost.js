import {useNavigate} from "react-router-dom";

const UserPost = ({post}) => {
    const {id, title} = post
    const navigate = useNavigate()
    return (
        <div>
           <div>postId: {id}</div>
           {/*<div>userId: {userId}</div>*/}
           <div>title: {title}</div>
           {/*<div>body: {body}</div>*/}
            <button onClick={()=>navigate('/postDetails', {state:{post}})}>post details</button>
        </div>
    );
};

export {UserPost};