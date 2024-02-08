import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment

    const navigate= useNavigate();

    return (
        <div onClick={()=>navigate('post', {state:{postId}})}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};