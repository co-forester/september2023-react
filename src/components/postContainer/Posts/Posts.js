import React, {useEffect, useState} from 'react';

import {postService} from "../../../services/PostService";
import {Post} from "../Post/Post";
import css from './Posts.module.css'
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    const click = async (postId) => {
        const {data} = await postService.getById(postId);
        setPostDetails(data)
    }

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div className={css.Posts}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} click={click}/>)}
            </div>
            {
                postDetails ? <PostDetails postDetails = {postDetails}/> : <h1>Not selected</h1>
            }
        </div>

    );
};

export {Posts};