// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAktGHbEfYBx7kQ38ehn2ef43fLObrVOsM",
  authDomain: "mylearningauth.firebaseapp.com",
  projectId: "mylearningauth",
  storageBucket: "mylearningauth.firebasestorage.app",
  messagingSenderId: "458548585723",
  appId: "1:458548585723:web:c0d11dab56a13f155afc5e",
  measurementId: "G-BP6R7ZBYMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);