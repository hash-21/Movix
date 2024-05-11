import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useDispatch, useSelector } from 'react-redux'
import { addDisplayMovie, addDisplayMovieTrailer } from '../utils/movieSlice';
import { RxCross1 } from "react-icons/rx";

const MovieDisplay = ({ data }) => {
    const dispatch = useDispatch();
    useMovieTrailer(data.id,false);

    const closeActiveMovies = () => {
        dispatch(addDisplayMovie(null));
        dispatch(addDisplayMovieTrailer(null));
    }

    const trailer = useSelector(store => store.movies.displayMovieTrailer);
    return (

        <>
    
            <div className='z-40 bg-black  fixed w-screen h-screen  opacity-80 '>
            </div>
            <div className='flex flex-nowrap  justify-center h-screen items-center z-50  fixed w-screen '>

                
                <div className=' bg-black w-11/12 px-5  py-10 border-2 border-gray-600 rounded '>

                    <div className= 'text-white relative  cursor-pointer flex flex-row-reverse' onClick={closeActiveMovies}>
                    <RxCross1 />
                    </div>
                    <div className='flex flex-wrap  md:flex-nowrap'>

                        <div className='md:w-7/12 w-full '>

                            <iframe
                                className="w-full aspect-video "
                                src={
                                    "https://www.youtube.com/embed/" +
                                    trailer?.key +
                                    "?&autoplay=1&mute=1&loop=1&playlist="+trailer?.key
                                }
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                        <div className='ml-5 p-4 md:w-5/12'>
                            <h2 className="sm:text-4xl text-2xl font-bold uppercase text-orange-600">{data?.title}</h2>
                            <p className="mt-5  text-yellow-300 text-md">
                                {data?.overview}
                            </p>
                            <div className='p-3 mt-6 mr-7 ml-7 bg-yellow-200 text-center rounded-3xl text-orange-500 uppercase text-3xl font-semibold'>Avg. Ratings</div>
                            <div className=' mt-2  text-center font-bold uppercase text-2xl text-yellow-500'>
                                {data?.vote_average} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDisplay