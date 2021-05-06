import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import ItemDetail from './ItemDetail'
import {Loading} from '../../helpers/helpers'
import {InputSpiner} from './ItemList'

import './style.css'

export default function ItemDetailContainer({listado}) {
 
    const [ListadoProductos, SetListadoProductos] = useState([])
    const {id} = useParams()

    useEffect(() => {

      const datos = new Promise((resolve,reject) => {
        setTimeout(()=>{
          resolve(listado())
        },1000) /*aca deberia ir 2000 pero no queria seguir esperando 2 segundos cada vez que entro en la pagina*/
      })

      datos.then((res)=>{
        SetListadoProductos( res.filter(i => i.codigo === id) )
      })

    },[id]);

return(
  ListadoProductos.length > 0 ? 
    <ItemDetail 
        {...ListadoProductos[0]}
        //botonera = <InputSpiner nombre={ListadoProductos[0].nombre} stock={ListadoProductos[0].stock} />
        botonera = <InputSpiner {...ListadoProductos[0]} />
    />
      :
    <Loading size="8" space="5"/>
 )  
}
