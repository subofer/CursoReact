import React from 'react'
import {NavLink} from "react-router-dom";
import {May} from '../../helpers/helpers'


//Devuelve la nav bar, con la lista de enlaces.
export default function NavBar(props) {
  return( barra (contenido_NavBar (props) ) )
}
  


const barra = (listado_de_enlaces) => {

  return (

      <nav key="NavBar" id='barra_nav' className='col-12 p-0 justify-content-center navbar navbar-expand-md no-gutters'>
        <div key="navbar-collapse" className='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
          <ul key ="navBar00" className='navbar-nav '>

          {listado_de_enlaces}

        </ul>
      </div>
    </nav>
  )
}
    


const contenido_NavBar = (props) =>
    props.enlaces.map( (item,index) => {
    //Si el item del array tiene mas de 2 elementos, compone un drop down para ese elemento.
    return ( 
      <React.Fragment>
        {!item[2] ?
                  
                    <li key={item[1]} className='nav-item'>
                      <NavLink  key={item[1]+"nav0"}
                                activeClassName="activo"  
                                className='nav-link' 
                                to={item[1]}  

                      >
                        {item[0]}
                          
                      </NavLink>
                    </li>
                :
                    <li key={item[1]+"li"} className="nav-item dropdown">
                      <NavLink  key={item[1]+"nav1"}
                                activeClassName="activo"
                                className='nav-link dropdown-toggle'
                                
                                aria-haspopup="true" 
                                aria-expanded="true"
                                
                                id="navbarDropdown" 
                                role="button" 
                                data-toggle="dropdown"
                                to={item[1]}  
                      >
                      
                        {item[0]}
                      
                      </NavLink>
                                        
                      <div key={item[1]+"divDrop"} className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <NavLink  key={item[1]+"nav2"}
                                  className="dropdown-item" 
                                  to={item[1]}> 
                          {item[0]} 
                        </NavLink>
                        
                      {
                        item.map( (menu, index) =>
                        index > 1 && 
                        <NavLink  key={menu + "nav3"}
                                  className="dropdown-item" 
                                  to={item[1] + "/" + menu} >
                                  
                                  {May(menu)}
                        </NavLink>

                        )
                      }
                      </div>
                    </li>
                  }
                </React.Fragment>  
              )


            })



