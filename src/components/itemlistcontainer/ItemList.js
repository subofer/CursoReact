import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {May} from '../../helpers/helpers'



/*Item List generator*/
export default function Productos({listaProductos}){
  return(
    <div className="row" id="lista_productos"> 
      {
        listaProductos.map(
            (item,index) => 
                <ProductCard  
                  key={index} 
                  nombre={May(item.nombre)} 
                  texto={item.texto} 
                  img={item.img} 
                  stock={item.stock}
                  botonera = <InputSpiner nombre={item.nombre} stock={item.stock} />
                  detalle = {<Link to={"../productos/" + item.familia + "/" + item.codigo }>Ver detalle</Link>}
                />
          )
      }
    </div>
  )
}

/*Spiner numerico con comprobación de Stock*/
export function InputSpiner({nombre,stock}){
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

function ProductCard({nombre,texto,img,stock,botonera,detalle}){
  return (
    <div className="col-12 col-md-6 col-xl-4 d-flex align-items-stretch cartas_productos">
      <div className="card mt-3">
        <img className="card-img-top" src={process.env.PUBLIC_URL + img} alt={nombre}/>
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text"></p>
          <p className="card-text">{texto}</p>
              {botonera} {detalle}
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  )
}