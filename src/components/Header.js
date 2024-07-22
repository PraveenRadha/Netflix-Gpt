import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/firebase';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES, netflixlogo, photoURL, photoURL_API } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch  = useSelector((store) => store.gpt.showGptSearch);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
       dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName, 
          photoURL: photoURL,}));
          navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () =>  unsubscribe();
  },[]); 

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };
  
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute z-20 flex justify-between w-screen px-4 py-2 bg-gradient-to-b from-black">
        <img className="w-36 "
        src={netflixlogo}
        alt="netflix-logo"
        />
       
        {user && 
       ( 
        <div className='flex'>
          
          {showGptSearch && <select className='p-2 m-4 font-sans font-bold text-white bg-gray-900 rounded-md'onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
            
          </select> }
          <button className='px-2 mx-2 my-5 font-sans font-bold text-white bg-green-600 rounded-lg text-md'
          onClick={handleGptSearchClick}>
            {showGptSearch ? " 🏠Home" : "GPT search 🔍"}</button>
         <img className='h-20 px-2 py-2 rounded-full'
         src={photoURL_API}
        //src= "https://avatars.githubusercontent.com/u/126752808?v=4"
         alt="useracountlogo"/>
         <button className='px-2 mx-2 my-5 font-bold text-white bg-black border border-gray-400 rounded-md cursor-pointer'
         onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
    </div>
  );
};

export default Header;