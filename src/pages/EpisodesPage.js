import React from 'react';

import {EpisodesPagination} from "../components/EpisodesContainer/EpisodesPagination";
import {Episodes} from "../components/EpisodesContainer/Episodes";

const EpisodesPage = () => {
    return (
        <div>
            <EpisodesPagination/>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};