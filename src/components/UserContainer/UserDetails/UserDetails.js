import {useLocation, useNavigate} from "react-router-dom";

const UserDetails = () => {
    const {state:{user}} = useLocation();
    console.log(user);
    const {id, name, username, email, phone, website} = user
    const navigate = useNavigate();
    return (
        <div>
            {user && <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>username: {username}</div>
                <div>email: {email}</div>
                <div>phone: {phone}</div>
                <div>website: {website}</div>
                <button onClick={() => navigate('/userPosts', {state: {id}})}>posts</button>
            </div>}
        </div>
    );
};

export {UserDetails};