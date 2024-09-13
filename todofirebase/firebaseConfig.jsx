// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbo6qDG2S3m_yhSULqm9BGWP-l9m85esE",
  authDomain: "todofirebase-effb2.firebaseapp.com",
  projectId: "todofirebase-effb2",
  storageBucket: "todofirebase-effb2.appspot.com",
  messagingSenderId: "467289509122",
  appId: "1:467289509122:web:ee8af2221b0c53cf39061b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


let firestore= getFirestore(app);
export {firestore}