import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import chatgptai from '../utils/chatgptai';

const GptSearchBar = () => {
  const seachText = useRef(null);

  const langKey = useSelector((store) => store.config.lang);
  const handleGptSearchClick =  () =>{
    console.log(seachText.current.value);
    // make an api call to gpt api and get movie result
  
  // const gptResults =await chatgptai.chat.completions.create({
  //   messages: [{ role: 'user', content: 'Say this is a test' }],
  //   model: 'gpt-3.5-turbo',
  // });
  // console.log(gptResults.choices);
};

  return (
    <div className='pt-[5%] flex justify-center'>
        <form className='grid w-1/2 h-20 grid-cols-12 bg-black rounded-xl'
        onSubmit={(e) => e.preventDefault()}> 
            <input className='col-span-9 p-4 m-4 rounded-xl'
            ref={seachText}
             type="text" 
             placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button 
            className='col-span-3 px-2 py-2 m-4 text-white bg-red-700 rounded-lg'
            onClick={handleGptSearchClick}>
            {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;