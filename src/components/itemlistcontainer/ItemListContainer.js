import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import Productos from './ItemContainer'
import {Loading} from '../../helpers/helpers'
import './style.css'

export default function ItemListContainer({listado}) {
 
    const [ListadoProductos, SetListadoProductos] = useState([])
    const {familia,id} = useParams()

    useEffect(() => {

      const datos = new Promise((resolve,reject) => {
        setTimeout(()=>{
          resolve(listado())
        },1000) /*aca deberia ir 2000 pero no queria seguir esperando 2 segundos cada vez que entro en la pagina*/
      })

      datos.then((res)=>{
        SetListadoProductos(
          id      ? res.filter(i => i.codigo === id) 
            : 
          familia ? res.filter(i => i.familia === familia) : res
        )
      })

    },[familia,id]);

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

                {
                  ListadoProductos.length > 0 ? 
                  <Productos listaProductos = {ListadoProductos}/>
                    :
                  <Loading size="10" space="5"/>
                }
             </div>
        </div>             
    </div>

 )  
}