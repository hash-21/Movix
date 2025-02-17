import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useHorrorMovies=()=>{

    const dispatch=useDispatch();
    const horrorMovies=useSelector(store=>store.movies.horrorMovies);


const getHorrorMovies=async ()=>{
  const data=await fetch("https://api.themoviedb.org/3/discover/movie?api_key="+ process.env.REACT_APP_TMDB_KEY + "&with_genres=27",API_OPTIONS);
  const json=await data.json();
  console.log(json);
  dispatch(addHorrorMovies(json.results)); 
}

useEffect(()=>{
  !horrorMovies && getHorrorMovies();

},[])
}


export default useHorrorMovies;