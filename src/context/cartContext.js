import React, {useState,useEffect,useContext} from 'react'
import {fire} from '../firebase'
import {useUserContext} from './userContext'




export const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)


export const Carrito = ({children}) => {

	const carroVacio = []
	const [cart, setCart] = useState(carroVacio)
	const [user,userTask] = useUserContext()

	const [order, setOrder] = useState(null)

	const [stockItem, setStockItem] = useState(carroVacio)

	
		useEffect(()=>{
				order && console.log(order)
		},[order])

	
		useEffect(()=>{

		},[cart])
	

		useEffect(()=>{

		},[stockItem])
	

		useEffect(()=>{
			
		},[user])


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
				cart[index].cantidad <= 0 && task.removeItem(i)

		task.set()
	}

	task.buy = (buyer) => {
			//fire.setCollection("items",ListaProductos(),"codigo")
				
			//fire.activeUser(setUser)
			console.log("aca",user)

			if(user && user.emailVerified){
				console.log(user)

			let buyCollection = {
				
				//buyer:{...user},

				cart,

				date: new Date(),

				total: task.getTotal()
				
				}

	order ?
		task.update(order)
		:
		fire.setCollection("orders",[buyCollection],"",setOrder)
		}
		task.set()
	}

	
	task.update = (order) => {
			let buyCollection = {
				cart,
				total: task.getTotal()
				}
		fire.updateCollectionDoc("orders",order,buyCollection)
		task.set()
	}


	task.clearBuy = (order) => {
		order &&	fire.deleteCollectionDoc("orders",order,setOrder)
	}


	
	task.updatesStock = () => {

		//tengo que poner en firebase, el batch, para cambiar los stocks.

			cart.forEach(item => {

					fire.updateCollectionDoc("items",item.codigo,{stock:item.stock-item.cantidad})


			})
  

	}



	return (
	    <CartContext.Provider value={[cart, task]}>
	      
	      {children}
	    
	    </CartContext.Provider>
	 )

}

