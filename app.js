// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAktGHbEfYBx7kQ38ehn2ef43fLObrVOsM",
  authDomain: "mylearningauth.firebaseapp.com",
  projectId: "mylearningauth",
  storageBucket: "mylearningauth.appspot.com",
  messagingSenderId: "458548585723",
  appId: "1:458548585723:web:c0d11dab56a13f155afc5e",
  measurementId: "G-BP6R7ZBYMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "index.html"; // 👈 your main site
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});

document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful! You can now log in.");
      document.getElementById("signup-form").style.display = "none";
      document.getElementById("login-form").style.display = "block";
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
});
