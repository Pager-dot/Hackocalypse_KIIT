// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoBhEt8AMgJWWDu5UuRJnMsbVJBYOA9Tw",
  authDomain: "login-form-37dd0.firebaseapp.com",
  projectId: "login-form-37dd0",
  storageBucket: "login-form-37dd0.appspot.com",
  messagingSenderId: "41589031656",
  appId: "1:41589031656:web:a958411b444badb971bf5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };