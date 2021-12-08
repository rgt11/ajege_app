// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvaWe5zwxuHVGxBAC0a6LX0U3DFHI6IB0",
  authDomain: "ajege-30209.firebaseapp.com",
  projectId: "ajege-30209",
  storageBucket: "ajege-30209.appspot.com",
  messagingSenderId: "336975298638",
  appId: "1:336975298638:web:fb0a6dd7e7ac112ac7431f",
  measurementId: "G-1288DLR6MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);