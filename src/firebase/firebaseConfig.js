// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.RECT_APP_FIREBASE_APIKEY,
  authDomain:process.env.RECT_APP_FIREBASE_AUTHDOMAIN,
  projectId:process.env.RECT_APP_FIREBASE_PROJECTID,
  storageBucket:process.env.RECT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.env.RECT_APP_FIREBASE_MESSAGINGSENDERID,
  appId:process.env.RECT_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db; 