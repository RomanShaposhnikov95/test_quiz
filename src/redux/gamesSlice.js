import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/http.hook";



export const fetchGames = createAsyncThunk(
    'bonus/fetchGames',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/games")
    }
)


const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        games: [],
        activeGames: [],
        gamesLoadingStatus: 'null'
    },
    reducers: {
        addGames: (state, action) => {
            state.activeGames.push(action.payload)
        },
        removeGames: (state, action) => {
            state.activeGames = state.activeGames.filter(el => el.id !== action.payload)
        },
        clearAllGames: (state, action) => {
            state.activeGames = [];
        }
    },
    extraReducers: {
        [fetchGames.pending]: (state) => {state.gamesLoadingStatus = 'loading'},
        [fetchGames.fulfilled]: (state,action) => {
            state.gamesLoadingStatus = 'null';
            state.games = action.payload;
        },
        [fetchGames.rejected]: (state) => {state.gamesLoadingStatus = 'error'}
    }
})


export const {addGames,removeGames,clearAllGames} = gamesSlice.actions
export default gamesSlice.reducer