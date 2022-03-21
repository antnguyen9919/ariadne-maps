// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgfZx3lER6JPSwX3FF3ECu_0sdS1Nb1L0",
  authDomain: "ariadne-8db00.firebaseapp.com",
  projectId: "ariadne-8db00",
  storageBucket: "ariadne-8db00.appspot.com",
  messagingSenderId: "162700055604",
  appId: "1:162700055604:web:771e8315195c802c96a661",
  measurementId: "G-ZX3ELBY6E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();