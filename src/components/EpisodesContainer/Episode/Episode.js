import css from './Episode.module.css'

const Episode = ({episode}) => {
    const {id, name,  air_date, url, created}= episode;

    return (
        <div className={css.Episode}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>air_date: {air_date}</div>
            <div>url: {url}</div>
            <div>created: {created}</div>
        </div>
    );
};

export {Episode};