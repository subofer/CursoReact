import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import {May} from '../../helpers/helpers'
import {useCartContext} from '../../context/cartContext'



/*Item List generator*/
export default function Productos({listaProductos}){
  return(
    <div className="row" id="lista_productos"> 
      {listaProductos.map(
        (item,index) =>
          <ProductCard  
            key={index} 
            nombre={May(item.nombre)} 
            texto={item.texto} 
            img={item.img} 
            stock={item.stock}
            /*botonera = <InputSpiner {...item}/>*/
            detalle = {<Link to={"../productos/" + item.familia + "/" + item.codigo }>Ver detalle</Link>}
          />
        )
      }
    </div>
  )
}


/*Spiner numerico con comprobación de Stock*/
export function InputSpiner(item){
  
  const porcentual = (c,s) => 100-(c/s)*100 
  
  const [cart, setCart, cartTask] = useCartContext() //useContext(CartContext)
  const [count, setCount] = useState(0);
  const [terminar, setTerminar] = useState(false);
  const [porcentaje, setPorcentaje] = useState(0);
  
  const BotonAdd = (item) =>{
   
   return(
      <span className="ns-btna">
        {!terminar?
            <button onClick={()=>Agregado(item)} type="button" className="btn btn-danger botonCompra">
              Agregar al carrito
            </button>
          :
  //        Con este boton, cumple con el desafio de enviarme al carrito de compra.    
          <Link to="/pedidos">
            <button type="button" className="btn btn-danger botonCompra">
              Ir al carrito
            </button>
          </Link>
            
 //           :  

//           <button onClick={()=>borrado()} type="button" className="btn btn-danger botonCompra">
//              Borrar pedido
//            </button>
        }
      </span>
    )
  }



  const borrado = () => {
    cartTask.clearCart()
    setTerminar(terminar?false:true)
  }
  


  const Agregado = (item) =>{

      count !== 0 ? (cartTask.addToCart(item.item , count) && setTerminar(terminar?false:true)) : console.log("Tiene que elegir una cantidad" )

      
      
    }

  const BotonProducto = ({dir}) => {
    return(
        <span className="ns-btn">
          <a onClick={()=>cantidad(dir)} data-dir={dir}><span className={"icon-"+dir}/></a>
        </span>
      )
    }

  const cantidad = (x) =>{
      (x === "minus" &&  count > 0) ? setCount(count - 1) : (x === "plus" && item.stock - count > 0  && setCount(count + 1))
  }

  const Contador = () => {
    
    setPorcentaje(porcentual(count,item.stock))
    
    let estilo = { background: (porcentaje === 0 || isNaN(porcentaje)) ? 
      "rgba(255, 0, 0, 0.3)" 
        : 
      "linear-gradient(to right, rgba(0, 255, 0, 0.3)" + porcentaje + "%, white 0%)"
    }


    return(
      <input 
        type="text" 
        style={estilo}
        className="pl-ns-value" 
        maxLength="2" 
        defaultValue={count}
      />
    )
  }

  return(
    <div className="botonera_productos">
      <div className="number-spinner">
        <BotonProducto dir="minus" /> <Contador/> <BotonProducto dir="plus" /> <BotonAdd item={item}/>
      </div>
    </div>
  )
}

export function ProductCard({nombre,texto,img,stock,botonera,detalle}){
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