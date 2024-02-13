import {useEffect, useState} from "react";
import {Comments} from "./Comments/Comments";

const CommentContainer = ({id}) => {
    const [comments, setComments] = useState();

    useEffect(() => {

    }, [id])

    return (
        <div>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentContainer};