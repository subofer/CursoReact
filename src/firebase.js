import firebase from 'firebase/app'
import 'firebase/firestore'
//import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyB01-3puILPI-r0yT9zSGOGdkw-ULRtVDw",
    authDomain: "la-cocina-de-la-pipi.firebaseapp.com",
    databaseURL: "https://la-cocina-de-la-pipi-default-rtdb.firebaseio.com",
    projectId: "la-cocina-de-la-pipi",
    storageBucket: "la-cocina-de-la-pipi.appspot.com",
    messagingSenderId: "321255239429",
    appId: "1:321255239429:web:46a9952644af1dc393d16c",
    measurementId: "G-QDBG6YWM8F"
  });


console.log(app)

/*
var db = firebase.database();

export const getFirebase  = () => app
export const getFirestore = () => firebase.firetore(app)





const productos = [{
  
    "codigo":"M001",
    "familia":"milanesas",
    "variedad":"peceto",
    "nombre":"milanesa de peceto",
    "precio":630,
    "texto" : "Milanesas de Peceto de ternera, preparadas con rebozador de primera calidad, con un toque de avena y condimentos",
    "img" : "/images/productos/mila_peceto_cruda.png",
    "mostrar" : true,
    "stock":100
  }
]







productos.forEach((producto) => {
    
   
    db.collection("productos").add(producto)

    .then((docRef) => {
        console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al agregar un documento: ", error);
    });
});
*/