import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/firebase';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { netflixlogo, photoURL, photoURL_API } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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

  
  return (
    <div className="absolute z-20 flex justify-between w-screen px-4 py-2 bg-gradient-to-b from-black">
        <img className="w-36 "
        src={netflixlogo}
        alt="netflix-logo"
        />
       
        {user && 
       ( 
        <div className='flex'>
          
         <img className='h-20 px-2 py-2 rounded-full'
         src={photoURL_API}
        //src= "https://avatars.githubusercontent.com/u/126752808?v=4"
         alt="useracountlogo"/>
         <button className='px-3 py-1 my-4 font-bold text-white bg-black border border-gray-400 rounded-md cursor-pointer'
         onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
    </div>
  );
};

export default Header;