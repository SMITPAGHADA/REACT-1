// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKb2rKOil1x3UM5-dimOaD189URTT3sP8",
  authDomain: "project-562bd.firebaseapp.com",
  projectId: "project-562bd",
  storageBucket: "project-562bd.appspot.com",
  messagingSenderId: "3387296827",
  appId: "1:3387296827:web:bb821726baf6b87b95201e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth=getAuth(app);
let provider = new GoogleAuthProvider

export {auth,provider};