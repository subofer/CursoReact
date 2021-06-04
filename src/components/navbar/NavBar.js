import React from 'react'
import {NavLink} from "react-router-dom";
import {May} from '../../helpers/helpers'

export default function NavBar({listaNav,user,setUser}) {

  const EnlaceNav = ({id,contenido,to,drop}) => {
    return ( !drop?
       
      <li key={id} className='nav-item'>
        <NavLink key={id+"nav"} activeClassName="activo"  className='nav-link' to={to}>

          {contenido}

        </NavLink>
      </li>
    
    :
    
      <li key={id+"li"} className="nav-item dropdown btn-group">

        <NavLink to={to} key={id+"nav"} id="navbarDropdown" style={{marginRight: '0'}}  activeClassName="activo" className="nav-link">
          {contenido}
        </NavLink>
        <a style={{paddingLeft: '0',marginLeft: '0px',marginRight: '10px',transform: "translate(-5px,0px)"}}
            className="nav-link dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        </a>

        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

        {drop.map( (dropItem, index) => 
          <NavLink  key = {index+"drop-item"} className="dropdown-item" to={to+dropItem.enlace}>
        
            {May(dropItem.nombre)}
        
          </NavLink>
        )}

        </div>
      </li> 
    )    
  }

  return(
    <nav key="NavBar" id='barra_nav' className='col-12 p-0 justify-content-center navbar navbar-expand-md no-gutters'>
      <div key="navbar-collapse" className='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
        <ul key ="navBar00" className='navbar-nav '>
      {listaNav.length > 0 ? 
           listaNav.map( (en,index) => <EnlaceNav key={index} id={index} contenido={en.nombre} to={en.enlace} drop={en.drop}/>)
          :    
           <EnlaceNav key="cargando_enlaces" id={1} contenido={" - Bienvenidos - "} to="/nothere2"/>    
      }
        </ul>
      </div>
    </nav>
  )
}


            //<EnlaceNav key="email" id={1} contenido={user} to=""/> 