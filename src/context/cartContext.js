import React, {useState, useEffect,useContext} from 'react'


export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)


export const Carrito = ({children}) => {

	const carroVacio = []
	const [cart, setCart] = useState(carroVacio)
	
/*	
	useEffect(() => {
		
		console.log("en cambio de cart",cart)
		
		},[cart])
*/

//Incio objeto caja de herramientas del carrito.
	const task = {}

//Agregar item unico, o cantidad al existente.
	task.addToCart = (i,q) => {
//Solo agrega items, si la cantidad es mayor a 0
		let respuesta = q>0 && ( task.isInCart( i.codigo ) ? 
	 		cart [ task.indexOf(i.codigo) ].cantidad += q 
	 			: 
	 		setCart( [  ...cart , {"cantidad": q  , ...i} ] )

		) && task.set()
		return respuesta
	}

//Dispara actualización del Cart
	task.set = () => setCart([...cart])
	
//borra todo el cart, lo setea a carroVacio.
	task.clearCart   = () => setCart ( carroVacio )
	
//informa si ya existe en el cart.
	task.isInCart    = id => cart.some ( x => x.codigo === id )

//devuelve el indice del item en particular.
	task.indexOf     = id => cart.findIndex ( x => x.codigo === id ) 
	
//remover un item en particular.
	task.removeItem  = i => cart.splice( task.indexOf(i.codigo) , 1 ) && task.set()

//Devuelve el totald de la compra
	task.getTotal    = () => cart.reduce ( (p,i) => i.cantidad * i.precio + p , 0)


//Sube o baja cantidad
	task.cantidades  = (i,dir) => {
		let index = task.indexOf(i.codigo)
			cart[index].cantidad += dir

			cart[index].cantidad > cart[index].stock ? 
				
				cart[index].cantidad = cart[index].stock 
			: 
				cart[index].cantidad == 0 && task.removeItem(i.codigo)
	
		task.set()
	}

	return (
	    <CartContext.Provider value={[cart, setCart, task]}>
	      {children}
	    </CartContext.Provider>
	 )

}

