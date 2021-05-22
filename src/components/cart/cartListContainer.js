import React ,{useEffect}from 'react'
import CartList from './cartList'
import {Link} from "react-router-dom";

import {useCartContext} from '../../context/cartContext'


export default function CartIconContainer(){

	const [cart, cartTask] = useCartContext()
	
	useEffect(()=>{

	},[cart])


const TablaPedidos = () =>{
return(
	<>
 	{cart.length>0 ?
    	<table className="table table-hover" id="tabla_pedidos_compuesta">
    		<thead><tr><th scope="col">Producto</th><th scope="col">Cantidad</th><th scope="col">Precio</th><th scope="col">Parcial</th><th scope="col"></th></tr></thead>
      {cart.map((producto,index) => {
		return(
			<tbody key={index}>
			<tr>
	   	    	<td>{producto.nombre}</td> 
	   	        <td className="cantidad_unidades">
	   	        	<button className="boton_menos" onClick={()=>cartTask.cantidades(producto,-1)}/>
	   	        		{producto.cantidad}
	   	        	<button className="boton_mas"   onClick={()=>cartTask.cantidades(producto,1)}/>
	   	        </td>
	   	        <td>{producto.precio}$</td>
	   	        <td>{producto.precio*producto.cantidad}$</td>
	   	        <td><button onClick={()=>cartTask.removeItem(producto)}>X</button></td>
	   	    </tr>
	   	    </tbody>
	  )})}
    	    <tbody>
	    		<tr>

	    			<th colSpan="3">Total</th>
	    			<th>{cartTask.getTotal()}$</th>
	    			<th colSpan="1"><button onClick={()=>cartTask.clearCart()}>Borrar</button></th>
	    		
				</tr>
	    		<tr>
	    			
	    			<th colSpan="2"><button className="btn" onClick={()=>cartTask.buy()}>Guardar pedido</button></th>
	    			<th colSpan="1"><button className="btn" disabled={cartTask.order==null} onClick={()=>cartTask.update(cartTask.order)}>Actualizar pedido</button></th>
	    			<th colSpan="2"><button className="btn" disabled={cartTask.order==null} onClick={()=>cartTask.clearBuy(cartTask.order)}>Eliminar pedido</button></th>
					
				</tr>
			</tbody>
		</table>
    :
	    <table className="table table-hover" id="tabla_pedidos_compuesta">
	    	<thead>
	    		<tr>
    	        	<th scope="col">El carrito esta Vacio</th>
    	        </tr>
    	    </thead>
    	    <tbody>
    	    	<tr>
    	    		<td>
    	    			<p>Hace tu pedido desde <Link to="/productos" data-toggle="modal">aqui</Link>, seleccionando los productos</p>
    	    		</td>
    	    	</tr>
			</tbody>
		</table>
	
	    }
	</>
	)	
}

	return(	
		<CartList 
			cartTask = {cartTask}
			cart ={cart}
			DetallePedido = {TablaPedidos}
		/>
	)
}




