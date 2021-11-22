// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXQyBqMsgYLd1dB4kTHkFXD37qUABeK3E",
  authDomain: "uber-next-clone-4980c.firebaseapp.com",
  projectId: "uber-next-clone-4980c",
  storageBucket: "uber-next-clone-4980c.appspot.com",
  messagingSenderId: "143738586174",
  appId: "1:143738586174:web:6e7655cbf73af961187d6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth}