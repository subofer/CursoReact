import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import Productos from './ItemList'
import {Loading} from '../../helpers/helpers'
import {fire} from '../../firebase'

import './style.css'

export default function ItemListContainer() {
 
    const [ListadoProductos, SetListadoProductos] = useState([])
    const {familia} = useParams()

 useEffect(() => {
   
    let opciones = {where:familia?["familia","==",familia]:false}
    fire.getCollection(SetListadoProductos,"items",opciones)

 },[familia]);

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
                  <Loading size="8" space="5"/>
                }
             </div>
        </div>             
    </div>

 )  
}