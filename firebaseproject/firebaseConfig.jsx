// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9yNIzW_8yyiZyoCJYXEpOmU5j_L4wbOc",
  authDomain: "fir-project-69bd2.firebaseapp.com",
  projectId: "fir-project-69bd2",
  storageBucket: "fir-project-69bd2.appspot.com",
  messagingSenderId: "727180830928",
  appId: "1:727180830928:web:e56b4947b7dbc0fed996d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);
const firestore=getFirestore(app);


export{auth,firestore}