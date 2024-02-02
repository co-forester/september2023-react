import React from 'react';

import {UsersContainer} from "./components/UsersContainer/UsersContainer";
import {CommentsContainer} from "./components/CommentsContainer/CommentsContainer";
import css from './App.module.css'
const App = () => {
    return (
        <div className={css.App}>

            <div className={css.AppUsersContainer}>
                <UsersContainer/>
            </div>
            <div className={css.AppCommentsContainer}>
                <CommentsContainer/>
            </div>

        </div>
    );
};

export {App};