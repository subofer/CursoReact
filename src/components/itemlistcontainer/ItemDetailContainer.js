import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import {Loading} from '../../helpers/helpers'
import {fire} from '../../firebase'

import ItemDetail from './ItemDetail'
import {InputSpiner} from './ItemList'

import './style.css'

export default function ItemDetailContainer() {
 
    const [ListadoProductos, SetListadoProductos] = useState([])
    const {id} = useParams()

    useEffect(() => {
      let opciones = {doc:id}

      fire.getCollection(SetListadoProductos,"items",opciones)
      

    },[id]);

return(
  ListadoProductos.length > 0 ? 
    <ItemDetail botonera = <InputSpiner {...ListadoProductos[0]}/> {...ListadoProductos[0]}  />
  :
    <Loading size="8" space="5"/>
 )  
}


