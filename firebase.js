import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA44zaSa4ytxEkKToudBKvFBLNU4SYImIw",
  authDomain: "virtual-class-2022.firebaseapp.com",
  projectId: "virtual-class-2022",
  storageBucket: "virtual-class-2022.appspot.com",
  messagingSenderId: "1052493886746",
  appId: "1:1052493886746:web:e9b1c75bae8d9bb346e8a3",
  measurementId: "G-GXYTM3TVB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export {db}