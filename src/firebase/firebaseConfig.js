import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBV09NxbErg6RetvXcFVeesYdi3LR2jp44",
  authDomain: "e-pets-76548.firebaseapp.com",
  projectId: "e-pets-76548",
  storageBucket: "e-pets-76548.appspot.com",
  messagingSenderId: "1029060292650",
  appId: "1:1029060292650:web:40838bb182f983e8c71353"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

export default appFirebase; 