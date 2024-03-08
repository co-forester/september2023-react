import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.episodes)
    const [, setQuery] = useSearchParams({page:'1'})

    const prev = () => {
        setQuery( value => {
            value.set('page', `${+value.get('page')-1}`);
            return value
        })
    }

    const next = () => {
        setQuery( prev => {
            prev.set('page', (+prev.get('page')+1).toString());
            return prev
        })
    }

    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>prev page</button>
            <button disabled={!nextPage} onClick={next}>next page</button>
        </div>
    );
};

export {EpisodesPagination};