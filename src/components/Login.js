import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../utils/firebase"

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    
    const name=useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    
    const handleButtonClick = () => {
        
        //validate the form data
        const message = checkValidData(name.current.value,email.current.value,password.current.value);
        setErrorMessage(message);
            //create a new useer in firebase.(sign in .sign up)
        if(message)return;
        //sign in ans sign up
        if(!isSignInForm){
            
    createUserWithEmailAndPassword(auth,name.current.value,email.current.value,password.current.value)
    .then((userCredential) => {
    // Sign uplogic 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorCode);
  });
       
    }else{
        //sign in logic
    }
        
            
        
    };

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
        <form onSubmit={(e) => e.preventDefault()}
         className="absolute left-0 right-0 w-3/12 p-12 mx-auto my-40 text-white bg-black opacity-80">
            <h1 className="py-4 text-3xl" >
                {isSignInForm ? "Sign In" : "Sign up"}
            </h1>
            {!isSignInForm && (
            <input ref={name}
             type="text" placeholder="Full name" className="w-full p-2 my-4 bg-gray-700 rounded-lg" />

            ) }
          
            <input ref={email}
            type="text" placeholder="Email Address" className="w-full p-2 my-4 bg-gray-700 rounded-lg" />

            <input ref={password}
             type="password" placeholder="password" className="w-full p-2 my-4 bg-gray-700 rounded-lg" />

            <p className="py-2 text-lg font-bold text-red-600">{errorMessage}</p>
            <button 
            className="w-full p-2 my-6 bg-red-600 rounded-xl" onClick={handleButtonClick}>
                {isSignInForm
                ?"Sign in":"Sign up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                 {isSignInForm
                 ? "New to Netflix? Sign Up Now" 
                :"Already registered? Sign In Now"}</p>
        </form>
    </div>
  );
};

export default Login;
