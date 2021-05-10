import React, {useState} from 'react'

export const CartContext = React.createContext(0)


export const Carrito = ({children}) => {

  const [cart, setCart] = useState([{}])

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </ CartContext.Provider>
  )
}