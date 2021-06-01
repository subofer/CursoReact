import React, {useState,useEffect} from 'react'
import Modal from '../modal/modal'
import {Loading} from '../../helpers/helpers'

export default function CartIcon({nombre,cart,cartTask,DetallePedido,loading,setLoading}){
let total = cartTask.getCantidadTotal>0?cartTask.getCantidadTotal:""


	return(
		  <div id="pedidos">

			<div id="botoncompra" style={{display: total==""?"none":""}} >

				<button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_desktop" data-target="#pedido_online" >
					Carrito 
					<span id="total_carro_d" className="badge bg-secondary">{total}</span>
			    </button>

			    <button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_mobile"  data-target="#pedido_online" >
			    	<span id="total_carro_m" className="badge bg-secondary">{total}</span>    
			   	</button>

			</div>

		{!cartTask.order?
			<Modal id="pedido_online" titulo= "Hace tu pedido!">
		  		<DetallePedido/>
		  		<></>
		  		<>
	 			{total>0 && <button type="reset" onClick={() => cartTask.clearCart()} className="btn btn-danger">Vaciar carrito</button>}
	 			
	 			{total>0 ? <button type="button" onClick={() => {setLoading(true);cartTask.buy();}} value="Enviar" className="btn btn-success">Terminar Compra</button> 
	 				:
	 					<button type="button" value="Enviar" data-dismiss="modal" className="btn btn-secondary">Seguir Comprando</button>
		 		} 

	            </>
	            {loading && <Loading size="6"/>}
			</Modal>
			:
			<Modal id="pedido_online" titulo= "Hace tu pedido!">
		  		<>Gracias por su compra, puede ver su orden con este numero<br/><br/></>
		  		<><br/>{cartTask.order}<br/><br/><br/></>
		  		<><button type="button" onClick={() => {cartTask.clearOrder()}} 
		  		data-dismiss="modal" className="btn btn-secondary">Terminar Compra</button></>
			</Modal>
		}


		  </div>
	)
}