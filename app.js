// Firebase config (your own)
firebase.initializeApp({
  apiKey: "AIzaSyAktGHbEfYBx7kQ38ehn2ef43fLObrVOsM",
  authDomain: "mylearningauth.firebaseapp.com",
  projectId: "mylearningauth",
  storageBucket: "mylearningauth.appspot.com",
  messagingSenderId: "458548585723",
  appId: "1:458548585723:web:c0d11dab56a13f155afc5e",
  measurementId: "G-BP6R7ZBYMB"
});
const auth = firebase.auth();

const loginBtn = document.getElementById('login-btn');
const modal = document.getElementById('login-modal');
const closeBtn = document.getElementById('close-modal');
const signInBtn = document.getElementById('signInBtn');

loginBtn.onclick = () => modal.style.display = 'flex';
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; }

signInBtn.onclick = () => {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => location.href = 'index.html')
    .catch(e => alert(e.message));
};

auth.onAuthStateChanged(user => {
  if(user) location.href = 'index.html';
});
