import React, {useEffect, useState} from 'react';
import {commentService} from "../../services/commentService";
import {Comments} from "./Comments/Comments";
import {CommentForm} from "./CommentForm/CommentForm";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])


    useEffect(()=>{
        commentService.getAll().then(({data})=>setComments(data))
    }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};