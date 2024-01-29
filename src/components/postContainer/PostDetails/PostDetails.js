import React from 'react';

import css from './PostDetails.module.css'
const PostDetails = ({postDetails}) => {
     const {id, title, body, userId} = postDetails
    return (
        <div className={css.PostDetail}>
            <div className={css.FieldPostDetails}>
                <div className={css.Field}>id</div>
                <div className={css.FieldValue}> {id}</div>
            </div>
            <div className={css.FieldPostDetails}>
                <div className={css.Field}>userId</div>
                <div className={css.FieldValue}>{userId}</div>
            </div>
            <div className={css.FieldPostDetails}>
                <div className={css.Field}>title</div>
                <div className={css.FieldValue}>{title}</div>
            </div>
            <div className={css.FieldPostDetails}>
                <div className={css.Field}>body</div>
                <div className={css.FieldValue}>{body}</div>
            </div>
        </div>
    );
};

export {PostDetails};