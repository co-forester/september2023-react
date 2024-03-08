import {useNavigate} from "react-router-dom";

import css from './Episode.module.css'

const Episode = ({episode}) => {
    const {id, name,  air_date, url, created, episode: chapter, characters}= episode;
    const navigate = useNavigate();

    const toCharacters = () => {
        const ids = characters.map(characters=>characters.split('/').slice(-1)[0]).join(',');
        navigate(`/characters/${ids}`);
    }

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>air_date: {air_date}</div>
            <div>url: {url}</div>
            <div>created: {created}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};