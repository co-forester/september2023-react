import React from 'react';

const PostDetails = ({postDetails}) => {
     const {id, slug, url, title, content, image, thumbnail, status, category, publishedAt, updatedAt, userId} = postDetails
    return (
        <div>
           <div>id: {id}</div>
           <div>slug: {slug}</div>
           <div>url: {url}</div>
           <div>title: {title}</div>
           <div>content: {content}</div>
           <div>image: {image}</div>
           <div>thumbnail: {thumbnail}</div>
           <div>status: {status}</div>
           <div>category: {category}</div>
           <div>publishedAt: {publishedAt}</div>
           <div>updatedAt: {updatedAt}</div>
           <div>userId: {userId}</div>
        </div>
    );
};

export {PostDetails};