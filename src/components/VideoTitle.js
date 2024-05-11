import React from 'react'
import { IoPlay } from "react-icons/io5";


const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video pt-[17%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' text-2xl md:text-5xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>

        <div className='my-4 md:m-0'>
            <button className='bg-white text-black py-1 md:py-2  px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80'> <IoPlay className='inline mb-1' />Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white py-2.5 px-12 text-xl bg-opacity-55 rounded-lg  hover:bg-opacity-30'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle