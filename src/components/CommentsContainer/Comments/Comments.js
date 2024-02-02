import React from 'react';

import {Comment} from "../Comment/Comment";
import css from './Comments.module.css'
const Comments = ({comments}) => {
    return (
        <div className={css.Comments}>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};