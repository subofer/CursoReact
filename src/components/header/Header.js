import React from 'react'
import './Header.css'
import NavBar from '../navbar/NavBar'



function LineaVacia(props){
    return( <div className={'col-'+ props.col}></div> )
}

export default function Cabecera(props) {

 return(
   <header className="row pt-2 justify-content-center align-items-center no-gutters">
   <LineaVacia col='2'/>
        <div className="col-8 border-bottom pb-1 header-logo">
            <a href={props.enlaces[0][1]}>
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

        <LineaVacia col='1'/>

        <NavBar {...props}/>

    </header>
    )
}






