import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/http.hook";



export const fetchTest = createAsyncThunk(
    'test/fetchTest',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/questions")
    }
)


const testSlice = createSlice({
    name: 'test',
    initialState: {
        questions: [],
        testLoadingStatus: 'null',
    },
    extraReducers: {
        [fetchTest.pending]: (state) => {state.testLoadingStatus = 'loading'},
        [fetchTest.fulfilled]: (state,action) => {
            state.testLoadingStatus = 'null';
            state.questions = action.payload;
        },
        [fetchTest.rejected]: (state) => {state.testLoadingStatus = 'error'}
    }
})


export default testSlice.reducer