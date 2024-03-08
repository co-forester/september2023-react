import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    episodes: [],
    prev: null,
    next: null,
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data
        } catch (e) {
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
                state.prev = prev;
                state.next = next
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