import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBY6nmhw256OIJLw5L4fMtOpKzy6o45L2k",
    authDomain: "vue-blog-system-1d796.firebaseapp.com",
    projectId: "vue-blog-system-1d796",
    storageBucket: "vue-blog-system-1d796.appspot.com",
    messagingSenderId: "737293996465",
    appId: "1:737293996465:web:4dbbea785e6642d2402d90"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();
let tiemstamp=firebase.firestore.FieldValue.serverTimestamp

export {db,tiemstamp};