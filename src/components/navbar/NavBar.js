import React from 'react'
import {NavLink} from "react-router-dom";
import {May} from '../../helpers/helpers'


//Devuelve la nav bar, con la lista de enlaces.
export default function NavBar(props) {
  return(
    <nav id='barra_nav' className='col-12 p-0 justify-content-center navbar navbar-expand-md no-gutters'>
      <div className='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
        <ul className='navbar-nav '>
            {
              props.enlaces.map(
                (item,index) => {
                  return ( 
                    //Si el item del array tiene mas de 2 elementos, compone un drop down para ese elemento.
                    <React.Fragment>
                      {!item[2] ?
                        
                        <li key={index + item[0] + "li"} className='nav-item'>
                          <NavLink  key={index + item[0] +"nav"} 
                                    className='nav-link' 
                                    to={item[1]}  
                                    activeClassName="activo" >

                                    {item[0]}
                          </NavLink>
                        </li>
                        
                        :
                        
                        <li key={index + item[0] + "li"} className="nav-item dropdown">
                          <NavLink  key={index+ item[0] + "nav"} 
                                    className='nav-link dropdown-toggle'
                                    aria-haspopup="true" aria-expanded="true"
                                    id="navbarDropdown" 
                                    role="button"
                                    data-toggle="dropdown"
                                    to={item[1]}  
                                    activeClassName="activo" >

                                    {item[0]}
                          
                          </NavLink>
                                        
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <NavLink key={index + item[0] +"nav"} 
                                      className="dropdown-item" 
                                      to={item[1]}>
                          
                                      {item[0]}
                          
                            </NavLink>
                          
                            {item.slice(2 , item.lenght).map((menu, index) => 
                                <NavLink  key={index + item[1] +"drop_nav"} 
                                          className="dropdown-item" to={item[1] + "/" + menu} >

                                          {May(menu)}
                                </NavLink>
                              )
                            }
                          </div>
                        </li>
                        }
                    </React.Fragment>  
                  )
                }
              )
            }
        </ul>
      </div>
    </nav>
  )
}


