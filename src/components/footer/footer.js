import React from 'react'
import {NavLink} from "react-router-dom";

/*Al footer le falta hacer mucho, es nada mas que el HTML pasado a function*/
export default function Footer(props){
   return(
    <div className="row porta_footer justify-content-center mb-0 pb-0">
        <footer className="row justify-content-center align-items-top pt-5 pb-0">
           
            <div className="footer-logo col-12 col-md-4">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                        <img className="img-fluid figure-img" src={props.logo} alt={props.titulo}/>
                        <p>{props.titulo}</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-8 p-0">
                <div className="row justify-content-center align-items-top mx-4">
                    <div className="col-12 col-md-5 col-lg-3">
                        <ul className="list-group-vertical justify-content-lef" aria-label="Enlaces">
                        {props.enlaces.map((item,index) => 
                            <li key={index + item[0] + "li"} className='nav-item'>
                                <NavLink  activeClassName="activo" key={index + item[0] +"nav"} to={item[1]}>
                                    {item[0]}
                                </NavLink>
                            </li>
                            )
                        }
                        </ul>
                    </div>
        
                    <div className="col-12 col-md-7 col-lg-5">
                        <ul className="list-group-vertical justify-content-left" aria-label="Contacto">
                            <li className="nav-item">Telefono:<a href={"tel:+549" + props.telefono.replace((/\s|-/g),'')}>{props.telefono}</a></li>
                            <li className="nav-item">Correo: <a href="mailto:pedidos@correo.com?subject=Pedido">{props.correo}</a></li>
                        </ul>
                    </div>
        
                    <div className="col-12 col-lg-4">
                        <ul id="redes" className="list-group-horizontal justify-content-left" aria-label="Redes">
                            <div className="row p-0">
                                <div className="col-6">                     
                                    <LiRedSocial red = "facebook" enlace = "lacocina" />
                                    <LiRedSocial red = "twitter"  enlace = "lacocina" />
                                </div>
                                
                                <div className="col-6">                     
                                    <LiRedSocial red = "instagram" enlace = "lacocina" />
                                    <LiRedSocial red = "linkdin"   enlace = "lacocina" />
                                </div>
                            </div>
                        </ul>
                    </div>
        
                </div>
            </div>

        </footer>
    </div>
)}



function LiRedSocial({red, enlace}){
return(
    <li className="nav-item pading_redes">
        <a target="_blank" rel="noreferrer" href={"https://www" + red + ".com/" + enlace}>
            <img alt={red} src={process.env.PUBLIC_URL + "/images/icon/redes/white/" + red + ".png"}/>
        </a>
    </li>
    )
}






