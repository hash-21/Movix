import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo ,addDisplayMovieTrailer} from "../utils/movieSlice";

const useMovieTrailer = (movieId,isTrailer=true) => {
  const dispatch = useDispatch();
  const trailerVideo=useSelector(store=>store.movies.trailerVideo)

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    if(isTrailer)
    dispatch(addTrailerVideo(trailer));
    else
    dispatch(addDisplayMovieTrailer(trailer));
  };

  useEffect(() => {
   ( (!trailerVideo||!isTrailer) && getMovieVideos());
  }, []);
};

export default useMovieTrailer;
