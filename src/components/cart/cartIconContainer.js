import React ,{useContext, useEffect}from 'react'
import CartIcon from './cartIcon'

import { CartContext } from '../../context/cartContext'




export default function CartIconContainer(){


 const [cart, setCart] = useContext(CartContext)

useEffect(()=>{

	console.log("carta",cart)

},[cart])

console.log("carta",cart)


return(	

		<CartIcon cart={cart}/>


		
	)

}


