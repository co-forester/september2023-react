import {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postServise} from "../../services/postServise";
import {Post} from "./Post/Post";

const PostContainer = () => {
    const{state:{postId}} = useLocation();
    console.log(postId)
    // const [post, setPost] = useState(null);
    //
    // useEffect(()=>{
    //     const postComment = async (postId) =>{
    //         await postServise.getByPostId(postId).then(({data})=>setPost(data));
    //     }
    // }, [postId]);

    return (
        <div>
            {/*{post &&<Post key={post.id} post={post}/> }*/}
        </div>
    );
};

export {PostContainer};