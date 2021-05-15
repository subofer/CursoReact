import React ,{useContext, useEffect}from 'react'
import CartIcon from './cartIcon'

import { CartContext } from '../../context/cartContext'




export default function CartIconContainer(){

	const [cart, setCart, cartTask] = useContext(CartContext)

	useEffect(()=>{

		console.log("carta",cart)


	},[cart])


	

	
	const DetallePedido = (lista) => {
		return(
			<ul>
				{lista.lenght ?
					lista.map(item => <li>{item.codigo}</li>)
					:
					<>
					<li>nada</li>
					<li>nada 2</li>
					</>
				}
			</ul>
		)
	}
	
	
	return(	
		<CartIcon 
			cartTask = {cartTask}
			setCart = {setCart}
			valores ={cart}
			DetallePedido = {DetallePedido}
		/>
	)
}


