import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "../Episode";
import  css from './Episodes.module.css'
import {episodesActions} from "../../../store";
import {EpisodesPagination} from "../EpisodesPagination";


const Episodes = ({page}) => {
    const dispatch = useDispatch;
    const {episodes, prevPage, nextPage} = useSelector(state => state.episodes);

    useEffect(()=> {
        dispatch(episodesActions.getAll({page})
    )}, [])

    return (
        <div className={css.EpisodesRes}>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
        </div>
    );
};

export {Episodes};