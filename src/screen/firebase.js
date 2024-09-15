// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDNXN1OP6Z12vMOivlS_uNUwKw-S7XEkk",
  authDomain: "gharbuddies.firebaseapp.com",
  projectId: "gharbuddies",
  storageBucket: "gharbuddies.appspot.com",
  messagingSenderId: "308634445349",
  appId: "1:308634445349:web:0e90c39f4a68a6b152c1cc",
  measurementId: "G-H5VRYLW21V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
