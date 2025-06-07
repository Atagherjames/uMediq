// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFy-dujh7HRQWjZXhYGCvntndJxYTbEaA",
  authDomain: "umediq-1ec82.firebaseapp.com",
  projectId: "umediq-1ec82",
  storageBucket: "umediq-1ec82.appspot.com",
  messagingSenderId: "30412993938",
  appId: "1:30412993938:web:989ffd5ef2c97a13b4fd4b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
