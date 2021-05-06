import React from 'react'
import {May} from '../../helpers/helpers'

export default function ItemDetail({nombre,familia,precio,texto,img,stock,botonera,detalle}){

return (
<section className="mb-5">
  <div className="row m-5">

    <div className="col-md-6 col-sm-12 mb-0 p-0">
      <figure className="view overlay rounded z-depth-1" >
        <a href={process.env.PUBLIC_URL + img}>
          <img src={process.env.PUBLIC_URL + img} alt={nombre}
                className="img-fluid z-depth-1"/>
        </a>
      </figure>
    </div>

    <div className="col-md-6 col-sm-12 m-0 p-0">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{May(nombre)}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{texto}</li>
          <li className="list-group-item"><h6>Stock disponible: {stock} Kg.</h6></li>
          <li className="list-group-item">Precio: <strong>${precio}</strong></li>
        </ul>
        <div className="card-body">
          {botonera}
        </div>
      </div>
    </div>

  </div>
</section>
)
}