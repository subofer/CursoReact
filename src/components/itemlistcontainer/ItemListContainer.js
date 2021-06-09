import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import Productos from './ItemList'
import {useCartContext} from '../../context/cartContext'
import {Loading} from '../../helpers/helpers'
import {fire} from '../../firebase'

export default function ItemListContainer() {
 
    const {familia} = useParams()
    const [cart, cartTask] = useCartContext()
    const [lstProductos, SetLstProductos] = useState([])

 useEffect(() => {
    fire.getCollection(SetLstProductos,"items",familia?{where:["familia","==",familia]}:{})
 },[familia,cart]);

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
                            <p className="pb-2">Todas nuestras milanesas est&aacute;n rebozadas con rebozador Preferido y Avena natural, 
                                                condimentadas con ajo y perejil, no tienen sal y tienen mucho amor.</p>
                            <p>Todas nuestras hamburguesas son preparadas y congeladas en el d&iacute;a para asegurar su calidad.</p>
                        </section>
                    </div>
                </div>

                {lstProductos.length > 0 ? <Productos listaProductos = {lstProductos}/> : <Loading size="8" space="5"/>}

             </div>
        </div>             
    </div>
 )  
}