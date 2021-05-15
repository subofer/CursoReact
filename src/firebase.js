import firebase from 'firebase/firebase.app'
import 'firebase/firestore'


const app = firebase.initalizeApp( {
    apiKey: "AIzaSyB01-3puILPI-r0yT9zSGOGdkw-ULRtVDw",
    authDomain: "la-cocina-de-la-pipi.firebaseapp.com",
    databaseURL: "https://la-cocina-de-la-pipi-default-rtdb.firebaseio.com",
    projectId: "la-cocina-de-la-pipi",
    storageBucket: "la-cocina-de-la-pipi.appspot.com",
    messagingSenderId: "321255239429",
    appId: "1:321255239429:web:46a9952644af1dc393d16c",
    measurementId: "G-QDBG6YWM8F"
  })

export const getFirebase  = () => app

export const getFirestore = () => firebase.firetore(app)





