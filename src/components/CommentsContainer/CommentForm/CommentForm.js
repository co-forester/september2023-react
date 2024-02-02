import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../../services/commentService";

const CommentForm = ({setComments}) => {
    const {reset, handleSubmit, register} = useForm();

    const save= async (comment)=>{
       const {data} = await commentService.create(comment);
       setComments(prev=>[...prev, data])
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"number"} placeholder={'postId'} {...register('postId')}/>
            <input type={"text"} placeholder={'name'} {...register('name')}/>
            <input type={"text"} placeholder={'email'} {...register('email')}/>
            <input type={"text"} placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export {CommentForm};