import React ,{useContext, useEffect}from 'react'
import CartIcon from './cartIcon'

import { CartContext } from '../../context/cartContext'




export default function CartIconContainer(){

 const [cart, setCart] = useContext(CartContext)

useEffect(()=>{

	console.log("carta",cart)

},[cart])

console.log("carta",cart)




const vaciarCarrito = () => {
	setCart([])
}

const DetallePedido = () => {

	return(cart.map(item => <li>{item.codigo}</li>)

	)
}


return(	

		<CartIcon 
			vaciarCart = {vaciarCarrito}
			valores ={cart}
			Detalle = {DetallePedido}
		/>
		

		
	)

}


