import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPagination = () => {
   const {prevPage, nextPage} = useSelector (state => state.episodes);
   const [setQuery] =  useSearchParams()

    const prevHandler = () => {
       setQuery(prev => {
           prev.set('page', (+prev.get('page')-1).toString())
           return prev
       })
    };

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page')+1).toString())
            return prev
        })
    };

    return (
        <div>
            <button disabled={!prevPage} onClick={prevHandler}>prev page</button>
            <button disabled={!nextPage} onClick={nextHandler}>next page</button>
        </div>
    );
};

export {EpisodesPagination};