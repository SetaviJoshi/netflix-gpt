import React, { useState , useRef} from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constantss';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState (true);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButton = () =>{
    //console.log is just to check whether we are getting data or not
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(name.current.value);
    const message = checkValidData(email.current.value , password.current.value);
    //console.log(message);
    setErrorMessage(message);
    if (message) return;

    if(!isSignIn){ // (!isSignIn) means it is sign up form
  createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  updateProfile(user,{
    displayName: name.current.value,
    photoURL: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
  })
  .then(() => {
    const {uid, email, displayName, photoURL} = auth.currentUser;
    dispatch(addUser({uid:uid,email:email,displayName: displayName, photoURL:photoURL,}));
  }
)
  console.log(user);
  
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  setErrorMessage(errorCode + "_"+ errorMessage);
  
});
}else{

  const auth = getAuth();
signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "_"+ errorMessage);
  });
}
  };
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
 
  return (
    <div>
        <Header />
        <div className="absolute">
    <img src={BG_IMG}
    
    alt="bg"/></div>
   <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
       <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
     <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButton}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>

    </form>
    </div>
  );
};

export default Login;