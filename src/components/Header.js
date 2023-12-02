import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constantss';
import { SIGN_OUT_LOGO } from '../utils/constantss';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b flex justify-between from-black z-10">
        <img className="w-44" src= {LOGO_URL}
        alt="logo img"/>

        {user && (<div className="flex p-2">
          <img className="w-12 h-12"
          alt="sign-out logo"
          src={SIGN_OUT_LOGO}
          />
         <button onClick={handleSignOut} className="font-bold text-white ">
           Sign out        </button>
        </div>)}
    </div>
  );
};

export default Header;