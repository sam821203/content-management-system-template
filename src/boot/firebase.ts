// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCes3o8sM6JRkafQEURiRRhSwBGSjNOkxw",
  authDomain: "linco-d58eb.firebaseapp.com",
  projectId: "linco-d58eb",
  storageBucket: "linco-d58eb.appspot.com",
  appId: "1:855822114334:web:a0bae645d99cf337d7180f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const firebaseAuth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const usersCollection = collection(db, "users");

export { firebaseApp, firebaseAuth, db, usersCollection };
