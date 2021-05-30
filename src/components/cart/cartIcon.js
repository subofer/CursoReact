import React from 'react'
import Modal from '../modal/modal'

export default function CartIcon({nombre,cart,cartTask,DetallePedido}){
let total = cartTask.getCantidadTotal>0?cartTask.getCantidadTotal:""
	return(
		  <div id="pedidos">
			<div id="botoncompra">
				<button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_desktop" data-target="#pedido_online" >
					Carrito 
					<span id="total_carro_d" className="badge bg-secondary">{total}</span>


			    </button>
			    <button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_mobile"  data-target="#pedido_online" >
			    	<span id="total_carro_m" className="badge bg-secondary">{total}</span>    
			   	</button>
			</div>
			
			<Modal id="pedido_online" titulo= "Hace tu pedido!">
		  		<DetallePedido/>
		  		<></>
		  		<>
					<button type="reset" onClick={() => cartTask.clearCart()} className="btn btn-secondary">Vaciar carrito</button>
	            	<button type="reset button" className="btn btn-secondary" data-dismiss="modal">Seguir comprando</button>
	            	<button type="button" onClick={() => cartTask.buy()} value="Enviar" className="btn btn-primary">Enviar</button>
	            </>
			</Modal>
		  </div>
	)
}