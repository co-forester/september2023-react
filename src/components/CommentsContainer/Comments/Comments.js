import {useEffect, useState} from "react";
import {commentService} from "../../../services/CommentService";
import {Comment} from "../Comment/Comment";


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentService.getAll().then(({data})=>setComments(data))
    }, [])
    // console.log(comments)
    const post = ()=>{

    }

    return (
        <div onClick={post}>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};