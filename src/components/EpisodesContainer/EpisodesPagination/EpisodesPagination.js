import React from 'react';
import {useSelector} from "react-redux";

const EpisodesPagination = () => {
    const {prev, next} = useSelector (state => state.episodes);


    return (
        <div>
            <button>prev page</button>
            <button>next page</button>
        </div>
    );
};

export {EpisodesPagination};