import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/http.hook";
import {StepsEnum} from "./GameEnum";



export const fetchData = createAsyncThunk(
    'data/fetchData',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/currency")
    }
)


const dataSlice = createSlice({
    name: 'data',
    initialState: {
        currency: [],
        dataLoadingStatus: 'null',
        currentStep: StepsEnum.STEP_START,
        error: null
    },
    reducers: {
        nextStep: (state, action) => {
            console.log(action.payload)
            state.currentStep = action.payload
            state.error = null
        },
        changeErrorStatus: (state, action) => {
            state.error = action.payload
        },
    },
    extraReducers: {
        [fetchData.pending]: (state) => {state.dataLoadingStatus = 'loading'},
        [fetchData.fulfilled]: (state,action) => {
            state.dataLoadingStatus = 'null';
            state.currency = action.payload;
        },
        [fetchData.rejected]: (state) => {state.dataLoadingStatus = 'error'}
    }
})

export const {nextStep,changeErrorStatus} = dataSlice.actions;
export default dataSlice.reducer;