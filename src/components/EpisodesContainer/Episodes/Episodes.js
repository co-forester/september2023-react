import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "../Episode";
import css from './Episodes.module.css'
import {episodesActions} from "../../../stor";
import {useSearchParams} from "react-router-dom";
const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    const [query] = useSearchParams({page:'1'});

    const page = query.get('page');

    useEffect(() => {
        dispatch(episodesActions.getAll(page))
    }, [page, dispatch]);

    return (
        <div className={css.Episodes}>
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};