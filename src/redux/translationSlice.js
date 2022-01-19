import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/http.hook";



export const fetchTranslations = createAsyncThunk(
    'translation/fetchTranslation',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/translations")
    }
)


const translationSlice = createSlice({
    name: 'translation',
    initialState: {
        translation: [],
        translationsLoadingStatus: 'null',
    },
    extraReducers: {
        [fetchTranslations.pending]: (state) => {state.translationLoadingStatus = 'loading'},
        [fetchTranslations.fulfilled]: (state,action) => {
            state.translationLoadingStatus = 'null';
            state.translation = action.payload;
        },
        [fetchTranslations.rejected]: (state) => {state.translationLoadingStatus = 'error'}
    }
})

export default translationSlice.reducer;