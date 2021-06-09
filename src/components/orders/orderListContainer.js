import React , {useEffect,useState} from 'react'
import OrderList from './orderList'
import {Link,useParams} from "react-router-dom";
import {fire} from '../../firebase'
import {useUserContext} from '../../context/userContext'
import {useCartContext} from '../../context/cartContext'
import {dateToStr,randomKey,May,FloatLoading} from '../../helpers/helpers'


export default function OrderListContainer(){
	
	const {id} = useParams()
	
	const [cart   , cartTask]    = useCartContext()
	const [user   , userTask]    = useUserContext()
	const [orders , setOrders]   = useState([])
	const [idorder, setIdorders] = useState(null)
	const [disparo, setDisparo]  = useState(false)
	const [loading, setLoading]  = useState(true)

 

 useEffect(() => {

	setLoading(true) 


	let options = {where:["buyer.id","==",user.uid]}

	user ? fire.getCollection(setOrders,"orders", options  ) : setOrders([])


 },[user,disparo,cart]);


useEffect(() => {

	id ? fire.getCollection(setIdorders,"orders",{doc:id}) : setIdorders(null)

 },[id,disparo]);



useEffect(() => {
	
	setDisparo(false)
	orders && setLoading(false)

 },[orders,idorder]);


const Tabla = ({listado,callback,data,}) =>{
let t = randomKey()
return(

listado && listado.length>0? 
	<table id="tablaPedidos" className="table table-condensed table-hover">
		<thead>
			<tr>
				<th>Orden</th>
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
				<td><Link to={"/pedidos/"+orden.id}>{orden.id.slice(0,3)+"..."+orden.id.slice(-3)}</Link></td>
				<td>{dateToStr(orden.date,3)}</td>
				<td>${orden.total}</td>
				<td>{May(orden.entregado?"Entregado":"Pendiente")}</td>
				<td>
					<button key={"eliminar"+orden.id}
							className="btn btn-danger"
							disabled= {orden.entregado}
							style={{padding: '4px'}}
							onClick={()=> { 
											setDisparo(true)
											fire.batchReturnStock(orders.find(i=>i.id=orden.id),()=>{
												fire.deleteCollectionDoc("orders",orden.id,callback,orders.filter(i=>i.id!=orden.id))
											})
									}}
					> Eliminar 
					</button>
			 			
			 			<span>&nbsp;&nbsp;&nbsp;</span>
					
					<button key={"verDetalle"+orden.id}
							className="btn btn-secondary"
							style={{padding: '4px'}}
							data-toggle="collapse"
							data-target={"#orden-"+ t + orden.id}
					
					> Ver Detalle 
					</button>
							
						<span>&nbsp;&nbsp;&nbsp;</span>
					

					<button key={"entregar"+orden.id}
							className="btn btn-warning"
							style={{padding: '4px'}}
							onClick={()=> {fire.toggleDeliver(orden);setDisparo(true)}}
					>{orden.entregado ? "Devolver":"Entregar" }
					</button>

				</td>
			</tr>
			<tr key={"detalle"+orden.id}>
				<td colSpan="12" className="hiddenRow">
					<div key={"hideDiv"+orden.id} className="accordian-body collapse" id={"orden-" + t + orden.id}> 
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
<>
	
{user?

		<OrderList titulo={"Pedidos de " + user.displayName}>
			{/* Orden particular */}
		{id && idorder && 
			<>
				<FloatLoading show={loading} flotante={true}/>
			<div className="col-8"> 
 				<h2>Orden Consultada</h2> 
			</div> 
 			<div className="col-9">
				<Tabla listado={idorder} callback={setIdorders}/>
 			</div> 
			</>

		}

		{/* pedidos abiertos */}
			<>
				<FloatLoading show={loading} flotante={true}/>
			<div className="col-8"> 
 				<h2>Pendientes</h2> 
 			</div> 
 			<div className="col-9">
					<Tabla listado={orders.filter(o => !o.entregado)} callback={setOrders}/>
			 </div> 
			</>

		{/* pedidos cerrados */}
			<>
				<FloatLoading show={loading}/>
			<div className="col-8"> 
 				<h2>Entregados</h2> 
 			</div> 
 			<div className="col-9">
					<Tabla listado={orders.filter(o => o.entregado)} callback={setOrders}/>
			 </div> 
			</>
		</OrderList>
	:
		<OrderList titulo={"Por favor inicie sesión para ver todas sus ordenes"}>
		 {id && idorder && 
			<>
				<FloatLoading show={loading}/>
			<div className="col-8"> 
				<h2>Orden Consultada</h2> 
			</div> 
 			<div className="col-9">
				<Tabla listado={idorder} callback={setIdorders}/>
 			</div> 
			</>
		 }
		</OrderList>
	}
	</>

)

}