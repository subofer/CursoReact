import React , {useEffect,useState} from 'react'
import CartList from './cartList'
import {Link,useParams} from "react-router-dom";
import {fire} from '../../firebase'
import {useUserContext} from '../../context/userContext'
import {useCartContext} from '../../context/cartContext'
import {dateToStr,randomKey,May} from '../../helpers/helpers'





export default function CartIconContainer(){
	
	const {id} = useParams()
	
	const [cart, cartTask] = useCartContext()
	const [user,userTask] = useUserContext()
	const [orders, setOrders] = useState([])
	const [idorder, setIdorders] = useState(null)
	const [disparo, setDisparo] = useState()

 useEffect(() => {
	user ? fire.getCollection(setOrders,"orders",{where:["buyer.id","==",user.uid]}) : setOrders([])
 },[user,disparo]);

useEffect(() => {
	id  ? fire.getCollection(setIdorders,"orders",{doc:id}) : setIdorders(null)
 },[id,disparo]);

useEffect(() => {
	
 },[orders,idorder]);


const Tabla = ({ordenes,estado,callback,data}) =>{
return(
	<table id="tablaPedidos" className="table table-condensed table-hover">
		<thead>
		{ordenes ?	
			<tr>
				<th>Fecha</th>
				<th>Total</th>
				<th>Estado</th>
				<th>Acciones</th>
			</tr>
			:
			<tr>
				<th>Orden no encontrada</th>
			</tr>
		}
		</thead>
		
		<tbody className="table-hover">
{ordenes ? ordenes.map( (order,index) =>
	
	(order.estado === estado || !estado) ?
		<>
		<tr style={{height: '3.2rem'}}>
			<td>{dateToStr(order.date)}</td>
			<td>${order.total}</td>
			<td>{May(order.estado)}</td>
			<td><button className="btn btn-default btn-xs btn-danger"
						disabled= {estado==="entregado"}
						style={{padding: '5px'}}
						onClick={()=> {
							setDisparo(true)
							fire.deleteCollectionDoc("orders",order.id,callback,orders.filter(i=>i.id!=order.id))
						}}
				> Eliminar </button>&nbsp;&nbsp;&nbsp;&nbsp;
			
			<button className="btn btn-default btn-xs btn-secondary"
						style={{padding: '5px'}}
						data-toggle="collapse"
						data-target={"#orden-" + index}
						aria-expanded="true"
				> Ver Detalle</button>
			</td>

		</tr>
		<tr>
			<td colSpan="12" className="hiddenRow">
				<div   className="accordian-body collapse" id={"orden-"+index} > 
					<table className="table table-sm">
						<thead>
							<tr>
								<th scope="col">Producto</th>
								<th scope="col">Cantidad</th>
								<th scope="col">Precio</th>
								<th scope="col">Parcial</th>
							</tr>
						</thead>
						<tbody>
					{order.cart.map((producto,index) =>
							<tr>
								<td>{producto.nombre}</td>
								<td className="cantidad_unidades">{producto.cantidad}</td>
								<td>{producto.precio}$</td>
								<td>{producto.precio*producto.cantidad}$</td>
							</tr>
					)}
						</tbody>
					</table>
				</div>
			</td>
		</tr>
			</> : null
		)
		:
		<tr><td colSpan="12">Por favor, compruebe el numero ingresado</td></tr>
}		
		</tbody>
	</table>
	)
}

	return(	
		user?
		<CartList titulo={"Pedidos de " + user.displayName} >
		
			{/* Orden particular */}
			{id && idorder ? <Tabla ordenes={idorder} callback={setIdorders}/> : <hide></hide>}
			 
			{/* pedidos abiertos */}
			<Tabla ordenes={orders} estado="pendiende" callback={setOrders}/>
			
			{/* pedidos cerrados */}
			<Tabla ordenes={orders} estado="entregado" callback={setOrders}/>
			
		</CartList>
		:
		<CartList titulo={"Por favor inicie sesión"} >
			
			{id ? <Tabla ordenes={idorder}/> : <hide></hide>}

		</CartList>
	)
}