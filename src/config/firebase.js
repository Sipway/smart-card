// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVtkKO__Gjht_VQMByVw0Mc0TOQrpS6rs",
  authDomain: "smartcard-f43de.firebaseapp.com",
  databaseURL: "https://smartcard-f43de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartcard-f43de",
  storageBucket: "smartcard-f43de.appspot.com",
  messagingSenderId: "416610199677",
  appId: "1:416610199677:web:d894d93cc6b0f018da2914",
  measurementId: "G-NEG2K9NJF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);