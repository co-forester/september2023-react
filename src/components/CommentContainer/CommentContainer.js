import {useEffect, useState} from "react";

import {Comments} from "./Comments/Comments";
import {commentService} from "../../services/commentService";

const CommentContainer = ({id}) => {
    console.log(id)
    const [comments, setComments] = useState([]);

    useEffect(async () => {
        await commentService.getCommentsByPostId(id).then(({data})=>setComments(data))
    }, [id])

    return (
        <div>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentContainer};