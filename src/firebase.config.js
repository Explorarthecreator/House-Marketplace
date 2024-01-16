// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTPlHyezhx-_eeEJHwRlsmFwTkeVscH_o",
  authDomain: "house-marketplace-app-22d45.firebaseapp.com",
  projectId: "house-marketplace-app-22d45",
  storageBucket: "house-marketplace-app-22d45.appspot.com",
  messagingSenderId: "53709927719",
  appId: "1:53709927719:web:7dc3b6c64cd4d94cd42502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()