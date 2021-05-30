import './Header.css'
import React, { useState,useEffect } from 'react'
import {NavLink,Link} from "react-router-dom";
import {fire} from '../../firebase'
import NavBar from '../navbar/NavBar'
import Login from '../login/login'

export default function Header({titulo,logo,enlaces}) {
   
    const [listaNav, setListaNav] = useState([])

    useEffect(() => {
        let opciones = {sort:{key:"orden",order:"asc"}}
        fire.getCollection(setListaNav,enlaces,opciones)
    },[]);

 return(
   <header className="row pt-2 justify-content-center align-items-center no-gutters">
      
        <Login classNameCont="col-2 align-self-start mt-4" />


        <div className="col-8 border-bottom pb-1 header-logo">
            <a href={listaNav.length>0? listaNav[0].enlace:""}>
                <img className="img-fluid figure-img" src={logo} alt={titulo} />
                <p>{titulo}</p>
            </a>
        </div>

        <div className="col-2 justify-content-start">
            <nav className="navbar navbar-expand-md navbar-light bg-white">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>       
                </button>       
            </nav>      
        </div>      
        
        <NavBar listaNav = {listaNav} />

    </header>
 )
}

