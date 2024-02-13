import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {postService} from "../../services/postService";
import {Posts} from "./Posts/Posts";

const PostContainer = () => {
    const [posts, setPosts] = useState([]);
    const {state:{id}} = useLocation();

    useEffect(() => {
        postService.getPostsByUserId(id).then(({data}) => setPosts(data))
    }, [id])

    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostContainer};