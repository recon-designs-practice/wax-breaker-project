// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNbHHKwjQnSWKI3yN20UewXn30igFP_ZA",
  authDomain: "wax-breaker-app.firebaseapp.com",
  projectId: "wax-breaker-app",
  storageBucket: "wax-breaker-app.appspot.com",
  messagingSenderId: "422757372205",
  appId: "1:422757372205:web:06b463b894bb103fb203a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)