import React, {useState,useEffect,useContext} from 'react'
import {fire} from '../firebase'
import {useUserContext} from './userContext'


//agregar, guardar el cart en el local storage y recuperarlo...
//restar stock de la base de datos una vez generada la orden del usuario o una vez "despachado"
	//general la task.dispachOrder()
	//generar la task.calcularEnvio() que recupere la direccion del usuario y calcule la distancia del envio
//recuperar el stock si la orden se cancela.


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
//Completa el pedido, lo guarda en Firebase
	task.buy = (buyer) => {
		
		if(user && user.emailVerified){
			
			let buyCollection = {
			buyer:{id:user.uid,email:user.email,name:user.displayName},
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

//Modifica el pedido ya guardado en Firebase.	
	task.update = (order) => {
			let buyCollection = {
				cart,
				total: task.getTotal()
				}
		fire.updateCollectionDoc("orders",order,buyCollection)
		task.set()
	}

//Bora el pedido guardado en Firebase
	task.clearBuy = (order) => {
		order && fire.deleteCollectionDoc("orders",order,setOrder)
	}


//Actualiza	el stock de la base de datos, con respecto al pedido
	task.updatesStock = () => {
		//tengo que poner en firebase, el batch, para cambiar los stocks.
			cart.forEach(item => {
					fire.updateCollectionDoc("items",item.codigo,{stock:item.stock-item.cantidad})
			})
	}

//Devuelve la cantidad total de items en el carrito.
	task.getCantidadTotal = cart.reduce ( (p,i) => i.cantidad + p , 0)

//
	task.errores = (e) => {
		//agregar manejo de errores del cart.. para otro dia.
	}


	return (
	    <CartContext.Provider value={[cart, task]}>
	      
	      {children}
	    
	    </CartContext.Provider>
	 )

}

