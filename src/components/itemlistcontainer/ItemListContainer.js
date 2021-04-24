import React, { useState, useEffect } from 'react'
import {ListaProductos} from '../values/values'
import Productos from './ItemContainer'


import './style.css'
export default function ItemListContainer() {
 
    const [ListadoProductos, SetListadoProductos] = useState([])

    useEffect( () => {
      /*
          fetch("https://la-cocina-de-la-pipi-default-rtdb.firebaseio.com/")
            .then(response => {
              return response.json()
            })
            .then(data => {
                SetListadoProductos(data)    
                return data;
            }, error => {
                console.error('onRejected function called: ' + error.message);
            })
*/

      const datos = new Promise( (resolve,reject) => {
        setTimeout(()=>{
          resolve(ListaProductos)
        },2000)
      })
      datos.then((resuelto)=>{
        SetListadoProductos(resuelto)
      })

    },[]);


 const size_loading = 10
 const estilo_Spinner = {width: size_loading+"rem", height: size_loading+"rem"}
 
 return(
    <div className="row justify-content-center py-3 mw-100">  
        <div className="col-12 pb-4">
            <h1>No nos guardamos ning&uacute;n secreto, lo hacemos con amor.</h1>
        </div>
        <div className="col-10">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <section className="pt-1 mt-3 mx-3">
                            <p className="pb-2">Todas nuestras milanesas est&aacute;n rebozadas con rebozador Preferido y Avena natural, condimentadas con ajo y perejil, no tienen sal y tienen mucho amor.</p>
                            <p>Todas nuestras hamburguesas son preparadas y congeladas en el d&iacute;a para asegurar su calidad.</p>
                        </section>
                    </div>
                </div>

                {ListadoProductos.length > 0 ? <Productos listaProductos = {ListadoProductos}/> : <div className="spinner-border text-primary m-5" style={estilo_Spinner} role="status"><span className="sr-only">Loading...</span></div> }

            </div>
        </div>             
    </div>
 )      
}







