import React, {useState, useEffect,useContext} from 'react'


export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)


export const Carrito = ({children}) => {

	const carroVacio = []
	const [cart, setCart] = useState(carroVacio)
	
	useEffect(() => {
		
		console.log("en cambio de cart",cart)
		
		},[cart])

	//Incio objeto de herramientas del carrito para transportar.
	const task = {}

	//Agregar item unico, o cantidad al existente.
	task.addToCart = (i,q) => {
	 	task.isInCart( i.codigo ) ? 
	 		cart [ task.indexOf(i.codigo) ].cantidad += q 
	 	: 
	 		setCart( [  ...cart , {"cantidad": q  , ...i} ] )

	 	return true;
	}
	
	//remover un item en particular.
	task.removeItem  = id => cart.splice    ( task.indexOf(id) , 1 ) 
	
	//devuelve el indice del item en particular.
	task.indexOf     = id => cart.findIndex ( x => x.codigo === id )
	
	//informa si ya existe en el cart.
	task.isInCart    = id => cart.some      ( x => x.codigo === id )
	
	//borra todo el cart.
	task.clearCart   = () => setCart        (      carroVacio      )

	task.alertarCart = pepe => alert("Me borraste el Carritoooooo " + pepe)
	
console.log(task)
	return (
	    <CartContext.Provider value={[cart, setCart, task]}>
	      {children}
	    </CartContext.Provider>
	 )

}

