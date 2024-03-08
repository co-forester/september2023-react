import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Episode} from "../Episode";
import  css from './Episodes.module.css'
import {episodesActions} from "../../../store";


const Episodes = () => {
    const dispatch = useDispatch;
    const {episodes} = useSelector(state => state.episodes);
    const [query] = useSearchParams( {page:'1'});
    const page = query.get('page');

    useEffect(()=> {
        dispatch(episodesActions.getAll({page})
    )}, [page, dispatch])

    return (
        <div className={css.EpisodesRes}>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
        </div>
    );
};

export {Episodes};