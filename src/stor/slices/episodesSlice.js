import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    prev: null,
    next: null,
    episodes: [],
    loading: null,
    error: null
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 3000))
            const {data} = await episodeService.getAll(page);
            // return thunkAPI.fulfillWithValue(data);
            return data
        } catch (e) {
            const error = e.response.data;
            console.log(error);
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {prev, next}, results} = action.payload;
                state.prev = prev;
                state.next = next;
                state.episodes = results
            })
})

const {reducer: episodesReducer, actions} = episodesSlice

const episodesActions = {
    ...actions,
    getAll
}

export {episodesReducer, episodesActions}