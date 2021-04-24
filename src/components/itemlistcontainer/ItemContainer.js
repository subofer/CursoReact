import React, { useState, useEffect } from 'react'

/*Item List generator*/
export default function Productos(props){
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


/*Tarjeta de producto*/
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


/*Spiner numerico con comprobación de Stock*/

function InputSpiner(elemento){
  const [count, setCount] = useState(0);
  const [porcentaje, setPorcentaje] = useState(100-(count/elemento.stock)*100);
  
  useEffect( () => {
  },[]);


  const BotonAdd = () =>{
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

  const BotonProducto = ({dir}) => {
    return(
        <span className="ns-btn"><a onClick={()=>cantidad(dir)} data-dir={dir}><span className={"icon-"+dir}/></a></span>
      )
    }

  const cantidad = (x) =>{
      x === "minus" ? (count > 0 ? setCount(count - 1): void(0) ) : (( x === "plus" && elemento.stock - count>0) ? setCount(count + 1) : void(0))
    }

  const Contador = () => {

      setPorcentaje(100-(count/elemento.stock)*100)
      
      let styles = porcentaje>0 ? {background: "linear-gradient(to right, rgba(0, 255, 0, 0.5) " + porcentaje + "%, white 0%)"} :{background: "rgba(255, 0, 0, 0.5)"}

    return(
        <input style={styles} type="text" className="pl-ns-value" maxLength="2" defaultValue={count}/>
       )
    }


  return(
    <div className="botonera_productos">
      <div className="number-spinner">

        <BotonProducto dir="minus" />
              <Contador/>
        <BotonProducto dir="plus" />
              <BotonAdd/>

      </div>
    </div>
  )
}