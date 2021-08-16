import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCF76UKw3AuXaW8t9zj9vmTosAXsrQwrdA",
    authDomain: "clon-5c6f7.firebaseapp.com",
    projectId: "clon-5c6f7",
    storageBucket: "clon-5c6f7.appspot.com",
    messagingSenderId: "108014539445",
    appId: "1:108014539445:web:4547bd3851ae69fc6e64fc",
    measurementId: "G-SSEVGHHTW4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };