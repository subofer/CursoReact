import React , {useEffect,useState} from 'react'
import CartList from './cartList'
import {Link,useParams} from "react-router-dom";
import {fire} from '../../firebase'
import {useUserContext} from '../../context/userContext'
import {useCartContext} from '../../context/cartContext'
import {dateToStr} from '../../helpers/helpers'





export default function CartIconContainer(){
	
	const {id} = useParams()
	
	const [cart, cartTask] = useCartContext()
	const [user,userTask] = useUserContext()
	const [orders, setOrders] = useState([])
	const [idorder, setIdorders] = useState([])

 useEffect(() => {
	user? fire.getCollection(setOrders,"orders",{where:["buyer.id","==",user.uid]}) : setOrders([])
 },[user]);


useEffect(() => {
	console.log(orders)
 },[orders]);

useEffect(() => {
	id  ? fire.getCollection(setIdorders,"orders",{doc:id}) : setOrders([])
 },[id]);



const TablaPedidos = ({ordenes,estado}) =>{

return(

	<table className="accordion table table-condensed table-striped">
    	<thead>
    	    <tr>
				<th>Fecha</th> <th>Total</th> <th>Estado</th> <th></th>
    	    </tr>
    	</thead>
    <tbody>
{ordenes.map( (order,index) =>
	
	order.estado === estado || !estado ?
		<>
        <tr id="tablaPedidos">
            <td>{dateToStr(order.date)}</td>
            <td>${order.total} </td>
            <td>{order.estado} </td>

           <td><button className="btn btn-default btn-xs"
           			   data-toggle="collapse"
           			   data-parent="#tablaPedidos"
           			   data-target={"#orden-" + index}
           			   aria-expanded="true"
           		>
           			Ver Detalle
           		</button>
           	</td>
        </tr>
      	
      	<tr>
          	<td colspan="12" className="hiddenRow">
				<div className="accordian-body collapse" id={"orden-" + index} > 
              		
              		<table className="table table-striped">
    				 <thead> <tr> <th scope="col">Producto</th> <th scope="col">Cantidad</th> <th scope="col">Precio</th> <th scope="col">Parcial</th></tr> </thead>
					<tbody key={index}>
							{order.cart.map((producto,index) =>
							<tr>
					   	    	<td>{producto.nombre}</td> 
					   	        <td className="cantidad_unidades">{producto.cantidad}</td>
					   	        <td>{producto.precio}$</td>
					   	        <td>{producto.precio*producto.cantidad}$</td>
					   	    </tr>	)}
	   	    		</tbody>
              		</table>
				</div> 
			</td>
    	</tr>
  		</> : ""
	)}		


   </tbody>
 </table>

	)
}



	return(	
		user?
		<CartList titulo={"Pedidos de " + user.displayName} >
		
			{/* Orden particular */}
			{id ? <TablaPedidos ordenes={idorder}/>:""}
			
			{/* pedidos abiertos */}
			<TablaPedidos ordenes={orders} estado="pendiende"/>
			
			{/* pedidos cerrados */}
			<TablaPedidos ordenes={orders} estado="entregado"/>
			
		</CartList>
		:
		<CartList titulo={"Por favor inicie sesión"} >
			
			{id && <TablaPedidos ordenes={idorder}/>}
		</CartList>
	)
}

