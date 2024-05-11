import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import MovieDisplay from './MovieDisplay';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';


const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  const movieData = useSelector(store => store.movies.displayMovie);

  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies(); 
  useHorrorMovies();

  return (
    <div className=''>
      <Header/>
      {
        showGptSearch ? (<GptSearch/>):(<>
        {
           movieData &&
           <MovieDisplay data={movieData} />
         }
         <MainContainer/>
      <SecondaryContainer/>
        </>)
      }
   
    </div>
  )
}

export default Browse