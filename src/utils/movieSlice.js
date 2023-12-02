import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState:{
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies:null,
        topRatedMovies: null,
    },
    reducers : {
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
                state.trailerVideo = action.payload;
        },
    },
});

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies} = movieSlice.actions;
export const {addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;