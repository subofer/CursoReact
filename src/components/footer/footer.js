import React from 'react'

/*Al footer le falta hacer mucho, es nada mas que el HTML pasado a function*/
export default function Footer(){
   return(
    <div className="row porta_footer justify-content-center mb-0 pb-0">
        <footer className="row justify-content-center align-items-top pt-5 pb-0">
           
            <div className="footer-logo col-12 col-md-4">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                        <img className="img-fluid figure-img" src={process.env.PUBLIC_URL + "/images/logo-transparente.png"} alt="La cocina de la Pipi"/>
                        <p>La cocina de la Pipi</p>
                    </div>
                </div>
            </div>


            <div className="col-12 col-md-8 p-0">
                <div className="row justify-content-center align-items-top mx-4">
                    

                    <div className="col-12 col-md-5 col-lg-3">
                        <ul className="list-group-vertical justify-content-lef" aria-label="Enlaces">
                            <li className="nav-item"><a href="#home"      >Home</a></li>
                            <li className="nav-item"><a href="#precios"   >Precios</a></li>
                            <li className="nav-item"><a href="#productos" >Productos</a></li>
                            <li className="nav-item"><a href="#recetas"   >Recetas</a></li>
                            <li className="nav-item"><a href="#pedidos"   >Pedidos</a></li>
                        </ul>
                    </div>
        

                    <div className="col-12 col-md-7 col-lg-5">
                        <ul className="list-group-vertical justify-content-left" aria-label="Contacto">
                            <li className="nav-item">Telefono: <a href="tel:+541115412341234">11 15 41234-1234</a>                      </li>
                            <li className="nav-item">Correo: <a href="mailto:pedidos@correo.com?subject=Pedido">pedidos@correo.com</a>  </li>
                        </ul>
                    </div>
        

                    <div className="col-12 col-lg-4">
                        <ul id="redes" className="list-group-horizontal justify-content-left" aria-label="Redes">
                            <div className="row p-0">
                                
                                
                                <div className="col-6">                     
                                    <li className="nav-item pading_redes"><a target="_blank" href="https://www.facebook.com/"><img src={process.env.PUBLIC_URL + "/images/icon/redes/white/facebook.png"}/></a>
                                    </li>
                                    <li className="nav-item pading_redes"><a target="_blank" href="https://www.twitter.com/"><img src={process.env.PUBLIC_URL + "/images/icon/redes/white/twitter.png"}/></a>
                                    </li>
                                </div>
                                
                                <div className="col-6">                     
                                    <li className="nav-item pading_redes"><a target="_blank" href="https://www.instagram.com/"><img src={process.env.PUBLIC_URL + "/images/icon/redes/white/instagram.png"}/></a>
                                    </li>
                                    <li className="nav-item pading_redes"><a target="_blank" href="https://www.linkdin.com/"><img src={process.env.PUBLIC_URL + "/images/icon/redes/white/linkdin.png"}/></a>
                                    </li>
                                </div>
        
                            </div>
                        </ul>
                    </div>
        
                </div>
            </div>

        </footer>
    </div>
)}

