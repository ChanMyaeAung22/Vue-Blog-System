import {initializeApp} from 'firebase/app'
import { getFirestore,collection,getDocs} from 'firebase/firestore/lite'

//firebase database config file
const firebaseConfig = {
    apiKey: "AIzaSyBY6nmhw256OIJLw5L4fMtOpKzy6o45L2k",
    authDomain: "vue-blog-system-1d796.firebaseapp.com",
    projectId: "vue-blog-system-1d796",
    storageBucket: "vue-blog-system-1d796.appspot.com",
    messagingSenderId: "737293996465",
    appId: "1:737293996465:web:4dbbea785e6642d2402d90"
  };

// init firebase
const firebase = initializeApp(firebaseConfig);

// database setup
const db = getFirestore(firebase);

export {db};