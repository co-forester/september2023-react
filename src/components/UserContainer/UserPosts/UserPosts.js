import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {UserPost} from "../UserPost/UserPost";
import {postService} from "../../../services/postService";

const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const {state:{id}} = useLocation();

    console.log(id)
    console.log(posts)

    useEffect(() => {
        postService.getPostsByUserId(id).then(({data})=> setPosts(data))
    }, [id]);

    return (
        <div>
            {posts.map(post=> <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};