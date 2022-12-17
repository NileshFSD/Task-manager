// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAveObncux7yGd0y2zfZFbgU-ZasaFM_pQ",
  authDomain: "task-manager-53f29.firebaseapp.com",
  databaseURL: "https://task-manager-53f29-default-rtdb.firebaseio.com",
  projectId: "task-manager-53f29",
  storageBucket: "task-manager-53f29.appspot.com",
  messagingSenderId: "774361707704",
  appId: "1:774361707704:web:d236ed9943ce4a26e0304d",
  measurementId: "G-ZGBQ46LV8K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
