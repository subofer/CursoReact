import React from 'react'

export default function CartIcon({nombre,cart,cartTask,DetallePedido}){


	return(
	
		  <div id="pedidos">
			<div id="botoncompra">
				<button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_desktop" data-target="#pedido_online" >
					Carrito 
					<span id="total_carro_d" className="badge bg-secondary">{cart.length>0?cart.length:""}</span>
			    </button>
			    <button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_mobile"  data-target="#pedido_online" >
			    	<span id="total_carro_m" className="badge bg-secondary">{cart.length>0?cart.length:""}</span>    
			   	</button>
			</div>
	
			<div className="modal fade" id="pedido_online" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	        	<div className="modal-dialog">
	            	<div className="modal-content">
	                	<div className="modal-header">
	                    	<h5 className="modal-title" id="exampleModalLabel">Hace tu pedido! </h5>
	                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
	                        	<span aria-hidden="true">&times;</span>
	                        </button>
	                    </div>
	                    <div className="modal-body">

	                        	<DetallePedido/>

	                        <form  target="_blank">
	                        	<div className="form-group">
	                            	Aquí se completa el mensaje codificado para el comercio.
	                                <textarea className="form-control"  id="text" name="text" rows="1" placeholder=""></textarea>
	                            </div>
	                            <div className="modal-footer">
	                            	<button type="reset" onClick={() => cartTask.clearCart()} className="btn btn-secondary">Vaciar carrito</button>
	                                <button type="reset button" className="btn btn-secondary" data-dismiss="modal">Seguir comprando</button>
	                                <button type="submit button" value="Enviar" className="btn btn-primary">Enviar</button>
	                            </div>
	                        </form>
	                    </div>
	                </div>
	            </div>
	       </div>
	    </div>

	)
}
	
	