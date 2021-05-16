import React ,{useContext, useEffect}from 'react'
import CartIcon from './cartIcon'
import {Link} from "react-router-dom";

import {useCartContext} from '../../context/cartContext'




export default function CartIconContainer(){

	const [cart, setCart, cartTask] = useCartContext()
	
	useEffect(()=>{



	},[cart])




	const DetallePedido = () => {
		return(
			<ul>
				{cart.length ?
					<div id="detallepedido">
					{cart.map(item => 
						<>
						<li>{item.nombre}   <button>+</button>{item.cantidad}<button>-</button></li>
						</>
						)
					}
	                </div>
				:
					<p>Hace tu pedido desde <Link to="/productos" data-toggle="modal">aqui</Link>, seleccionando los productos</p>
				}
			</ul>
		)
	}
	
	

const TablaPedidos = () =>{
	
const listado_productos = 
cart.map((producto,index) => {
return(

				<tr>
	    	    	<td>{producto.nombre}</td> 
	    	        <td class="cantidad_unidades">
	    	        	<button className="boton_menos" onClick={()=>cartTask.cantidades(producto,-1)}/>
	    	        		{producto.cantidad}
	    	        	<button className="boton_mas"   onClick={()=>cartTask.cantidades(producto,1)}/>
	    	        </td>
	    	        <td>{producto.precio}$</td>
	    	        <td><button onClick={()=>cartTask.removeItem(producto)}>X</button></td>
	    	    </tr>
	   ) 	    
	}
)

	return(
  	<>
	 {cart.length>0 ?
    	<table className="table table-hover" id="tabla_pedidos_compuesta">
    		<thead><tr><th scope="col">Producto</th><th scope="col">Cantidad</th><th scope="col">Precio</th><th scope="col"></th></tr></thead>
    	    	{listado_productos}
    	    <tbody>
	    		<tr>
	    			<td></td> 
	    			<th>Total</th>
	    			<th>{cartTask.getTotal()}$</th>
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
    	    		<p>Hace tu pedido desde <Link to="/productos" data-toggle="modal">aqui</Link>, seleccionando los productos</p>
    	    	</tr>
			</tbody>
		</table>
	
	    }
	</>
	)	
}

	return(	
		<CartIcon 
			cartTask = {cartTask}
			cart ={cart}
			DetallePedido = {TablaPedidos}
		/>
	)
}




