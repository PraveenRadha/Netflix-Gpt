import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  
  return (
    <div className='pt-[5%] flex justify-center'>
        <form className='grid w-1/2 h-20 grid-cols-12 bg-black rounded-xl'> 
            <input className='col-span-9 p-4 m-4 rounded-xl'
             type="text" 
             placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button 
            className='col-span-3 px-2 py-2 m-4 text-white bg-red-700 rounded-lg'>
            {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;