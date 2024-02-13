import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../../services/userService";
import {UserPost} from "../UserPost/UserPost";

const UserPosts = () => {
    const [posts, setPosts] = useState([])
   const {state:{id}} = useLocation();

    console.log(id)
    console.log(posts)

    useEffect(() => {
        userService.postsByUserId(id).then(({data})=> setPosts(data))
    }, [id]);

    return (
        <div>
           {posts.map(post=> <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};