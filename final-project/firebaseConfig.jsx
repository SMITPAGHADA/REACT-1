// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ-rY18gxFizDOmmdPf1ELG8W4buTxJcU",
  authDomain: "finalproject-842f5.firebaseapp.com",
  projectId: "finalproject-842f5",
  storageBucket: "finalproject-842f5.appspot.com",
  messagingSenderId: "794020437134",
  appId: "1:794020437134:web:26200cd33ac52c084fbddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


let auth= getAuth(app)
let provider = new GoogleAuthProvider

export{auth,provider}