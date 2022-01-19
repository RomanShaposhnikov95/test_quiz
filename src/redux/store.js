import {configureStore} from "@reduxjs/toolkit";

import games from './gamesSlice';
import translation from './translationSlice';
import test from './testSlice';
import bonus from './bonusSlice';
import data from './dataSlice';
import start from './startSlice';


const store = configureStore({
    reducer: {
        games: games,
        translation: translation,
        test: test,
        bonus: bonus,
        data: data,
        startPage: start
    }
})


window.store = store

export default store;
