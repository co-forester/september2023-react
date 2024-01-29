import React from 'react';


import css from './Post.module.css'


const Post = ({post, click}) => {
   const {id, title} = post;
    return (
        <div className={css.Post}>
            <div>
                <div className={css.Field}>id</div>
                <div className={css.FieldValue}>{id}</div>
            </div>
            <div>
                <div className={css.Field}>title</div>
                <div className={css.FieldValue}>{title}</div>
            </div>
            <button onClick={()=>click(id)}>details</button>
        </div>
    );
};

export {Post};