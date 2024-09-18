// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDol74MFyAmF3cKyEJy4RaI1aNqUmZSCz8",
  authDomain: "auth-a8a66.firebaseapp.com",
  projectId: "auth-a8a66",
  storageBucket: "auth-a8a66.appspot.com",
  messagingSenderId: "65197043237",
  appId: "1:65197043237:web:d01f174fe3128d968b99cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth=getAuth(app)
let provider= new GoogleAuthProvider 
export{auth,provider}