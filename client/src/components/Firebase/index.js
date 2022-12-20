import firebase from "firebase";
// import "firebase/firestore";

// const fb = firebase.initializeApp({
//    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//    appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

const fb = firebase.initializeApp({
   apiKey: "AIzaSyA2C4gacUKZIwzzx4qmOJIyqaywQ8ycYTw",
  authDomain: "ldportal.firebaseapp.com",
  projectId: "ldportal",
  storageBucket: "ldportal.appspot.com",
  messagingSenderId: "46422581062",
  appId: "1:46422581062:web:bccdb6f68ffa5c47fc0f47",
  measurementId: "G-QTB7HF0X7W"
});

export default fb;
