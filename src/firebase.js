// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAehCWj9fAbzzA_wvOuqMp_kno04mo-x0",
  authDomain: "financely-12da6.firebaseapp.com",
  projectId: "financely-12da6",
  storageBucket: "financely-12da6.appspot.com",
  messagingSenderId: "307822027602",
  appId: "1:307822027602:web:5c0d5c88d2bb4d0b35508b",
  measurementId: "G-J8FE3QWM0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };

