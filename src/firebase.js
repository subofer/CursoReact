import firebase from 'firebase/app'
import 'firebase/firestore'
//import 'firebase/auth'

import {ListaProductos} from './components/values/values'


const configFirebase = {
  apiKey: "AIzaSyB01-3puILPI-r0yT9zSGOGdkw-ULRtVDw",
  authDomain: "la-cocina-de-la-pipi.firebaseapp.com",
  databaseURL: "https://la-cocina-de-la-pipi-default-rtdb.firebaseio.com",
  projectId: "la-cocina-de-la-pipi",
  storageBucket: "la-cocina-de-la-pipi.appspot.com",
  messagingSenderId: "321255239429",
  appId: "1:321255239429:web:46a9952644af1dc393d16c",
  measurementId: "G-QDBG6YWM8F"
}


/*
const configFirebase = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}
*/

const app = firebase.initializeApp(configFirebase)
//export const getFirebase  = () => app
//export const getFirestore = () => firebase.firetore(app)

export const db = firebase.firestore();



export const setFireCollection = (collecion, listado) => {
  listado.map(prod => {

    db.collection(collecion).doc(prod.codigo).set(prod)
      .then((docRef) => {
     
      console.log("Document written with ID: ", docRef.id)
    })
    .catch((error) => {

      console.error("Error adding document: ", error)

    })
  })
}

//setFireCollection("items",ListaProductos())

export const gettFireCollection = (callback, collecion) => {
    db.collection(collecion).get().then(callback)
};

//gettFireCollection(x => console.log(x),"items")





db.collection("items").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log("nada", doc.data());
    });
});





