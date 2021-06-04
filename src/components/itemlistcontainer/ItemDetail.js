import React from 'react'
import {May} from '../../helpers/helpers'

export default function ItemDetail({nombre,familia,precio,texto,img,stock,botonera,detalle}){

return (
<section className="row align-items-center justify-content-center mb-5">
<div className="col-10">

<div class="card mb-3 my-5 align-self-center">
  <div class="row no-gutters">
    

    <div class="col-md-4 col-xl-3">
      <a href={process.env.PUBLIC_URL + img}>
          <img src={process.env.PUBLIC_URL + img} alt={nombre}
                className="img-fluid z-depth-1"
                style={{objectFit: 'none',width: '100%',height: '100%'}}
                />
      </a>
    </div>
    

    <div class="col">
        <div  className="card-body">
          <h5 className="card-title">{May(nombre)}</h5>
        </div>
        <ul className="card-text list-group list-group-flush">
          <li className="list-group-item">{texto}</li>
          <li className="list-group-item"><h6>Stock disponible: {stock} Kg.</h6></li>
          <li className="list-group-item">Precio: <strong>${precio}</strong></li>
        </ul>
        <div className="card-footer" >
          {botonera}
        </div>
    </div>


  </div>
</div>
</div>

</section>
)
}










/*    <div className="col-md-6 col-sm-12 mb-0 p-0">
      <figure className="view overlay rounded z-depth-5" >
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
    </div>*/