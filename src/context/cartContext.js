import React, {useState, useEffect} from 'react'

export const CartContext = React.createContext([])


export const Carrito = ({children}) => {

  const [cart, setCart] = useState([])

	useEffect(() => {
		console.log("en cambio de cart",cart)

		},[cart])




 return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
 )
}