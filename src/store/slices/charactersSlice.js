import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState ={
    characters: [],
    prev: null,
    next: null
}

const getAll = createAsyncThunk(
    'charactersSlice',
    async ({ids}, thunkAPI) => {
        try{
            const {data} = await  characterService.getByIds(ids);
            return  data
        }catch (e) {
           return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.characters = action.payload
            })
})

const { reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions,
    getAll
}

export  {charactersReducer, charactersActions}
