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
    <Loading size="10" space="5"/>

 )  
}


/*Spiner numerico con comprobación de Stock*/
function IInputSpiner({nombre,stock}){
  const [count, setCount] = useState(0);
  const [porcentaje, setPorcentaje] = useState(100-(count/stock)*100);
  
  const BotonAdd = () =>{
    return(
        <span className="ns-btna">
          <button onClick={Agregado} type="button" className="btn btn-danger botonCompra">
            Agregar al carrito
          </button>
        </span>
      )
    }

  const Agregado = () =>{
      count !== 0 ? alert("Agregaste "+ count + "Kg de " + nombre ): void(0)
    }

  const BotonProducto = ({dir}) => {
    return(
        <span className="ns-btn"><a onClick={()=>cantidad(dir)} data-dir={dir}><span className={"icon-"+dir}/></a></span>
      )
    }

  const cantidad = (x) =>{
      x === "minus" ? (count > 0 ? setCount(count - 1): void(0) ) : (( x === "plus" && stock - count>0) ? setCount(count + 1) : void(0))
    }

  const Contador = () => {

      setPorcentaje(100-(count/stock)*100)
      
      let styles = porcentaje>0 ? {background: "linear-gradient(to right, rgba(0, 255, 0, 0.5) " + porcentaje + "%, white 0%)"} :{background: "rgba(255, 0, 0, 0.5)"}

    return(
        <input style={styles} type="text" className="pl-ns-value" maxLength="2" defaultValue={count}/>
       )
    }


  return(
    <div className="botonera_productos">
      <div className="number-spinner">

        <BotonProducto dir="minus" /> <Contador/> <BotonProducto dir="plus" /> <BotonAdd/>

      </div>
    </div>
  )
}