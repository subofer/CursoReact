import React from 'react'
import {NavLink} from "react-router-dom";
import {May} from '../../helpers/helpers'



export default function NavBar(props) {
 return(
       <nav id='barra_nav' className='col-12 p-0 justify-content-center navbar navbar-expand-md no-gutters'>
          <div className='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
            <ul className='navbar-nav '>
                {
                    props.enlaces.map(
                        (item,index) => {
                           return ( 
                                  <React.Fragment>
                                    {!item[2] ? (
                                        <li key={index} className='nav-item'>
                                          <NavLink key={index} className='nav-link' to={item[1]}  activeClassName="activo" >{item[0]}</NavLink>
                                        </li>
                                        
                                        ):(
                                        
                                          <li className="nav-item dropdown">
                                              <NavLink key={index} className='nav-link dropdown-toggle'
                                              aria-haspopup="true" aria-expanded="false"
                                              id="navbarDropdown" role="button"
                                              data-toggle="dropdown"
                                              to={item[1]}  activeClassName="activo" >{item[0]}</NavLink>
                                                
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                                <NavLink className="dropdown-item" to={item[1]}>{item[0]}</NavLink>
                                              {
                                                item.slice(2 , item.lenght).map((menu, index) => 
                                                  <NavLink key={index} className="dropdown-item" to={"/productos/" + menu} >{May(menu)}</NavLink>
                                                  )
                                              }
                                            </div>
                                          </li>
                                        
                                        )
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


