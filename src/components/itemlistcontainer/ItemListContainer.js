import React, { useState, useEffect } from 'react'
import {ListaProductos} from '../values/values'

import './style.css'
export default function ItemListContainer() {
 
    const [ListadoProductos, SetListadoProductos] = useState([])

    useEffect( () => {
      const datos = new Promise( (resolve,reject) => {
        setTimeout(()=>{
          resolve(ListaProductos)
        },2000)
      })
      datos.then((resuelto)=>{
        SetListadoProductos(resuelto)
      })
    },[]);


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
                

                {ListadoProductos.length > 0 ? <Productos listaProductos = {ListadoProductos}/> : <h2>Cargando</h2>}


            </div>
        </div>             
    </div>
 )      
}


/*Item List*/
export function Productos(props){
  return(
    <div className="row" id="lista_productos"> 
      {
        props.listaProductos.map(
            (item,index) => <TarjetaProducto key={index} {...item}/>
          )
      }
    </div>
  )
}




/*Item*/
function TarjetaProducto(elemento){

  return (
    <div className="col-12 col-md-6 col-xl-4 d-flex align-items-stretch cartas_productos">
      <div className="card mt-3">
        <img className="card-img-top" src={process.env.PUBLIC_URL + elemento.img} alt={elemento.nombre}/>
        <div className="card-body">
          <h5 className="card-title">{elemento.nombre}</h5>
          <p className="card-text"></p>
          <p className="card-text">{elemento.texto}</p>

            {<InputSpiner {...elemento}/>}

          <p className="card-text"></p>
        </div>
      </div>
    </div>
  )
}


function InputSpiner(elemento){
  const [count, setCount] = useState(0);
  
    useEffect( () => {
      },[]);


    const BotonAdd = (elemento) =>{
      return(
          <span className="ns-btna">
            <button onClick={Agregar} type="button" className="btn btn-danger botonCompra">
              Agregar al carrito
            </button>
          </span>
            )
    }

    const Agregar = () =>{
      count !== 0 ? alert("Agregaste "+ count + "Kg de" + elemento.nombre ): void(0)
    }

    const BotonProducto = (elemento) => {
      return(
          <span className="ns-btn"><a onClick={()=>cantidad(elemento.dir)} data-dir={elemento.dir}><span className={"icon-"+elemento.dir}/></a></span>
      )
    }

    const cantidad = (x) =>{
      x === "minus" ? (count > 0 ? setCount(count - 1): void(0) ) : (( x === "plus" && elemento.stock - count>0) ? setCount(count + 1) : void(0))
    }

    const Contador = () => {

      let porcentaje = 100-(count/elemento.stock)*100

      let styles = porcentaje>0 ? {background: "linear-gradient(to right, rgba(0, 255, 0, 0.5) " + porcentaje + "%, white 0%)"} :{background: "rgba(255, 0, 0, 0.5)"}

      return(
        <input style={styles} type="text" className="pl-ns-value" maxLength="2" defaultValue={count}/>
       )
    }


  return(
    <div className="botonera_productos">
      <div className="number-spinner">

        {<BotonProducto dir="plus" />}
              {<Contador/>}
        {<BotonProducto dir="minus" />}
              {<BotonAdd/>}

      </div>
    </div>
  )
}






