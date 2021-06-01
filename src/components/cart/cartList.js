import React from 'react'

export default function CartList({titulo,children}){

let childs = React.Children.toArray(children)
console.log("aca",childs[0])
return(
    <div className="row justify-content-center py-3">   
        <div className="col-12 pb-4">
                <h1>{titulo} </h1>
        </div>
    
    {childs[0] && childs[0] != null &&
    <> 
        <div className="col-12"> 
            <h2>Orden Consultada</h2> 
        </div> 
    
        <div className="col-10">{childs[0]}</div> 
    </>
    }
 
    {childs[1] && 
    <>
        <div className="col-12"> 
            <h2>Pendientes</h2> 
        </div> 
        <div className="col-10">{childs[1]}</div> 
    </>
    }
            
    {childs[2] && 
    <>
        <div className="col-12">
            <h2>Entregados</h2> 
        </div> 
        <div className="col-10">{childs[2]}</div> 
    </>
    }
</div> 
	)
}
	
	