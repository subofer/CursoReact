import React from 'react'
import {randomKey} from '../../helpers/helpers'

export default function CartList({titulo,children}){

let childs = React.Children.toArray(children)

let titulos=["Orden Consultada","Pendientes","Entregados"]


return(
    <div className="row justify-content-center py-3">   
        <div className="col-12 pb-4">
                <h1>{titulo} </h1>
        </div>
         {childs.map((child,index) => 
            child && child.type.name != "Hide" &&
                <>
                    <div key={randomKey()} className="col-12"> 
                        <h2>{titulos[index]}</h2> 
                    </div> 
                    <div className="col-10">{child}</div> 
                </>
            
        )}
</div> 
	)
}
	
	