import React from 'react'


/*Tarjeta de producto*/
export default function ProductCard({nombre,texto,img,stock,botonera,detalle}){
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