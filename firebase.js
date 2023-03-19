// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import {GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQylrxf_JotE-tTGJ029L1das9yFf_hNM",
  authDomain: "writeups-6baaf.firebaseapp.com",
  projectId: "writeups-6baaf",
  storageBucket: "writeups-6baaf.appspot.com",
  messagingSenderId: "460891900483",
  appId: "1:460891900483:web:11c95281b226a70b34e2f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider =  new GoogleAuthProvider()
const db = getFirestore(app)


 export {auth, provider, db}