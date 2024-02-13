import {useNavigate} from "react-router-dom";

const UserPost = ({post}) => {
    const {id, userId, title, body} = post
    const navigate = useNavigate()
    return (
        <div>
           <div>postId: {id}</div>
           <div>userId: {userId}</div>
           <div>title: {title}</div>
           <div>body: {body}</div>
            <button onClick={()=>navigate('/postDetails', {state:{postId:id}})}>post details</button>
        </div>
    );
};

export {UserPost};