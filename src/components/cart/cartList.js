import React from 'react'

export default function CartList({nombre,cart,cartTask,DetallePedido}){


	return(
<div className="row justify-content-center py-3">   
     <div className="col-12 pb-4">
            <h1>Contactate con nosotros o hac&eacute; tu pedido</h1>
    </div>

    <div className="col-12">  </div> 

    <div className="col-8 col-lg-8">  
        <DetallePedido/>
    </div> 
</div> 
	)
}
	
	