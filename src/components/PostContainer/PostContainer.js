import {useEffect, useState} from "react";

import {Posts} from "./Posts/Posts";
import {userService} from "../../services/userService";
import {useLocation} from "react-router-dom";

const PostContainer = () => {
    const [posts, setPosts] = useState([]);
    const {state:{id}} = useLocation();
    console.log(id)
    useEffect(() => {
        userService.getPostsById(id).then(({data}) => setPosts(data))
    }, [id])

    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostContainer};