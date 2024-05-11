import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import {addDisplayMovie} from "../utils/movieSlice"

const MovieCard = ({data}) => {
  const dispatch = useDispatch();


  if(!data.poster_path) return null;

  const handleMovieCardClick = () => {
      dispatch(addDisplayMovie(data));


  }
  return (
    <div className=' w-36 m-2 md:w-40 pr-4  ' onClick={handleMovieCardClick}>
      <img  className ='' src={IMG_CDN_URL+ data?.poster_path} alt={data?.original_title}/>
      <div className='text-white font-lg md:font-bold relative mt-2'>{data?.title}</div>

    </div>
  )
}

export default MovieCard