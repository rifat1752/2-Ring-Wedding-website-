// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUeK8YwNauZZpAreHMry3Pd5wBpOYB68w",
  authDomain: "ring-wedding-management.firebaseapp.com",
  projectId: "ring-wedding-management",
  storageBucket: "ring-wedding-management.appspot.com",
  messagingSenderId: "456889785566",
  appId: "1:456889785566:web:f9dbfd9bc9f1f0e657764f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;