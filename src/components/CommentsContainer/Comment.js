import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <div>
                <div>postId:</div>
                <div>{postId}</div>
            </div>
            <div>
                <div>id:</div>
                <div>{id}</div>
            </div>
            <div>
                <div>name:</div>
                <div>{name}</div>
            </div>
            <div>
                <div>email:</div>
                <div>{email}</div>
            </div>
            <div>
                <div>body:</div>
                <div>{body}</div>
            </div>
        </div>
    );
};

export {Comment};