import React ,{useEffect,useState}from 'react'
import CartIcon from './cartIcon'
import {Link} from "react-router-dom";
import {randomKey} from '../../helpers/helpers'
import {useCartContext} from '../../context/cartContext'


export default function CartIconContainer(){

	const [cart, cartTask] = useCartContext()
	const [loading,setLoading] = useState(false)

	useEffect(()=>{
		 setLoading(false)
	},[cartTask.order])
	
	useEffect(()=>{
		setLoading(false)
	},[cart])



const TablaPedidos = () =>{
return(
	<>
 	{cart.length>0 ?
		<table className="table table-hover" id="tabla_pedidos_compuesta">
			<thead>
				<tr>
					<th scope="col">Producto</th>
					<th scope="col">Cantidad</th>
					<th scope="col">Precio</th>
					<th scope="col"></th>
				</tr>
			</thead>
			
			<tbody>
		{cart.map((producto,index) => 
			<tr>
				<td>{producto.nombre}</td>
				<td className="cantidad_unidades">
					<button className="boton_menos" onClick={()=>cartTask.cantidades(producto,-1)}/>
						{producto.cantidad}
					<button className="boton_mas"   onClick={()=>cartTask.cantidades(producto,1)}/>
				</td>
				<td>{producto.precio}$</td>
				<td><button onClick={()=>cartTask.removeItem(producto)}>X</button></td>
			</tr>
		)}
			</tbody>

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
		<CartIcon 
			cartTask = {cartTask}
			cart ={cart}
			DetallePedido = {TablaPedidos}
			loading = {loading}
			setLoading = {setLoading}
		/>
	)
}




