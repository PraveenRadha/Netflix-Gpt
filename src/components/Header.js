import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/firebase';
import {signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigate("/");
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  };
  
  return (
    <div className="absolute z-20 flex justify-between w-screen px-4 py-2 bg-gradient-to-b from-black">
        <img className="w-36 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="logo"
        />
       
        {user && (
        <div className='flex'>
         <img className='h-20 px-2 py-1 rounded-full'
         src="https://avatars.githubusercontent.com/u/126752808?v=4"
         alt="useracountlogo"/>
         <button className='px-3 py-2 my-4 font-bold text-white bg-black border border-gray-400 rounded-md cursor-pointer'
         onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
    </div>
  );
};

export default Header;