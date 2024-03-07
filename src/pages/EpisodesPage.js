import {useSearchParams} from "react-router-dom";

import {Episodes, EpisodesPagination} from "../components";

const EpisodesPage = () => {
    const [query, setQuery] = useSearchParams( {page:'1'});
    const page = query.get('page');

    setQuery ({page: '1'})

    return (
        <div>
            <EpisodesPagination/>
            <Episodes page={page}/>
        </div>
    );
};

export {EpisodesPage};