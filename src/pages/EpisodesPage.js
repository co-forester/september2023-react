import {useSearchParams} from "react-router-dom";

import {Episodes, EpisodesPagination} from "../components";

const EpisodesPage = () => {

    return (
        <div>
            <EpisodesPagination/>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};