// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "clone1-ee26c.firebaseapp.com",
  databaseURL: process.env.databaseURL,
  projectId: "clone1-ee26c",
  storageBucket: "clone1-ee26c.appspot.com",
  messagingSenderId: "745973017141",
  appId: process.env.appId,
  measurementId: "G-WMHQ13N4VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();
export default db;