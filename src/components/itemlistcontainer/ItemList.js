import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {May} from '../../helpers/helpers'
import {useCartContext} from '../../context/cartContext'


/*Item List generator*/
export default function Productos({listaProductos}){
  return(
    <div className="row" id="lista_productos"> 
      {listaProductos.map( (item,index) =>
        <ProductCard  
            key={index + " - " + item.codigo } 
            nombre={May(item.nombre)} 
            texto={item.texto} 
            img={item.img} 
            stock="" /*{item.stock}*/
          //botonera = <InputSpiner {...item}/>
            botonera = ""
            detalle = {<Link to={"../productos/" + item.familia + "/" + item.codigo }> Ver detalle </Link>}
            badge = {[
                      {of:{min:1,max:10},type:"warning",msg:"Quedan Pocas!!!"},
                      {of:{min:0,max:0} ,type:"danger" ,msg:"Sin Stock"      }
                      ].find(b => b.of.min<=item.stock && b.of.max>=item.stock) || [] }
        />
      )}
    </div>
  )
}

/*Spiner numerico con comprobación de Stock*/
export function InputSpiner(item){
  
  const [cart, cartTask] = useCartContext()
  const [count, setCount] = useState(0);
  
  const Contador = ({value}) => { return(<input type="text" className="pl-ns-value" maxLength="2" defaultValue={value}/>)  }
  
  const BotonAdd = ({item,noStock}) =>{
    return(
      <span className="ns-btna">
        <button disabled={noStock} type="button" className={"btn-danger btn botonCompra"} onClick={()=>cartTask.addToCart(item.item , count)}>
           {noStock?"Sin Stock":"Agregar"}
        </button>
      </span>
    )
  }

  const BotonProducto = ({dir,d=dir>0?"plus":"minus"}) => {
    return(
      <span className="ns-btn">
        <Link to="#" data-dir={d} onClick={() => setCount(count+dir<=0?0:item.stock<count+dir?item.stock:count+dir)}>
          <span className={"icon-"+d}/>
        </Link>
      </span>
    )
  }

 return(
    <div className="botonera_productos">
      <div className="number-spinner">
        <BotonProducto dir={-1}/> 
        <Contador value={count}/> 
        <BotonProducto dir={1}/> 
        <BotonAdd item={item} noStock={item.stock == 0}/>
      </div>
    </div>
  )
}



export function ProductCard({nombre,texto,img,stock,botonera,detalle,badge}){

return (
    <div className="col-12 col-md-6 col-xl-4 d-flex align-items-stretch cartas_productos">
      <div className="card mt-3">
      
       <img className="card-img-top" src={process.env.PUBLIC_URL + img} alt={nombre}/> 

       <div class="card-img-overlay" style={{marginVertical: '-10px'}}>
           <h3><span className={"badge badge-pill badge-"+badge.type}>{badge.msg}</span></h3>
       </div>

       <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{texto}</p>
       </div>
       
       <div className="card-footer" style={{backgroundColor: 'lightgrey'}}>
          {stock && (stock > 0 ? <p className="card-text">{stock}Kg en Stock</p>: <p className="card-text">Sin Stock</p>)}
          <div className="card-text" style={{marginVertical: '-10px', position: 'relative'}}>{botonera}</div>
          <div className="card-text" style={{marginVertical: '-10px', position: 'relative'}}>{detalle}</div>
       </div>
      
      </div>
    </div>
  )
}