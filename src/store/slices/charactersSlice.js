import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characters: [],
    prevPage: null,
    nextPage: null,
    trigger: null,
    loading: null
};

const getByIds = createAsyncThunk (
    'charactersSlice/getByIds',
    async (_, thunkAPI) => {
        try{
            const {data} = characterService.getByIds();
                return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            return  thunkAPI.rejectWithValue(e.response.data)
        }
    }

)

const charactersSlice = createSlice ({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getByIds.fulfilled, (state, actions) => {
                const {info: {prev, next}, results} = actions.payload;
                state.characters = results;
                state.prevPage = prev;
                state.nextPage = next
            })
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions,
    getByIds
}

export {
    charactersReducer,
    charactersActions
}