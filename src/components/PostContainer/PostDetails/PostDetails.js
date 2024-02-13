import {Outlet, useLocation, useNavigate} from "react-router-dom";

const PostDetails = () => {
   const{state:{post}} = useLocation();
   const {id, userId, title, body} = post
   const navigate = useNavigate()
    console.log(post);
    return (
        <div>
            <Outlet/>
            {post && <div>
                <div>id: {id}</div>
                <div>userId: {userId}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
                <button onClick={() => navigate('/comments', {state: {id}})}>comments</button>
            </div>}
        </div>
    );
};

export {PostDetails};