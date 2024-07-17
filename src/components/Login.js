import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg" 
            alt="logo"
            />
        </div>
        <form className="bg-black absolute w-3/12  my-40 mx-auto right-0 left-0 text-white p-12 opacity-80">
            <h1 className="text-3xl py-4">
                {isSignInForm ? "Sign In" : "Sign up"}
            </h1>
            {!isSignInForm && (
            <input type="text" placeholder="Full name" className="p-2 my-4 w-full rounded-lg bg-gray-700" />

            ) }
          
            <input type="text" placeholder="Email Address" className="p-2 my-4 w-full rounded-lg bg-gray-700" />

            <input type="password" placeholder="password" className="p-2 my-4 w-full rounded-lg bg-gray-700" />

            <button className="p-2 my-6 bg-red-600 rounded-xl w-full">
                {isSignInForm
                ?"Sign in":"Sign up"}</button>
            <p className="cursor-pointer py-4" onClick={toggleSignInForm}>
                 {isSignInForm
                 ? "New to Netflix? Sign Up Now" 
                :"Already registered? Sign In Now"}</p>
        </form>
    </div>
  );
};

export default Login;
