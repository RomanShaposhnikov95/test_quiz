import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/http.hook";
import img1 from "../resources/img/page1/ico-1.png";
import img2 from "../resources/img/page1/ico-2.png";
import img3 from "../resources/img/page1/ico-3.png";
import img4 from "../resources/img/page1/ico-4.png";
import img5 from "../resources/img/page1/ico-5.png";
import img6 from "../resources/img/page1/ico-6.png";



export const fetchStart = createAsyncThunk(
    'start/fetchStart',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/currency")
    }
)


const dataSlice = createSlice({
    name: 'start',
    initialState: {
        startPage: [
            {img: img1, title: 'Blackjack'},
            {img: img2, title: 'Roulette'},
            {img: img3, title: 'Baccarat'},
            {img: img4, title: 'Poker'},
            {img: img5, title: 'Dragon & Tiger'},
            {img: img6, title: 'Slots'}
        ],
        startLoadingStatus: 'null',
        error: null
    },
    extraReducers: {
        [fetchStart.pending]: (state) => {state.startLoadingStatus = 'loading'},
        [fetchStart.fulfilled]: (state,action) => {
            state.startLoadingStatus = 'null';
            state.startPage = action.payload;
        },
        [fetchStart.rejected]: (state) => {state.startLoadingStatus = 'error'}
    }
})


export default dataSlice.reducer;