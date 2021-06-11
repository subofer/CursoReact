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
            ws:[wh:["familia","==","milanesas"],wh:["precio","<=","150"]]
            let ws    =  opt.ws ? opt.ws.forEach(o => fireGet.where(o.wh[0],o.wh[1],o.wh[2])) : dc
              ||
            sort:{key:"orden",order:"asc"}
              ||
            doc:"id"
          }
  */
let fireGet = db.collection(collection);

  let dc    =  opt.doc   ? fireGet.doc(opt.doc)                                     : fireGet
  let wh    =  opt.where ? fireGet.where(opt.where[0],opt.where[1],opt.where[2])    : dc
  let geter =  opt.sort  ? wh.orderBy(opt.sort.key,opt.sort.order)                  : wh


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
  })
};

fire.setCollection = (collectionName, array, id,callback) => {
  let fr = db.collection(collectionName)
  array.forEach(item => 
    { item[id]? 
        fr.doc(item[id]).set(item)  
          :  
        fr.add(item)

      .then ( docRef => {
        console.log   ("Document written with ID: ", docRef.id) 
        callback(docRef.id)
      })
      .catch( error  => {
        console.error ("Error adding document: "   , error    ) 
      })
    }
  )
}

fire.updateCollectionDoc = (collectionName, doc, values) => {
  db.collection(collectionName)
    .doc(doc)
    .update(values)
    .catch( error  => {console.error ("Error updating document: "   , error    ) })
}

fire.toggleDeliver = (order) => {
  fire.updateCollectionDoc("orders", order.id, {entregado: !order.entregado})
}

fire.deleteCollectionDoc = (collectionName, doc,callback,option) => {
    db.collection(collectionName).doc(doc).delete()
     callback(option?option:null)
}



fire.batchReturnStock = (ordenToReturn,callback) => {
  fire.batchUpdateStock(ordenToReturn.cart,1) && callback()
}

fire.batchSellStock = (currentCart) => {
  return  fire.batchUpdateStock(currentCart,-1)
}

fire.batchUpdateStock = (cart,direction) => {
var batch = db.batch();
let respuesta = []
 cart.forEach(item => {
    if(item.stock + (direction * item.cantidad) >= 0){
      batch.update( db.collection("items").doc(item.id), 
                 {stock:firebase.firestore.FieldValue.increment(direction*item.cantidad)}
                
                );
    }else{
        respuesta.push({...item,mensaje:"Stock insuficiente"})
      }
    
    })
  if (respuesta.lenght==0){
    batch.commit()
    .then(() => {});
  }
    return respuesta
}



/*
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
          nombre:"Milanesas ",
          enlace:"/milanesas"
        },{
          nombre:"Hamburguesas ",
          enlace:"/hamburguesas"
        }]
    },{ 
      orden:4,
      nombre: "Pedidos", 
      enlace:"/pedidos"
    },{
      orden:5,
      nombre: "Carrito", 
      enlace:"/cart"
    }
]

//Con esto setie inicialmente la base de datos.
fire.setCollection("seccionesNavBar",seccionesNavBar,"nombre")

*/