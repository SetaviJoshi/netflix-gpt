// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSNR-tlQDeTVuhj5kfovR34XU008sl3XY",
  authDomain: "netflixgpt-4980a.firebaseapp.com",
  projectId: "netflixgpt-4980a",
  storageBucket: "netflixgpt-4980a.appspot.com",
  messagingSenderId: "587758580319",
  appId: "1:587758580319:web:9135c61e69b77e2374a1ea",
  measurementId: "G-PTY0JKX5E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();