import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' p-12 pt-[15%] absolute w-screen aspect-video bg-gradient-to-r from-black '>
        <h1 className='py-3 text-6xl font-bold text-white'>{title}</h1>
        <p className='w-1/4 py-1 text-lg text-white hover:text-gray-500 '>{overview}</p>
        <div className='py-3'>
            <button className='px-6 py-2 text-xl text-black bg-white rounded-lg hover:bg-opacity-50'>▶️ Play</button>
            <button className='px-4 py-2 mx-2 text-xl text-white bg-gray-500 rounded-lg'>👀 More info</button>
        </div>
    </div>
  )
}

export default VideoTitle;