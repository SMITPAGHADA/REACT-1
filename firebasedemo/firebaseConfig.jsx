// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAZVJwxE0B-bFcUpaLZBzpZz8VP7ITJVA",
  authDomain: "fir-demo-a8dab.firebaseapp.com",
  projectId: "fir-demo-a8dab",
  storageBucket: "fir-demo-a8dab.appspot.com",
  messagingSenderId: "1085796836788",
  appId: "1:1085796836788:web:b37c0fec84ae9e1c1bfee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth=getAuth(app);