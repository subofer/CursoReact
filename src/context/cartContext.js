import React, {useState,useEffect,useContext} from 'react'
import {setFireCollection,updateFireCollection,deleteFireCollectionDoc} from '../firebase'


export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)


export const Carrito = ({children}) => {

	const carroVacio = []
	const [cart, setCart] = useState(carroVacio)
	const [order, setOrder] = useState(null)

	useEffect(()=>{
			
	},[order])


//Incio objeto caja de herramientas del carrito.
	const task = {}
	task.order = order
	task.setOrder = setOrder

	task.cart = cart

//Agregar item unico, o cantidad al existente.
	task.addToCart = (i,q) => {
//Solo agrega items, si la cantidad es mayor a 0
		q > 0 && (task.isInCart(i.codigo) ? 
	 		cart[task.indexOf(i.codigo)].cantidad += q 
	 			: 
	 		setCart( [  ...cart , {"cantidad": q  , ...i} ] ) 

		) && task.set()
		return true
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
	//task.removeItem  = i => cart.splice( task.indexOf(i.codigo) , 1 ) && task.set()
	task.removeItem  = i => setCart( cart.filter(x => x.codigo !== i.codigo ) )

//Devuelve el totald de la compra
	task.getTotal    = () => cart.reduce ( (p,i) => i.cantidad * i.precio + p , 0)

//Sube o baja cantidad
	task.cantidades  = (i,dir) => {
		let index = task.indexOf(i.codigo)
			cart[index].cantidad += dir

			cart[index].cantidad > cart[index].stock ? 
				
				cart[index].cantidad = cart[index].stock 
			: 
				cart[index].cantidad === 0 && task.removeItem(i.codigo)
	
		task.set()
	}

	task.buy = (buyer) => {
			//setFireCollection("items",ListaProductos(),"codigo")
				
			let buyCollection = {
				
				buyer:{name:"Pedro",phone:"123",email:"pepe@pepe.com"},

				cart,

				date: new Date(),

				total: task.getTotal()
				
				}
	!order ?
		setFireCollection("orders",[buyCollection],"",setOrder)
		:
		updateFireCollection("orders",order,buyCollection)

		task.set()
	}

	
	task.update = (order) => {
			let buyCollection = {
				cart,
				total: task.getTotal()
				}
		updateFireCollection("orders",order,buyCollection)
		task.set()
	}


	task.clearBuy = (order) => {
		order &&	deleteFireCollectionDoc("orders",order,setOrder)
	}



	return (
	    <CartContext.Provider value={[cart, task]}>
	      {children}
	    </CartContext.Provider>
	 )

}

