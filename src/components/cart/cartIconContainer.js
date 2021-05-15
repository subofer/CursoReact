import React ,{useContext, useEffect}from 'react'
import CartIcon from './cartIcon'

import {useCartContext} from '../../context/cartContext'




export default function CartIconContainer(){

	const [cart, setCart, cartTask] = useCartContext()
	
	useEffect(()=>{

		console.log("carta",cart)
		DetallePedido()
		console.log("largo",cart.length)

	},[cart])



	
	const DetallePedido = () => {
		return(
			<ul>
				{cart.length ?
					cart.map(item => <li>{item.codigo}</li>)
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
			texto = {cart.length}
			DetallePedido = {DetallePedido}
		/>
	)
}


