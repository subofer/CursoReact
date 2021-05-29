import React from 'react'
import {Link} from "react-router-dom";

export default function BotonLogin({click,idModalDestino,textoBoton,menu}){
    return (
        <div className="btn-group">
            <button className="btn btn-secondary btn-sm" type="button"
                    data-toggle="modal" data-target={"#" + idModalDestino}
                    onClick={click}
            >
                {textoBoton}
            </button>
              
            <button type="button"className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"/>
            <div className="dropdown-menu">
                {menu.map( (item,index) =>
                item.titulo?
                        <Link key={index} className="dropdown-item" 
                            to={item.to}
                            onClick={item.click}
                            >
                            {item.titulo}
                        </Link>
                        :
                        <div key={index} className="dropdown-divider"></div>
                )}
            </div>
        </div>
        )
   }