import React from 'react';
import css from './Commment.module.css'

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <div className={css.postId}>
                <div>postId:</div>
                <div>{postId}</div>
            </div>
            <div className={css.id}>
                <div>id:</div>
                <div>{id}</div>
            </div>
            <div className={css.name}>
                <div>name:</div>
                <div>{name}</div>
            </div>
            <div className={css.email}>
                <div>email:</div>
                <div>{email}</div>
            </div>
            <div className={css.body}>
                <div>body:</div>
                <div>{body}</div>
            </div>
            <hr/>
        </div>
    );
};

export {Comment};