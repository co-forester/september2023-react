import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../../services/userService";

const UserPosts = () => {
    const [posts, setPosts] = useState([])
   const {state:{id}} = useLocation();

    console.log(id)
    console.log(posts)

    useEffect((id) => {
        userService.postsByUserId(id).then(({data})=>setPosts(data))
    }, [id]);

    return (
        <div>
            !!!!!
        </div>
    );
};

export {UserPosts};