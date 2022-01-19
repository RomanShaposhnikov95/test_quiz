import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/http.hook";



export const fetchBonus = createAsyncThunk(
    'bonus/fetchBonus',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/bonus")
    }
)


const bonusSlice = createSlice({
    name: 'bonus',
    initialState: {
        bonus: [],
        bonusLoadingStatus: 'null',
        activeBonus: []
    },
    reducers: {
        addBonus: (state, action) => {
            state.activeBonus.push(action.payload)
        },
        removeBonus: (state, action) => {
            state.activeBonus = state.activeBonus.filter(el => el.id !== action.payload)
        },
        clearAllBonus: (state, action) => {
            state.activeBonus = []
        }
    },
    extraReducers: {
        [fetchBonus.pending]: (state) => {state.bonusLoadingStatus = 'loading'},
        [fetchBonus.fulfilled]: (state,action) => {
            state.bonusLoadingStatus = 'null';
            state.bonus = action.payload;
        },
        [fetchBonus.rejected]: (state) => {state.bonusLoadingStatus = 'error'},
    }
})


export const {addBonus, removeBonus, clearAllBonus} = bonusSlice.actions
export default bonusSlice.reducer