// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4fuBF4PXFX7h2zU5W-fqv1-NLYRGg7Bg",
  authDomain: "kusinangbayan-44bdc.firebaseapp.com",
  databaseURL: "https://kusinangbayan-44bdc-default-rtdb.firebaseio.com",
  projectId: "kusinangbayan-44bdc",
  storageBucket: "kusinangbayan-44bdc.appspot.com",
  messagingSenderId: "68086742421",
  appId: "1:68086742421:web:4afd24667adc684d150a9c",
  measurementId: "G-9P9QE1BPVS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export { auth };
