
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyARXAJIoFpZE5jquFm7jl1uXhKNGeMXE6k",
  authDomain: "portfolio-niladri.firebaseapp.com",
  projectId: "portfolio-niladri",
  storageBucket: "portfolio-niladri.appspot.com",
  messagingSenderId: "1006337025956",
  appId: "1:1006337025956:web:c7f3c422a57915d6ee4331"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore()