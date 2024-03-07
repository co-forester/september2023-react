import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    currentEpisode: null,
    errors: null,
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = episodeService.getAll(page);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e.response.data;
            // console.log(error);
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, actions) => {
                const {info: {prev, next}, results} = actions.payload;
                state.episodes = results;
                state.prevPage = prev;
                state.nextPage = next
            })
            .addMatcher(isFulfilled(getAll), state => {
                state.errors = null
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.errors = action.payload
            })
})

const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAll
}

export {
    episodesReducer,
    episodesActions
}