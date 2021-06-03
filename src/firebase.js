import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const configFirebase = {
  appId: process.env.REACT_APP_APP_ID,
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

firebase.initializeApp(configFirebase)

const auth = firebase.auth(); 
const db  = firebase.firestore();


//Creo un objeto para transportar las funciones de Firebase.
export const fire = {}

fire.auth = auth

fire.getCollection = (callback,collection,opt={}) => {
  /*
  options = { 
            where:["familia","==","milanesas"]
            sort:{key:"orden",order:"asc"},
            doc:"id"
          }
  */
let fireGet = db.collection(collection);

  let dc    =  opt.doc   ? fireGet.doc(opt.doc)                                 : fireGet
  let wh    =  opt.where ? fireGet.where(opt.where[0],opt.where[1],opt.where[2]): dc
  let geter =  opt.sort  ? wh.orderBy(opt.sort.key,opt.sort.order)              : wh


  geter.get()
  .then( querySnapshot  => {
  opt.doc && !querySnapshot.exists ? callback(null)  
    :
      callback(opt.doc ?
                      [{...querySnapshot.data(),id:querySnapshot.id}]
                      :
                      querySnapshot.docs.map( i => {
                        return(  {...i.data(),id:i.id} )
                      })
                  )

       
 
   })
  .catch( error => {
    
    console.error("Error geting documents: ", error)

  } )
};





fire.setCollection = (collectionName, array, id,callback) => {
  let fire = db.collection(collectionName)
  array.forEach(item => 
    { item[id]? 
        fire.doc(item[id]).set(item)  
          :  
        fire.add(item)

      .then ( docRef => {
        console.log   ("Document written with ID: ", docRef.id) 
        callback(docRef.id)
      })
      .catch( error  => {console.error ("Error adding document: "   , error    ) })
    }
  )
}

fire.updateCollectionDoc = (collectionName, doc, values) => {
  db.collection(collectionName)
    .doc(doc)
    .update(values)
    .catch( error  => {console.error ("Error updating document: "   , error    ) })
}


fire.updateStock = (collectionName, doc, values) => {
  
  db.collection(collectionName)
    .doc(doc)
    .update({stock:firebase.firestore.FieldValue.increment(values)})
    .catch( error  => {console.error ("Error updating document: "   , error    ) })
}


fire.deleteCollectionDoc = (collectionName, doc,callback,option) => {
    db.collection(collectionName).doc(doc).delete()
    
    callback(option?option:null)
}




fire.getActiveUserOrders = (callback) =>{

fire.activeUser(callback)



}



//fire.login("pepe@hotmail.com","123456",console.log)
//fireLogin("marcos@hotmail.com","1234567",console.log)

//fireRegisterUser("marcos@hotmail.com","1234567",console.log)

//fireLogin("marcos@hotmail.com","12345",console.log)



//import {ListaProductos} from './components/values/values'
//fire.setCollection("items",ListaProductos(),"codigo")
//fire.setCollection("items",ListaProductos())



export const seccionesNavBar = [
    {
      orden:1,
      nombre: "Home", 
      enlace:"/home"
    },{
      orden:2,
      nombre: "Precios", 
      enlace:"/precios"
    },{ 
      orden:3,
      nombre: "Productos", 
      enlace:"/productos", 
      drop:[{
          nombre:"milanesas",
          enlace:"/milanesas"
        },{
          nombre:"hamburguesas",
          enlace:"/hamburguesas"
        }]
    },{
      orden:4,
      nombre: "Recetas", 
      enlace:"/recetas"
    },{ 
      orden:5,
      nombre: "Pedidos", 
      enlace:"/pedidos"
    }
]

//fire.setCollection("seccionesNavBar",seccionesNavBar,"nombre")