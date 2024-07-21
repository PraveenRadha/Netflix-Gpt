import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import auth from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { photoURL_API } from '../utils/constants';
import { bgimage } from '../utils/constants';

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    
    const handleButtonClick = () => {

        //validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
            //create a new useer in firebase.(sign in .sign up)
        if(message)return;
        //sign in ans sign up
        if(!isSignInForm){
          
    createUserWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value)
    .then((userCredential) => {
    // Sign uplogic 
    const user = userCredential.user;
  
    
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: photoURL_API,
    })
    .then(() => {
      // Profile updated!
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(
        addUser({
        uid: uid,
        email: email,
        displayName: displayName, 
        photoURL: photoURL,
      })
        );
      
      
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
    });
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
       
    }
    else{
        //sign in logic
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    // navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    
  }
        
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div >
        <Header />
        <div className="absolute">
            <img src={bgimage}
            alt="bg-image"
            />
        </div>
        <form onSubmit={(e) => e.preventDefault()}
         className="absolute left-0 right-0 w-3/12 p-12 mx-auto my-40 text-white bg-black opacity-80">
            <h1 className="py-4 text-3xl" >
                {isSignInForm ? "Sign In" : "Sign up"}
            </h1>
            {!isSignInForm && (
             <input 
             ref={name}
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
