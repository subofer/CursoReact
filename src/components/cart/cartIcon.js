import React, {useState,useEffect} from 'react'
import Modal from '../modal/modal'
import {Link} from "react-router-dom";
import {Loading,randomKey} from '../../helpers/helpers'

export default function CartIcon({nombre,cart,cartTask,DetallePedido,loading,setLoading}){
let total = cartTask.getCantidadTotal>0?cartTask.getCantidadTotal:""

	return(
		  <div id="pedidos">

			<div id="botoncompra" style={{display: total==""?"":""}} >

				<button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_desktop" data-target="#pedido_online" >
					Carrito 
					<span id="total_carro_d" className="badge bg-secondary">{total}</span>
			    </button>

			    <button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_mobile"  data-target="#pedido_online" >
			    	<img src="images/icon/shopping-cart.svg"/>
			    	<span id="total_carro_m" className="badge badge-pill">{total}</span>    
			   	</button>

			</div>

		{!cartTask.order?
			<Modal id="pedido_online" titulo= "Detalle del pedido">
		  		<DetallePedido/>
		  		<>{!cartTask.user && total>0 ?"Debe iniciar sesion para poder comprar":""}</>
		  		<>
	 			
	 			{total>0 ? <button type="reset" onClick={() => cartTask.clearCart()} className="btn btn-danger">Vaciar carrito</button>:null}
	 			
	 			{total>0 ? 
	 			  (cartTask.user?
	 				<button type="button" onClick={() => {setLoading(true);cartTask.buy()}} value="Enviar" className="btn btn-success">Terminar Compra</button> 
					:	 				
					<button className="btn btn-secondary" type="button" data-dismiss="modal" data-toggle="modal" data-target={"#Inicia_Sesion"}>Iniciar sesion</button>
				  )
 				:
 					<button type="button" value="Enviar" data-dismiss="modal" className="btn btn-secondary">Seguir Comprando</button>
		 		} 

	            </>
	            {loading && <Loading size="6"/>}
			</Modal>

			:

			<Modal id="pedido_online" titulo= "Gracias por su compra!">
		  		<>Puedes ver tu orden con este numero o ingresando a <Link data-dismiss="modal" to="/pedidos">Pedidos</Link><br/><br/></>
		  		<>
		  		<br/>
				
				<Link to={"/pedidos/" + cartTask.order } 


				data-dismiss="modala">{cartTask.order}</Link>
				<br/><br/>
				
				<button type="button" onClick={() => {navigator.clipboard.writeText(cartTask.order)}} 
		  			className="btn btn-secondary">Copiar al portapeles</button>
		  		<br/><br/>

		  		</>

		  		<><button type="button" onClick={() => {cartTask.clearOrder()}} 
		  			data-dismiss={total>0?"":"modal"} 
		  			className="btn btn-secondary">Finalizar</button></>
			</Modal>

		}


		  </div>
	)
}