import React from 'react';

const PostDetails = ({postDetails}) => {
     const {id, title, body, userId} = postDetails
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetails};