// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJTmY_jxlBgOJUdTRDg7O7BRpzcyfjgqk",
  authDomain: "suntrip-8eb58.firebaseapp.com",
  projectId: "suntrip-8eb58",
  storageBucket: "suntrip-8eb58.appspot.com",
  messagingSenderId: "419606429261",
  appId: "1:419606429261:web:8d1d06b783bebc9a7d6604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };