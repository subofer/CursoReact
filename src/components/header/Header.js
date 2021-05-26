import React, { useState,useEffect } from 'react'
import {NavLink,Link} from "react-router-dom";
import './Header.css'
import {fire} from '../../firebase'
import NavBar from '../navbar/NavBar'
import {useUserContext} from '../../context/userContext'
import Login from '../login/login'



function LineaVacia(props){
    return( <div className={'col-'+ props.col}></div> )
}

export default function Cabecera(props) {
   
   const [listaNav, setListaNav] = useState([])

   const [user,userTask] = useUserContext()
   const modalSesion = "Inicia_Sesion"
    useEffect(() => {
        let opciones = {sort:{key:"orden",order:"asc"}}
        fire.getCollection(setListaNav,props.enlaces,opciones)
        
    },[]);

    useEffect(() => {
        user && console.log(user)
    },[user]);



 return(
    <> 
    <div className="row align-items-end">
        <div className="col-2 align-self-start mt-2">
            <Login/>
            <LineaVacia col='10'/>
       </div>
    </div>
   <header className="row pt-2 justify-content-center align-items-center no-gutters">
       <LineaVacia col='2'/>
        <div className="col-8 border-bottom pb-1 header-logo">
            <a href={listaNav.length>0? listaNav[0].enlace:""}>
                <img className="img-fluid figure-img" src={props.logo} alt={props.titulo} />
                <p>{props.titulo}</p>
            </a>
        </div>

        <div className="col-1 justify-content-start">
            <nav className="navbar navbar-expand-md navbar-light bg-white">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>       
                </button>       
            </nav>      
        </div>      
        <NavBar listaNav = {listaNav} />

    </header>
</>
    )
}

        <LineaVacia col='1'/>