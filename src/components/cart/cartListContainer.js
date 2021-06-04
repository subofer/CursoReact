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

//Etaba probando como leer el nombre del tag enviado como children.
const Hide = () => <hide></hide>

const Tabla = ({listado,callback,data}) =>{
return(

listado && listado.length >0? 
	<table id="tablaPedidos" className="table table-condensed table-hover">
		<thead>
			<tr>
				<th>Fecha</th>
				<th>Total</th>
				<th>Estado</th>
				<th>Acciones</th>
			</tr>
		</thead>
		
		<tbody className="table-hover">
		{listado.map((orden,index) =>
			<>
			<tr style={{height: '3.2rem'}}>
				<td>{dateToStr(orden.date)}</td>
				<td>${orden.total}</td>
				<td>{May(orden.estado)}</td>
				<td><button className="btn btn-default btn-xs btn-danger"
						disabled= {orden.estado ==="entregado"}
						style={{padding: '5px'}}
						onClick={()=> {
							setDisparo(true)
							fire.deleteCollectionDoc("orders",orden.id,callback,orders.filter(i=>i.id!=orden.id))
						}}
					> Eliminar </button>
			  			&nbsp;&nbsp;&nbsp;&nbsp;
					<button className="btn btn-default btn-xs btn-secondary"
						style={{padding: '5px'}}
						data-toggle="collapse"
						data-target={"#orden-" + orden.id}
						aria-expanded="true"
					> Ver Detalle  </button>
				</td>
			</tr>
			<tr>
				<td colSpan="12" className="hiddenRow">
					<div   className="accordian-body collapse" id={"orden-" + orden.id} > 
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
							
							{orden.cart.map((producto,index) =>

								<tr>
									<td><Link to={"/productos/"+producto.familia+"/"+producto.id}>{producto.nombre}</Link></td>
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
			</>
		)}		
		</tbody>
	</table>

:
	<table id="tablaPedidos" className="table table-condensed table-hover">
		<thead><tr><th>No se encuentran pedidos</th></tr></thead>
		<tbody className="table-hover">
			<tr><td>No hay pedidos para mostrar en este campo</td></tr>
		</tbody>
	</table>
	)
}



	return(	
		user?
		<CartList titulo={"Pedidos de " + user.displayName} >
			
			{/* Orden particular */}
			{id && idorder ? <Tabla listado={idorder} callback={setIdorders}/>: <Hide/>}

			{/* pedidos abiertos */}
			<Tabla listado={orders.filter(l => l.estado === "pendiende")} callback={setOrders}/>
			
			{/* pedidos cerrados */}
			<Tabla listado={orders.filter(l => l.estado === "entregado")} callback={setOrders}/>
			
		</CartList>
		:
		<CartList titulo={"Por favor inicie sesión para ver todas sus ordenes"} >
			
			{id && idorder ? <Tabla listado={idorder}/> : <Hide/>}

		</CartList>
	)
}