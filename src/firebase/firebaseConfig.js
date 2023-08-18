// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7Ss-buuMbM4wlOpIxrd9L50uglAUqi2U",
    authDomain: "clementina-2e035.firebaseapp.com",
    projectId: "clementina-2e035",
    storageBucket: "clementina-2e035.appspot.com",
    messagingSenderId: "606106829114",
    appId: "1:606106829114:web:005395ab29564bf7a71003",
    measurementId: "G-3GFPTY2FDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);