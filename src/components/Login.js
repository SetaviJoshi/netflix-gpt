import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState (true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
 
  return (
    <div>
        <Header />
        <div className="absolute">
    <img src=
    "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    alt="bg"/></div>
    <form className="absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
      {isSignIn &&
      <input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-600 rounded-lg"/>}
      <input type="text" placeholder="Email or Phone number" className="p-2 my-2 w-full bg-gray-600 rounded-lg"/>
      <input type="text" placeholder="Password" className="p-2 my-2 w-full  bg-gray-600 rounded-lg"/>
      <button className="p-4 my-4 bg-red-600 w-full rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
      <p onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign up now." : "Already registered? Sign In here!"}</p>

    </form>
    </div>
  );
};

export default Login;