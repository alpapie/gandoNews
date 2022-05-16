// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW1v9galFoAa0ursIbrBNwGobUDz2I6sA",
  authDomain: "gandotech-db611.firebaseapp.com",
  projectId: "gandotech-db611",
  storageBucket: "gandotech-db611.appspot.com",
  messagingSenderId: "899744436479",
  appId: "1:899744436479:web:17d3a73cfebd0388f2fcca",
  measurementId: "G-G9F7S3HQ74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
