import React, { useState } from 'react'
import {May} from '../../helpers/helpers'

export default function ItemDetail({nombre,familia,precio,texto,img,stock,botonera,detalle}){

return (

<section className="mb-5">

  <div className="row m-5">
    <div className="col-md-6 mb-4 mb-md-0">

      <div id="mdb-lightbox-ui"></div>

      <div className="mdb-lightbox">

        <div className="row product-gallery mx-1">

          <div className="col-12 mb-0">

            <figure className="view overlay rounded z-depth-1" >
              <a href={process.env.PUBLIC_URL + img}>
                <img src={process.env.PUBLIC_URL + img} alt={nombre}
                  className="img-fluid z-depth-1"/>
              </a>
            </figure>

          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <h5>{May(nombre)}</h5>
      <h6>Stock disponible: {stock}</h6>

      <p className="mb-2 text-muted text-uppercase small">{familia}</p>

      <p><span className="mr-1"><strong>${precio}</strong></span></p>

      <p className="pt-1">{texto}</p>
      {botonera}
    </div>
  </div>

</section>
)
}