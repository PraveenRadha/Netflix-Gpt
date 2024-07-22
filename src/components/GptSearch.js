import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { bgimage } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
      <img src={bgimage}
            alt="bg-image"
            />
      </div>
   <GptSearchBar />
   <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch;