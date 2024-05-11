import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        upcomingMovies:null,
        topRatedMovies:null,
        horrorMovies:null,
        displayMovie: null,
        displayMovieTrailer: null,
    },
    reducers:{
addNowPlayingMovies:(state,action)=>{
    state.nowPlayingMovies = action.payload;
},
  addTrailerVideo:(state,action)=>{ 
     state.trailerVideo = action.payload;
    },
    addPopularMovies:(state,action)=>{
        state.popularMovies=action.payload;
    },
    addDisplayMovie: (state, action) => {
        state.displayMovie = action.payload
    },

    addDisplayMovieTrailer: (state, action) => {
        state.displayMovieTrailer = action.payload
    },
    addUpcomingMovies: (state, action) => {
        state.upcomingMovies=action.payload;

    },
    addTopRatedMovies: (state, action) => {
        state.topRatedMovies=action.payload;
    },
    addHorrorMovies: (state, action) => {
        state.horrorMovies=action.payload;
    },


}
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addDisplayMovieTrailer,addDisplayMovie,addHorrorMovies,addTopRatedMovies,addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;