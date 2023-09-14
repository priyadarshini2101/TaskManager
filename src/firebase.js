import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// import 'firebase/database'
// import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyBe_q882jMSIzFpWe4kjvOaJ-QgNOqqJ7E",
    authDomain: "fbdproj.firebaseapp.com",
    projectId: "fbdproj",
    storageBucket: "fbdproj.appspot.com",
    messagingSenderId: "440764473280",
    appId: "1:440764473280:web:ec29a8544fd2af6450f225",
    measurementId: "G-YER3H54JGG"
  };

//   export const fireDb = firebase.initializeApp(firebaseConfig);
//   export default fireDb.database().ref();
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)


export {db}