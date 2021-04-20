import React from 'react'
import './style.css'

export default function ItemListContainer(props) {
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
                <Productos listaProductos = {props.props}/>
            </div>
        </div>             
    </div>
 )      
}

/*Item List*/
export function Productos(props){
  console.log(props)
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
      <div id={elemento.familia + elemento.variedad} className="card mt-3">
        <img className="card-img-top" src={elemento.img} alt={elemento.nombre}/>
        <div className="card-body">
          <h5 className="card-title">{elemento.nombre}</h5>
          {<InputSpiner {...elemento}/>}
          <p className="card-text"></p>
          <p className="card-text">{elemento.texto}</p>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  )
}


/*Componentes del Item*/
function BotonAdd(elemento){
  return(
    <span className="ns-btna"><button data-familia={elemento.familia} data-id={elemento.codigo}
      type="button" className="btn btn-danger botonCompra">Agregar al carrito</button></span>
  )
}

function BotonProducto(elemento){
  let icon 
  (elemento.dir==="dwn")? icon = "minus" : icon = "plus"
  return(
    <span className="ns-btn"><a data-dir={elemento.dir}><span className={"icon-"+icon}/></a></span>
  )
}

function Cantidad(elemento){
  return(
          <input id={"cantidad_" + elemento.codigo} type="text" className="pl-ns-value" value="1" maxLength="2"/>
  )
}

function InputSpiner(elemento){
  return(
    <div className="botonera_productos">
      <div className="number-spinner">
        {<BotonProducto key= {"q_" + elemento.codigo + "dwn"} dir="dwn"/>}
        {<Cantidad      key= {"q_" + elemento.codigo + "q"  } {...elemento}/>}
        {<BotonProducto key= {"q_" + elemento.codigo + "up" } dir="up"/>}
        {<BotonAdd      key= {"q_" + elemento.codigo + "add"} {...elemento}/>}
      </div>
    </div>
  )
}