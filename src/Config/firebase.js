// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBgfZx3lER6JPSwX3FF3ECu_0sdS1Nb1L0",
  authDomain: "ariadne-8db00.firebaseapp.com",
  projectId: "ariadne-8db00",
  storageBucket: "ariadne-8db00.appspot.com",
  messagingSenderId: "162700055604",
  appId: "1:162700055604:web:771e8315195c802c96a661",
  measurementId: "G-ZX3ELBY6E9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default getFirestore();
